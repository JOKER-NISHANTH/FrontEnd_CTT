let myTODOS = [];

myTODOS.push("Moring Work out");
myTODOS.push("Lunch Prepare");
myTODOS.push("Buy a Phone");
myTODOS.push("Buy a Watch");
myTODOS.push("Buy a Car");
myTODOS.push("Go to Gym");

console.log(myTODOS);

/*
console.log(myTODOS.indexOf("Buy a Watch"))

let a = myTODOS.findIndex(function (todo) {
    return todo == "Buy a Watch";
});

console.log(a);

let  FIND = function(todolist,searchitem) {
    let Result = todolist.findIndex(function(todo){
        return todo == searchitem
    })
    return Result
}

// console.log(FIND(myTODOS,"Buy a Watch"))*/

// let a =function(todolist,searchlist) {
//     let b =todolist.findIndex(function (todo) {
//         return todo.toLowerCase() == searchlist.toLowerCase();
//     })
//     return b;
// }

// console.log(a(myTODOS, "buY a car"));

// console.log(myTODOS.find(function (todo) {
//     return todo.toLowerCase() == "go to gym"
// }));

let RET = function (GiveList,SearchItems) {
    let R = GiveList.find(function (todo) {
        return todo.toLowerCase() == SearchItems.toLowerCase();
    })
    return R;
}

console.log(RET(myTODOS,"bUy a car"));



















