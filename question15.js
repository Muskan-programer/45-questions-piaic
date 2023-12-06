// Guest List
var guestList = ["maria"];
"madiha";
"mehreen";
;
// print invitation message
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("dear ".concat(guest, ", you are invited to lunch. tomorrow"));
}
// change in Guest List  
var gurstCantMakeIt = "maria";
var newinvite = "mehak";
// print in guest name who can't make it 
console.log("\nUnfortunately, ".concat(gurstCantMakeIt, " can't make it to the lunch. \n"));
// Replace the guest name who can't make it wiht a new invite 
var indexToremove = guestList.indexOf(gurstCantMakeIt);
if (indexToremove !== -1) {
    guestList.splice(indexToremove, 1, newinvite);
}
// print the updated invitation message
for (var _a = 0, guestList_2 = guestList; _a < guestList_2.length; _a++) {
    var guest = guestList_2[_a];
    console.log("dear ".concat(guest, ", you are invited to lunch. tomorrow"));
}
