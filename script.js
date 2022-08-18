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

function randomShuffle(arr) {
  var randomIndex = Math.floor(Math.random()*arr.length)
  var trueValue = arr[randomIndex]
  return trueValue;
}

function promptUser() {
  var passwordLength = window.prompt('How many characters do you want?')
//set conditionals to be more than 8 less that 128
if(passwordLength < 8) {
  alert('Password needs to be at least 8 characters')
  return 
} 
if(passwordLength > 128) {
  alert('Password needs to be less than 128 characters')
  return 
} 
  var confirmNumbers = window.confirm('Do you want numbers in your password?')
  var confirmSpecialCharacters = window.confirm('Do you want special characters in your password?')
  var confirmUppercase = window.confirm('Do you want upper case letters in your password?')
  var confirmLowerCase = window.confirm('Do you want lower case letters in your password?')

  if(!confirmNumbers && !confirmSpecialCharacters && !confirmUppercase && !confirmLowerCase) {
    alert('Password needs at least one character selection')
    return 
  } 

  var confirmChoices = {
    length: passwordLength,
    numbers: confirmNumbers,
    specialCharacters: confirmSpecialCharacters,
    uppercase: confirmUppercase,
    lowercase: confirmLowerCase
  }
  console.log(confirmChoices);
  return confirmChoices;

}

function generatePassword() {
  var userAnswers = promptUser();
  var characterPool = [];
  var finalPassword = [];

  if(userAnswers.numbers === true) {
    characterPool = characterPool.concat(numberArray)
  }
  if(userAnswers.specialCharacters === true) {
    characterPool = characterPool.concat(specialArray)
  }
  if(userAnswers.lowercase === true) {
    characterPool = characterPool.concat(lowerCaseArray)
  }
  if(userAnswers.uppercase === true) {
    characterPool = characterPool.concat(upperCaseArray)
  }

  for(let i = 0; i < userAnswers.length; i++) {
    var randomPool = randomShuffle(characterPool)
    finalPassword.push(randomPool)
  }
  console.log(finalPassword)
  return finalPassword.join('')
}