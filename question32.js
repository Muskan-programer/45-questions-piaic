// list of current users
var currentUser = ['Ahsan', 'Hassan', 'Arham', 'Farman',];
// list of new users
var newUsers = ['Zain', 'Umar', 'Aqeel', 'Rizwan'];
// New user to check for uniqueness
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    // convert boht usernames to lowercase of case_insensitive comparison
    var lowercaseNewUser = newuswe.toLowercase();
    var isUnique = currentUser.some((currentUser));
    currentUser.tolowercase() === lowercaseNewUser;
    ;
    // print a meassge based on the result
    if (isUnique) {
        console.log("usernme '".concat(newUser, " is availble."));
    }
    else {
        console.log("sorry, the username ;".concat(newUser, " is already taken. pleace enter a username."));
    }
}
