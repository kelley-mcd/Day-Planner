let timeBlock = moment();
$('#time-block').text(timeBlock.format('MMMM Do YYYY, h:mm:ss a'));


let past = document.getElementById("past");
let present = document.getElementById("present");
let future = document.getElementById("future");
let now = new Date();
let hours = document.getElementsByClassName("hour");
let form = document.querySelector('form');
let input = document.getElementsByClassName('description');


function colorChange() {

    if (now.getHours() === hours) {
        document.form = present; 
    }
    else if (now.getHours() > hours) {
        document.form = past;
    }
    else {
        document.form = future;
    }
}

colorChange();


let itemsArray = localStorage.getItem('items')
  ? JSON.parse(localStorage.getItem('items'))
  : []

localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))


form.addEventListener('submit', function (e) {
  e.preventDefault()

  itemsArray.push(input.value)
  localStorage.setItem('items', JSON.stringify(itemsArray))
  input.value = itemsArray
})
