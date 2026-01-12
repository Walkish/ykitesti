#!/usr/bin/env python3
"""
Static site generator for YKI Test Lessons
Generates HTML files from lessons.json
"""
import json
from pathlib import Path

def load_lessons():
    """Load lessons from JSON config file"""
    with open('lessons.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    return data.get('lessons', [])

def escape_html(text):
    """Escape HTML special characters"""
    if not text:
        return ""
    return (str(text)
            .replace('&', '&amp;')
            .replace('<', '&lt;')
            .replace('>', '&gt;')
            .replace('"', '&quot;')
            .replace("'", '&#39;'))

def generate_index_html(lessons):
    """Generate the main index page"""
    lessons_html = ""
    for lesson in lessons:
        links_html = ""
        has_links = False
        
        if lesson.get('pdf_main'):
            links_html += f'                <a href="{escape_html(lesson["pdf_main"])}" target="_blank" class="link-btn pdf-main">\n                    📄 Main PDF\n                </a>\n'
            has_links = True
        if lesson.get('pdf_exercises'):
            links_html += f'                <a href="{escape_html(lesson["pdf_exercises"])}" target="_blank" class="link-btn pdf-exercises">\n                    📝 Exercises\n                </a>\n'
            has_links = True
        if lesson.get('pdf_answers'):
            links_html += f'                <a href="{escape_html(lesson["pdf_answers"])}" target="_blank" class="link-btn pdf-answers">\n                    ✅ Answers\n                </a>\n'
            has_links = True
        if lesson.get('audio'):
            links_html += f'                <a href="{escape_html(lesson["audio"])}" target="_blank" class="link-btn audio">\n                    🎵 Audio\n                </a>\n'
            has_links = True
        if lesson.get('flashcard'):
            links_html += f'                <a href="{escape_html(lesson["flashcard"])}" target="_blank" class="link-btn flashcard">\n                    🃏 Flashcards\n                </a>\n'
            has_links = True
        
        no_links_msg = ""
        if not has_links:
            no_links_msg = '<p class="no-links">Links coming soon...</p>'
        
        lessons_html += f'''        <div class="lesson-card">
            <h3>{escape_html(lesson.get('name', ''))}</h3>
            <div class="lesson-links">
{links_html}            </div>
            {no_links_msg}
        </div>
'''
    
    html = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>YKI Test Lessons - Catalog</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <div class="container">
            <h1>YKI Test Lessons</h1>
            <nav>
                <a href="index.html">Home</a>
            </nav>
        </div>
    </header>
    
    <main class="container">
        <div class="lessons-catalog">
    <h2>Lessons Catalog</h2>
    <div class="lessons-grid">
{lessons_html}    </div>
</div>
    </main>
    
    <footer>
        <div class="container">
            <p>&copy; 2024 YKI Test Lessons</p>
        </div>
    </footer>
</body>
</html>'''
    return html

def generate_lesson_html(lesson):
    """Generate individual lesson page"""
    lesson_id = lesson.get('id', '')
    lesson_name = escape_html(lesson.get('name', ''))
    
    pdf_section = ""
    pdf_links = ""
    if lesson.get('pdf_main'):
        pdf_links += f'''                <a href="{escape_html(lesson["pdf_main"])}" target="_blank" class="resource-link pdf-main">
                    <span class="icon">📄</span>
                    <div>
                        <strong>Main Lesson PDF</strong>
                        <span class="link-hint">Click to open in Google Drive</span>
                    </div>
                </a>
'''
    if lesson.get('pdf_exercises'):
        pdf_links += f'''                <a href="{escape_html(lesson["pdf_exercises"])}" target="_blank" class="resource-link pdf-exercises">
                    <span class="icon">📝</span>
                    <div>
                        <strong>Exercises (Tehtävät)</strong>
                        <span class="link-hint">Click to open in Google Drive</span>
                    </div>
                </a>
'''
    if lesson.get('pdf_answers'):
        pdf_links += f'''                <a href="{escape_html(lesson["pdf_answers"])}" target="_blank" class="resource-link pdf-answers">
                    <span class="icon">✅</span>
                    <div>
                        <strong>Answers (Vastaukset)</strong>
                        <span class="link-hint">Click to open in Google Drive</span>
                    </div>
                </a>
'''
    
    if pdf_links:
        pdf_section = f'''        <div class="resource-section">
            <h3>PDF Files</h3>
            <div class="resource-links">
{pdf_links}            </div>
        </div>
'''
    
    audio_section = ""
    if lesson.get('audio'):
        audio_section = f'''        <div class="resource-section">
            <h3>Audio</h3>
            <div class="resource-links">
                <a href="{escape_html(lesson["audio"])}" target="_blank" class="resource-link audio">
                    <span class="icon">🎵</span>
                    <div>
                        <strong>Audio File</strong>
                        <span class="link-hint">Click to open in Google Drive</span>
                    </div>
                </a>
            </div>
        </div>
'''
    
    flashcard_section = ""
    if lesson.get('flashcard'):
        flashcard_section = f'''        <div class="resource-section">
            <h3>Flashcards</h3>
            <div class="resource-links">
                <a href="{escape_html(lesson["flashcard"])}" target="_blank" class="resource-link flashcard">
                    <span class="icon">🃏</span>
                    <div>
                        <strong>Quizlet Flashcards</strong>
                        <span class="link-hint">Click to open on Quizlet</span>
                    </div>
                </a>
            </div>
        </div>
'''
    
    has_resources = bool(lesson.get('pdf_main') or lesson.get('pdf_exercises') or 
                        lesson.get('pdf_answers') or lesson.get('audio') or lesson.get('flashcard'))
    
    no_resources = ""
    if not has_resources:
        no_resources = '''        <div class="no-resources">
            <p>Resources for this lesson are not yet available.</p>
        </div>
'''
    
    html = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{lesson_name} - YKI Test Lessons</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <div class="container">
            <h1>YKI Test Lessons</h1>
            <nav>
                <a href="index.html">Home</a>
            </nav>
        </div>
    </header>
    
    <main class="container">
        <div class="lesson-detail">
    <a href="index.html" class="back-link">← Back to Catalog</a>
    <h2>{lesson_name}</h2>
    
    <div class="lesson-resources">
{pdf_section}{audio_section}{flashcard_section}{no_resources}    </div>
</div>
    </main>
    
    <footer>
        <div class="container">
            <p>&copy; 2026 YKI Test Lessons</p>
        </div>
    </footer>
</body>
</html>'''
    return html

def main():
    """Main function to generate static site"""
    print("Generating static site...")
    
    # Create output directory
    output_dir = Path('docs')
    output_dir.mkdir(exist_ok=True)
    
    # Create CSS directory
    css_dir = output_dir / 'css'
    css_dir.mkdir(exist_ok=True)
    
    # Load lessons
    lessons = load_lessons()
    lessons = sorted(lessons, key=lambda x: x.get('order', 999))
    
    # Generate index.html
    print("Generating index.html...")
    index_html = generate_index_html(lessons)
    with open(output_dir / 'index.html', 'w', encoding='utf-8') as f:
        f.write(index_html)
    
    # Generate individual lesson pages
    for lesson in lessons:
        lesson_id = lesson.get('id', '')
        print(f"Generating {lesson_id}.html...")
        lesson_html = generate_lesson_html(lesson)
        with open(output_dir / f'{lesson_id}.html', 'w', encoding='utf-8') as f:
            f.write(lesson_html)
    
    # Copy CSS file
    print("Copying CSS...")
    import shutil
    shutil.copy('static/css/style.css', css_dir / 'style.css')
    
    print(f"\n✅ Static site generated in '{output_dir}' directory!")
    print("You can now push to GitHub and enable GitHub Pages.")

if __name__ == '__main__':
    main()

