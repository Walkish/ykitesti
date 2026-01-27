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

def generate_main_index_html():
    """Generate the main landing page with links to different sections"""
    html = '''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Finnish Learning Resources</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <div class="container">
            <h1>Finnish Learning Resources</h1>
            <nav>
                <a href="index.html">Home</a>
            </nav>
        </div>
    </header>
    
    <main class="container">
        <div class="main-page">
            <h2>Welcome to Finnish Learning Resources</h2>
            <p class="intro-text">Choose a section to explore:</p>
            
            <div class="sections-grid">
                <a href="yki-test.html" class="section-card">
                    <div class="section-icon">📚</div>
                    <h3>YKI Test</h3>
                    <p>Practice lessons and materials for the YKI Finnish language test</p>
                </a>
                
                <a href="finnish-grammar.html" class="section-card">
                    <div class="section-icon">📖</div>
                    <h3>Finnish Grammar</h3>
                    <p>Learn Finnish grammar rules</p>
                </a>
            </div>
        </div>
    </main>
    
    <footer>
        <div class="container">
            <p>&copy; 2026 Finnish Learning Resources</p>
        </div>
    </footer>
</body>
</html>'''
    return html

def generate_yki_test_html(lessons):
    """Generate the YKI test lessons catalog page"""
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
            <h1>Finnish Learning Resources</h1>
            <nav>
                <a href="index.html">Home</a>
            </nav>
        </div>
    </header>
    
    <main class="container">
        <div class="lessons-catalog">
            <a href="index.html" class="back-link">← Back to Home</a>
            <h2>YKI Test Lessons Catalog</h2>
            <div class="lessons-grid">
{lessons_html}            </div>
        </div>
    </main>
    
    <footer>
        <div class="container">
            <p>&copy; 2026 Finnish Learning Resources</p>
        </div>
    </footer>
</body>
</html>'''
    return html

def generate_finnish_grammar_html():
    """Generate the Finnish grammar index page listing all grammar rules"""
    html = '''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Finnish Grammar</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <div class="container">
            <h1>Finnish Learning Resources</h1>
            <nav>
                <a href="index.html">Home</a>
            </nav>
        </div>
    </header>
    
    <main class="container">
        <div class="grammar-index-page">
            <a href="index.html" class="back-link">← Back to Home</a>
            <h2>Finnish Grammar</h2>
            <p class="intro-text">Select a grammar topic to learn:</p>
            
            <div class="grammar-rules-grid">
                <a href="finnish-grammar-kpt.html" class="grammar-rule-card">
                    <div class="rule-icon">📚</div>
                    <h3>The K-P-T Rule</h3>
                    <p class="rule-description">Consonant Gradation (KPT-sääntö)</p>
                    <p class="rule-summary">Learn how consonants k, p, and t change in Finnish words</p>
                </a>
            </div>
        </div>
    </main>
    
    <footer>
        <div class="container">
            <p>&copy; 2026 Finnish Learning Resources</p>
        </div>
    </footer>
