const countDown = (number) => {
    if (number < 1) {
        console.log("enter a number greater than 1");
    } else {
        for (let i = number; i > 0; i--){
            console.log(i);
        }
    }
}

function countUp(number) {
    if (number < 1) {
        console.log("enter a number greater than 1");
    } else {
        for (let i = 1; i <= number; i++){
            console.log(i);
        }
    }
    return "number counted up";
}

module.exports = {
    countDown: countDown,
    countUp: countUp

};
