function makeShirt(size, meassge) {
    if (size === void 0) { size = "Laege"; }
    if (meassge === void 0) { meassge = "I love python"; }
    console.log("shirt size: ".concat(size));
    console.log("Meassge: ".concat(meassge));
    console.log("summary: The shirt is size" + size + " and has a meassge:'" + meassge + "'.");
}
makeShirt();
makeShirt("medium");
makeShirt("small", "coding is magic!");
