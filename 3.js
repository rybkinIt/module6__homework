function sum(func) {
    return function(a) {
        return func + a;
    };
}

let f = sum(1);
console.log( f(0), f(1), f(2) );

console.log( sum(1)(2), sum(3)(3), sum(29)(32) )