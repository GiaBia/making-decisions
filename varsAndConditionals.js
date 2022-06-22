/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 25
let jamieLannisterAttack = 35

if(jonSnowAttack > jamieLannisterAttack){
    console.log(`Jon has better attack than Jamie`)
} else if(jamieLannisterAttack > jonSnowAttack){
    console.log(`Jamie has a better attack than Jon`)
} else {
    console.log(`Jon and Jamie have the same attack`)
}

let jonSnowHealth = 100
let jonSnowDefense = 0 

//JAmie attacks first - use an if/else to determine if Jon Snow ca survive the attack. If he does
// not, console.log "jon snow has been slain." Otherwise, console.log jon snow's health



if(jonSnowHealth <= jamieLannisterAttack){
    console.log(`Jon Snow has been slain`)
} else {
// jonSnowHealth
 jonSnowHealth -= jamieLannisterAttack
 console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
//console.log(Jon Snows health is down to ` + jonSnowHealth)
}


//Jon Snow picks up a shield and increase defense +25
jonSnowDefense += 25

if(jonSnowHealth <= jamieLannisterAttack){
    console.log(`Jon Snow has been slain`)
} else {
// jonSnowHealth
 jonSnowHealth -= jamieLannisterAttack
 console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
//console.log(Jon Snows health is down to ` + jonSnowHealth)
}

//One of the town's people, obviously wanting Jon Snow to win, throws Jon a health kit. This health kit can raise Jon's health by 50pts. However, Jon's health cannot exceed 100.
// Using an if else statement, raise Jon's health to the appropriate level.

if((jonSnowHealth + 50) >= 100){
    jonSnowHealth = 100
} else {
    jonSnowHealth += 50
}
console.log(jonSnowHealth)

//Create a variable called coinLandsHeads and set it equal to false. Then, using an if-else statement and the equality operator, handle the value of the flipped coin (handle for both true and false)

let coinLandsHeads = false

if(coinLandsHeads === true){
    console.log(`the fight continues`)
} else {
    console.log(`jon is allowed to run away`)
}



// for(let i = 0; i < 5;i++){
//     if (jonSnowHealth <= 0) {
//         console.log (`Jon has been slain`);
//     } else{
//     jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense);
//     console.log(`jon snow's health is ${jonSnowHealth}`);}

// }


while(jonSnowHealth > 0){
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
    console.log(`jon's health is now ${jonSnowHealth}`);
    if (jonSnowHealth <= 0 ) {
        console.log(`lon has been slain`);
    }
}