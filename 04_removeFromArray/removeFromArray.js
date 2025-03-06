const removeFromArray = function() {
    array = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        array = array.filter((element)=>{return element !== arguments[i]});
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
