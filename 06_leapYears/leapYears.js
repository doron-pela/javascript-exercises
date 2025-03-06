const leapYears = function(year) {
    x = false;
    if(year %4 ===0){
        x = true;
        if(year %100 === 0 && !(year %400===0)){
            x = false;
        }
    }
    return x;
};

// Do not edit below this line
module.exports = leapYears;
