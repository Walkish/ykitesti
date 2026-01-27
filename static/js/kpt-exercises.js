// K-P-T Rule Exercise Data with A1 level sentences
// Format: { word: "base form", answer: "genitive form", type: "gradation type", hint: "translation", sentence: "A1 level sentence" }

const kptExercises = [
    // kk → k - with different pronouns and questions
    { word: "pankki", answer: "pankin", type: "kk→k", hint: "bank", sentence: "Minä menen ____ (pankki) aamulla." },
    { word: "kukka", answer: "kukan", type: "kk→k", hint: "flower", sentence: "Sinä näet kauniin ____ (kukka) pöydällä." },
    { word: "lakki", answer: "lakin", type: "kk→k", hint: "cap", sentence: "Hän pitää ____ (lakki) päällään." },
    { word: "rakki", answer: "rakin", type: "kk→k", hint: "dog", sentence: "Me näemme ____ (rakki) kadulla." },
    { word: "mukka", answer: "mukan", type: "kk→k", hint: "mug", sentence: "Te juotte kahvia ____ (mukka)." },
    { word: "sukka", answer: "sukan", type: "kk→k", hint: "sock", sentence: "He laittavat ____ (sukka) jalkaan." },
    { word: "pakki", answer: "pakin", type: "kk→k", hint: "pack", sentence: "Mistä otat ____ (pakki)?" },
    { word: "nakki", answer: "nakin", type: "kk→k", hint: "sausage", sentence: "Missä syöt ____ (nakki)?" },
    { word: "takki", answer: "takin", type: "kk→k", hint: "jacket", sentence: "Mitä pidät ____ (takki) päällä?" },
    { word: "hakki", answer: "hakkin", type: "kk→k", hint: "axe", sentence: "Kenen ____ (hakki) tämä on?" },
    
    // pp → p
    { word: "kuppi", answer: "kupin", type: "pp→p", hint: "cup", sentence: "Sinä juot teetä ____ (kuppi)." },
    { word: "lappi", answer: "lapin", type: "pp→p", hint: "Lapland", sentence: "Hän matkustaa ____ (lappi) talvella." },
    { word: "tappi", answer: "tapin", type: "pp→p", hint: "plug", sentence: "Me laitamme ____ (tappi) seinään." },
    { word: "sappi", answer: "sapin", type: "pp→p", hint: "bile", sentence: "Lääkäri puhuu ____ (sappi) terveydestä." },
    { word: "lippu", answer: "lipun", type: "pp→p", hint: "flag", sentence: "Te näette ____ (lippu) pylväässä." },
    { word: "kappale", answer: "kappaleen", type: "pp→p", hint: "piece", sentence: "He syövät ____ (kappale) kakkua." },
    { word: "oppilas", answer: "oppilaan", type: "pp→p", hint: "student", sentence: "Mistä olet ____ (oppilas)?" },
    
    // tt → t
    { word: "katti", answer: "katin", type: "tt→t", hint: "cat", sentence: "Sinä näet ____ (katti) pihalla." },
    { word: "matto", answer: "maton", type: "tt→t", hint: "carpet", sentence: "Hän pesee ____ (matto) lattialla." },
    { word: "hattu", answer: "hatun", type: "tt→t", hint: "hat", sentence: "Me pidämme ____ (hattu) päällä." },
    { word: "kettu", answer: "ketun", type: "tt→t", hint: "fox", sentence: "Te näette ____ (kettu) metsässä." },
    { word: "kortti", answer: "kortin", type: "tt→t", hint: "card", sentence: "He näyttävät ____ (kortti) kassalla." },
    { word: "pottu", answer: "potun", type: "tt→t", hint: "pot", sentence: "Missä keität ruokaa ____ (pottu)?" },
    { word: "katto", answer: "katon", type: "tt→t", hint: "roof", sentence: "Mitä näet ____ (katto) talon päällä?" },
    { word: "sotku", answer: "sotkun", type: "tt→t", hint: "mess", sentence: "Kenen ____ (sotku) tämä on?" },
    
    // k → - (disappears)
    { word: "puku", answer: "puvun", type: "k→-", hint: "dress", sentence: "Hän pitää kauniin ____ (puku) juhliin." },
    { word: "luku", answer: "luvun", type: "k→-", hint: "number", sentence: "Me kirjoitamme ____ (luku) paperille." },
    { word: "pako", answer: "paon", type: "k→-", hint: "escape", sentence: "Te puhutte ____ (pako) tilanteesta." },
    { word: "puku", answer: "puvun", type: "k→-", hint: "dress", sentence: "He ostavat ____ (puku) kaupasta." },
    { word: "luku", answer: "luvun", type: "k→-", hint: "number", sentence: "Mistä muistat ____ (luku)?" },
    
    // p → v
    { word: "tupa", answer: "tuvan", type: "p→v", hint: "hut", sentence: "Sinä asut ____ (tupa) metsässä." },
    { word: "lupa", answer: "luvan", type: "p→v", hint: "permission", sentence: "Hän pyytää ____ (lupa) opettajalta." },
    { word: "tupa", answer: "tuvan", type: "p→v", hint: "hut", sentence: "Me näemme ____ (tupa) kylässä." },
    { word: "lupa", answer: "luvan", type: "p→v", hint: "permission", sentence: "Missä saat ____ (lupa) mennä ulos?" },
    
    // t → d
    { word: "katu", answer: "kadun", type: "t→d", hint: "street", sentence: "Sinä kävelet ____ (katu) pitkin." },
    { word: "katu", answer: "kadun", type: "t→d", hint: "street", sentence: "Hän asuu ____ (katu) varrella." },
    { word: "katu", answer: "kadun", type: "t→d", hint: "street", sentence: "Mitä näet ____ (katu) nimen kyltissä?" },
    
    // nk → ng
    { word: "kenkä", answer: "kengän", type: "nk→ng", hint: "shoe", sentence: "Sinä laitat ____ (kenkä) jalkaan." },
    { word: "kenkä", answer: "kengän", type: "nk→ng", hint: "shoe", sentence: "Hän ostaa ____ (kenkä) kaupasta." },
    { word: "kenkä", answer: "kengän", type: "nk→ng", hint: "shoe", sentence: "Mistä peset ____ (kenkä)?" },
    
    // mp → mm
    { word: "lampi", answer: "lammen", type: "mp→mm", hint: "pond", sentence: "Me näemme ____ (lampi) metsässä." },
    { word: "lampi", answer: "lammen", type: "mp→mm", hint: "pond", sentence: "Te uitte ____ (lampi) vedessä." },
    { word: "lampi", answer: "lammen", type: "mp→mm", hint: "pond", sentence: "Missä istutte ____ (lampi) rannalla?" },
    
    // lt → ll
    { word: "kulta", answer: "kullan", type: "lt→ll", hint: "gold", sentence: "He näkevät ____ (kulta) kaupassa." },
    { word: "kulta", answer: "kullan", type: "lt→ll", hint: "gold", sentence: "Sinä ostat ____ (kulta) sormuksen." },
    { word: "kulta", answer: "kullan", type: "lt→ll", hint: "gold", sentence: "Mitä pidät ____ (kulta) koruja?" },
    
    // rt → rr
    { word: "parta", answer: "parran", type: "rt→rr", hint: "beard", sentence: "Hän näkee ____ (parta) miehellä." },
    { word: "parta", answer: "parran", type: "rt→rr", hint: "beard", sentence: "Me ajelemme ____ (parta) aamulla." },
    { word: "parta", answer: "parran", type: "rt→rr", hint: "beard", sentence: "Kenen ____ (parta) tämä on?" }
];

