
function makeShirt(size:string = "Laege", meassge: string = "I love python"): void {
    console.log(`shirt size: ${size}`);
    console.log(`Meassge: ${meassge}`);
    console.log("summary: The shirt is size" + size + " and has a meassge:'" + meassge + "'.");
}

makeShirt();


makeShirt("medium");


makeShirt("small", "coding is magic!");