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