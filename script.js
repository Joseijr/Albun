async function cargarImagenes() {
  const respuesta = await fetch('imagenes.json');
  const imagenes = await respuesta.json();

  const galeria = document.getElementById('galeria');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox.querySelector('img');

  imagenes.forEach(src => {
    const img = document.createElement('img');
    img.src = src;

    // Si la imagen no se carga, usar recuadro negro
    img.onerror = () => {
      img.remove(); // Quitamos la imagen rota

      const placeholder = document.createElement('div');
      placeholder.classList.add('placeholder');
      galeria.appendChild(placeholder);
    };

    img.addEventListener('click', () => {
      lightboxImg.src = src;
      lightbox.classList.add('active');
    });

    galeria.appendChild(img);
  });

  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });
}

cargarImagenes();
