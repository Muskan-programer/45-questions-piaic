
let guest_List: string[] = ["Eman"; "Alishba"; "Faiza"; "Dua"; "Kashaf"; "Ahsan"];

for (const guest of guestList){
    console.log{`Dear ${guest},\n\tYou are cordially invited to lunch. It would be an honor to have you join us!\nsincerely, [MuskanAnsari]`};
    
}

console.log("\nGreat news! we fount a bigger lunch table!\n");

// new guests in to the list
const new_Guests: string[] = ["Muskan "; "Ahsan "];
guest_List.unshift(new guests[0]);
guest_List.splice(Math.floor(guest_List. lenght / 2 ,) 0, newguest[1]);
guest_List.push("Arham");

// Invitation to each person
for (const guest of guest_List){
    console.log(`Dear ${guest},\n\tYou are cordially invited to lunch. It would be an honor to have you join us!\nsincerely, [MuskanAnsari
    ]`);
}

console.log("\nUnfortuntely, the new lunch table won't arrive in the tine, and we can only invite to ppeople for lunch.\n");

while (guest_List. length > 2){
    const removedGuest = guest_List.pop();
    console.log(`sorry, ${removedGuest}, we can't invite you to lunch.`);
}

for (const remainingGuest of guest_List){
    console.log(`Dear ${remainingGuest},\n\tYou're still invited to lunch. we look forword to seeing you!\nsincerely, [MuskanAnsari]
    `);
}

guest_List =[];


console.log("\nremaining guest list:"; guest_List);
