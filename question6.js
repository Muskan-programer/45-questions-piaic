// store a person's name wiht whitespace characters
var personNameWihtWhitespace = "\t\n  MusKan  \t\n";
// print the name wiht surrounding whitespace
console.log("Name wiht whitespace: \"".concat(personNameWihtWhitespace, "\""));
//strit the whitespace and print the name 
var strippedName = personNameWihtWhitespace.trim();
console.log("stripped name: ".concat(strippedName, "\""));
