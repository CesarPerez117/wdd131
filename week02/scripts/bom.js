
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const li = document.createElement('li');

const deleteButton = document.createElement('button');

button.addEventListener('click', function(){
  if (input.value.trim() !== '') {

    li.textContent = input.value;

    deleteButton.textContent = "❌";

    li.append(deleteButton);

    list.append(li);

  }
});

deleteButton.addEventListener('click', function() {
  list.removeChild(li);
  input.focus()
})




/* EXAMPLES 
const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

// for loop
  for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
      console.log(studentReport[i]);
    }
  }

  // while loop
  let i = 0;
  while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
      console.log(studentReport[i]);
    }
    i++;
  }

  // forEach loop
  studentReport.forEach(function (item) {
    if (item < LIMIT) {
      console.log(item);
    }
  });

  // for...in loop
  for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
      console.log(studentReport[i]);
    }
  }
    */