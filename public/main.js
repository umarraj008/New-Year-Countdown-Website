var timeText = document.getElementById("countdown");
var countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();//PRODUCTION
// var countDownDate = new Date("Dec 31, 2023 16:40:00").getTime();//TESTING
var music = new Audio("music.wav");
var date = new Date();
var isPlaying = false;

setInterval(function() {
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
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if (days == 0 && hours == 0 && minutes <= 2 && seconds <= 0) {
        if (!isPlaying) {
            var audio = document.getElementById("music");
            audio.currentTime = 0;
            audio.muted = false;

            if (audio.paused) {
                audio.play();
            }
            isPlaying = true;
        }
    }

    // If the count down is finished, write some text
    if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
        document.getElementById("countdown").innerHTML = "HAPPY NEW YEAR!";
        document.getElementsByTagName("body")[0].background = "crab-rave.gif"
    }
}, 1000);