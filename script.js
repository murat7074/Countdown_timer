
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");



function CountDown() {
    const totalseconds = Math.floor((new Date('1 Aug 2025') - new Date()) /1000)   ;

    const days = Math.floor(totalseconds/3600/24)
    const hours = Math.floor(totalseconds/3600) % 24
    const minutes = Math.floor(totalseconds/3600/24) % 60
    const second = Math.floor(totalseconds) % 60

    daysEl.innerText = getZero(days)
    hoursEl.innerText = getZero(hours)
    minsEl.innerText = getZero(minutes)
    secondsEl.innerText = getZero(second)

   console.log(second)
}

function getZero(time) {
    return time < 10 ? `0${time}`: time;
}
CountDown();
setInterval(CountDown,1000)
