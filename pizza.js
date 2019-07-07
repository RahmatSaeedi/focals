// jshint esversion : 6
class Pizza {
  constructor(size, crust) {
    this._size = size;
    this._crust = crust;
    this.toppings = ["cheese"];
  }

  set size(size) {
    if (size === 's' || size === 'm' || size === 'l') {
      this._size = size;
    }
  }

  get size() {
    return this._size;
  }
  
  set crust(crust) {
    this._crust = crust;
  }

  get crust() {
    return this._crust;
  }

  set addTopping(topping) {
    this.toppings.push(topping);
  }

  get price() {
    const basePrice = (this.size === 's' ? 10 : (this.size === 'm' ? 15 : 20));
    const toppingPrice = 2;
    return basePrice + (this.toppings.length * toppingPrice);
  }
}

const pizza = new Pizza('s', 'thin');
pizza.size = 'm';
console.log(pizza.price); // 17