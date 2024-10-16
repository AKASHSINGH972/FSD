// let num=[1,2,34,4,5,6,7];
// let newnum=num.map(x=>x*2);
// console.log(newnum);

// let evenNUm=nums.filter(x=>x%2==0);
// console.log(evenNUm);





const students=[
    {name:"Alice",score:20},
    {name:"Akash",score:90},
    {name:"Ankit",score:90},
    {name:"Ayush",score:80},
    {name:"Anshul",score:60},
];



// let scores=students.filter(x=>x.score>=60).map(x=>x.score+10).reduce((x,y)=>x+y,0);
// console.log(scores);

// //scores.map(students=>students.score*2);

// let num=[12,3,2,34,3,56];
// num.forEach((x)=>console.log(x*3));
//console.log(arr);

 sayHello=()=>{
    console.log("I am in Hello function.");

}

    console.log("Start");
    setTimeout(sayHello,300);
    console.log("End");


console.log("Start");
setTimeout(()=>{
console.log("first task completed");
setTimeout(()=>{
    console.log("second task completed");
    setTimeout(()=>{
        console.log("third task completed");
    },3000);
},2000);
},1000);
console.log("End");