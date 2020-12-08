function firstNameLog() {
    var firstNameId = "first-name";
    var firstNameEl = document.getElementById(firstNameId);
    console.log(firstNameEl.value);
}


var lastNameId = "last-name";
var firstNameId = "first-name";

function lastNameLog() {
    var lastNameId = "last-name";
    var lastNameEl = document.getElementById(lastNameId);
    console.log(lastNameEl.value);
}



/* 
function logValue(id) {
    var el = document.getElementById(id);
    console.log(el.value);
}

 */

function getValue(id) {
    var el = document.getElementById(id);
    return el.value;
}


var value = getValue(lastNameId);
window.alert(value);