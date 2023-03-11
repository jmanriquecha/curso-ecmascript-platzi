// enahced object literals

function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser("Jorge", 33, "Col", 1));