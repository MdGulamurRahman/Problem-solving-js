// -------seerToMon------- //
// problem ans no-1 :
function seerToMon(seer){
    // error concept clear //
    if(typeof seer != 'number'){
    return 'please give the original number'
    }
    if(seer < 0){
    return 'please enter the positive value'
    }
    // return mon//
    let mon = seer / 40;
    return mon;
    }
    // to see output //
    const totalMon = seerToMon(80);
    console.log(totalMon);
    // -----------totalSales------------ //
    // problem ans no-2 :
    function totalSales(shirt, pent, shoe){
    const perShirtPrice = 100;
    const perPentPrice = 200;
    const perShoePrice = 500;
    // culculation
    let shirtPrice = shirt * perShirtPrice;
    let pentPrice = pent * perPentPrice;
    let shoePrice = shoe * perShoePrice;
    // total price
    const allPrice = shirtPrice + pentPrice + shoePrice;
    return allPrice;
    }
    // my total sales
    const mySales = totalSales(10, 8, 3);
    console.log(mySales);
    // -------------deliveryCost------------- //
    // problem ans no-3 :
    function deliveryCost(shirtItems){
    if(typeof(shirtItems) == 'number'){
    if(shirtItems >= 0){
    // priceList
    let firstPrice = 100;
    let secondPrice = 80;
    let thirdPrice = 50;
    // items area
    let firstItem = 100;
    let secondItem = shirtItems - firstItem;
    let thirdItem = shirtItems - 200;
    // calculation
    if(shirtItems <= 100){
    return shirtItems * firstPrice;
    }
    else if(shirtItems <= 200){
    return firstPrice * firstItem + secondItem * secondPrice;
    }
    else{
    return firstPrice * firstItem + secondPrice * 100 + thirdPrice * thirdItem;
    }
    }
    else{
    return 'input a valid number'
    }
    }
    else{
    return 'please input a number';
    }
    }
    // total cost
    const totalCost = deliveryCost(250);
    console.log(totalCost);
    // -------------perfectFriend------------ //
    // problem ans no-4 :
    function perfectFriend(friendsName){
    // error concept clear //
    if(typeof friendsName != 'object'){
    return 'please input the array element!!!';
    }else{
    // calculation //
    for(let i = 0; i < friendsName.length; i++){
    let element = friendsName[i];
    if(element.length == 5){
    return element;
    }
    }
    }
    // cleared the error concept //
    return 'please enter a beautiful name';
    }
    // friend list or output //
    var nameList = ['maruf', 'asif', 'abrar', 'rakib', 'jahin', 'mahim'];
    const bestFriend = perfectFriend(nameList);
    console.log(bestFriend);