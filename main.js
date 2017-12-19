var coffeeShop = {
  beans: 40,
  money: 100,
  beansCost: 5,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },
  
  makeDrink: function (drinkType) {

    if(! this.drinkRequirements[drinkType]) {
      alert('Sorry, we don\'t make ' + drinkType)
    }
    else if (this.beans >= this.drinkRequirements[drinkType]){
      this.beans = this.beans - this.drinkRequirements[drinkType]
    }
    else {
      alert('Sorry, we\'re all out of beans')
    }
  },
  
  buySupplies: function(beanPurchased) {
    if((this.beansCost * beanPurchased) > this.money) {
      alert('Not enough money')
    }else{
    this.money -= (beanPurchased * this.beansCost)
    this.beans += beanPurchased
    }

  }
}


coffeeShop.buySupplies(15)
coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");
