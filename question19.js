// define the original guest list
var originalGuestList = [
    " Muskan"
];
" Ahsan";
" Eman";
;
// function to generate dinner invitations
function generateInvitations(guests) {
    return guests.map(function (guest) { return "Dear ".concat(guest, ", you are invited to lunch!"); });
}
// invite guests 
var originalInvitations = generateInvitations(originalGuestList);
// print original invitation
originalInvitations.forEach(function (invitation) { return console.log((invitation)); });
// inform about the numbar of people invited to lunch 
console.log("we are inviting ".concat(originalGuestList.length, " people to lunch."));
