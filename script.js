let name = "Nidhi";
console.log(name);
document.write("I am Nidhi");


let x;
console.log(typeof(x));

let  y= null;
console.log(typeof(y));

// null is a value given to avoid garbage value;
// undefined when type is not defined;
// local variable - let , const;

const a = 10;

// const initialize at the time of declaration

var num = 10;
console.log(num);
console.log(typeof(num));

num = true;
console.log(typeof(num));

num = undefined;
console.log(typeof(num));

num = "Nidhi";
console.log(typeof(num));

//Array-[]; function; object-{}

let sayHello = function(){
    alert('hello world');
}

console.log(typeof(sayHello));

let numArray = [1, 2, 3];

let animals = new Array('cat', 'dog', 'mouse', 'lion');

console.log(typeof(numArray));

//new allocate dynamic memory;

let person = {
    'Nidhi': 15,
    'nisha': 18,
    'Neha': 21
}

console.log(typeof(person));

const sym1 = Symbol(4);
console.log(sym1);

const sym2 = Symbol(4);
console.log(sym2);

if(sym1 == sym2){
    console.log("true");
}

else{
    console.log('false');
}
