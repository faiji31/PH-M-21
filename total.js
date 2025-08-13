const shop=[
    {name:"oil",Price:250},
    {name:"shampoo",Price:150},
    {name:"Body spary",Price:350},
    {name:"lotion",Price:50},

];

function getprice(shop){
    let sum=0
    for (const product of shop){
        sum+=product.Price;
    }return sum;
}

const liam = getprice(shop);
console.log(liam);



const plus = [
    {name:"pant",Price:700,quantity:2},
    {name:"shirt",Price:300,quantity:3},
    {name:"punjabi",Price:1200,quantity:1},

];

function getprice1(plus){
    let total=0;
    for(const i of plus){
        const totalcost = i.Price*i.quantity;
        total = total + totalcost;
    }return total;
}
const siam = getprice1(plus);
console.log(siam);