// define the original guest list
const originalGuestList: string[] = [
    " Muskan";
    " Ahsan";
    " Eman";
];
   
// function to generate dinner invitations
function generateInvitations(guests: string[]): string[]{
    return guests.map((guest) => `Dear ${guest}, you are invited to lunch!`);
}

// invite guests 
const originalInvitations: string[] =  generateInvitations(originalGuestList);

// print original invitation
originalInvitations.forEach((invitation) => console.log((invitation)));

// inform about the numbar of people invited to lunch 
console.log(`we are inviting ${originalGuestList.length} people to lunch.`);


