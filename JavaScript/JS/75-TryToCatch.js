console.log(typeof 10);
console.log(typeof "Nishanth");

console.log("Try to Catch .... ");
console.log("Dollar to Rupees..");

// let ConDolToRup = (dollor) => dollor * 69;
let ConRup = function (dollar) {
    if (typeof dollar === 'number') {
        return dollar * 69;
    } else {
        throw Error("Amount should be in number...");
    }
}


//console.log(ConRup('one'));
try {
    console.log(ConRup('one'));
} catch (e) {
    console.log(e);
}
console.log('This line will not show if program crashes');










console.log(ConDolToRup('one'));