"use strict";

"use strict";
var _createClass = function () {
  function s(e, t) {
    for (var n = 0; n < t.length; n++) {
      var s = t[n];
      s.enumerable = s.enumerable || !1,
        s.configurable = !0,
        "value" in s && (s.writable = !0),
        Object.defineProperty(e, s.key, s)
    }
  }
  return function (e, t, n) {
    return t && s(e.prototype, t),
      n && s(e, n),
      e
  }
}();
function _classCallCheck(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function")
}
var PasswordGenerator = function () {
  function e() {
    _classCallCheck(this, e),
      this.bindFunctions(),
      this.queryDomElements(),
      this.setVariables(),
      this.addEventListeners()
  }
  return _createClass(e, [{
    key: "queryDomElements",
    value: function () {
      this.numberOfCharsOption = document.getElementById("number-of-chars"),
        this.filterLowercase = document.getElementById("filter-lowercase"),
        this.filterUppercase = document.getElementById("filter-uppercase"),
        this.filterNumbers = document.getElementById("filter-numbers"),
        this.filterSpecial = document.getElementById("filter-special"),
        this.startButton = document.getElementById("js-start-button"),
        this.againButton = document.getElementById("js-again-button"),
        this.resultElement = document.getElementById("js-result")
    }
  }, {
    key: "setVariables",
    value: function () {
      this.firstGenerate = !0,
        this.lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        this.uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        this.numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        this.specialChars = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"],
        this.gaEvent = "password_generator"
    }
  }, {
    key: "bindFunctions",
    value: function () {
      this.startButtonEventHandler = this.startButtonEventHandler.bind(this),
        this.againButtonEventHandler = this.againButtonEventHandler.bind(this)
    }
  }, {
    key: "startButtonEventHandler",
    value: function () {
      CP.scrollToElem(),
        this.generateRandomCountries()
    }
  }, {
    key: "againButtonEventHandler",
    value: function () {
      this.generateRandomCountries()
    }
  }, {
    key: "generateRandomCountries",
    value: function () {
      this.resultElement.innerText = "";
      var e = []
        , t = parseInt(this.numberOfCharsOption.value)
        , n = this.filterLowercase.checked
        , s = this.filterUppercase.checked
        , a = this.filterNumbers.checked
        , r = this.filterSpecial.checked
        , i = n ? this.lowerCaseLetters : []
        , o = s ? this.uppercaseLetters : []
        , l = a ? this.numbers : []
        , u = r ? this.specialChars : []
        , c = [].concat(i, o, l, u);
      if (!c.length)
        return this.resultElement.innerHTML = "Please select which random characters you want to include.",
          void this.filterLowercase.focus();
      for (var h = 0; h < t; h++) {
        var d = c[Math.floor(Math.random() * c.length)];
        e.push(d)
      }
      this.resultElement.innerText = e.join(""),
        this.againButton.classList.add("show"),
        this.firstGenerate && (window.CP.sendGaEvent(this.gaEvent, t, "number_of_chars"),
          window.CP.sendGaEvent(this.gaEvent, n, "lowercase"),
          window.CP.sendGaEvent(this.gaEvent, s, "uppercase"),
          window.CP.sendGaEvent(this.gaEvent, a, "numbers"),
          window.CP.sendGaEvent(this.gaEvent, r, "special_chars"),
          this.firstGenerate = !1)
    }
  }, {
    key: "addEventListeners",
    value: function () {
      this.startButton.addEventListener("click", this.startButtonEventHandler),
        this.againButton.addEventListener("click", this.againButtonEventHandler)
    }
  }]),
    e
}();
new PasswordGenerator;
