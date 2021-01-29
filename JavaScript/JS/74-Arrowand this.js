let Game = {
    title: "Soccer",
    price: "567rs",
    dec: function () {
        return `The Scoccer price is ${this.price} its affortable`
    }
}

console.log(Game.dec());