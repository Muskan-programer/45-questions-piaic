// store a person's name
let _personName: string = "muskan";

// print the name in uppercase
console.log(`lowercase: ${_personName.toLowerCase()}`);

// print the name in uppercase
console.log(`uppercase: ${_personName.toUpperCase()}`);

//print the name in titlecase
const titlecaseName = _personName.replace(/\b\w/g, (char)=> char.toUpperCase());
console.log(`Titlecase:${titlecaseName}`);
