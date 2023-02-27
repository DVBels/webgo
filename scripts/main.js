var myHeading = document.querySelector('h1');
myHeading.textContent = 'Exclusive Food by JS';

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    var myName = prompt('Please enter your name here...');
    localStorage.setItem('Name', myName);
    myHeading.textContent = 'Exclusive Food for ' + myName;
  }
if(!localStorage.getItem('Name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('Name');
    myHeading.textContent = 'Exclusive Food for ' + storedName;
  }
  myButton.onclick = function(){
    setUserName();
  }