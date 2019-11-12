startAfter(logName, 1000, 3000);
// --> should run the "logName" function every second but starting after 3 seconds have passed

function startAfter(cb, nr, offset) {
    /** Your code here */
    setTimeout(function () {
        setInterval(function cb() {
            logName();
        }, nr)
    }, offset)
}

function logName() {
    console.log('Hi, I\'m Bob');
}