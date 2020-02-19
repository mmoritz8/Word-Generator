
function generate() {


  // set pw length

  var complexity = document.getElementById("slider").value;
  let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";

  var password = "";

  // create a loop

  for (var i = 0; i <= complexity; i++) {
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }

  document.getElementById("display").value = password;
};

document.getElementById("lastNums").innerHTML += password + "<br />";