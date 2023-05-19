⁡⁣⁣⁢// EXO1
⁡// Créer une function [reverseNumber] qui retourne une série de nombre à l'envers (exemple si j'entre 851 elle me retourne 158)

⁡⁣⁣⁢// EXO2
⁡// Créer une function [divPar2] contenant un switch qui vérifie si un nombre est divisible par 2
// Qui répond "Le num x est divisible par 2 x:2 = z"
// Dans le cas ou ce n'est pas divisible il répond : "Ce nombre n'est pas divisible par 2"

⁡⁣⁣⁢// EXO3
⁡// Créer une fonction [logIn] qui va demander à l'utilisateur un mot de passe et vérifier s'il a bien entré "mdp" si oui, faites une alert "Vous êtes connecté", si non, redemander le mot de passe jusqu'à ce que l'utilisateur rentre "mdp"

⁡⁣⁣⁢// EXO 4 pour les functions : 
⁡// Créer un tableau [codingSchoolX] vide.
// Créer une fonction qui permet d'ajouter quelqu'un au tableau
// Créer une fonction qui permet de retirer quelqu'un au tableau
// Avec la capture d'écran reproduisez les entrées / sorties de la classe
//                                   ⁡⁢⁣⁢​‌‌‍exo 1 :
// Exo 1

let myNumber = 851 ;
//! Methode 1
// const reverseNumber = (params) => {
//     params = params.toString(); // To string
//     // params = String(params); // To string METHODE 2
//     params = params.split(""); // To array
//     params = params.reverse(); // To reverse the array
//     params = params.join(""); // To switch to string
//     params = parseInt(params); // To switch to Number
//     myNumber = params;
//     console.log(params);
// }
// reverseNumber(myNumber);
// console.log(myNumber);

//! Methode 2
// const reverseNumber = (params) => {
//     params = params.toString() ; 
//     let emptyString = "";
//     for (let index = params.length-1; index >= 0; index--) {
//         let element = params[index];
//         emptyString += element ;
//     }
//     // console.log(parseInt(emptyString));
//     myNumber = +(emptyString)
// }
// reverseNumber(myNumber);
// console.log(myNumber);

//* Exo 2
let myNumber = 8 ; // Essayez avec 7

const divPar2 = (params) => {
    let modulo = params % 2;

    switch (modulo) {
        case 0:
            console.log(`Le nombre ${params} est divisible par 2`);
            break;
        
        default:
            console.log(`Le nombre ${params} n'est pas divisible par 2`);
            break;
    }
}
divPar2(myNumber);⁡

//                                     ‍ ⁡⁢⁣⁢exo2: 
// /////////////       ⁡⁣⁣⁢method 1⁡⁡//////////////////////////////
function divPar2(num) {
    switch (num % 2) {
        case 0:
            return "The number " + num + " is divisible by 2 " + num + ":2 = " + num / 2;
        default:
            return "This number is not divisible by 2";
    }
}
console.log(divPar2(6));
console.log(divPar2(11));


/////////// ⁡⁣⁣⁢methode 2⁡//////////////////////////////////////////////
function divPar2(num) {
    if (num % 2 === 0) {
        return "The number " + num + " is divisible by 2 " + num + ":2 = " + num / 2;
    } else {
        return "This number is not divisible by 2";
    }
}

console.log(divPar2(6));
console.log(divPar2(11));
divPar2(7)
//                                     ⁡⁢⁣⁢EXO3⁡

function logIn() {
    let password = prompt("Please enter your password!:");
    while (password !== "mdp") {
        password = prompt("Incorrect password. 3awd 3awtany:");
    }
    alert("Vous êtes connecté! mrhba");
}   
logIn()
//                       ⁡⁢⁣⁢methode 2⁡
function logiin() {
    let password = prompt("dakhal lcode:");
    if (password !== "mdp") {
        alert ("sir t9awad afak!");
    } else {
        alert ("marhba bik");
    }
    
}
logiin()

//                         ⁡⁢⁣⁣exo 4:
let = [codingSchoolX]   

