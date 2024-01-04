function oddOccurrences(input) {
 
    let inputArr = input.split(' ').map(el => el.toLowerCase());
    let countObj = new Map();
 
    for (let firstWord of inputArr) {
        let count = 0;
        for (let secondWord of inputArr) {
            if (firstWord === secondWord) {
                count++
            }
        }
        countObj.set(firstWord, count)
    }
 
 
    let filteredArr = Array.from(countObj.entries()).filter(([word, count]) => count % 2 == 1);
 
    let result = [];
    for (let [word, num] of filteredArr) {
        result.push(word)
    }    
    console.log(result.join(' '));
}

oddOccurrences(["Cake IS SWEET is Soft CAKE sweet Food"])
oddOccurrences(["Java C# Php PHP Java PhP 3 C# 3 1 5 C#"])