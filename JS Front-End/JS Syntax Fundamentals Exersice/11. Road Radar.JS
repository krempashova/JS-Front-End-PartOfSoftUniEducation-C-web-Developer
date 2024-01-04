function solve(speed, area)
{
const speedlimits={
    motorway:130,
    interstate:90,
    city:50,
    residential:20
};
const currentlimit=speedlimits[area];
 let driving=speed- currentlimit;
if(driving<0)
{
 console.log(`Driving ${speed} km/h in a ${currentlimit} zone`)
 return;
}

const speedmessage=
driving<=20?
"speeding":
driving<=40?"excessive speeding":
"reckless driving";

 console.log(`The speed is ${driving} km/h faster than the allowed speed of ${currentlimit} - ${speedmessage}`);
}
solve(21, 'residential')
