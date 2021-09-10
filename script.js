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
  var characters = getAllowedCharacters();
  
}

function passwordLength() {
  var promptLength = window.prompt("How long would you like your password to be? Please select a number between 8 and 128.");
  if (promptLength === "" || promptLength < 8 || promptLength > 128) {
    window.alert("You need to select a number between 8 and 128. Please try again.");
    return passwordLength();
  }
  return parseInt(promptLength);
} 

function passwordUpperCase() {
  var promptUpperCase = window.prompt("Do you want to include upper case letters? Please type 'yes' or 'no'.");
  promptUpperCase =  promptUpperCase.toLowerCase();
  if (promptUpperCase != "yes" && promptUpperCase != "no") {
    window.alert("You need to type 'yes' or 'no'. Please try again.");
    return passwordUpperCase();
  }
  return promptUpperCase === "yes";
}

function passwordLowerCase() {
  var promptLowerCase = window.prompt("Do you want to include lower case letters? Please type 'yes' or 'no'.");
  promptLowerCase = promptLowerCase.toLowerCase();
  if (promptLowerCase != "yes" && promptLowerCase != "no") {
    window.alert("You need to type 'yes' or 'no'. Please try again.");
    return passwordLowerCase();
  }
  return promptLowerCase === "yes";
}

function passwordSpecialCharacters () {
  var promptSpecialCharacters = window.prompt("Do you want to include special characters? Please type 'yes' or 'no'.");
  promptSpecialCharacters = promptSpecialCharacters.toLowerCase();
  if (promptSpecialCharacters != "yes" && promptSpecialCharacters != "no") {
    window.alert("You need to type 'yes' or 'no'. Please try again.");
    return passwordSpecialCharacters();
  }
  return promptSpecialCharacters === "yes";
}

function passwordNumbers () {
  var promptNumbers = window.prompt("Do you want to include numbers Please type 'yes' or 'no'.");
  promptNumbers = promptNumbers.toLowerCase();
  if (promptNumbers != "yes" && promptNumbers != "no") {
    window.alert("You need to type 'yes' or 'no'. Please try again.");
    return passwordNumbers();
  }
  return promptNumbers === "yes";
}

function getAllowedCharacters() {
  // vars return true or false
  var upperCase = passwordUpperCase();
  var lowerCase = passwordLowerCase();
  var specialCharacters = passwordSpecialCharacters();
  var numbers = passwordNumbers();

  // determines which characters the password will be generated from
  var allowedCharacters = "";
  if (upperCase) {
    allowedCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (lowerCase) {
    allowedCharacters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (specialCharacters) {
    // space excluded from the list of special characters w/the user experience in mind and avoiding any confusion
    allowedCharacters += "!\"#$%&'()*+,-./:;<=>?@[]\\^_`{|}~";
  }
  if (numbers) {
    allowedCharacters += "0123456789";
  }

// ensures that at least one character type is included in the allowed characters

if (!upperCase && !lowerCase && !specialCharacters && !numbers) {
  window.alert("You need to have at least one type of characters in your password. Please select 'yes' for at least one of the options.");
  return getAllowedCharacters();
}


  return allowedCharacters;
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




