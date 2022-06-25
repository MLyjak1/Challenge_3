// Assignment Code
var generateBtn = document.querySelector("#generate");
// var inputBtn = document.querySelector("#inputCriteria");
// var inputLength = 0;
var lowerCaseSTR = "qwertyuiopasdfghjklzxcvbnm";
var upperCaseSTR = lowerCaseSTR.toUpperCase();
var numberIncSTR = "1234567890";
var specialCharSTR = "~!@#$%^&*()_+";

function generatePassword(){
  var genPassword = "";
  var options = inputCriteria();
  console.log(options);
  if(options.lowerCase){
    genPassword += lowerCaseSTR;
  }
  if(options.upperCase){
    genPassword += upperCaseSTR;
  }
  if(options.numberInc){
    genPassword += numberIncSTR;
  }
  if(options.specialChar){
    genPassword += specialCharSTR;
  }
  var totalArray = genPassword.split("");
  console.log(totalArray);
  var endArray = [];
  //Run this loop until it reaches the desired password length
  for(var i=0; i < options.inputLength; i++){
    var index = Math.floor(Math.random() * totalArray.length);
    console.log(index);
    var digit = totalArray[index];
    console.log(digit);
    endArray.push(digit);
  }
    return endArray.join("");
}

// Write password to the #password input
function writePassword() {
  // Generates Password and displays it in Text Box
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function inputCriteria() {
  inputLength = window.prompt("How many characters?");
  console.log(inputLength);
  // Check to make sure Password Length is a number between 0 and 128 characters
  if ((inputLength <= 0 || inputLength > 128) || (isNaN(inputLength) === true)) {
    window.alert("You password length must be a number between 1 and 128 characters.");
  // Popup windows asking about other parameters
  } else {
    var lowerCase = window.confirm('Should it contain lowercase characters? (Note from SkyNET "Of Course it should...")');
    // console.log(lowerCase);
    var upperCase = window.confirm('Should it contain UPPERCASE characters?');
    // console.log(upperCase);
    var numberInc = window.confirm('Should it contain #Numbers#?');
    // console.log(numberInc);
    var specialChar = window.confirm('Should it contain $pecial Characters$?');
    // console.log(specialChar);
  }
  return {inputLength, lowerCase, upperCase, numberInc, specialChar}
}  
// Ask criteria questions in 'Input Password Criteria' is clicked
// inputBtn.addEventListener("click", inputCriteria);
// Generate Password based on input criteria when "Generate Password" button is clicked
generateBtn.addEventListener("click", writePassword);

