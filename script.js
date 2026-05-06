let hour = 00;
let minute = 00;
let second = 00;
let count = 00;

timer = true;
stopWatch();

document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;
        setTimeout(stopWatch, 10);