
function easteregg() {
        document.getElementById("clock").style.color = "gren";
        document.querySelector("body").style.color = "";
}

function darkmode() {

        document.body.style.background = "url(pictures/spacelogo.jpg)";
        document.body.style.backgroundAttachment = "cover"
        document.body.style.backgroundAttachment = "fixed"
        
}

function timer() {
        var i = 0; // a counter which is displayed every 100ms

        // create interval with callback every 100ms.
        // `interval` holds interval ID, used to clear the interval (stop callback)
        var interval = setInterval(function () {
                clock.innerHTML = i++; // writes to html ever

                //if i is greater than 1000
                if (i > 100000) {
                        clearInterval(interval)
                        easteregg()
                }
        }, 100);
}

timer();
