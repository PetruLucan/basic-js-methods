let anotherAddF = genericF(add); // you wrote add in the first clousre exercise
console.log(anotherAddF(5)(10)); // 15


function genericF(fn) {
    return function (a) {
        return function (b){
            return fn(a, b)
        }
    }
}

function add(a,b){
    return a+b;
}
function mul(a,b){
    return a*b;
}
let anotherMulF = genericF(mul);
console.log(anotherMulF(5)(10)); // 50