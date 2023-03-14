function randomNumber(min, max) {
    let randNum = Math.floor(Math.random() * max + min);
    console.log(randNum);
    return randNum;
}

module.exports = {
    randomNumber
}