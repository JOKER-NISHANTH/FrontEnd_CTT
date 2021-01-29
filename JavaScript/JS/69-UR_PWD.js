let Kemail ="nishanth@gmail.com";
let Pwd = "1234567";

let Check = "@";
    
//console.log(Kemail.toLowerCase());

//console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

//console.log(`This Email ${Kemail.includes(Check) ? "is vaild" : "is not vaild" }`);

console.log(Kemail.includes("@gmail" && ".com"));

function CheckEmail(User) {
    if (User.includes("@") && User.includes(".")) {
        console.log("Move on..");
    } else {
        console.log("Enter Correct Vaild Email ")
    }
}

CheckEmail("vasee@mail.com")

let PassCheck = function (PASS) {
    if (PASS.length >7) {
        console.log("Strong");
    } else {
        console.log("Enter Strong Password");
    }
}

PassCheck("123456789")














