
let propertyPath = 'job.city.zip';
let human = {
    name: 'Bob',
    job: {
        title: 'JS Developer',
        city: {
            name: 'Utrecht',
            zip: 333000
        }
    }
}

function deepFind1(path, obj) {
    let arrPath = path.split('.');
    let value = obj

    for (var i = 0; i < arrPath.length; i++) {

        value = value[arrPath[i]]
    }
    return value;
}
console.log('ideal usecase', deepFind1(propertyPath, human))


var human2 = {
    name: "Lizz",
    job: null
}
function deepFind2(path, obj) {
    let arrPath = path.split('.');
    let value = obj
    
    for (var i = 0; i < arrPath.length; i++) {

        value = value[arrPath[i]];
        if (value === null){
            return undefined;
            }
        
    }
    
    
}
console.log('null usecase', deepFind2(propertyPath, human2))


