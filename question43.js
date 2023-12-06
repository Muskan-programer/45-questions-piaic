// // Define the showMagicians function
// function show_Magicians(magician: string[]): void;{
//     magicians. forEach((magician)=> {
//         console.log(magician);
//     });
// }
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// function makeGreat(magicians: string[]): string[] {
//     return magicians.map((magicians)=> `the Great ${magicians}`); 
// }
// // magician names
// const magicians: string[] = ["Harry potter", "Albus Dumbldore", "Hermione"," Ron","Luna"];
// const greatMagician: string[] = makeGreat([...magicianNames]);
// console.log("Original Magicians:");
// show_Magicians(magicianNames);
// console.log("\nGreat Magicians:");
// show_Magicians(greatMagicians);
// Define the showMagicians function
function show_Magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function makeGreat(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
// magician names
var magicianNames = ["Harry Potter", "Albus Dumbledore", "Hermione", "Ron", "Luna"];
var greatMagicians = makeGreat(__spreadArray([], magicianNames, true));
console.log("Original Magicians:");
show_Magicians(magicianNames);
console.log("\nGreat Magicians:");
show_Magicians(greatMagicians);
