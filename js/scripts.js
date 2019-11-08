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
  return this.size + ", " + this.sauce + ", " + this.topping;
}

// User Interface Logic
var pizzeria = new pizzeria();

function displayPizzaDetails(pizzaToDisplay){
  var pizzaList = $("#previewPizzas");
  var pizzaInfo = "";
  displayPizzaDetails.pizza.forEach(function(pizza) {
    pizzaInfo += "<li id=" + pizza.id + ">" + pizza.size "</li>";
  });
  contactsList.html(htmlForContactInfo);
}
