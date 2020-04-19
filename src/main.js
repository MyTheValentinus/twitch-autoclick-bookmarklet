var styles = [
    'background: #6441a5',
    'color: white',
    'display: block',
    'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)',
    'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
    'line-height: 40px',
    'text-align: center',
    'font-weight: bold',
    'padding: 12px'
].join(';');

console.info('%c[Twitch bonus autoclick] Initialized!', styles);
console.info('%cCreated by Valentin DEVILLE (https://twitter.com/MyTheValentinus)', styles);

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function setupJquery()
{
    if (window.jQuery === undefined) {
        var script_jQuery;
        script_jQuery = document.createElement('script');
        script_jQuery.setAttribute('src', '//code.jquery.com/jquery-latest.min.js');
        document.body.appendChild(script_jQuery);

        script_jQuery.onload = script_jQuery.onreadystatechange = function() {
            return true;
        }
    } else {
        return true;
    }

    return 'Error';
}

function loop() {
    setTimeout(function () {
        var button = jQuery(".tw-button.tw-interactive");
        if (button.length) {
            button.click();
            console.info("%c[Twitch bonus autoclick] Clicked!", "color: #6441a5");
        }
        time = randomIntFromInterval(12000, 22000);

        loop();
    }, time);
}

setupJquery();

var time = 1200;
setTimeout(loop, time);





