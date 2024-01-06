"use strict";

var planetsList = document.querySelector('#planets');
var planetIcon = function planetIcon(str) {
  return "\uD83D\uDCAB ".concat(str);
};
var upperCase = function upperCase(str) {
  return "".concat(str.charAt(0).toUpperCase()).concat(str.slice(1));
};
var planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];
planets.forEach(function (planet) {
  var _ref, _planet;
  planetsList.innerHTML += "<li>".concat((_ref = (_planet = planet, upperCase(_planet)), planetIcon(_ref)), "</li>");
});