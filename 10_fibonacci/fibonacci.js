const fibonacci = function(n) {
    let count = parseInt(n)
    let first = 0;
    let second = 1;
    let next ;

    if (n == 0) return first;
    else if (n==1 || n==2 ) return second;
    else if(n < 0) return "OOPS";
    for(let i=2; i<= n; i++){
        next = first + second;
        first = second;
        second = next;
    }
    return next;
};

// Do not edit below this line
module.exports = fibonacci;
