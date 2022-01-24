class Pizza { //capital is important
  constructor(size, crust) {
    this.size = size;
    this.crust = crust; //customizez
    this.toppings = ["cheese"]; //default
  }
  addTopping(topping) {
    this.toppings.push(topping);
  }
}

let pizza1 = new Pizza();
console.log(pizza1.toppings);
pizza1.addTopping("mushrooms", "peppers");
console.log(pizza1.toppings); //Can only add one at a time
pizza1.addTopping("peppers");
console.log(pizza1.toppings);

let pizza2 = new Pizza();
console.log(pizza2.toppings);
pizza2.addTopping("more cheese");
console.log(pizza2.toppings);

let pizza = new Pizza("large", "thin");
console.log(pizza);

pizza1 === pizza2;