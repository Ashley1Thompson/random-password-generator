// Assignment Code
var generateBtn = document.querySelector("#generate");

var numberArray =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialArray = [  '@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.'];
var lowerCaseArray = [  'a',  'b',  'c',  'd',  'e',  "f",  'g',  'h',  'i',  'j',  'k',  'l',  'm',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v',  'w',  'x',  'y',  'z'];
var upperCaseArray = [  'A',  'B',  'C',  'D',  'E',  "F",  'G',  'H',  'I',  'J',  'K',  'L',  'M',  'N', 'O',  'P',  'Q',  'R',  'S',  'R',  'U',  'V',  'W',  'X',  'Y',  'Z'];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function promptUser() {
  var passwordLength = window.prompt('How many characters do you want?')
//set conditionals to be more than 8 less that 128
  var confirmNumbers = window.confirm('Do you want numbers in your password?')
  var confirmSpecialCharacters = window.confirm('Do you want special characters in your password?')
  var confirmUppercase = window.confirm('Do you want upper case letters in your password?')
  var confirmLowerCase = window.confirm('Do you want lower case letters in your password?')

  
}