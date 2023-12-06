function show_Magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function makeGreat(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
// magician names
var magicianNames = ["Harry Potter", "Albus Dumbledore", "Hermione", "Ron", "Lune"];
var greatMagicians = makeGreat(magicianNames);
show_Magicians(greatMagicians);
