'use strict';

import Youtube    from './youtube';
import Vimeo      from './vimeo';
import Soundcloud from './soundcloud';

class PlayerFactory {

  create(providerId) {

    let player;

    document.querySelector('#video-youtube').style.display = 'none';
    document.querySelector('#video-vimeo').style.display = 'none';
    document.querySelector('#video-soundcloud').style.display = 'none';

    switch (providerId) {
      case '1':
        player = new Youtube();
        document.querySelector('#video-youtube').style.display = 'block';
        break;
      case '2':
        player = new Vimeo();
        document.querySelector('#video-vimeo').style.display = 'block';
        break;
      case '3':
        player = new Soundcloud();
        document.querySelector('#video-soundcloud').style.display = 'block';
        break;
    }

    player.providerId = providerId;
    return player;
  }
}

module.exports = PlayerFactory;
