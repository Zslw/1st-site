/*
Everything in between is a comment.
*/
// This is a comment
document.querySelector('html').onclick = function() {
    alert('AHH! You touched my tralala!');
}
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/giorno.jpeg') {
      myImage.setAttribute ('src','images/giorno2.jpg');
    } else {
      myImage.setAttribute ('src','images/giorno.jpeg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Make Giornos dream come true, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Make Giornos dream come true, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
  function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Make Giornos dream come true, ' + myName;
    }
  }