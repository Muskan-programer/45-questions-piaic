// usernames
const usernames: string[]= ['bisma', 'maria', 'faiza','sana','muskan','liza' ];


// greetings
for (let i = 0; i < usernames.length; i++) {
    const usernames = username[i];

    if (usernames === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${usernames}, thank you for logging in again.`);
    }
}