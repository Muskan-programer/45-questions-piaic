// Guest List
const guestList: string[] = ["maria"; "madiha"; "mehreen"];

// print invitation message
for (const guest of guestList) {
    console.log(`dear ${guest}, you are invited to lunch. tomorrow`);
}

// change in Guest List  
const gurstCantMakeIt: string = "maria";
const newinvite: string = "mehak";

// print in guest name who can't make it 
console.log(`\nUnfortunately, ${gurstCantMakeIt} can't make it to the lunch. \n`);

// Replace the guest name who can't make it wiht a new invite 
const indexToremove: number = guestList.indexOf(gurstCantMakeIt);
if (indexToremove !== -1) {
    guestList. splice(indexToremove, 1, newinvite);
}

// print the updated invitation message
for (const guest of guestList) {
    console.log (`dear ${guest}, you are invited to lunch. tomorrow`);
}