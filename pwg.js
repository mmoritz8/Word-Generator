var letterCase = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";

var lowerC = "abcdefghijklmnopqrstuvwxyz";
var upperC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberC = "1234567890";
var specialC = "@#$%^&*(){}[]-_+=";

var values = letterCase;

  function generate(){    

    // set pw length

    var complexity = document.getElementById("slider").value;

    // setting an array to the complexity measures

    console.log(lowerC);
    console.log(upperC);
    console.log(numberC);
    console.log(specialC);
    console.log(values);

    var password = "";

    // create a loop

    for (var i = 0; i<= complexity.length; i++) {
      password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));

    }

    document.getElementById("password").value = password;
    document.getElementById("lastPass").innerHTML += password + "<br>";
}// add pw to textbox

// default length display slider

    document.getElementById("length").innerHTML = "Length: 2";

    document.getElementById("slider") = slider;
    slider.oninput = function() {

      if (slider.value > 0) {
        document.getElementById("length").innerHTML = "Length: " + slider.value;
      } else {
        document.getElementById("length").innerHTML = "Length: 1 ";
      }
    }