// // Define the showMagicians function
// function show_Magicians(magician: string[]): void;{
//     magicians. forEach((magician)=> {
//         console.log(magician);
//     });
// }

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
function show_Magicians(magicians: string[]): void {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}

function makeGreat(magicians: string[]): string[] {
    return magicians.map((magician) => `the Great ${magician}`); 
}

// magician names
const magicianNames: string[] = ["Harry Potter", "Albus Dumbledore", "Hermione", "Ron", "Luna"];

const greatMagicians: string[] = makeGreat([...magicianNames]);

console.log("Original Magicians:");
show_Magicians(magicianNames);

console.log("\nGreat Magicians:");
show_Magicians(greatMagicians);
