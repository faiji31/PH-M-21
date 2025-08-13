const price =[10000,20000,35000,167000];

function min(num){
    let min1=num[0];
    for(const i of num){
        if(i<min1){
            i=min1;
        }
    }return min1;
}
const liam = min(price);
console.log(liam);