function generarContrasena() {
    const longitud = document.getElementById('longitud').value;
    const mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const minusculas = 'abcdefghijklmnopqrstuvwxyz';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    const todos = mayusculas + minusculas + numeros + simbolos;

    let contrasena = '';
    contrasena += mayusculas.charAt(Math.floor(Math.random() * mayusculas.length));
    contrasena += minusculas.charAt(Math.floor(Math.random() * minusculas.length));
    contrasena += numeros.charAt(Math.floor(Math.random() * numeros.length));
    contrasena += simbolos.charAt(Math.floor(Math.random() * simbolos.length));

    for (let i = contrasena.length; i < longitud; i++) {
        contrasena += todos.charAt(Math.floor(Math.random() * todos.length));
    }

    contrasena = contrasena.split('').sort(() => Math.random() - 0.5).join('');
    document.getElementById('resultado').textContent = contrasena;
}