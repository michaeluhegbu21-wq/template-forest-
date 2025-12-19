document.addEventListener('DOMContentLoaded', function() {
  const video = document.getElementById('heroVideo');
  const sources = video.getElementsByTagName('source');

  // Loop through all source tags and change data-src to src
  for (let i = 0; i < sources.length; i++) {
    const dataSrc = sources[i].getAttribute('data-src');
    if (dataSrc) {
      sources[i].setAttribute('src', dataSrc);
    }
  }

  // Load the video element after the sources are set
  video.load(); 
});
