//  set the value for the variable age
var age = 18;
// determine  the person's age stage
if (age < 1) {
    console.log("The person is a boy.");
}
else if (age >= 1 && age < 3) {
    console.log("The person is a main.");
}
else if (age >= 3 && age < 5) {
    console.log("The person is a kid.");
}
else if (age >= 5 && age < 12) {
    console.log("The person is a teenager.");
}
else if (age >= 12 && age < 30) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
