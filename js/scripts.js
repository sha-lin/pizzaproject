function pizza(getSize, getQuantity,getCrust,getTopping,) {
    this.getSize = getSize;
    this.getQuantity = getQuantity;
    this.getCrust = getCrust;
    this.getTopping = getTopping;
}
var userInput = new Order (getSize(), getQuantity(), getCrust(), getTopping());
function getSize() {
    var size = document.getElementById().value;
    return parseInt(size);
}
function getQuantity() {
    var quantity = document.getElementById().value;
    return parseInt(quantity);
}
function getCrust() {
    var crust = document.getElementById().value;
    return parseInt(crust);
}
function getTopping(){
    var topping =document.getElementById().value;
    return parseInt(topping);
}
function amount(){
    var total = (getSize + getCrust() + getTopping() *getQuantity();
    alert(
        "You have ordered" + getQuantity("") + "pizza" + "" + "total to ksh. " + total +"" + "Thankyou for your order. Welcome again");
}

// variable to get the location of the customer
var location = prompt("Please enter your location to get your pizza delivered.");
if (location !== "") {
  alert("You order will be delivered shortly at ksh150.");
}
}
