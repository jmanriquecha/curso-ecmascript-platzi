var lastName = "Jorge";
lastName = "Yaneth";
console.log(lastName);

let fruit = "Apple";
fruit = "Kiwi";
console.log(fruit);

const animal = "Perro";
animal = "Gato";
console.log(animal);

const fruits = () => {
    if (true) {
        var fruit1 = "Apple"; // functio scope, alcance global
        let fruit2 = "Kiwi"; // block scope
        const fruit3 = "Banana"; // block scope
    }

    console.log(fruit1);
    // console.log(fruit2);
    // console.log(fruit3);
}

fruits();