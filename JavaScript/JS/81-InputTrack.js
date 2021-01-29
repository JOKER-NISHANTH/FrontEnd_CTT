/*document.querySelector("#IDONE").addEventListener('input', (event) => {
    // alert("Inputed")
    
    //console.log(event)  //Textcontant ah select painna kudathu  why means it's input..so seem values
    
    console.log(event.target.value); // It's Recommentation
});*/

function search() {
    let myValue = document.getElementById('IDONE').value;
    if (myValue == 'nishanth') {
        alert("Your website coming soon");
    } else {
        alert(myValue);
    }
}

