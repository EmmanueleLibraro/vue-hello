//VUE JS
const app = new Vue ({
    el: '#app',
    data: {
        title: 'New World',
        titl: 'Per la closed beta mancano...',
        image: 'https://newworlditalia.it/wp-content/uploads/2020/11/new_world_italia_logo.png',
        imag: 'https://images-na.ssl-images-amazon.com/images/I/71WXjM75u2L._AC_SX679_.jpg',
        img: 'https://images.ctfassets.net/j95d1p8hsuun/7v9lFYQ6gXUJIKdOmXU00D/338ce46e280d57706ec6e9d497bdb62d/EditionSelector_DeluxeEdition-530x330.jpg',
        im: 'https://mmo.it/wp-content/uploads/2020/05/New-World-131.jpg'
    }
});

// Set the date we're counting down to
var countDownDate = new Date("Jul 20, 2021 15:37:25").getTime();

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

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);