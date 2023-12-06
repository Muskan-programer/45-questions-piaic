// list of current users
const currentUser: string[] = ['Ahsan','Hassan','Arham','Farman',];

// list of new users
const newUsers: string[] = ['Zain','Umar','Aqeel','Rizwan'];

// New user to check for uniqueness

for (let newUser of newUsers) {
    // convert boht usernames to lowercase of case_insensitive comparison
    const lowercaseNewUser= newuser.toLowercase(),
const isUnique = currentUser.some((currentUser)) => currentUser.tolowercase() === lowercaseNewUser;

// print a meassge based on the result
if (isUnique) {
    console.log(`usernme '${newUser} is availble.`);

} else {
    console.log(`sorry, the username ;${newUser} is already taken. pleace enter a username.`);
}
}