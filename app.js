console.log("starting");

const timer = setInterval(() => {
    console.log("tic one second");
}, 1000);

setTimeout(() => {
    console.log("stopping timer at 10 seconds");
    clearInterval(timer);
}, 10000);


console.log("stopping");







