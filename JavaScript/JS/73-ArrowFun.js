function Add(num1, num2) {
    return num1 + num2;
}

let a = Add(10,20);
console.log(a);

let Sub = function (num3, num4) {
    return num3 = num4;
}

console.log(Sub(1000, 346));

// Arrow function

let Div = (num7, num8)=>{
    return num7 / num8;
}

console.log(Div(95, 5));

let Mul = (num5, num6) => num5 * num6;

console.log(Mul(19, 20));

let myTODOs = [{
    title: "Go to gym",
    isDone:true
}, {
        title: "Record 20 Videos",
    isDone: false,
    }, {
        title: "Buy a Watch",
        isDone: false
}];

// console.log(myTODOs[0].title," ", myTODOs[1].title);

// function Filter()


let Check = myTODOs.filter( (todo) => {
    //console.log(todo);
     return todo.isDone === true;
    
})
console.log(Check);



let check = myTODOs.filter((todo) => todo.isDone === true);
console.log(check);