// Expand to 200 exercises by creating variations with different sentences
function expandExercises() {
    const expanded = [...kptExercises];
    
    // More variations with different sentences
    const variations = [
        // kk ? k variations
        { word: "pankki", answer: "pankin", type: "kk→k", hint: "bank", sentence: "Minä menen ____ (pankki) hakemaan rahaa." },
        { word: "kukka", answer: "kukan", type: "kk→k", hint: "flower", sentence: "Minä annan ____ (kukka) ystävälleni." },
        { word: "lakki", answer: "lakin", type: "kk→k", hint: "cap", sentence: "Minä laitan ____ (lakki) päähäni." },
        { word: "rakki", answer: "rakin", type: "kk→k", hint: "dog", sentence: "Minä ulkoilutan ____ (rakki) puistossa." },
        { word: "mukka", answer: "mukan", type: "kk→k", hint: "mug", sentence: "Minä täytän ____ (mukka) kahvilla." },
        { word: "sukka", answer: "sukan", type: "kk→k", hint: "sock", sentence: "Minä pesen ____ (sukka) pesukoneessa." },
        { word: "takki", answer: "takin", type: "kk→k", hint: "jacket", sentence: "Minä ripustan ____ (takki) naulaan." },
        
        // pp ? p variations
        { word: "kuppi", answer: "kupin", type: "pp→p", hint: "cup", sentence: "Minä täytän ____ (kuppi) vedellä." },
        { word: "lappi", answer: "lapin", type: "pp→p", hint: "Lapland", sentence: "Minä matkustan ____ (lappi) kesällä." },
        { word: "lippu", answer: "lipun", type: "pp→p", hint: "flag", sentence: "Minä näen ____ (lippu) liputuspylväässä." },
        { word: "kappale", answer: "kappaleen", type: "pp→p", hint: "piece", sentence: "Minä syön ____ (kappale) leipää." },
        { word: "oppilas", answer: "oppilaan", type: "pp→p", hint: "student", sentence: "Minä autan ____ (oppilas) opiskelussa." },
        
        // tt ? t variations
        { word: "katti", answer: "katin", type: "tt→t", hint: "cat", sentence: "Minä ruokin ____ (katti) aamulla." },
        { word: "matto", answer: "maton", type: "tt→t", hint: "carpet", sentence: "Minä imuroin ____ (matto) viikoittain." },
        { word: "hattu", answer: "hatun", type: "tt→t", hint: "hat", sentence: "Minä ostan ____ (hattu) kaupasta." },
        { word: "kettu", answer: "ketun", type: "tt→t", hint: "fox", sentence: "Minä näen ____ (kettu) metsässä." },
        { word: "kortti", answer: "kortin", type: "tt→t", hint: "card", sentence: "Minä näytän ____ (kortti) bussissa." },
        { word: "katto", answer: "katon", type: "tt→t", hint: "roof", sentence: "Minä korjaan ____ (katto) talon." },
        
        // k ? - variations
        { word: "puku", answer: "puvun", type: "k→-", hint: "dress", sentence: "Minä pidän ____ (puku) juhliin." },
        { word: "luku", answer: "luvun", type: "k→-", hint: "number", sentence: "Minä opettelen ____ (luku) matematiikassa." },
        { word: "pako", answer: "paon", type: "k→-", hint: "escape", sentence: "Minä kuulen ____ (pako) uutisista." },
        
        // p ? v variations
        { word: "tupa", answer: "tuvan", type: "p→v", hint: "hut", sentence: "Minä vieraile ____ (tupa) kesällä." },
        { word: "lupa", answer: "luvan", type: "p→v", hint: "permission", sentence: "Minä pyydän ____ (lupa) vanhemmiltani." },
        
        // t ? d variations
        { word: "katu", answer: "kadun", type: "t→d", hint: "street", sentence: "Minä asun ____ (katu) varrella." },
        { word: "katu", answer: "kadun", type: "t→d", hint: "street", sentence: "Minä kävelen ____ (katu) pitkin kouluun." },
        
        // nk ? ng variations
        { word: "kenkä", answer: "kengän", type: "nk→ng", hint: "shoe", sentence: "Minä laitan ____ (kenkä) jalkaan ennen ulosmenoa." },
        { word: "kenkä", answer: "kengän", type: "nk→ng", hint: "shoe", sentence: "Minä ostan ____ (kenkä) urheiluliikkeestä." },
        
        // mp ? mm variations
        { word: "lampi", answer: "lammen", type: "mp→mm", hint: "pond", sentence: "Minä näen ____ (lampi) metsässä kävellessäni." },
        { word: "lampi", answer: "lammen", type: "mp→mm", hint: "pond", sentence: "Minä istun ____ (lampi) rannalla kesällä." },
        
        // lt ? ll variations
        { word: "kulta", answer: "kullan", type: "lt→ll", hint: "gold", sentence: "Minä näen ____ (kulta) koruja kaupassa." },
        { word: "kulta", answer: "kullan", type: "lt→ll", hint: "gold", sentence: "Minä ostan ____ (kulta) sormuksen ystävälleni." },
        
        // rt ? rr variations
        { word: "parta", answer: "parran", type: "rt→rr", hint: "beard", sentence: "Minä näen ____ (parta) isälläni." },
        { word: "parta", answer: "parran", type: "rt→rr", hint: "beard", sentence: "Minä ajelen ____ (parta) parturissa." }
    ];
    
    expanded.push(...variations);
    
    // Add more variations to reach 200
    const baseWords = [
        { word: "pankki", answer: "pankin", type: "kk→k", hint: "bank" },
        { word: "kukka", answer: "kukan", type: "kk→k", hint: "flower" },
        { word: "lakki", answer: "lakin", type: "kk→k", hint: "cap" },
        { word: "rakki", answer: "rakin", type: "kk→k", hint: "dog" },
        { word: "mukka", answer: "mukan", type: "kk→k", hint: "mug" },
        { word: "sukka", answer: "sukan", type: "kk→k", hint: "sock" },
        { word: "takki", answer: "takin", type: "kk→k", hint: "jacket" },
        { word: "kuppi", answer: "kupin", type: "pp→p", hint: "cup" },
        { word: "lappi", answer: "lapin", type: "pp→p", hint: "Lapland" },
        { word: "lippu", answer: "lipun", type: "pp→p", hint: "flag" },
        { word: "kappale", answer: "kappaleen", type: "pp→p", hint: "piece" },
        { word: "oppilas", answer: "oppilaan", type: "pp→p", hint: "student" },
        { word: "katti", answer: "katin", type: "tt→t", hint: "cat" },
        { word: "matto", answer: "maton", type: "tt→t", hint: "carpet" },
        { word: "hattu", answer: "hatun", type: "tt→t", hint: "hat" },
        { word: "kettu", answer: "ketun", type: "tt→t", hint: "fox" },
        { word: "kortti", answer: "kortin", type: "tt→t", hint: "card" },
        { word: "katto", answer: "katon", type: "tt→t", hint: "roof" },
        { word: "puku", answer: "puvun", type: "k→-", hint: "dress" },
        { word: "luku", answer: "luvun", type: "k→-", hint: "number" },
        { word: "pako", answer: "paon", type: "k→-", hint: "escape" },
        { word: "tupa", answer: "tuvan", type: "p→v", hint: "hut" },
        { word: "lupa", answer: "luvan", type: "p→v", hint: "permission" },
        { word: "katu", answer: "kadun", type: "t→d", hint: "street" },
        { word: "kenkä", answer: "kengän", type: "nk→ng", hint: "shoe" },
        { word: "lampi", answer: "lammen", type: "mp→mm", hint: "pond" },
        { word: "kulta", answer: "kullan", type: "lt→ll", hint: "gold" },
        { word: "parta", answer: "parran", type: "rt→rr", hint: "beard" }
    ];
    
    const sentenceTemplates = [
        // Minä (I)
        "Minä näen ____ ({word}) {context}.",
        "Minä ostan ____ ({word}) kaupasta.",
        "Minä pidän ____ ({word}) {context}.",
        "Minä käytän ____ ({word}) {context}.",
        "Minä laitan ____ ({word}) {context}.",
        "Minä syön ____ ({word}) {context}.",
        "Minä juon ____ ({word}) {context}.",
        "Minä asun ____ ({word}) {context}.",
        "Minä matkustan ____ ({word}) {context}.",
        "Minä opettelen ____ ({word}) {context}.",
        // Sinä (you singular)
        "Sinä näet ____ ({word}) {context}.",
        "Sinä ostat ____ ({word}) kaupasta.",
        "Sinä pidät ____ ({word}) {context}.",
        "Sinä käytät ____ ({word}) {context}.",
        "Sinä laitat ____ ({word}) {context}.",
        "Sinä syöt ____ ({word}) {context}.",
        "Sinä juot ____ ({word}) {context}.",
        "Sinä asut ____ ({word}) {context}.",
        // Hän (he/she)
        "Hän näkee ____ ({word}) {context}.",
        "Hän ostaa ____ ({word}) kaupasta.",
        "Hän pitää ____ ({word}) {context}.",
        "Hän käyttää ____ ({word}) {context}.",
        "Hän laittaa ____ ({word}) {context}.",
        "Hän syö ____ ({word}) {context}.",
        "Hän juo ____ ({word}) {context}.",
        "Hän asuu ____ ({word}) {context}.",
        // Me (we)
        "Me näemme ____ ({word}) {context}.",
        "Me ostaamme ____ ({word}) kaupasta.",
        "Me pidämme ____ ({word}) {context}.",
        "Me käytämme ____ ({word}) {context}.",
        "Me laitamme ____ ({word}) {context}.",
        "Me syömme ____ ({word}) {context}.",
        "Me juomme ____ ({word}) {context}.",
        "Me asumme ____ ({word}) {context}.",
        // Te (you plural)
        "Te näette ____ ({word}) {context}.",
        "Te ostatte ____ ({word}) kaupasta.",
        "Te pidätte ____ ({word}) {context}.",
        "Te käytätte ____ ({word}) {context}.",
        "Te laitatte ____ ({word}) {context}.",
        "Te syötte ____ ({word}) {context}.",
        "Te juotte ____ ({word}) {context}.",
        // He (they)
        "He näkevät ____ ({word}) {context}.",
        "He ostavat ____ ({word}) kaupasta.",
        "He pitävät ____ ({word}) {context}.",
        "He käyttävät ____ ({word}) {context}.",
        "He laittavat ____ ({word}) {context}.",
        "He syövät ____ ({word}) {context}.",
        "He juovat ____ ({word}) {context}.",
        // Questions - Mistä (from where)
        "Mistä näet ____ ({word})?",
        "Mistä ostat ____ ({word})?",
        "Mistä pidät ____ ({word})?",
        "Mistä käytät ____ ({word})?",
        "Mistä laitat ____ ({word})?",
        "Mistä syöt ____ ({word})?",
        "Mistä juot ____ ({word})?",
        // Questions - Missä (where)
        "Missä näet ____ ({word})?",
        "Missä ostat ____ ({word})?",
        "Missä pidät ____ ({word})?",
        "Missä käytät ____ ({word})?",
        "Missä laitat ____ ({word})?",
        "Missä syöt ____ ({word})?",
        "Missä juot ____ ({word})?",
        // Questions - Mitä (what)
        "Mitä näet ____ ({word})?",
        "Mitä ostat ____ ({word})?",
        "Mitä pidät ____ ({word})?",
        "Mitä käytät ____ ({word})?",
        "Mitä laitat ____ ({word})?",
        "Mitä syöt ____ ({word})?",
        // Questions - Kenen (whose)
        "Kenen ____ ({word}) tämä on?",
        "Kenen ____ ({word}) sinä näet?",
        "Kenen ____ ({word}) hän pitää?"
    ];
    
    const contexts = {
        "pankki": "kaupungissa", "kukka": "puutarhassa", "lakki": "päälläni", "rakki": "kadulla",
        "mukka": "aamulla", "sukka": "jalkaan", "takki": "talvella", "kuppi": "aamiaisella",
        "lappi": "talvella", "lippu": "liputuspylväässä", "kappale": "aamiaisella", "oppilas": "koulussa",
        "katti": "pihalla", "matto": "huoneessa", "hattu": "päälläni", "kettu": "metsässä",
        "kortti": "lompakossa", "katto": "talon päällä", "puku": "juhliin", "luku": "koulussa",
        "pako": "uutisista", "tupa": "metsässä", "lupa": "opettajalta", "katu": "kaupungissa",
        "kenkä": "jalkaan", "lampi": "metsässä", "kulta": "koruissa", "parta": "miehellä"
    };
    
    // Generate more exercises until we have 200
    while (expanded.length < 200) {
        const baseWord = baseWords[Math.floor(Math.random() * baseWords.length)];
        const template = sentenceTemplates[Math.floor(Math.random() * sentenceTemplates.length)];
        const context = contexts[baseWord.word] || "täällä";
        const sentence = template.replace("{word}", baseWord.word).replace("{context}", context);
        
        // Avoid exact duplicates
        const isDuplicate = expanded.some(ex => 
            ex.word === baseWord.word && ex.sentence === sentence
        );
        
        if (!isDuplicate) {
            expanded.push({
                word: baseWord.word,
                answer: baseWord.answer,
                type: baseWord.type,
                hint: baseWord.hint,
                sentence: sentence
            });
        }
        
        // Safety break to avoid infinite loop
        if (expanded.length >= 200) break;
    }
    
    return expanded.slice(0, 200);
}

