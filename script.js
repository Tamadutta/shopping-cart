   //plus-btn event handler...
   
   document.getElementById('plus-btn').addEventListener('click', function(){
            const addedValue = getInput('addValue')
            const increasedValue = addedValue + 1;
            document.getElementById("addValue").value = increasedValue;
             updateSpanText("price-1", increasedValue, 1219)
             subtotal();
            
})

//plus-btn event handler for product-2

document.getElementById('plus-btn2').addEventListener('click', function(){
    const addedValue2 = getInput('addValue2');
            const increasedValue2 = addedValue2 + 1;
            document.getElementById("addValue2").value = increasedValue2;
            updateSpanText("price-2", increasedValue2, 59)
            subtotal();
            
})

//minus-btn event handler ...

document.getElementById('minus-btn').addEventListener('click', function(){
    const DeValue = getInput('addValue')
    const decreasedValue = DeValue - 1;
    if (DeValue >= 1){
    console.log(decreasedValue)
    }
    else{
        return 0;
    }
    document.getElementById("addValue").value = decreasedValue;
    updateSpanText("price-1",decreasedValue, 1219)
    subtotal();
        
})

//minus-btn event handler for product-2
document.getElementById('minus-btn2').addEventListener('click', function(){
    const DeValue2 = getInput('addValue2')
    const decreasedValue2 = DeValue2 - 1;
    if (DeValue2 >= 1){
        console.log(decreasedValue2)
    }
    else{
        return 0;
    }
    document.getElementById("addValue2").value = decreasedValue2;
    updateSpanText("price-2",decreasedValue2, 59)
    subtotal();
       
})

function getInput(id) {
    const amount =document.getElementById(id).value;
    const Amount =parseFloat(amount) ;
    return Amount;
}

//price added...

function updateSpanText(id , prices, tk) {
    const currentPrice = document.getElementById(id).innerText
    const price = parseFloat(currentPrice)
    const totalPrice = tk * prices;
    document.getElementById(id).innerText = totalPrice;
    
}

function subtotal() {
    const cart1Price = parseInt(document.getElementById("price-1").innerText)
    const cart2Price = parseInt(document.getElementById("price-2").innerText)
    const SubValue = cart1Price + cart2Price;
    const tax = SubValue * 5 / 100 ;
    const TotalValue = SubValue + tax;
    
    document.getElementById("subtotal").innerText = SubValue;
    document.getElementById("tax-value").innerText = tax;
    document.getElementById("total-value").innerText  = TotalValue;
}