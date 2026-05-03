// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const textArea = document.getElementById('text-to-speak');
  const talkButton = document.querySelector('#explore button');
  const faceImage = document.querySelector('#explore img');

  function populateVoices() {
    const voices = speechSynthesis.getVoices();
    while (voiceSelect.options.length > 1) {
      voiceSelect.remove(1);
    }
    voices.forEach(function (voice) {
      const option = document.createElement('option');
      option.value = voice.name;
      option.textContent = voice.name + ' (' + voice.lang + ')';
      voiceSelect.appendChild(option);
    });
  }

  populateVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  }

  talkButton.addEventListener('click', function () {
    const text = textArea.value;
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);

    const selectedVoiceName = voiceSelect.value;
    if (selectedVoiceName !== 'select') {
      const voices = speechSynthesis.getVoices();
      const voice = voices.find(v => v.name === selectedVoiceName);
      if (voice) utterance.voice = voice;
    }

    utterance.onstart = function () {
      faceImage.src = 'assets/images/smiling-open.png';
      faceImage.alt = 'Smiling face open';
    };

    utterance.onend = function () {
      faceImage.src = 'assets/images/smiling.png';
      faceImage.alt = 'Smiling face';
    };

    speechSynthesis.speak(utterance);
  });
}
