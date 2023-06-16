const input = document.querySelector('input');
const games = document.querySelectorAll('#games img');

input.addEventListener('input', () => {
  const searchTerm = input.value.toLowerCase();
  games.forEach(game => {
    if (game.alt.toLowerCase().includes(searchTerm)) {
      game.style.display = 'block';
    } else {
      game.style.display = 'none';
    }
  });
});

// Code to open game links in a new tab and create an iframe
const gameLinks = document.querySelectorAll('#games a');

gameLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const gameUrl = link.getAttribute('href');

    // Open the game link in a new tab
    const newTab = window.open('about:blank', '_blank');
    newTab.document.write(`
      <style>
        html, body {
          margin: 0;
          padding: 0;
          overflow: hidden;
        }

        iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }
      </style>
      <iframe src="${gameUrl}"></iframe>
    `);
  });
});
