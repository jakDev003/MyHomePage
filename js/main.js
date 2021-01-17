// DOM Elements
var time = document.getElementById('time');
var greeting = document.getElementById('greeting');

// Options
const showAmPm = true;

// Show Time
function showTime() {
    var today = new Date();
    var hour = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format
    hour = hour % 12 || 12;

    // Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
    var today = new Date();
    var hour = today.getHours();

    if (hour < 12) {
        // Morning
        //document.body.style.backgroundImage = "url('../img/morning.jpg')";
        document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2020/03/31/11/59/sunrise-4987384_1280.jpg)";
        greeting.textContent = 'Good Morning!';
    } else if (hour < 18) {
        // Afternoon
        //document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
        document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2017/10/12/22/16/sky-2846216_1280.jpg)";
        greeting.textContent = 'Good Afternoon!';
    } else {
        // Evening
        //document.body.style.backgroundImage = "url('../img/evening.jpg')";
        document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg)";
        greeting.textContent = 'Good Evening!';
    }
}

// Run
showTime();
setBgGreet();