// In JavaScript, arrays can be declared like this:

let scores = [100, 72, 83, 94, 88, 87];
let names = ['Nancy','Blessing','Jorge','Svetlana'];
// Arrays are zero-based indexed, meaning the first element is at index 0, the second element is at index 1, and so on.

// Arrays can be accessed by an index reference:
let aScore = scores[0];  // The aScore variable is assigned the value of 100

// Arrays values can be modified:
scores[0] = 99; // This assignment expression changed the first score in the array from 100 to 99.

// Arrays can be iterated over using a classic for loop:
for (let i = 0; i < scores.length; i++) {
  console.log(scores[i]);
}

// Preferred: Arrays can be iterated over using other looping structures like forEach:
scores.forEach(function(score) {
  console.log(score);
});

// Arrays have a length property:
let numScores = scores.length; // The numScores variable is assigned the value of 6

// Array Methods
// Arrays have a number of methods that can be used to manipulate (change) them:

scores.push(100); // Adds a new element to the end of the array
scores.pop(); // Removes the last element from the array
scores.shift(); // Removes the first element from the array
scores.unshift(100); // Adds a new element to the beginning of the array
scores.slice(2,3); // Cut out a portion of the array starting at an index for a given length
scores.splice(2, 1); // Removes 1 element from the array starting at index 2
scores.join(', '); // transform the array into a single string with a comma and space delimiter option

let firstName = 'Antonia';
let lastName = 'Francesca';

function fullName(first, last) {
  return `${first} ${last}`; // using snippets will return it as string
}

const fullName = function (first, last) {
  return `${first} ${last}`;
}

document.querySelector('#fullName').innerHTML = fullName(firstName, lastName); //expression that calls the fullName function 
// declaration and writes the result to an existing HTML element's text node with the ID of fullName