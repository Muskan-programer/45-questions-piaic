function show_Magicians(magicians: string[]): void {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}

function makeGreat(magicians: string[]): string[] {
    return magicians.map((magician) => `the Great ${magician}`);
}

// magician names
const magicianNames: string[] = ["Harry Potter", "Albus Dumbledore", "Hermione", "Ron", "Lune"];

const greatMagicians = makeGreat(magicianNames);

show_Magicians(greatMagicians);