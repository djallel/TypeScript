"use strict";
// string
var myName = 'Max';
// myName = 28;
// number
var myAge = 27;
// myAge = 'Max';
// boolean
var hasHobbies = false;
// hasHobbies = 1;
// assign types
var myRealAge;
myRealAge = 27;
// myRealAge = '27';
// array
var hobbies = ["Cooking", "Sports"];
hobbies = [100];
// hobbies = 100;
// tuples
var address = ["Superstreet", 99];
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; // 2
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
// any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log("Hello!");
}
// argument types
function multiply(value1, value2) {
    // et donc, si on on appelle la fonction avec string au lieu de number, on aura une erreur
    return value1 * value2;
}
// console.log(multiply(2, 'Max'));
console.log(multiply(10, 2));
// function types
var myMultiply1;
myMultiply1 = sayHello;
myMultiply1();
myMultiply1 = multiply;
console.log("myMultiply1 " + myMultiply1(5, 2));
// function types
var myMultiply; // toujours faire àa dans ma tête         multiply: () =>
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));
// objects
var userData = {
    name: "Max",
    age: 27
};
// userData = { // l'ordre des parametre n'est pas important, on doit initialiser en fonction des nom de parametre,
// c'est à dire à la aplce de a , on met name et à la place de b on doit mettre age
//     a: "Hello",
//     b: 22
// };
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// type Complex, on pourrai l'utiliser par la suite directement, Compplex c'est comme
// si on disait Boolean, ce sont des types
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealRealAge = 27; // ici l'age peut être 27 en nmbre ou "27" en string
myRealRealAge = "27";
// myRealRealAge = true;
// check types
var finalValue = 30;
if (typeof finalValue == "number") { // ici on parle de typeOF
    console.log("Final value is a number");
}
// never
function neverReturns() {
    // void veut dire la fonction ne retourne Rien
    throw new Error('An error!');
}
//Nullable Types
var canBuNull = 12; // ici canBeNull peut être null comme il peut être un nombre
canBuNull = null;
var canAlsoBeNull; //on va sur le fichier tsconfig.json et on ajoute "strictNullChecks": true ( voir la ligne 7),
// cette ligne veut dire que canAlsoNull, peut être null
canAlsoBeNull = null;
var canThisBeAny = null;
canAlsoBeNull = 12;
