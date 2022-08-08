function mangoPrices(mango1, mango2, mango3, mango4) {
    var totalPrice = mango1 + mango2 + mango3 + mango4;
    var averagePrice = totalPrice / mangoPrices.length;
    return (averagePrice);
}

var amrupaliPrice = mangoPrices(40, 20, 46, 25);
var fojliPrice = mangoPrices(60, 80, 100, 90);
var deshiPrice = mangoPrices(60, 30, 48, 60);


console.log('Amrupali Average Price', amrupaliPrice);
console.log('Fojli Average Price', fojliPrice);
console.log('Deshi Average Price', deshiPrice);
