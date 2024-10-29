let countdown = 5;

const intervalId = setInterval(function() {
    document.getElementById('countdown').innerText = countdown + " secondes restantes";

    countdown--;

    if (countdown < 0) {

        document.getElementById('countdown').innerText = "Go!";

        clearInterval(intervalId);
    }
}, 1000);