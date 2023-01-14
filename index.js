let textBottomLeft = document.getElementById("text-bottom-left");
let textBottomRight = document.getElementById("text-bottom-right");
let textTopLeft = document.getElementById("text-top-left");
let textTopRight = document.getElementById("text-top-right");

let deleteIconBottomLeft = document.getElementById("icon-bottom-left");
let deleteIconBottomRight = document.getElementById("icon-bottom-right");
let deleteIconTopLeft = document.getElementById("icon-top-left");
let deleteIconTopRight = document.getElementById("icon-top-right");

function generatePasswords() {
    let passwordLength = document.getElementById("number-box").value;
    passwordLength = Math.min(passwordLength, 18);

    // text bottom left replace
    deleteIconBottomLeft.textContent = "";
    textBottomLeft.textContent = makeid(passwordLength);

    // text bottom right replace
    deleteIconBottomRight.textContent = "";
    textBottomRight.textContent = makeid(passwordLength);

    // text top left replace
    deleteIconTopLeft.textContent = "";
    textTopLeft.textContent = makeid(passwordLength);

    // text top right replace
    deleteIconTopRight.textContent = "";
    textTopRight.textContent = makeid(passwordLength);
}

function makeid(length) {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*)(_+?.><"{}~-.+';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
