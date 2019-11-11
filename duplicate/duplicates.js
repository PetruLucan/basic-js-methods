let data = [{
    name: 'Bob',
    country: 'Romania'
}, {
    name: 'Alice',
    country: 'ROMANIA'
}, {
    name: 'Lizz',
    country: 'Netherlands'
}]

// filterArray(data); 
// [
//     {name: 'Bob', country: 'Romania', 
//     {name: 'Lizz', country: 'Netherlands'}
// ] 




function filterArray(data) {

    var obj = data.map(function (a) {
        a.country = a.country.toLowerCase();
        return a;
    });
    console.log(obj);
    let uniq = {};

    return obj.filter(key => !uniq[key.country] && (uniq[key.country] = true));

    // return obj.filter((item, index) => obj.indexOf(item) === index)

    //     for (var i in data){
    //         data[i] = data[i].toLowerCase();
    //     }
    //    return data.filter((item, index) => data.indexOf(item) === index)

}
console.log('filterMethod', filterArray(data))


function modifyArray(data) {
    let result = [];
    let uniqueResult = {};
    for (let i in data) {
        objCountry = data[i]['country'];
        uniqueResult[objCountry] = data[i];
    }
    for (i in uniqueResult) {
        result.push(uniqueResult[i]);
    }
    return result;
    
}

console.log('modifyMethod', modifyArray(data));


