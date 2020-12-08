function getEl(id) {
    var el = document.getElementById(id);
return el;
}




var firstNameId = "first-name";
var firstNameEl = document.getEl(firstNameId);
console.log(firstNameEl.value);
console.log(firstNameEl.className);

var lastNameId = "last-name";
var lastNameEl = document.getEl(lastNameId);
console.log(lastNameEl.value);
console.log(lastNameEl.className);

var addressId = "address";
var addressEl = document.getEl(addressId);
console.log(addressEl.value);
console.log(addressEl.className);

var citiesId = "cities";
var citiesEl = document.getEl(citiesId);
console.log(citiesEl.value);
console.log(citiesEl.className);

function alertValues(elementParameter) {
    console.log(elementParameter.value);
    console.log(elementParameter.className);
}


var firstNameId = "first-name";
var firstNameEl = document.getEl(firstNameId);
alertValues(firstNameEl);

var lastNameId = "last-name";
var lastNameEl = document.getEl(lastNameId);
alertValues(lastNameEl);

var addressId = "address";
var addressEl = document.getEl(addressId);
alertValues(addressEl);

var citiesId = "cities";
var citiesEl = document.getEl(citiesId);
alertValues(citiesEl);