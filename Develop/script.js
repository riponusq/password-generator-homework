var generateBtn = document.querySelector("#generate");


var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
var numericalChar = "0123456789";
var specialChar = "!#$%&'()*+-./:;<=>?@[\^_`{|}~";

function generatePassword() {
var password = "";
var passwordChar = "";

var passwordLengthUser = prompt("Password must be between 8-128 characters.");
passwordLengthUser = parseInt(passwordLengthUser);

if (passwordLengthUser < 8) {
alert("Password must have more than 7 characters!");
return "";
}
if (passwordLengthUser > 128) {
alert("Password no more than 128 characters!");
return ""
}

var lowercaseCharactersChoice = confirm("To make it secure put some lowercase characters?");
if (lowercaseCharactersChoice) {
passwordChar += lowercaseChar;
}

var uppercaseCharactersChoice = confirm("for secure some uppercase characters?");
if (uppercaseCharactersChoice) {
passwordChar += uppercaseChar;
}

var numericalCharactersChoice = confirm("and also some numerical characters");
if (numericalCharactersChoice) {
passwordChar += numericalChar;
}

var specialCharacterChoice = confirm(" To make it more secure pur some symbols");
if (specialCharacterChoice) {
passwordChar += specialChar;
}
for (var i = 0; i < passwordLengthUser; i++) {
password = passwordChar[Math.floor(Math.random() * passwordChar.length)]
}
return password;
}

function writePassword() {
    
    var password = generatePassword();
    console.log(password);
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password
  
  }

generateBtn.addEventListener("click", writePassword);
