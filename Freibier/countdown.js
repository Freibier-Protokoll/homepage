// Set the date we're counting down to
var countDownDate = new Date("June 18, 2021 20:00:00").getTime();

var till = new Date("June 18, 2021 21:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML =
    "Live in \n" +
    days +
    "d " +
    hours +
    "h " +
    minutes +
    "m " +
    seconds +
    "s " +
    "!";

  // If the count down is finished, write some text
  if (till - now < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Freibier ist live!";
    document.getElementById("info").style.visibility = "hidden";
  }
}, 1000);

function copyAddress() {
  navigator.clipboard.writeText("0x26046abedf7117af40ca645350eb857d170bf71f");

  /* Alert the copied text */
  alert(
    "Freibier Token Adresse kopiert! " +
      "0x26046abedf7117af40ca645350eb857d170bf71f"
  );
}
