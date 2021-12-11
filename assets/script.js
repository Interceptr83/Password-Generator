// Assigning character arrays

// lowercase
const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// uppercase
const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// numbers
const numbers = ["1","2","3","4","5","6","7","8","9","0"];
// special characters
const specialChar = ["!","'","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","?","@","[","]","^","_","`","{","|","}","~"]
// variable to store character type selections
var incLowerCase = true;
var incUpperCase = true;
var incNum = true;
var incSpecialChar = true;

// function to take user inputs and generate list of characters to be used
function createOptionList() {

// create prompt to ask how long the password should be 
  pwLength = parseInt(prompt("Please enter the desired length of the password:(Min: 8 - Max: 128)"), 10);

// create confirm alerts to get true or false answers for if we should include each character type
  incLowerCase = confirm("Would you like to include Lower case characters in your new password? (OK = Yes, Cancel = No)");
      
  incUpperCase = confirm("Would you like to include Upper case characters in your new password? (OK = Yes, Cancel = No)");
              
  incNum = confirm("Would you like to inlcude Numbers in your new password? (OK = Yes, Cancel = No)");
              
  incSpecialChar = confirm("Would you like to include Special Charcters in your new password? (OK = Yes, Cancel = No)");
      
// function to create the array of characters that will be used to generate the password based on the user's selections
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
      
// calls the fuction to create array of characters
  createCharList();
}

// function to loop and select a number of random characters from the users selection eqaul to the desired password length
function randomizer(){
    for (var i = 0; i < pwLength; i++) {
      let charSelect = passOptions[Math.floor(Math.random() * passOptions.length)];
      passwordChars.push(charSelect);
    }
}

// Main fuction to start the process of generating the password
function generatePassword() {

// setting a default value to password length
  pwLength = 0;
// create empty array to store the combined possible characters to be used
  passOptions = [];
// create empty array to store password
  passwordChars = [];

 createOptionList();

//  console logging user choices and combined string so I can see what info has been selected    
//  console.log(pwLength);
//  console.log(incSpecialChar);
//  console.log(incNum);
//  console.log(incLowerCase);
//  console.log(incUpperCase);
//  console.log(passOptions);
//  console.log(passwordChars);

// check to make sure that the requested length is between 8 and 128 characters and is a number input
  if (pwLength < 8) {
    return "WARNING! Password must be 8 characters or more! Please try again.";
  }
  else if (pwLength > 128){
    return "WARNING! Password must be 128 characters or less! Please try again.";
  }
  else if (isNaN(pwLength)){
    return "WARNING! Password must be a number between 8 and 128! Please try again.";
  }
// check to make sure they selected at least one character type
  else if (incLowerCase === false &&incUpperCase === false &&incNum === false &&incSpecialChar === false) {
    return 'WARNING! You must select at least one character type! Please try again.';
  }

//calls function to write password with random characters from users selection
  randomizer();

// Returns Password
  return passwordChars.join('');
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
