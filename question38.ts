
function describeCity(city: string,coountrty: string = "Default country"): void {
    console.log(`${city}is in ${'country'}.`);
}


describeCity("Karachi", "Pakistan");
describeCity("New York","USA");
describeCity("berlin");