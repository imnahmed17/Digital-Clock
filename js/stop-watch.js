let intervalId;
let [sec, min, hr] = [0, 0, 0];
const btnStart = () => {
    intervalId = setInterval(() => {
        ++sec;
        if (sec === 60) {
            sec = 0;
            min++;
        }
        if (min === 60) {
            min = 0;
            hr++;
        }

        let s = sec < 10 ? `0${sec}` : sec;
        let m = min < 10 ? `0${min}` : min;
        let h = hr < 10 ? `0${hr}` : hr;

        document.getElementById('sec').innerText = s;
        document.getElementById('min').innerText = m;
        document.getElementById('hr').innerText = h;
    }, 1000);
}

const btnStop = () => {
    clearInterval(intervalId);
}

const btnReset = () => {
    document.getElementById('sec').innerText = '00';
    document.getElementById('min').innerText = '00';
    document.getElementById('hr').innerText = '00';
    clearInterval(intervalId);
}