function solve(word,text)
{

     let lowercasrword=word.toLowerCase();
     let lowertext=text.toLowerCase();

 let splitedtext=lowertext.split(" ");
 if(splitedtext.includes(lowercasrword))
 {
    console.log(word);
    return;
 }
 else 
 {
    console.log(`${word} not found!`);
 }

}
solve('javascript', 'JavaScript is the best programming language')