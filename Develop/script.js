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

var lowercaseCharactersChoice = confirm("some lowercase characters?");
if (lowercaseCharactersChoice) {
passwordChar += lowercaseChar;
}

var uppercaseCharactersChoice = confirm("some uppercase letters?");
if (uppercaseCharactersChoice) {
passwordChar += uppercaseChar;
}

var numericalCharactersChoice = confirm("some numerical characters");
if (numericalCharactersChoice) {
passwordChar += numericalChar;
}

var specialCharacterChoice = confirm(" to make it more secure pur some symbols");
if (specialCharacterChoice) {
passwordChar += specialChar;
}
for (var i = 0; i < passwordLengthUser; i++) {
password = passwordChar[Math.floor(Math.random() * passwordChar.length)]
}
}
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

}  

generateBtn.addEventListener("click", writePassword);
