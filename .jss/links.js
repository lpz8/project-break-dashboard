function anadirLink() {
    const titulo = document.getElementById('titulo').value;
    const enlace = document.getElementById('enlace').value;
    if (titulo && enlace) {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${enlace}" target="_blank">${titulo}</a> <button onclick="this.parentElement.remove()">Eliminar</button>`;
        document.getElementById('lista').appendChild(li);
        localStorage.setItem(titulo, enlace);
        document.getElementById('titulo').value = '';
        document.getElementById('enlace').value = '';
    }
}

// Cargar links al iniciar
window.onload = () => {
    for (let i = 0; i < localStorage.length; i++) {
        const titulo = localStorage.key(i);
        const enlace = localStorage.getItem(titulo);
        const li = document.createElement('li');
        li.innerHTML = `<a href="${enlace}" target="_blank">${titulo}</a> <button onclick="this.parentElement.remove(); localStorage.removeItem('${titulo}')">Eliminar</button>`;
        document.getElementById('lista').appendChild(li);
    }
};