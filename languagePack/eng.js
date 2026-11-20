const directory = {
    "header": "Typing with speed",
    "subheader": "Messure and train your typingspeed!",
    "start-btn": "Start",
    "option-1": "Words",
    "option-2": "Whole sentences",
    "option-3": "Words from whole sentences",
    "option-4": "Random letters",
    "option-5": "Rewrite Text",
    "option-6": "Rewrite vocables",
    "goaler": "Amount",
    "back-btn": "back",
    "many_words": "list/many_words_en.js",
    "page_title": "typer - ENG",
    "time-label": "Time (s): ",
    "right-label": "Right: ",
    "wrong-label": "Wrong: ",
    "reached-label": "Reached: ",
    "speed-label": "ZPS: ",
    "explain-title": "Symbols per second",
    "mistakes-details": "All Mistakes",
    "mistakes-summary": "All Mistakes",
    "restart-btn": "Again?"
};

function $$(query) {
    return document.querySelectorAll(query);
}

function translate() {
    document.querySelector('html').style.background = 'linear-gradient(var(--gradient-angle), blue, cyan)';

    $$('*[data-lang]').forEach(node => {
        node.innerText = directory[node.dataset.lang];
    });

    $$('*[data-lang-title]').forEach(node => {
        node.title = directory[node.dataset.langTitle];
    });

    $$('*[data-lang-placeholder]').forEach(node => {
        node.placeholder = directory[node.dataset.langPlaceholder];
    });

    $$('*[data-lang-src]').forEach(node => {
        const block = document.createElement('script');
        block.src = directory[node.dataset.langSrc];
        node.remove();
        document.body.appendChild(block);
    });
    updateGroups();
}

function updateGroups() {
    for(g in groups) {
        delete groups[g];
    }
    let nGroup = {
        "Words": words,
        "Words from whole sentences": 'To write a Text or an Poem can be difficult if you don\'t know what do you wonna write and if you don\'t write interessting stuff fewer people will read your text'.split(' '),
        "Whole sentences": 'Let\'s write this sentence.,You can\'t imagin how easy the english grammar is.,The German language can be diffucult.,Is anyone even listining to radio anymore?,May I go on the toilet please?,To write something can be boring.,What\'s that behind your ear?,I\'m trapped in a Word World!,You reached the end. (no you don\'t)'.split(','),
        "Random letters": 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890.-,'.split(''),
        "Rewrite Text": "",
        "Vokabeln abschreiben": "",
    };
    for(n in nGroup) {
        groups[n] = nGroup[n];
    }
    console.log(groups);
}

translate();
console.log('loaded');