</body>
</html>'''
    return html

def generate_finnish_grammar_kpt_html():
    """Generate the K-P-T rule detail page with explanation and exercises"""
    html = '''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The K-P-T Rule - Finnish Grammar</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <div class="container">
            <h1>Finnish Learning Resources</h1>
            <nav>
                <a href="index.html">Home</a>
            </nav>
        </div>
    </header>
    
    <main class="container">
        <div class="grammar-page">
            <a href="finnish-grammar.html" class="back-link">← Back to Finnish Grammar</a>
            <h2>The K-P-T Rule (KPT-sääntö)</h2>
            
            <section class="grammar-section">
                <h3>What is Consonant Gradation?</h3>
                
                <div class="grammar-content">
                    <p>Consonant gradation (astevaihtelu) is one of the most important features of Finnish grammar. It involves changing the consonants k, p, and t in the stem of a word when certain endings are added.</p>
                    
                    <h4>The Three Grades</h4>
                    <div class="rule-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Strong Grade</th>
                                    <th>Weak Grade</th>
                                    <th>Example</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>kk</td>
                                    <td>k</td>
                                    <td>pankki → pankin (bank)</td>
                                </tr>
                                <tr>
                                    <td>pp</td>
                                    <td>p</td>
                                    <td>kuppi → kupin (cup)</td>
                                </tr>
                                <tr>
                                    <td>tt</td>
                                    <td>t</td>
                                    <td>katti → katin (cat)</td>
                                </tr>
                                <tr>
                                    <td>k</td>
                                    <td>- (disappears)</td>
                                    <td>puku → puvun (dress)</td>
                                </tr>
                                <tr>
                                    <td>p</td>
                                    <td>v</td>
                                    <td>tupa → tuvan (hut)</td>
                                </tr>
                                <tr>
                                    <td>t</td>
                                    <td>d</td>
                                    <td>katu → kadun (street)</td>
                                </tr>
                                <tr>
                                    <td>nk</td>
                                    <td>ng</td>
                                    <td>kenkä → kengän (shoe)</td>
                                </tr>
                                <tr>
                                    <td>mp</td>
                                    <td>mm</td>
                                    <td>lampi → lammen (pond)</td>
                                </tr>
                                <tr>
                                    <td>lt</td>
                                    <td>ll</td>
                                    <td>kulta → kullan (gold)</td>
                                </tr>
                                <tr>
                                    <td>rt</td>
                                    <td>rr</td>
                                    <td>parta → parran (beard)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <h4>When Does Gradation Occur?</h4>
                    <p>Consonant gradation typically occurs when:</p>
                    <ul>
                        <li>Adding case endings (genitive -n, partitive -a/-ä, etc.)</li>
                        <li>Adding possessive suffixes</li>
                        <li>In certain verb forms</li>
                    </ul>
                    
                    <h4>Important Notes</h4>
                    <ul>
                        <li>Not all words undergo gradation - only words with k, p, or t in certain positions</li>
                        <li>Gradation depends on the syllable structure of the word</li>
                        <li>Some words have irregular gradation patterns</li>
                        <li>Loanwords may not follow the gradation rules</li>
                    </ul>
                </div>
            </section>
            
            <section class="interactive-exercises-section" id="interactive-exercises">
                <!-- Interactive exercises will be loaded here by JavaScript -->
            </section>
        </div>
    </main>
    
    <footer>
        <div class="container">
            <p>&copy; 2026 Finnish Learning Resources</p>
        </div>
    </footer>
    <script src="js/kpt-exercises.js"></script>
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
            <h1>Finnish Learning Resources</h1>
            <nav>
                <a href="index.html">Home</a>
            </nav>
        </div>
    </header>
    
    <main class="container">
        <div class="lesson-detail">
    <a href="yki-test.html" class="back-link">← Back to YKI Test Catalog</a>
    <h2>{lesson_name}</h2>
    
    <div class="lesson-resources">
{pdf_section}{audio_section}{flashcard_section}{no_resources}    </div>
</div>
    </main>
    
    <footer>
        <div class="container">
            <p>&copy; 2026 Finnish Learning Resources</p>
        </div>
    </footer>
