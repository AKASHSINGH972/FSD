// "use strict";

// let a=10/3;
// const b=20;
// let $=1;
// let _=2;

// let str="aba";
// let arr=[1,2,3,4];
// let obj={
//     name: "akash",
//     id:232,
// }
// let t=true;
// let str1=String(t);

// function display(){
//    // alert("Welcome to the website");
//     console.log($);
// }
// display();
// console.log(a);
// console.log(a+b);
// console.log(typeof a);
// console.log(typeof str);
// console.log(typeof arr);
// console.log(typeof obj);
// console.log(typeof t);

// console.log(str1.charAt(2));

// let str="121abh";
// let num=Number(str);
// console.log(num);
// console.log(typeof num);


// function display(){
//     let x=confirm("Are you sure");
//     alert("user select " + x);
// }

// function display(){
//     let x=prompt("enter your name","Akash");
//     alert(x);
// }

// let a="12";
// let b=12.00;
// console.log(a==b);
// console.log(a===b);



function validate(){
    let login=document.getElementById("login").value;
    let pass=document.getElementById("pass").value;
    let p1=document.getElementById("result");
    if(login=="admin" && pass=="admin"){
        p1.innerText="Login Successful";
    }
    else 
      p1.innerText="Login failed";
    return false;
}