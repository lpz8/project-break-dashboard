const imagenes = [
    'img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg',
    'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg', 'img/10.jpg'
];

function cambiarFondo() {
    const randomImg = imagenes[Math.floor(Math.random() * imagenes.length)];
    document.body.style.backgroundImage = `url('${randomImg}')`;
}

cambiarFondo(); // Esto pone un fondo al inicio
setInterval(cambiarFondo, 15000); // Esto cambia el fondo cada 15 segundos