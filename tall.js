const height = [65,75,66,74,56]

function getMax(number){
 let max =number[0];
    for (const i of number){
       if(i>max){
        max=i;

       }

    }return max;
}
const liam = getMax(height);
console.log(liam);