function pizza(getSize, getQuantity,getCrust,getCheese,) {
    this.getSize = getSize;
    this.getQuantity = getQuantity;
    this.getCrust = getCrust;
    this.getCheese = getCheese;
}
var userInput = new Order (getSize(), getQuantity(), getCrust(), getCheese());
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
function getCheese(){
    var cheese =document.getElementById().value;
    return parseInt(cheese);
}
