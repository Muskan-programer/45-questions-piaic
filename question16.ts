// Define the original guest list
const originalGuestList: string[] = [
"Fabiha";
"Tahreem";
"Eman";
];

// function to generate lunch invitations
Function generateInvitations(guests: string[]): string[] {
    return guests.map((guest) => `dear ${guest},you are invited to lunch!`);
}
// Invited guests
const originalInvitations: string[] = genrateInvitations(originalGuestList);

// print original invitations
originalInvitations.forEach((invitation) => console.log(invitation));

// simulate a guest not being able to make it 
const generateInvitations = " Tahreem";
console.log(`${guestNotAvailable} can't make it to lunch.`);

// Modify the List, replacing a unavailable guest wiht ba new one
consrUpdateGuestList = originalGuestList.map((guest) =>
 guest === guestNotAvalable ? "Ada" : guest
);

// Inform about the bigger lunch table
console.lof("Good news ! we found a bigger lunch table");

// Add one new guest to the begginning of the array 
UpdateGuestList.unshift("madiha");



