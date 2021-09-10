// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () {
  var length = passwordLength();
  var upperCase = passwordUpperCase();
  var lowerCase = passwordLowerCase();
  var specialCharacters = passwordSpecialCharacters();
  var numbers = passwordNumbers();
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// window prompts for criteria:
  // length 8-128 characters
  // special characters
  // numbers
  // uppercase
  // lowercase
 // answers should be validated and at least one type should be selected

// 

 //display password to page or alert




