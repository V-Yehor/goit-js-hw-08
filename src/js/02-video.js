import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
// console.log(throttle);

const LS_KEY = 'videoplayer-current-time';
const player = new Player('vimeo-player', {
    id: 236203659,
    width: 640
});
const timeUpdateFn = function (event) {
    const currentPlayerTime = event.seconds;
    localStorage.setItem(LS_KEY, currentPlayerTime);
}

player.on('timeupdate', throttle(timeUpdateFn, 1000));



const setupPlayerTime = localStorage.getItem(LS_KEY);
// console.log(setupPlayerTime);

player.setCurrentTime(setupPlayerTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
