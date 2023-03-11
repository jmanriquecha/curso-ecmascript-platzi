// Antes de es6

function newUser(name, age, country) {
    var name = name || "Jorge";
    var age = age || 33;
    var country = country || "COLOMBIA";

    console.log(`${name} ${age} ${country}`);
}
newUser();
newUser("Yaneth", 20, "COl");

// Con es6

function newAdmin(name = 'Jorge', age = 33, country = 'Colombia') {
    console.log(name, age, country);
}
newAdmin();
newAdmin("Elsa Yaneth", 21, "CO");