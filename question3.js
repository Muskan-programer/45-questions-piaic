// store a person's name
var _personName = "muskan";
// print the name in uppercase
console.log("lowercase: ".concat(_personName.toLowerCase()));
// print the name in uppercase
console.log("uppercase: ".concat(_personName.toUpperCase()));
//print the name in titlecase
var titlecaseName = _personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
console.log("Titlecase:".concat(titlecaseName));
