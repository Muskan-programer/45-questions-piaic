// usernames
var usernames = ['bisma', 'maria', 'faiza', 'sana', 'muskan', 'liza'];
// greetings
for (var i = 0; i < usernames.length; i++) {
    var usernames_1 = usernames_1[i];
    if (usernames_1 === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(usernames_1, ", thank you for logging in again."));
    }
}
