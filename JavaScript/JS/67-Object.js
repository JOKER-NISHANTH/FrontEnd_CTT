let Flo = ["Rose", "Jasmine", "Lilly", "Lotus"];

let myObject = {
    title: "HTML, CSS , JAVAScript",
    author: "Nishanth M",
    courseDescription: "Here Comes Course Description !!!..",
    price: "999rs only",
    language:"TAmil",


    printPrice: function () {
        console.log("Hai This is From PrintPrice ");
    },

    log: function (data) {
        console.log(data);
    },

    ChangedPrice: function (newPrice) {
        this.price = newPrice;
        console.log(this.price);
    }

}
// console.log(myObject);
myObject.ChangedPrice(500);
console.log(`My Course Titles is  ${myObject.title} .. and it's price is ${myObject.price}`);


myObject.printPrice();

myObject.log(100+100);














