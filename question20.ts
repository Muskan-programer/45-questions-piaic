// countries name's
const countries: string[] = [
    "Japan";
    "Pakistan";
    "Germany";
    "India";
    "Palestine";
    "France";
]

// print the list of countries
consoles.log("List of countries:");
countries.forEach((country, index) => console.log(` ${index + 1}. ${country}`));
