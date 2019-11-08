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
function Pizza(size, sauce, topping, topping2){
  this.size = size,
  this.sauce = sauce,
  this.topping = topping,
  this.topping2 = topping2
}

Pizza.prototype.finalProduct = function(){
  return this.size + ", " + this.sauce + ", " + this.topping;
}
