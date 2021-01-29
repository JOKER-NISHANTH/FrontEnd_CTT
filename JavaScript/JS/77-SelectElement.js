// Only for title
document.title = "Nishanth"
// console.log(document.title);

let myTag1 = document.getElementById("id1");
// console.log(myTag1);
let myTag2 = document.getElementsByClassName("classone");
// console.log(myTag2);

// Now we go to best method
let t=document.querySelectorAll('p');
console.log(t[3]);