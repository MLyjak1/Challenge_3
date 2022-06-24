// Assignment Code
var generateBtn = document.querySelector("#generate");
var inputBtn = document.querySelector("#inputCriteria");
var inputLength = 0;
var lowerCase = false;
var upperCase = false;
var numberInc = false;
var specialChar = false;
var genPassword = 0;

// Write password to the #password input
function writePassword() {
  function generatePassword(){
    //Run this loop until it reaches the desired password length
    for(i=0; i < inputLength; i++){
      genPassword++
      }
      return genPassword;
  }
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
    lowerCase = window.confirm('Should it contain lowercase characters? (Note from SkyNET "Of Course it should...")');
    console.log(lowerCase);
    upperCase = window.confirm('Should it contain UPPERCASE characters?');
    console.log(upperCase);
    numberInc = window.confirm('Should it contain #Numbers#?');
    console.log(numberInc);
    specialChar = window.confirm('Should it contain $pecial Characters$?');
    console.log(specialChar);
  }
}  
// Ask criteria questions in 'Input Password Criteria' is clicked
inputBtn.addEventListener("click", inputCriteria);
// Generate Password based on input criteria when "Generate Password" button is clicked
generateBtn.addEventListener("click", writePassword);

