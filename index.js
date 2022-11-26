//hoisting
/* 

getName();
console.log(x); 
var x=6;
function getName(){
    console.log("namaste javascript");
}
o/p- namaste javascript
undefined (because memory allocated)

getName();
console.log(x); 

function getName(){
    console.log("namaste javascript");
}

o/p- namaste javascript
x is not defined (because memory allocated)

getName();
console.log(x); 
var x=9;
var getName = ()=>
{
    console.log("namaste javascript");
}*/

// var x=1;
// a();
// b();
// console.log(x);
// function a(){
//     var x=10;
//     console.log(x);
// }
// function b(){
//     var x=100;
//     console.log(x);
// }


/*abc();
var a=8;
function abc(){
    console.log("hkjhkjhjk"); console.log(a);
} */
/* let a=10;
//let a=100;
const b=30;
//const b =80;
console.log(a);
var c=90;
var c=900;
b=90;

a=800;
console.log(a);
console.log(c);  */
//closure example
/*function X(){
var a=7;
function y(){
    console.log(a);

}
return y;
}
var z = X();
z();*/
/*function a(){
    for (var i=1; i<=5; i++){
        setTimeout(function (){
            console.log(i);
        }, i*1000);
        
        console.log(i);
    }
}
console.log("printing value of i");
a(); */
/*let sum2=(a,b)=> console.log(a+b);
sum2(9,4);*/
/*const arr=[5,2,3,2,6];
const output= arr.filter(function (x){
    return x<6
    ;
});
console.log(output);*/
//polyfill for bind

let name={
    firstname: "kajol",
    lastname:"Mittal"
}
let printName= function (hometown){
    console.log(this.firstname + " " + this.lastname + ", " + hometown);
}
Function.prototype.mybind= function (...args){
    let obj =this,
    params = args.slice(1);
    return function(...args2){
        obj.apply(args[0], [...params, ...args2]);
    }
}

let printMyName =printName.mybind(name, "Delhi");
printMyName();

  

