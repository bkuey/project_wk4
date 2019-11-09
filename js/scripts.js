// Business Logic for Pizzeria
function Pizzeria() {
  this.pizzas = [],
  this.currentId = 0
}

Pizzeria.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
}

Pizzeria.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Pizzeria.prototype.findPizza = function(id) {
  for (var i=0; i< this.pizzas.length; i++) {
    if (this.pizzas[i]) {
      if (this.pizzas[i].id == id) {
        return this.pizzas[i];
      }
    }
  };
  return false;
}

// Business Logic for Pizza
function Pizza(size, sauce, cheese, topping) {
  this.size = size,
  this.sauce = sauce,
  this.cheese = cheese,
  this.topping = topping
}

// User Interface Logic
var pizzeria = new Pizzeria();

function displayPizzaDetails(pizzaToDisplay) {
  var pizzaList = $("#previewPizzas");
  var htmlForPizzaInfo = "";
  pizzaToDisplay.pizzas.forEach(function(pizza) {
    htmlForPizzaInfo += "<li id=" + pizza.id + ">" + pizza.size + ", " + pizza.cheese + ", " + pizza.sauce + ", " + pizza.topping + "</li>";
  });
  pizzaList.html(htmlForPizzaInfo);
}

function attachPizzaListeners() {
  $("#previewPizzas").on("click", "li", function() {
    showPizza(this.id);
  });
};

$(document).ready(function() {
  attachPizzaListeners();
  $("#mainForm").submit(function(event) {
    event.preventDefault();
    var inputtedSize = $("#newSize").val();
    var inputtedSauce = $("#newSauce").val();
    var inputtedCheese = $("#newCheese").val();
    var inputtedTopping = $("#newTopping").val();
    $("#newSize").val("");
    $("#newSauce").val("");
    $("#newCheese").val("");
    $("#newTopping").val("");
    var newPizza = new Pizza(inputtedSize, inputtedSauce, inputtedCheese, inputtedTopping);
    pizzeria.addPizza(newPizza);
    displayPizzaDetails(pizzeria);
  });
});
