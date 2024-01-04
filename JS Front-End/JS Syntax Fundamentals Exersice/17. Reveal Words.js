function solve(words, text) {
    let splittedText = text.split(' ')
    let splittedWords = words.split(', ')


    for (let y = 0; y < splittedWords.length; y++) {
        let currentWord = splittedWords[y]
        for (let i = 0; i < splittedText.length; i++) {
            let currentText = splittedText[i]
            if (currentText.includes('*')) {
                if (currentWord.length === currentText.length) {
                    text = text.replace(currentText, currentWord)
                }
            }
        }
    }
    console.log(text)
}

//solve('great', 'softuni is ***** place for learning new programming languages')
solve('great, learning', 'softuni is ***** place for ******** new programming languages')