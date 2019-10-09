// Simple Generic
function echo(data: any) {
    return data;
}

console.log(echo("Max"));
console.log(echo(27));
console.log(echo({name: "Max", age: 27}));

// Better Generic
function betterEcho<T>(data: T) {
    return data;
}
console.log(betterEcho("Max").length);
console.log(betterEcho<number>(27));
console.log(betterEcho({name: "Max", age: 27}));

// Built-in Generics
const testResults: Array<number> = [1.94, 2.33];
testResults.push(-2.99);
console.log(testResults);

// Arrays
function printAll<T>(args: T[]) { // veut dire, args est de type T, et T c'est un type qu'on définira par
    // la suite, dans le future
    args.forEach((element) => console.log(element));
}
printAll<string>(["Apple", "Banana"]);

// Generic Types
/* ici j'ai une constante que j'appelle echo2 et ce serait de type T (type générique )
puis nous aurions des données en entrée 'data de type T',
puis je retourne ce type T je pourrai affecter ma fonction betterEcho
Rappel : tout ce qui se trouve entre : et = c'est une affectation de type. (<T>(data: T) => T ) est une affectation
de type
 */
const echo2: <T>(data: T) => T = betterEcho;

console.log(echo2<string>("Something"));

// Generic Class
/*T est le premier parametre, de type number ou string
* U est le 2e parametre de type number ou string*/
class SimpleMath<T extends number | string, U extends number | string> {
    baseValue: T;
    multiplyValue: U;
    calculate(): number {
        /*il y a un + devant le this "+this" c'est pour attribuer une valeur,sinon j'aurai une erreur,si jamais
        j'enleve le + devant le this*/
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());