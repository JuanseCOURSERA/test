// var globalVar = "Soy una variable global";
// let globalLet = "También soy una variable global pero con ámbito de let";
// const globalConst = "Soy una constante global";

// {
//     var blockVar = "Soy un var con ámbito de bloque";
//     let blockLet = "Soy un let con ámbito de bloque";
//     const blockConst = "Soy un const con ámbito de bloque";
// }

// console.log(blockVar);
// console.log(blockLet);

// function show(){
//     var functionVar = "Soy una var con alcance de bloque";
//     let functionLet = "Soy un let con alcance de bloque";
//     const functionConst = "Soy un const con alcance de bloque";
//     }
//     show();
    
//     console.log(functionVar); // Lanza ReferenceError
//     console.log(functionLet); // Lanza ReferenceError
//     console.log(functionConst); // Lanza ReferenceError

//TASK:

{
    var variable1 = 'primer asignamiento de var';
    let variable2 = 'primer asignamiento de let';
    const variable3 = 'unico asignamiento de const';

    variable1 = 'segundo asignamiento de var';
    variable2 = 'segundo asignamiento de let';
    // variable3 = 'segundo asignamiento de const'; Error de asignacion porque es una constante

    console.log(variable1);
    console.log(variable2);
    console.log(variable3);
}

variable1 = 'tercer asignamiento de var';
variable2 = 'tercer asignamiento de let';
variable3 = 'tercer asignamiento de const';

console.log(variable1);
console.log(variable2);
console.log(variable3);