/* Debouncing
let counter=0;
const getData=()=>{
    console.log("fetching data", counter++);
}

const doSome=function (fn, d){
    let timer;
    return function(){
        let context=this,args=arguments;
        clearTimeout(timer);
        let timer= setTimeout(()=> {
            getData.apply(context, arguments);

        },d
        );

        
    }
}



const betterFunction= doSome(getData, 300);*/


let multiply= function(x,y){
    console.log(x*y);
}
let multoply =multiply.bind(this, 2,8);
multoply(5);