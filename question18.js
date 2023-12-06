var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// seeing the world
var placesTovisit = ["Tokyo"];
"Paris";
"New York";
"Turkey";
"Malta";
;
// print array in to original order
console.log("\noriginal order:");
placesTovisit;
;
// print array in alphabetical order wihtout modifying the original list
console.log("alphabetical order:", placesTovisit);
// print array in reverse alphabetical order wihtout changing the wihtout of the original list 
console.log("alphabetical order:", __spreadArray([], placesTovisit, true).sort().);
// show that the array is still in this order
console.log("original order:", placesTovisit);
// Reveres the order of the list 
placesTovisit.reverse();
console.log("Reversed order:", placesTovisit);
// Reverse the order again to restore the original order
placesTovisit.sort();
console.log("original order:", placesTovisit);
// sort the array in alphabetical order
placesTovisit.sort();
console.log("sorted in alphabetical order:", placesTovisit);
// sort the array in reverse alphabetical order
placesTovisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("sorted in reverse alphabetical order:", placesTovisit);
