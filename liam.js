const liam =71;
const juba = 56;
if (liam>juba){
    console.log("liam get Hieghest Marks");
}
else{
    console.log("juba Got Hieghest Marks");
}


// function use for max number
function maxi(num1,num2){
    if(num1>num2){
        return num1;
    }else{
        return num2;
    }
}
const liam1 = maxi(71,87);
console.log(liam1);
const siam = maxi(32,21);
console.log(siam);


const max = Math.max(12,43,32,56,78);
console.log(max);