const reverseString = function(string) {
    string = string.split("");
    let i = 0;
    let j = string.length-1;
    //to implement to string.reverse method
    while (i<j){
        let temp = string[i];
        string[i] = string[j];
        string[j] = temp;
        i++;
        j--;
    }
    string = string.join("");
    return string;
};

// Do not edit below this line
module.exports = reverseString;
