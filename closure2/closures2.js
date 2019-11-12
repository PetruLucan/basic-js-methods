
let add13 = addF(13);

add13(10); // 23
add13(-5); // 8

function addF(x) {
    return function (y) {
        return x + y;
    }
}

let minus3 = addF(-3);
minus3(3); // 0