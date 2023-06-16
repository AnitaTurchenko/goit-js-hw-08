import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

const onTimeupdate = function({seconds}) {
       const currentTime = seconds;
       localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime))
    };
    
player.on('timeupdate', throttle (onTimeupdate, 1000));

const startTime = localStorage.getItem("videoplayer-current-time");

if (startTime) {
    player.setCurrentTime(startTime)
}
