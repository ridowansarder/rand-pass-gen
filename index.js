const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialCharacters = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
const allCharacters = upperCase + lowerCase + numbers + specialCharacters;
const length = 12;
const finalPass = document.getElementById("password");

function generatePassword() {
  let password = "";

  while(length > password.length){
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)]
  }

  finalPass.value = password;
}

function copyPass() {
  finalPass.select();
  navigator.clipboard.writeText(finalPass.value);
}