// function quntity(chair,bed,table){
//     const perchair=3;
//     const pertable=10;
//     const perbed= 40;
//     const chairtotalwood = perchair * chair;
//     const tabletotalwood = pertable * table;
//     const bedtotalwood = perbed * bed;

//     const totalwood = chairtotalwood + tabletotalwood + bedtotalwood;
//     return totalwood;
// }
// const price = quntity(2,5,3);
// console.log(price);
// shirt pant price claculate

function shirtquantity(shirt,pant,shorts){
    const shirtq =300;
    const pantq = 600;
    const shortsq = 400;
    const shirtprice = shirt * shirtq;
    const pantprice = pant * pantq;
    const shortsprice = shorts * shortsq;

    const total = shirtprice + pantprice + shortsprice;
    return total;

}
const liam = shirtquantity(2,2,2);
console.log(liam);