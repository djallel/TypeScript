// string
let myName: string = 'Max';
// myName = 28;

// number
let myAge: number = 27;
// myAge = 'Max';

// boolean
let hasHobbies: boolean = false;
// hasHobbies = 1;

// assign types
let myRealAge: number;
myRealAge = 27;
// myRealAge = '27';

// array
let hobbies: any[] = ["Cooking", "Sports"];
hobbies = [100];
// hobbies = 100;

// tuples
let address: [string, number] = ["Superstreet", 99];

// enum
enum Color {
    Gray, // 0
    Green = 100, // 100
    Blue = 2// 2
}
let myColor: Color = Color.Blue;
console.log(myColor);

// any
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3};
console.log(car);

// functions
function returnMyName(): string { // la fonction retourne un string , et c'est le type de return myName;
    return myName;
}
console.log(returnMyName());

// void
function sayHello(): void { // la fonction ne retourne rien dutout,
    console.log("Hello!");
}

// argument types
function multiply(value1: number, value2: number): number { // ici value1 et value2 sont typer,
    // et donc, si on on appelle la fonction avec string au lieu de number, on aura une erreur
    return value1 * value2;
}
// console.log(multiply(2, 'Max'));
console.log(multiply(10, 2));

// function types
let myMultiply1;
myMultiply1= sayHello;
myMultiply1();
myMultiply1= multiply;
console.log("myMultiply1 "+myMultiply1(5,2));

// function types
let myMultiply: (a: number, b: number) => number; // toujours faire àa dans ma tête         multiply: () =>
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));

// objects
let userData: { name: string, age: number } = {
    name: "Max",
    age: 27
};
// userData = { // l'ordre des parametre n'est pas important, on doit initialiser en fonction des nom de parametre,
// c'est à dire à la aplce de a , on met name et à la place de b on doit mettre age
//     a: "Hello",
//     b: 22
// };

// complex object
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data;
    }
};
// complex = {};

// type alias

type Complex = {data: number[], output: (all: boolean) => number[]}; // on crée un alias, cette alias est un alias de
// type Complex, on pourrai l'utiliser par la suite directement, Compplex c'est comme
// si on disait Boolean, ce sont des types

let complex2: Complex = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data;
    }
};

// union types
let myRealRealAge: number | string = 27; // ici l'age peut être 27 en nmbre ou "27" en string
myRealRealAge = "27";
// myRealRealAge = true;

// check types
let finalValue = 30;
if (typeof finalValue == "number") { // ici on parle de typeOF
    console.log("Final value is a number");
}

// never
function neverReturns():never { // never = void, veut dire la fonction ne retourne JAMAIS rien,
                                         // void veut dire la fonction ne retourne Rien
    throw new Error('An error!');
}

//Nullable Types
let canBuNull: number |null = 12; // ici canBeNull peut être null comme il peut être un nombre
canBuNull= null;
let canAlsoBeNull; //on va sur le fichier tsconfig.json et on ajoute "strictNullChecks": true ( voir la ligne 7),
// cette ligne veut dire que canAlsoNull, peut être null
canAlsoBeNull = null;
let canThisBeAny : number | null = null;
canAlsoBeNull = 12;