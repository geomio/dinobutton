import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DinoWord from './dino-word.js'

function clearFields() {
  $('.dinoWord').text("");
}

$(document).ready(function () {
  $('#dinoButton').click(function () {
    clearFields();
    let promise = DinoWord.getDinoName();
    promise.then(function (response) {
      const body = JSON.parse(response);
      let wordBody = body[0][0].toLowerCase();
      $('.dinoWord').text(wordBody)
    }, function (error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});


// import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';
// import WeatherService from './weather-service.js'

// function clearFields() {
//   $('#location').val("");
//   $('.showErrors').text("");
//   $('.showHumidity').text("");
//   $('.showTemp').text("");
// }

// function getElements(response) {
//   if (response.main) {
//     $('.showHumidity').text(`The humidity in ${response.name} is ${response.main.humidity}%`);
//     $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
//     let fahrenheit = (response.main.temp - 273.15) * (9 / 5) + 32;
//     $('.showNewTemp').text('The temperature in Fahrenheit is:' + fahrenheit);
//   } else {
//     $('.showErrors').text(`There was an error processing your request: ${response.message}`);
//   }
// }

// async/*Asynchronous means the code will run later. */ function makeApiCall(city) {
//   const response = await WeatherService.getWeather(city);
//   getElements(response);
// }

// $(document).ready(function () {
//   $('#weatherLocation').click(function () {
//     let city = $('#location').val();
//     clearFields();
//     makeApiCall(city)
//   });
// });