const allExercises = expandExercises();

// Shuffle array function
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Get random 20 exercises
function getRandomExercises() {
    const shuffled = shuffleArray(allExercises);
    return shuffled.slice(0, 20);
}

// Initialize exercises when page loads
let currentExercises = [];
let userAnswers = {};
let retryCounts = {}; // Track retry count for each exercise

function initializeExercises() {
    currentExercises = getRandomExercises();
    userAnswers = {};
    retryCounts = {};
    renderExercises();
}

function renderExercises() {
    const container = document.getElementById('interactive-exercises');
    if (!container) return;
    
    container.innerHTML = `
        <div class="exercise-header">
            <h3>Interactive K-P-T Practice</h3>
            <p class="exercise-info">Complete each sentence by converting the word in parentheses to genitive form (add -n and apply gradation). Showing 20 random exercises from ${allExercises.length} total.</p>
            <div class="exercise-buttons">
                <button id="check-answers-btn" class="check-btn">Check Answers</button>
                <button id="refresh-exercises-btn" class="refresh-btn">Get New Exercises</button>
            </div>
        </div>
        <div class="exercises-list" id="exercises-list"></div>
        <div id="results-summary" class="results-summary" style="display: none;"></div>
    `;
    
    const exercisesList = document.getElementById('exercises-list');
    currentExercises.forEach((exercise, index) => {
        const exerciseDiv = document.createElement('div');
        exerciseDiv.className = 'interactive-exercise';
        exerciseDiv.dataset.index = index;
        
        // Replace the word placeholder in sentence with input
        const sentenceWithInput = exercise.sentence.replace(`____ (${exercise.word})`, 
            `<input 
                type="text" 
                class="exercise-input" 
                id="answer-${index}"
                data-correct="${exercise.answer}"
                placeholder="genitive form"
                autocomplete="off"
                spellcheck="false"
            />`
        );
        
        exerciseDiv.innerHTML = `
            <div class="exercise-question">
                <span class="exercise-number">${index + 1}.</span>
                <div class="exercise-sentence">
                    ${sentenceWithInput}
                    <button class="check-single-btn" data-index="${index}" title="Check answer">✓</button>
                </div>
                <div class="exercise-meta">
                    <span class="exercise-word-label">Transform: <strong class="finnish-word">${exercise.word}</strong></span>
                    <span class="exercise-hint">(${exercise.hint})</span>
                    <span class="exercise-type">[${exercise.type}]</span>
                    <span class="retry-count" id="retry-${index}" style="display: none;"></span>
                </div>
                <span class="answer-feedback" id="feedback-${index}"></span>
            </div>
        `;
        exercisesList.appendChild(exerciseDiv);
    });
    
    // Add event listeners
    document.getElementById('check-answers-btn').addEventListener('click', checkAllAnswers);
    document.getElementById('refresh-exercises-btn').addEventListener('click', initializeExercises);
    
    // Add check button listeners and Enter key support
    currentExercises.forEach((_, index) => {
        const input = document.getElementById(`answer-${index}`);
        const checkBtn = document.querySelector(`.check-single-btn[data-index="${index}"]`);
        
        if (input && checkBtn) {
            // Check button click
            checkBtn.addEventListener('click', () => {
                checkSingleAnswer(index);
            });
            
            // Enter key support - check answer or move to next
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    checkSingleAnswer(index);
                    // Move to next input after a short delay
                    setTimeout(() => {
                        const nextIndex = index + 1;
                        if (nextIndex < currentExercises.length) {
                            const nextInput = document.getElementById(`answer-${nextIndex}`);
                            if (nextInput) {
                                nextInput.focus();
                            }
                        }
                    }, 100);
                }
            });
        }
    });
}

