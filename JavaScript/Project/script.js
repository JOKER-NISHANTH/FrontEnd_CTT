let KeyWords = "abcdefghijklmnopurstuvwxyz1234567890@#$%&*";
//console.log(KeyWords.charAt(9))
let password = "";

let GenPass = (Lpass) => {
    password = '';
    for (i = 0; i < Lpass; i++){
        password += KeyWords.charAct(Math.floor(Math.random() * KeyWords.length ))
    }
    return password; 
}

let PasswordGen = (p) => {
    document.output.password.value = GenPass(p)
}






