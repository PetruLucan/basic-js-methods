stopAfter(logName, 2000, 5); 
    // --> Should run the "logName" function every 2 seconds and stop after 5 times.
    // --> In other words, you should see 5 times the string "Bob" at the console

function stopAfter(Cb, nr, max) {
    /** Your code here */
    var x = 0;
    var intervalId = setInterval(function (){
        Cb();
        
        if(++x === max){
            clearInterval(intervalId);
        }
    }, nr)
    
}

function logName() {
    console.log('Bob');
}