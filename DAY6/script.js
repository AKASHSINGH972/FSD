// // let a=()=>{
// //     console.log("Arrow Function a()");
// // };
// // let b=()=>  console.log("Arrow Function b()");

// // let c=(x,y)=>{
// //     return x+y;
// // };

// // let res1=c('Akash ','Singh');
// // let res2=c(12,11);
// // console.log(res1);
// // console.log(res2);

// // // b();
// // // a();



// function display(){
//     let p1=document.querySelector('p');
//     p1[0].innerHTML="I am a para 1";
//     p1[0].style.backgroundColor="red";
//     p1[1].innerHTML="I am a para 2";
//     p1[1].style.backgroundColor="blue";
// }

// let changeheader=()=>{
//     let head1=document.querySelector('h1');
//     head1.textContent="change the title";
//     let a1=document.querySelector('a');
//     a1.setAttribute("href","https://aktu.ac.in");
//     a1.innerHTML="AKTU Website";


// };


let addContent=()=>{
    const newDiv=document.createElement('div');
    newDiv.textContent='This is a div';

    const body=document.querySelector('body');
    body.appendChild(newDiv);

};