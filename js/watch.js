setInterval(() => {
    const time = document.getElementById('times');
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let dayNight = 'AM';

    if (hours === 0) {
        hours = 12;
    }
    else if (hours > 12) {
        dayNight = 'PM';
        hours = hours - 12;
    }

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    
    time.innerText = `${hours}:${minutes}:${seconds} ${dayNight}`;
});