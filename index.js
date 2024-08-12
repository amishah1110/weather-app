$(document).ready(function() {
    $('#getWeather').on('click', function() {
        var city = $('#city').val().trim();
        var apiKey = '76fa7f9528e279106d7a9e3eb5a3e550'; // Replace with your actual API key
        var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        $.ajax({
            url: url,
            method: 'GET',
            success: function(data) {
                if (data.cod === '404') {
                    $('#weatherResult').text('City not found!');
                } else {
                    var weather = `
                        <h2>Weather in ${data.name}</h2>
                        <p>Temperature: ${data.main.temp} °C</p>
                        <p>Weather: ${data.weather[0].description}</p>
                        <p>Humidity: ${data.main.humidity}%</p>
                    `;
                    $('#weatherResult').html(weather);
                }
            },
            error: function() {
                $('#weatherResult').text('Error fetching weather data.');
            }
        });
    });
});
