var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&(){}-_//";
var word = [];

var makeDiv = document.createElement("div")
document.body.appendChild(makeDiv);

var passW = document.createElement("p");
passW.textContent = word;
makeDiv.appendChild(passW);


var copyBtn = document.getElementById("copy");
var startBtn = document.getElementById("starter");

function generatePass() {
    var sBtn = startBtn.addEventListener("click", function(generatePass) {      
    for (var i = 0; word.length < 15; i++) {
        var char = letters.charCodeAt(Math.floor(Math.random() * letters.length));
console.log(letters);
        word += char;
    }
    return word;
    console.log(generatePass);
})
}
