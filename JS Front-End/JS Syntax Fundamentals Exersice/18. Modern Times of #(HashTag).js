function solve(text) {
    
    let splittedText = text.split(' ')
    const regex = /\#[A-Za-z]+/g;
    let searchedWords = text.match(regex)
     //console.log(searchedWords)

    for (let i = 0; i < searchedWords.length; i++) {
        let currentWord = searchedWords[i].replace('#', '')
        console.log(currentWord)
        
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia')