const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const box_one = document.getElementById("option-one");
const box_two = document.getElementById("option-two");


function generatePass() {
  let pass_one = '';
  let pass_two = '';  
  for(let i =0; i <15;i++){
    pass_one += characters[(Math.floor(Math.random() * characters.length))];
    pass_two += characters[(Math.floor(Math.random() * characters.length))];
  }
  box_one.textContent = pass_one;
  box_two.textContent = pass_two;

}