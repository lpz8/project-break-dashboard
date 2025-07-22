const imagenes = [
    './assets/img/1.jpg', './assets/img/2.jpg', './assets/img/3.jpg', './assets/img/4.jpg', './assets/img/5.jpg',
    './assets/img/6.jpg', './assets/img/7.jpg', './assets/img/8.jpg', './assets/img/9.jpg', './assets/img/10.jpg'
];

function cambiarFondo() {
    const randomImg = imagenes[Math.floor(Math.random() * imagenes.length)];
    document.body.style.backgroundImage = `url('${randomImg}')`;
}

cambiarFondo(); // Esto pone un fondo al inicio
setInterval(cambiarFondo, 15000); // Esto cambia el fondo cada 15 segundos