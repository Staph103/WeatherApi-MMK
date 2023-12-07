/* 8b386b72e48c2a304f8f25a691112ef3 set to a variable APIKEY */
//  + philadelphia + '&appid=8b386b72e48c2a304f8f25a691112ef3'
var frontUrl = 'https://api.openweathermap.org/data/2.5/forecast?q='
var cityEl = $('.citySearch');
var endUrl = '&appid=8b386b72e48c2a304f8f25a691112ef3&units=imperial'
var searchBtn = $('.s-btn');
var cardSlot = $('.cardSlot')
var fIcon = 'https://openweathermap.org/img/wn/'




function searchCity() {
    cardSlot.empty();

    let city = cityEl.val();
    historyArray.push(city);
    var fullUrl = frontUrl + city + endUrl;
    // let fullUrl = `${frontUrl+city+endUrl}`
    localStorage.setItem("cities", JSON.stringify(historyArray));

    console.log(city);
    console.log(fullUrl);

    fetch(fullUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // Use the console to examine the response
            var fweatherDate = data.list[0].dt_txt;
            // weatherDate = dayjs().format("D MM YY");
            var ftemp = data.list[0].main.temp;
            var fwindInfo = data.list[0].wind.speed;
            var fhumidity = data.list[0].main.humidity;
            var ficonCode = data.list[0].weather[0].icon;
            var fweatherIcon = fIcon + ficonCode + "@4x.png";

            // var day1El = $('#day1');    
            var fweatherIconEl = $('img').attr('src', fweatherIcon);
            var ftempEl = $('#test').text("Temp: " + ftemp + " °F")
            var fwindInfoEl = $('#test2').text("Wind: " + fwindInfo + " MPH")
            var fhumidityEl = $('#test3').text("Humidity: " + fhumidity + " %")
            var h2El = $('#h2').text(fweatherDate);
            var fCityName = data.city.name;
            var cityName = $("#cityName").text(fCityName)
            
            // TODO: Loop through the data and generate your HTML
            for (let index = 0; index < data.list.length; index = index + 9) {


                var weatherDate = data.list[index].dt_txt;
                // weatherDate = dayjs().format("D MM YY");
                var temp = data.list[index].main.temp;
                var windInfo = data.list[index].wind.speed;
                var humidity = data.list[index].main.humidity;
                var iconCode = data.list[index].weather[0].icon;
                var weatherIcon = fIcon + iconCode + "@2x.png";
                console.log(weatherIcon);

                // var fiveDaysEl = $('#fiveDays');
                // for (let i = 0; index < fiveDaysEl.children().length; i++) {
                //     var text = fiveDaysEl[i];

                // }
                var cardInfo = $(`<li class="card col-lg-2 m-2"></li>`);
                var h4El = $("<h4>");
                h4El.text(weatherDate)
                var weatherIconEl = $('<img>').attr('src', weatherIcon);
                var tempEl = $('<p>').text("Temp: " + temp + " °F")
                var windInfoEl = $('<p>').text("Wind: " + windInfo + " MPH")
                var humidityEl = $('<p>').text("Humidity: " + humidity + " %")
                var cardContainer = $('.info');
                var cardDiv = $('<li>');
                // cardSlot.addClass('card row')

                console.log(weatherDate);
                console.log(temp);
                console.log(windInfo);
                console.log(humidity);

                // while (cardSlot.firstChild) {
                console.log("im in a loop")

                // cardDiv.append(h2El)
                // cardDiv.append(weatherIconEl);
                // cardDiv.append(tempEl);
                // cardDiv.append(windInfoEl);
                // cardDiv.append(humidityEl);


                cardInfo.append(h4El);
                cardInfo.append(weatherIconEl);
                cardInfo.append(tempEl);
                cardInfo.append(windInfoEl);
                cardInfo.append(humidityEl);
                // cardContainer.append(cardDiv)
                cardSlot.append(cardInfo);
            }

            // }

            // °F




        });


}
var historyArray = []
function searchedCities(city) {
    var showCities = JSON.parse(localStorage.getItem("cities"));
    console.log(showCities);
}
searchedCities();

searchBtn.on('click', searchCity);



