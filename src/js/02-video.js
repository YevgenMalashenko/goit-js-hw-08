import Player from '@vimeo/player';

require(['https://player.vimeo.com/api/player.js'], function (Player) {
  const iframe = document.querySelector('iframe');
  const player = new Player(iframe);

  player.on('play', function () {
    console.log('played the video!');
  });
});
