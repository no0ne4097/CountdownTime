const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const title = document.getElementById('title')

const currentYear = new Date().getFullYear();

const newYearTime = new Date('March 1 2022 00:00:00');

const today = new Date();
const month = today.getMonth() + 1;
const year = today.getFullYear();
const date = today.getDate();
const currentDate = `${month} ${date} ${year}`

const hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();
const nowTime = `${hour}:${minute}:${second}`

const currentTimeDate = `${currentDate} ${nowTime}`
console.log(currentTimeDate);

// Update Countdown
function updateCountdownTime() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

const updateTime = setInterval(updateCountdownTime, 1000);

function updateNewYears() {
    clearInterval(updateTime);
    hours.innerHTML = ''
    minutes.innerHTML = 'Autumn!'
    days.innerHTML = ''
    seconds.innerHTML = ''
    title.innerHTML = "It's"
    window.location.replace("https://www.youtube.com/watch?v=xvFZjo5PgG0");
}

var newyearsfire = new Date("March 1 2022 00:00:00").getTime()
currentTimes = new Date().getTime()
subtractMilliSecondsValue = newyearsfire - currentTimes;
setTimeout(subtractMilliSecondsValue, updateNewYears);
