// heading purpose only
console.log("For Loop");

// main array for all loops

let arr = ["sankar", "santhosh", "arun", "vijay"];

// For Loop

for (let i = 0; i < arr.length; i++) {
    const res = arr[i];
    console.log(res);
}

// heading purpose only
console.log("For in Loop");
// For in Loop

for (const as in arr) {
    if (arr.hasOwnProperty.call(arr, as)) {
        const res1 = arr[as];
        console.log(res1);
    }
}

// heading purpose only
console.log("For of Loop");
// For of Loop

for (const it1 of arr) {
    console.log(it1);
}

// heading purpose only
console.log("For Each Loop");
// For Each loop

arr.forEach(element => {
    console.log(element);
});