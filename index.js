const weatherForm = document.getElementById('weatherForm');
const cityInput = document.getElementById('cityInput');
const weatherInfo = document.getElementById('weatherInfo');

weatherForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const city = cityInput.value;
  const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('City not found');
    }
    const data = await response.json();
    const { main, weather } = data;
    weatherInfo.innerHTML = `
      <h2>Weather in ${city}</h2>
      <p>Temperature: ${main.temp}°C</p>
      <p>Description: ${weather[0].description}</p>
    `;
  } catch (error) {
    console.error('Error fetching weather:', error.message);
    weatherInfo.innerHTML = `<p>${error.message}</p>`;
  }
});
