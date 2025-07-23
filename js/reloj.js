function actualizarReloj() {
    const ahora = new Date();
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();
    let dia = ahora.getDate();
    let mes = ahora.getMonth() + 1;
    let año = ahora.getFullYear();

    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    let frase = '';
    if (horas >= 0 && horas < 7) frase = 'Es hora de descansar. Apaga y sigue mañana';
    else if (horas >= 7 && horas < 12) frase = 'Buenos días, desayuna fuerte y a darle al código';
    else if (horas >= 12 && horas < 14) frase = 'Es un rato más pero no olvides comer';
    else if (horas >= 14 && horas < 16) frase = 'Espero que hayas comido';
    else if (horas >= 16 && horas < 18) frase = 'Buenas tardes, el último empuje';
    else if (horas >= 18 && horas < 22) frase = 'Esto ya son horas extras... piensa en parar pronto';
    else frase = 'Buenas noches, es hora de pensar en parar y descansar';

    document.getElementById('reloj').innerHTML = `${horas}:${minutos}:${segundos} ${dia}/${mes}/${año} - ${frase}`;
}

function actualizarRelojAnalogo() {
    const ahora = new Date();
    const horas = ahora.getHours() % 12;
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();

    document.querySelector('.hora').style.transform = `rotate(${(horas * 30 + minutos / 2)}deg)`;
    document.querySelector('.minuto').style.transform = `rotate(${(minutos * 6)}deg)`;
    document.querySelector('.segundo').style.transform = `rotate(${(segundos * 6)}deg)`;
}

setInterval(actualizarReloj, 1000);
setInterval(actualizarRelojAnalogo, 1000);
actualizarReloj();
actualizarRelojAnalogo();