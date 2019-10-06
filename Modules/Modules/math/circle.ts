export const PI = 3.14;

//export = public export est utilisé pour qu'on puisse appelé la fonctionà partir d'un autre nameSpace, c'est équivalent public)
export function calculateCirumcumference(diameter: number) {
    return diameter * PI;
}