// template literals

let hello = 'Hello';
let world = 'World';

// Unir antes de es6
let epicPhrase = hello + ' ' + world + '!';
//console.log(epicPhrase);

// Utilizando template literals
let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2);


// Multi-line strings
// Antes
let lorem = "esto es un string \n" + "esto es otra linea";
console.log(lorem);

// con es6

let lorem2 = `Esto es una frase epica,
la continuación de esta frase epica
`;
console.log(lorem2);
