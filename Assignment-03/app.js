// Q1 :-
// Declare an empty array using JS literal notation to store
// student names in future.

// var student = [];

// Q2:-
// Declare an empty array using JS literal notation to store
// student names in future.
var students = new Array();

// 3. Declare and initialize a strings array.
var strArr = ["Bilal", "Eman", "Rehman"];

// 4. Declare and initialize a numbers array.
var numArr = [1, 2, 3, 4, 5, 6];

// 5. Declare and initialize a boolean array.
var booArr = [true, false];

// 6. Declare and initialize a mixed array.
var mixArr = ["sttring", 1, 2, 3, null, true, false, undefined, [1, 2, 3]];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
//     BS, BCOM, MS, M. Phil., PhD). Show the listed
//     qualifications in your browser like:

var qualifiactions = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M.Phil", "PHD"];
document.write("<h1>Qualifications:</h1>");
for (let i = 0; i < qualifiactions.length; i++) {
  document.write(i + 1, ") ", qualifiactions[i], "<br>");
}
