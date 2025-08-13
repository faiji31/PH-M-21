function quntity(chair,bed,table){
    const perchair=3;
    const pertable=10;
    const perbed= 40;
    const chairtotalwood = perchair * chair;
    const tabletotalwood = pertable * table;
    const bedtotalwood = perbed * bed;

    const totalwood = chairtotalwood + tabletotalwood + bedtotalwood;
    return totalwood;
}
const price = quntity(2,5,3);
console.log(price);