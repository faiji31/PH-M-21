function add (a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function multi(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}

function calculator(a,b,operator){
    if(operator==="add"){
        const result = add(a,b);
        return result;
    }
    else if(operator==="sub"){
        const result = sub(a,b)
        return result;
    }
    else if(operator==="multi"){
        const result=multi(a,b);
        return result;
    }
    else if(operator==="div"){
        const result = div(a,b);
        return result;
    }
    else{
        return "any opertion Not Match";
    }
}

const liam = calculator(2,3,"add");
console.log(liam);
const siam = calculator(2,3,"multi");
console.log(siam);