document.addEventListener('click', () => {
    getImages();
  });

  async function getImages() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      const data = await response.json(); 
      affiche(data);
    } catch (error) {
      console.error('error', error);
    }
  }

  function affiche(data) {
    const container = document.getElementById('imageContainer');

    for (let i = 0; i < 10; i++) {
      const img = document.createElement('img');
      img.src = data[i].url;
      img.alt = data[i].title;
      container.appendChild(img);
    }
  }