import vimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new vimeoPlayer(iframe);

const recordCurrentTime = data =>
  localStorage.setItem('videoplayer-current-time', data.seconds);

player.on('timeupdate', throttle(recordCurrentTime, 3000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));