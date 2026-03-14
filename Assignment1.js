let num = int(input("Enter a number: "));

console.log("Enter marks of subjects: ");
let total_marks = 0;
for(let i = 0 ; i<num ; i++){
    let marks = int(input());
    total_marks+= marks;
}

console.log("total marks = ", total_marks);

let average_marks = total_marks/num;
console.log("Average marks = ",average_marks);


