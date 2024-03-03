const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const Christ = "25 Dec 2024";

function countdown() {
    const ChristDate = new Date(Christ);
    const currentDate = new Date();

    const totalSecond = (ChristDate - currentDate) / 1000;

    const days = Math.floor(totalSecond / 3600 / 24);
    const hours = Math.floor(totalSecond / 3600)% 24;
    const minutes = Math.floor(totalSecond / 60 )% 60;
    const seconds = Math.floor(totalSecond)%60;

    daysEl.innerHTML=days;
    hoursEl.innerHTML=formatTime(hours);
    minutesEl.innerHTML=formatTime(minutes);
    secondsEl.innerHTML=formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown,1000);