function checkSingleAnswer(index) {
    const exercise = currentExercises[index];
    const input = document.getElementById(`answer-${index}`);
    const feedback = document.getElementById(`feedback-${index}`);
    const retryDisplay = document.getElementById(`retry-${index}`);
    const exerciseDiv = input.closest('.interactive-exercise');
    
    if (!input || !feedback || !exercise) return;
    
    const userAnswer = input.value.trim().toLowerCase();
    const correctAnswer = exercise.answer.toLowerCase();
    
    // Initialize retry count if not exists
    if (retryCounts[index] === undefined) {
        retryCounts[index] = 0;
    }
    
    if (userAnswer === '') {
        input.classList.remove('correct', 'incorrect');
        feedback.textContent = '';
        feedback.className = 'answer-feedback';
        exerciseDiv.classList.remove('exercise-correct', 'exercise-incorrect');
        if (retryDisplay) retryDisplay.style.display = 'none';
        return;
    }
    
    if (userAnswer === correctAnswer) {
        // Correct answer
        input.classList.add('correct');
        input.classList.remove('incorrect');
        feedback.textContent = '✓ Correct';
        feedback.className = 'answer-feedback correct-feedback';
        exerciseDiv.classList.add('exercise-correct');
        exerciseDiv.classList.remove('exercise-incorrect');
        if (retryDisplay) retryDisplay.style.display = 'none';
    } else {
        // Incorrect answer - increment retry count
        retryCounts[index]++;
        const retriesLeft = 3 - retryCounts[index];
        
        input.classList.add('incorrect');
        input.classList.remove('correct');
        exerciseDiv.classList.add('exercise-incorrect');
        exerciseDiv.classList.remove('exercise-correct');
        
        if (retriesLeft > 0) {
            // Show retry count, don't reveal answer yet
            feedback.textContent = `✗ Incorrect. ${retriesLeft} ${retriesLeft === 1 ? 'try' : 'tries'} left.`;
            feedback.className = 'answer-feedback incorrect-feedback';
            if (retryDisplay) {
                retryDisplay.textContent = `(${retryCounts[index]}/3)`;
                retryDisplay.style.display = 'inline';
            }
        } else {
            // After 3 retries, show correct answer
            feedback.textContent = `✗ Correct: ${exercise.answer}`;
            feedback.className = 'answer-feedback incorrect-feedback';
            if (retryDisplay) {
                retryDisplay.textContent = `(3/3)`;
                retryDisplay.style.display = 'inline';
            }
            // Disable input after 3 retries
            input.disabled = true;
            input.style.opacity = '0.7';
        }
    }
    
    // Update results summary
    updateResultsSummary();
}

function checkAllAnswers() {
    currentExercises.forEach((_, index) => {
        checkSingleAnswer(index);
    });
}

function updateResultsSummary() {
    let correct = 0;
    let total = currentExercises.length;
    
    currentExercises.forEach((exercise, index) => {
        const input = document.getElementById(`answer-${index}`);
        if (input) {
            const userAnswer = input.value.trim().toLowerCase();
            const correctAnswer = exercise.answer.toLowerCase();
            if (userAnswer === correctAnswer) {
                correct++;
            }
        }
    });
    
    // Show results summary
    const resultsSummary = document.getElementById('results-summary');
    const percentage = Math.round((correct / total) * 100);
    resultsSummary.style.display = 'block';
    resultsSummary.innerHTML = `
        <h4>Results</h4>
        <p class="score">${correct} / ${total} correct (${percentage}%)</p>
        ${percentage === 100 ? '<p class="perfect-score">🎉 Perfect score!</p>' : ''}
    `;
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeExercises);
} else {
    initializeExercises();
}
