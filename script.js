async function cargarImagenes() {
    const respuesta = await fetch('imagenes.json');
    const imagenes = await respuesta.json();

    const galeria = document.getElementById('galeria');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox.querySelector('img');

    imagenes.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
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