</body>
</html>'''
    return html

def main():
    """Main function to generate static site"""
    import sys
    import shutil
    
    try:
        print("Generating static site...")
        
        # Create output directory
        output_dir = Path('docs')
        output_dir.mkdir(exist_ok=True)
        
        # Create CSS directory
        css_dir = output_dir / 'css'
        css_dir.mkdir(exist_ok=True)
        
        # Load lessons
        print("Loading lessons from lessons.json...")
        lessons = load_lessons()
        if not lessons:
            print("ERROR: No lessons found in lessons.json!")
            sys.exit(1)
        
        print(f"Loaded {len(lessons)} lessons")
        lessons = sorted(lessons, key=lambda x: x.get('order', 999))
        
        # Generate main index.html (landing page)
        print("Generating main index.html...")
        main_index_html = generate_main_index_html()
        main_index_path = output_dir / 'index.html'
        with open(main_index_path, 'w', encoding='utf-8') as f:
            f.write(main_index_html)
        print(f"✅ Created {main_index_path}")
        
        # Generate yki-test.html (lessons catalog)
        print("Generating yki-test.html...")
        yki_test_html = generate_yki_test_html(lessons)
        yki_test_path = output_dir / 'yki-test.html'
        with open(yki_test_path, 'w', encoding='utf-8') as f:
            f.write(yki_test_html)
        print(f"✅ Created {yki_test_path}")
        
        # Generate finnish-grammar.html (index page)
        print("Generating finnish-grammar.html...")
        grammar_html = generate_finnish_grammar_html()
        grammar_path = output_dir / 'finnish-grammar.html'
        with open(grammar_path, 'w', encoding='utf-8') as f:
            f.write(grammar_html)
        print(f"✅ Created {grammar_path}")
        
        # Generate finnish-grammar-kpt.html (KPT rule detail page)
        print("Generating finnish-grammar-kpt.html...")
        kpt_html = generate_finnish_grammar_kpt_html()
        kpt_path = output_dir / 'finnish-grammar-kpt.html'
        with open(kpt_path, 'w', encoding='utf-8') as f:
            f.write(kpt_html)
        print(f"✅ Created {kpt_path}")
        
        # Generate individual lesson pages
        generated_count = 0
        for lesson in lessons:
            lesson_id = lesson.get('id', '')
            if not lesson_id:
                print(f"WARNING: Lesson missing ID, skipping: {lesson.get('name', 'Unknown')}")
                continue
            print(f"Generating {lesson_id}.html...")
            lesson_html = generate_lesson_html(lesson)
            lesson_path = output_dir / f'{lesson_id}.html'
            with open(lesson_path, 'w', encoding='utf-8') as f:
                f.write(lesson_html)
            generated_count += 1
        
        print(f"✅ Generated {generated_count} lesson pages")
        
        # Copy CSS file
        css_source = Path('static/css/style.css')
        if not css_source.exists():
            print(f"ERROR: CSS file not found at {css_source}")
            sys.exit(1)
        
        print("Copying CSS...")
        shutil.copy(css_source, css_dir / 'style.css')
        print(f"✅ Copied CSS to {css_dir / 'style.css'}")
        
        # Create JS directory and copy JavaScript file
        js_dir = output_dir / 'js'
        js_dir.mkdir(exist_ok=True)
        js_source = Path('static/js/kpt-exercises.js')
        if js_source.exists():
            print("Copying JavaScript...")
            shutil.copy(js_source, js_dir / 'kpt-exercises.js')
            print(f"✅ Copied JavaScript to {js_dir / 'kpt-exercises.js'}")
        else:
            print(f"WARNING: JavaScript file not found at {js_source}")
        
        # Create .nojekyll file for GitHub Pages
        nojekyll_file = output_dir / '.nojekyll'
        nojekyll_file.touch()
        print(f"✅ Created .nojekyll file for GitHub Pages")
        
        # Verify output
        if not (output_dir / 'index.html').exists():
            print("ERROR: index.html was not created!")
            sys.exit(1)
        
        if not (css_dir / 'style.css').exists():
            print("ERROR: style.css was not copied!")
            sys.exit(1)
        
        print(f"\n✅ Static site generated successfully in '{output_dir}' directory!")
        print(f"   - {generated_count + 4} HTML files (main index, yki-test, finnish-grammar index, finnish-grammar-kpt, and {generated_count} lesson pages)")
        print(f"   - 1 CSS file")
        if js_source.exists():
            print(f"   - 1 JavaScript file")
        
    except FileNotFoundError as e:
        print(f"ERROR: File not found: {e}")
        sys.exit(1)
    except Exception as e:
        print(f"ERROR: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)

if __name__ == '__main__':
    main()

