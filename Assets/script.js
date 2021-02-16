var generateBtn = document.querySelector("#generate")

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword)

function generatePassword(includeLowercase, includeUppercase, includeNumbers, includeSymbols) {

  let charCodes = LOWERCASE_CHAR_CODES   
      
    if (includeUppercase) charCodes = charCodes.concat
        (UPPERCASE_CHAR_CODES);
  
    if (includeNumbers) charCodes =  charCodes.concat
        (NUMBER_CHAR_CODES); 
    
    if (includeSymbols) charCodes = charCodes.concat
        (SYMBOL_CHAR_CODES);   

  const passwordCharacters = []
   
  for (let i = 0; i < generatePasswordOptions.length; i++) {

       const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
      passwordCharacters.push(String.fromCharCode(characterCode))
  
    }

    return passwordCharacters.join('')

  }

const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64))
.concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126));

function arrayFromLowToHigh(low, high) { 
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}  

function generateQuestions() {

  var length = parseInt(prompt("Provide how many charaters you would like your password to include?"));

  if (length < 8) {
      alert('TRY AGAIN: Password should be at least 8 characters!');
      return;
  
  }
  
  if (length > 128) {
      alert('TRY AGAIN: Password should be no less than 128 characters!')
      return;
  }
  
  var includeLowercase = confirm("Your password must include a lowercase character");
  var includeUppercase = confirm("Your password must include a uppercase character");
  var includeNumbers = confirm("Your password must include a numeric character");
  var includeSymbols = confirm("Your password must include a symbol character");

  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols) {
      alert("Password must have at least one lowercase, uppercase, number, or symbol character");
      return;
  
  }

  var generateQuestions = {
      length: length,
      specialCharacters: shouldIncludeSpecialCharacters,
      numeric: shouldIncludeNumeric,
      lowerCase: shouldIncludeLowercase,
      upperCase: shouldIncludeUppercase
  
  }

    return generateQuestions;

}
