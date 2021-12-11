// Assigning character arrays

// lowercase
const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// uppercase
const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// numbers
const numbers = ["1","2","3","4","5","6","7","8","9","0"];
// special characters
const specialChar = ["!","'","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","?","@","[","]","^","_","`","{","|","}","~"]
// create variable to store the combined possible characters to be used
var passOptions = [];

function generatePassword() {

    var pwLength = parseInt(prompt("Please enter the desired length of the password:"), 10);
    
    var incLowerCase = confirm("Would you like to include Lower case characters in your new password? (OK = Yes, Cancel = No)");

    var incUpperCase = confirm("Would you like to include Upper case characters in your new password? (OK = Yes, Cancel = No)");
    
    var incNum = confirm("Would you like to inlcude Numbers in your new password? (OK = Yes, Cancel = No)");
    
    var incSpecialChar = confirm("Would you like to include Special Charcters in your new password? (OK = Yes, Cancel = No)");

// check to make sure they selected at least one
    if (
      incLowerCase === false &&
      incUpperCase === false &&
      incNum === false &&
      incSpecialChar === false
    ) {
     // alert('Must select at least one character type');
      return 'WARNING! You must select at least one character type! Please try again.';
    }

    createCharList();

    function createCharList() {

      if (incSpecialChar === true) {
        passOptions = passOptions.concat(specialChar);
      }

      if (incNum === true) {
        passOptions = passOptions.concat(numbers);
      }

      if (incLowerCase === true) {
        passOptions = passOptions.concat(lowerCase);
      }

      if (incUpperCase === true) {
        passOptions = passOptions.concat(upperCase);
      }
      
      return passOptions;
    } 

    console.log(pwLength);
    console.log(incSpecialChar);
    console.log(incNum);
    console.log(incLowerCase);
    console.log(incUpperCase);
    console.log(passOptions);
    return null;
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
