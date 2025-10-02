document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('clickHere0');
  const message = document.getElementById('message0');
  const musicToggle = document.getElementById('musicToggle');
  const backgroundMusic = document.getElementById('backgroundMusic');
  const musicText = musicToggle.querySelector('.music-text');

  let isPlaying = false;

  button.addEventListener('click', function() {
    message.classList.toggle('show');

    if (message.classList.contains('show')) {
      button.textContent = 'Esconder';
      message.style.display = 'block';
    } else {
      button.textContent = 'Descubra-me';
      message.style.display = 'none';
    }
  });

  musicToggle.addEventListener('click', function() {
    if (isPlaying) {
      backgroundMusic.pause();
      musicToggle.classList.remove('playing');
      musicText.textContent = 'Tocar Música';
      isPlaying = false;
    } else {
      backgroundMusic.play().catch(function(error) {
        console.log('Erro ao reproduzir música:', error);
      });
      musicToggle.classList.add('playing');
      musicText.textContent = 'Pausar Música';
      isPlaying = true;
    }
  });

  backgroundMusic.volume = 0.3;
});
