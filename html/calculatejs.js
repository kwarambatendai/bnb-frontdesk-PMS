function getQuantity() {
    //Assume form with id="theform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the TextBox
    var quantity = theForm.elements["quantity"];
    var howmany = 0;
    //If the textbox is not blank
    if (quantity.value != "") {
        howmany = parseInt(quantity.value);
    }
    return howmany;
});

function getTotal() {
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var cakePrice = getCakeSizePrice() + getFillingPrice() +
        candlesPrice() + insciptionPrice();

    //display the result
    document.getElementById('totalPrice').innerHTML =
        "Total Price For Cake $" + cakePrice;

}