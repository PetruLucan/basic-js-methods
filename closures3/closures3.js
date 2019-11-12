let sub10 = curry(sub, 10); //sub is the function you wrote in the first Closures exercise
sub10(11); // -1
console.log(sub10(11));

let mul5 = curry(mul, 5); // mul is also the same from the first Closures exercise
console.log(mul5(3)); // 15

function curry(fn, x){
    return function (y){
        return fn(x, y);
    }
}



