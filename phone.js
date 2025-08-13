// const price =[10000,20000,35000,167000];

// function min(num){
//     let min1=num[0];
//     for(const i of num){
//         if(i<min1){
//             i=min1;
//         }
//     }return min1;
// }
// const liam = min(price);
// console.log(liam);


// phone Price in Object

const mobile=[
    {name:"Sumsung", Price:25000, camera:"12mp", color:"blue"},
    {name:"Iphone", Price:125000, camera:"48mp", color:"black"},
    {name:"xiaomi", Price:35000, camera:"52mp", color:"Green"},
    {name:"Nokia", Price:1500, camera:"10mp", color:"white"}

];

function getchepestprice(mob){
    let min2=mob[0];
    for(const i of mob){
        if(i.Price<min2.Price){
            min2=i;
        }
    }return min2;
}
const lisan = getchepestprice(mobile);
console.log(lisan);