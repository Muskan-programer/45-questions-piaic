var guest_List = ["Eman"];
"Alishba";
"Faiza";
"Dua";
"Kashaf";
"Ahsan";
;
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log;
    {
        "Dear ".concat(guest, ",\n\tYou are cordially invited to lunch. It would be an honor to have you join us!\nsincerely, [MuskanAnsari]");
    }
    ;
}
console.log("\nGreat news! we fount a bigger lunch table!\n");
// new guests in to the list
var new_Guests = ["Muskan "];
"Ahsan ";
;
guest_List.unshift(new guests[0]);
guest_List.splice(Math.floor(guest_List.lenght / 2), 0, newguest[1]);
guest_List.push("Arham");
// Invitation to each person
for (var _a = 0, guest_List_1 = guest_List; _a < guest_List_1.length; _a++) {
    var guest = guest_List_1[_a];
    console.log("Dear ".concat(guest, ",\n\tYou are cordially invited to lunch. It would be an honor to have you join us!\nsincerely, [MuskanAnsari\n    ]"));
}
console.log("\nUnfortuntely, the new lunch table won't arrive in the tine, and we can only invite to ppeople for lunch.\n");
while (guest_List.length > 2) {
    var removedGuest = guest_List.pop();
    console.log("sorry, ".concat(removedGuest, ", we can't invite you to lunch."));
}
for (var _b = 0, guest_List_2 = guest_List; _b < guest_List_2.length; _b++) {
    var remainingGuest = guest_List_2[_b];
    console.log("Dear ".concat(remainingGuest, ",\n\tYou're still invited to lunch. we look forword to seeing you!\nsincerely, [MuskanAnsari]\n    "));
}
guest_List = [];
console.log("\nremaining guest list:");
guest_List;
;
