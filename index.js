let textBottomLeft = document.getElementById("text-bottom-left");
let textBottomRight = document.getElementById("text-bottom-right")
let textTopLeft = document.getElementById("text-top-left")
let textTopRight = document.getElementById("text-top-right")

let deleteIconBottomLeft = document.getElementById("icon-bottom-left")
let deleteIconBottomRight = document.getElementById("icon-bottom-right")
let deleteIconTopLeft = document.getElementById("icon-top-left")
let deleteIconTopRight = document.getElementById("icon-top-right")



function generatePasswords() {

    let passwordLength = document.getElementById("number-box").value

    console.log(passwordLength)

    // console.log('test')
    // text bottom left replace
    deleteIconBottomLeft.textContent= "" // replace icon with empty string
    textBottomLeft.textContent = makeid(passwordLength); // replace with random password
    // text bottom right replace
    deleteIconBottomRight.textContent= " "
    textBottomRight.textContent = makeid(passwordLength); 
    //text top left replace
    deleteIconTopLeft.textContent= " "
    textTopLeft.textContent = makeid(passwordLength)
    //text top right replace
    deleteIconTopRight.textContent= " "
    textTopRight.textContent = makeid(passwordLength)
}


function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*)(_+?.><"{}~-.+';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
   
}

