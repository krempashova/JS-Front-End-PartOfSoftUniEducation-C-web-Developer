function solve(input) {
    let numPeople=Number(input[0]);
    let taxForPerson=Number(input[1]);
    let onesunLonger=Number(input[2]);
    let oneumbrella=Number(input[3]);
    let taxforpool=numPeople*taxForPerson;
    let numOfrumbrellas=Math.ceil(numPeople/2);
    let taxForUmbrellas=numOfrumbrellas*oneumbrella;
    let peopleforSunLounge=Math.ceil(numPeople*0.75);
    let taxforSunLaounge=peopleforSunLounge*onesunLonger;
    let totaSum=taxforpool+taxForUmbrellas+taxforSunLaounge;
    console.log(`${totaSum.toFixed(2)} lv.`);





}
solve(["50",
"6",
"8",
"4"])

