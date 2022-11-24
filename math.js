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

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

function add(num1, num2, callback) {
    setTimeout(() => {
        const sum = num1 + num2;
        callback(sum);
    }, 2000);
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})

module.exports = {
    countDown: countDown,
    countUp: countUp
};
