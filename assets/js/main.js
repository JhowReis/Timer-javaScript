function myTimer() {
    function getTimeFromSeconds(seconds) {
        const date = new Date(seconds * 1000);
        return date.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        })
    }
    const time = document.querySelector('.time');
    let addSeconds = 0;
    let timer;


    document.addEventListener('click', function (e) {
        const element = e.target;

        if (element.classList.contains('reset')) {
            clearInterval(timer);
            time.innerHTML = '00:00:00'
            time.classList.remove('stopped')
            addSeconds = 0;
        };
        if (element.classList.contains('stop')) {
            time.classList.add('stopped')
            clearInterval(timer);
        };
        if (element.classList.contains('start')) {
            time.classList.remove('stopped')
            clearInterval(timer);
            startTimer();
        };

    });


    function startTimer() {
        timer = setInterval(function () {
            addSeconds++;
            time.innerHTML = getTimeFromSeconds(addSeconds);
        }, 1000);
    }
};
myTimer();



