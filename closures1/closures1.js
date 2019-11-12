let tenF = identityF(10);
tenF(); // 10

let helloF = identityF('hello');
helloF(); // 'hello'

function identityF(param1){
    return function returnParam(){
        return param1
    }
}

console.log(tenF())



