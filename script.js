class Burger {
  constructor() {
    this.price = this._calculatePrice();
    this.calories = this._calculateCalories();

  } 
  
  _calculatePrice() {
    let _price = [...document.querySelectorAll('.option:checked')].map((el) => +el.dataset.price).reduce( (pr, cur) => { return pr + cur } );
    console.log(_price);
    return _price;
  }

  _calculateCalories() {
    let _calories = [...document.querySelectorAll('.option:checked')].map((el) => +el.dataset.cals).reduce( (pr, cur) => { return pr + cur } );
    console.log(_calories);
    return _calories;
  }

  _showPrice() {
    let priceString = document.getElementById('total-price');
    priceString.innerHTML = this.price;
  }

  _showCalories() {
    let priceString = document.getElementById('total-calories');
    priceString.innerHTML = this.calories;  }

  showResult() {
    this._showPrice();
    this._showCalories();
  }
}


let resultFunction = function() {
  let burger = new Burger();

  burger.showResult();
};


