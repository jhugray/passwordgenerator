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

function passwordLength() {
  var promptLength = window.prompt("How long would you like your password to be? Please select a number between 8 and 128.");
  if (promptLength === "" || promptLength < 8 || promptLength > 128) {
    window.alert("You need to select a number between 8 and 128. Please try again.");
    return passwordLength();
  }
} 

function passwordUpperCase() {
  var promptUpperCase = window.prompt("Do you want to include upper case letters? Please type 'yes' or 'no'.");
  promptUpperCase =  promptUpperCase.toLowerCase();
  if (promptUpperCase != "yes" && promptUpperCase != "no") {
    window.alert("You need to type 'yes' or 'no'. Please try again.");
    return passwordUpperCase();
  }
}

function passwordLowerCase() {
  var promptLowerCase = window.prompt("Do you want to include lower case letters? Please type 'yes' or 'no'.");
  promptLowerCase = promptLowerCase.toLowerCase();
  if (promptLowerCase != "yes" && promptLowerCase != "no") {
    window.alert("You need to type 'yes' or 'no'. Please try again.");
    return passwordLowerCase();
  }
}

function passwordSpecialCharacters () {
  var promptSpecialCharacters = window.prompt("Do you want to include special characters? Please type 'yes' or 'no'.");
  promptSpecialCharacters = promptSpecialCharacters.toLowerCase();
  if (promptSpecialCharacters != "yes" && promptSpecialCharacters != "no") {
    window.alert("You need to type 'yes' or 'no'. Please try again.");
    return passwordSpecialCharacters();
  }
}

function passwordNumbers () {
  var promptNumbers = window.prompt("Do you want to include numbers Please type 'yes' or 'no'.");
  promptNumbers = promptNumbers.toLowerCase();
  if (promptNumbers != "yes" && promptNumbers != "no") {
    window.alert("You need to type 'yes' or 'no'. Please try again.");
    return passwordNumbers();
  }
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




