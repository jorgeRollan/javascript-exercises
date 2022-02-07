const removeFromArray = function(...args) {
    let array = args.slice(0,1).flat();
    let values=args.slice(1);
    values.forEach(element => {
    array=array.filter(value=>(typeof value != typeof element)&&(value==element)||(value!=element))
    });
    return array;
    
}


// Do not edit below this line
module.exports = removeFromArray;
