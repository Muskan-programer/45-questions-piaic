// username
var username = ['bisma', 'faiza', 'muskan', 'maria', 'ramisha'];
// check if the lidt of user is not empty 
if (usernames.length > 0) {
    // greetings
    for (var i = 0; i < usernames.length; i++) {
        var username_1 = usernames[i];
        if (username_1 === 'admin') {
            console.log("Hello admin, would you like to see a status reports?");
        }
        else {
            console.log("Hello ".concat(username_1, ", thank you for logging in again."));
            {
            }
            {
            }
            console.log("We need to grow our user base.");
        }
        // remove all usernames
        usernames = [];
        // check if the list of users is not empty
        if (username_1.length > 0) {
            // print greeting (this won,t be for an empty list)
            for (var i_1 = 0; i_1 < (usernames.length); i_1++) {
                var username_2 = 'admin', _a = void 0, console_1 = _a.console, log = _a.log;
                ("Hello admin would you like to see astatus report?");
            }
            {
                console.log("Hello ".concat(username_1, ",thank you for logging in again."));
            }
        }
    }
    {
        console.log("We need to grow our user base.");
    }
}
