var add =  (n1: number, n2: number) : number => n1 + n2;

//add('Hello', 6); //Error
console.log(add(3,7));


var average = (n1: number, n2: number, f: Function) => f(n1, n2)/2;


let avg = average(2,7,function(n1, n2) { 
    return n1 + n2;
});

console.log(avg);

const square = n => n*n;
console.log(square(4));



