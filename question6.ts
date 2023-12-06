// store a person's name wiht whitespace characters
const personNameWihtWhitespace: string = "\t\n  MusKan  \t\n";

// print the name wiht surrounding whitespace
console.log(`Name wiht whitespace: "${personNameWihtWhitespace}"`);

//strit the whitespace and print the name 
const strippedName: string = personNameWihtWhitespace. trim();
console.log(`stripped name: ${strippedName}"`);
