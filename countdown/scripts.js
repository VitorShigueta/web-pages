// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

const diasPage = document.querySelector(".diasNum");
const horasPage = document.querySelector(".horasNum");
const minutosPage = document.querySelector(".minutosNum");
const segundosPage = document.querySelector(".segundosNum");


// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  diasPage.innerHTML = days;
  horasPage.innerHTML = hours;
  minutosPage.innerHTML = minutes;
  segundosPage.innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".relogio").innerHTML = "EXPIRED";
  }
}, 1000);