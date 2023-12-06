function CityCountry(city: string, country: string): string{
    return(`${city}, ${country}`);
}

const result1 = CityCountry("Karachi", "Pakistan");
const result2 = CityCountry("Tokyo", " japan");
const result3 = CityCountry("paris", "France");

console.log(result1);
console.log(result2);
console.log(result3);
