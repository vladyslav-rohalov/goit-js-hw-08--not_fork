import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(getTimePoint, 1000));

function getTimePoint(e) {
  let timePoint = e.seconds;
  localStorage.setItem('videoplayer-current-time', timePoint);
}

let timeProgressPoint = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(timeProgressPoint);
