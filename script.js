let input = prompt('HOW OLD ARE YOU');
let age = Number(input);
if (age <= 12) {
    console.log('$10')
}
else if (age >= 13 && age <= 17 ) {
    console.log('$15')
} else if (age => 20) {
    console.log('$20')
}


let temp = prompt('WHAT IS THE TEMPERATURE');
let warm = ('beach fit');
let cold = ('warm fit');
let hot = ('cold fit');




if (temp >= 70) {
    console.log(`OUTFIT: ${hot}`)
}

else if (temp >= 50 && temp <= 69) {
    console.log(`OUTFIT: ${warm}`)
}

else if (temp >= 30 && temp <= 49) {
    console.log(`OUTFIT: ${cold}`)
}

else {
    console.log("OUTFIT: DON'T GO OUT")
}


