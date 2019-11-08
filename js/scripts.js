// Business Logic for Pizzeria
function Pizzeria(){
  this.pizza = [],
  this.currentId = 0
}

Pizzeria.prototype.addPizza = function(pizza){
  pizza.id = this.assignId();
  this.pizza.push(pizza);
}

Pizzeria.prototype.assignId = function(){
  this.currentId += 1;
  return this.currentId;
}

Pizzeria.prototype.findPizza = function(id) {
  for (var i=0; i< this.pizza.length; i++) {
    if (this.pizza[i]) {
      if (this.pizza[i].id == id) {
        return this.pizza[i];
      }
    }
  };
  return false;
}

Pizzeria.prototype.deletePizza = function(id) {
  for (var i=0; i< this.pizza.length; i++) {
    if (this.contacts[i]) {
      if (this.pizza[i].id == id) {
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false;
}


// Business Logic for Pizza
function Pizza(size, sauce, cheese, topping){
  this.size = size,
  this.sauce = sauce,
  this.cheese = cheese,
  this.topping = topping
}

Pizza.prototype.finalProduct = function(){
  return this.size + ", " + this.sauce + ", " + this.cheese + ", " + this.topping;
}

// User Interface Logic
var pizzeria = new Pizzeria();

function displayPizzaDetails(pizzaToDisplay){
  var pizzaList = $("#previewPizzas");
  var htmlForPizzaInfo = "";
  pizzaToDisplay.pizza.forEach(function(pizza) {
    htmlForPizzaInfo += "<li id=" + pizza.id + ">" + pizza.size + "</li>";
  });
  pizzaList.html(pizzaInfo);
}

function showPizza(pizzaId) {
  var pizza = pizzeria.findPizza(pizzaId);
  $("#show-pizza").show();
  $(".size1").html(pizza.size1);
  $(".sauce1").html(pizza.sauce);
  $(".cheese1").html(pizza.cheese);
  $(".topping1").html(pizza.topping);
  var buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" + pizza.id + ">Delete</button>");
}

function attachPizzaListeners() {
  $("#previewPizzas").on("click", "li", function() {
    showPizza(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function() {
    pizzeria.deletePizza(this.id);
    $("#show-pizza").hide();
    displayPizzaDetails(pizzeria);
  });
};

$(document).ready(function() {
  attachPizzaListeners();
  $("mainForm").submit(function(event) {
    event.preventDefault();
    var inputtedSize = $("#newSize").val();
    var inputtedSauce = $("#newSauce").val();
    var inputtedCheese = $("#newCheese").val();
    var inputtedTopping = $("#newTopping").val();
    $("#newSize").val("");
    $("#newSauce").val("");
    $("#newCheese").val("");
    $("#newTopping").val("");
    var newPizza = new Pizzas(inputtedSize, inputtedSauce, inputtedCheese, inputtedTopping);
    pizzeria.addPizza(newPizza);
    displayPizzaDetails(pizzeria);
  });
});
