function pizza(getSize, getQuantity,getCrust,getTopping,) {
    this.getSize = getSize;
    this.getQuantity = getQuantity;
    this.getCrust = getCrust;
    this.getTopping = getTopping;
}
var userInput = new Order (getSize(), getQuantity(), getCrust(), getTopping());
function getSize() {
    var size = document.getElementById("sizePizza").value;
    return parseInt(size);
}
function getQuantity() {
    var quantity = document.getElementById("quantityPizza").value;
    return parseInt(quantity);
}
function getCrust() {
    var crust = document.getElementById("pizzaCrust").value;
    return parseInt(crust);
}
function getTopping(){
    var topping =document.getElementById("pizzaTopping").value;
    return parseInt(topping);
}
function amount(){
    var total = (getSize + getCrust() + getTopping() *getQuantity());
    alert(
        "You have ordered" + getQuantity("") + "pizza" + "" + "total to ksh. " + total +"" + "Thankyou for your order. Welcome again");
}

// variable to get the location of the customer
var location = prompt("Please enter your location to get your pizza delivered.");
if (location !== "") {
  alert("You order will be delivered shortly at ksh150.And incase you didn,t want it delivered please come for your order.");
}
$(document).ready(function(){
    $("form#form34A").submit(function(event){
      // event.preventDefault();
      var name = $("input#MERGE1").val();
      var email = $("input#MERGE0").val();
      var message = $("textarea#comment").val();
      if ($("input#MERGE1").val() && $("input#MERGE0").val()){
        alert (name + ", we have received your message. Thank you for reaching out to us.");
      }
      else {
        alert("Please enter your name and email!");
      }
  
    });
  
  });
