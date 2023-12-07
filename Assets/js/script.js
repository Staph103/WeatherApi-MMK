//Variable declarations
var frontUrl = 'https://api.openweathermap.org/data/2.5/forecast?q='
var cityEl = $('.citySearch');
var endUrl = '&appid=8b386b72e48c2a304f8f25a691112ef3&units=imperial'
var searchBtn = $('.s-btn');
var cardSlot = $('.cardSlot')
var fIcon = 'https://openweathermap.org/img/wn/'



//function to fetch and retreive api data as a JSON object to be mainipulated to display information
function searchCity() {
    cardSlot.empty();
    //get the value of the city inputed and adds it to an empty array
    let city = cityEl.val();
    historyArray.push(city);

    var fullUrl = frontUrl + city + endUrl;

    //sets the inputed values of city into local storage 
    localStorage.setItem("cities", JSON.stringify(historyArray));



    fetch(fullUrl)
        .then(function (response) {
            return response.json();
        })
        //after fetching the data and setting it to a JSON these are variable declarition for the api data for the first day
        .then(function (data) {

            var fweatherDate = data.list[0].dt_txt;
            var ftemp = data.list[0].main.temp;
            var fwindInfo = data.list[0].wind.speed;
            var fhumidity = data.list[0].main.humidity;
            var ficonCode = data.list[0].weather[0].icon;
            var fweatherIcon = fIcon + ficonCode + "@4x.png";

            // sets those variables to slected elements and ids   
            var fweatherIconEl = $('img').attr('src', fweatherIcon);
            var ftempEl = $('#test').text("Temp: " + ftemp + " °F")
            var fwindInfoEl = $('#test2').text("Wind: " + fwindInfo + " MPH")
            var fhumidityEl = $('#test3').text("Humidity: " + fhumidity + " %")
            var h2El = $('#h2').text(fweatherDate);
            var fCityName = data.city.name;
            var cityName = $("#cityName").text(fCityName)

            //loops through the data for the length of list in the data in incriments of 8 because the data shows every 3 hours
            for (let index = 0; index < data.list.length; index = index + 8) {

                //variable declarition for the 5 day forecast with index instead of 0 to increase by 8
                var weatherDate = data.list[index].dt_txt;
                var temp = data.list[index].main.temp;
                var windInfo = data.list[index].wind.speed;
                var humidity = data.list[index].main.humidity;
                var iconCode = data.list[index].weather[0].icon;
                var weatherIcon = fIcon + iconCode + "@2x.png";

                console.log(weatherDate);
                var cardInfo = $(`<li class="card col-lg-2 m-2"></li>`);
                var h4El = $("<h4>");
                h4El.text(weatherDate)
                var weatherIconEl = $('<img>').attr('src', weatherIcon);
                var tempEl = $('<p>').text("Temp: " + temp + " °F")
                var windInfoEl = $('<p>').text("Wind: " + windInfo + " MPH")
                var humidityEl = $('<p>').text("Humidity: " + humidity + " %")
                var cardContainer = $('.info');
                var cardDiv = $('<li>');

                //appends created elements to the page 
                cardInfo.append(h4El);
                cardInfo.append(weatherIconEl);
                cardInfo.append(tempEl);
                cardInfo.append(windInfoEl);
                cardInfo.append(humidityEl);
                cardSlot.append(cardInfo);
            }

        });


}
//empty array to hold city searched values in local storage
var historyArray = []

//gets the vaule from local storage
function searchedCities(city) {

    var showCities = JSON.parse(localStorage.getItem("cities"));
    
}

//calls function 
searchedCities();
//event listener on search button to call search city function
searchBtn.on('click', searchCity);



