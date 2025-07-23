const API_KEY = '79b300adb99d4164911193526252107'; // Instrucción adicional: Reemplaza 'TU_API_KEY' con tu clave de WeatherAPI
const ciudad = 'Madrid'; // Instrucción adicional: Cambia 'Madrid' por tu ciudad

function cargarClima() {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${ciudad}&days=1&aqi=no`)
        .then(response => response.json())
        .then(data => {
            const clima = data.current;
            document.getElementById('clima').innerHTML = `
                <p>Ciudad: ${ciudad}</p>
                <p>Estado: ${clima.condition.text}</p>
                <p>Temperatura: ${clima.temp_c}°C</p>
                <p>Precipitación: ${clima.precip_mm}mm</p>
                <p>Humedad: ${clima.humidity}%</p>
                <p>Viento: ${clima.wind_kph}km/h</p>
            `;
        })
        .catch(error => console.error('Error:', error));
}