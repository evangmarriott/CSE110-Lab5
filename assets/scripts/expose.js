// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose > img');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('#expose button');
  const audio = document.querySelector('audio');

  const jsConfetti = new JSConfetti();

  // Set initial volume to match slider default (50)
  audio.volume = volumeSlider.value / 100;

  hornSelect.addEventListener('change', function () {
    const horn = hornSelect.value;
    hornImage.src = `assets/images/${horn}.svg`;
    hornImage.alt = horn;
    audio.src = `assets/audio/${horn}.mp3`;
  });

  volumeSlider.addEventListener('input', function () {
    const vol = parseInt(volumeSlider.value);
    audio.volume = vol / 100;

    if (vol === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume level 0';
    } else if (vol < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume level 1';
    } else if (vol < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume level 2';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }
  });

  playButton.addEventListener('click', function () {
    if (!audio.src || audio.src === window.location.href) return;
    audio.currentTime = 0;
    audio.play();

    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}
