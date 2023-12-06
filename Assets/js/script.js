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
    var fullUrl = frontUrl + city + endUrl;
    // let fullUrl = `${frontUrl+city+endUrl}`
   

    console.log(city);
    console.log(fullUrl);

    fetch(fullUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // Use the console to examine the response
            console.log(data);
            console.log(data.list.length);
            var day1El = $('#day1');    

            // TODO: Loop through the data and generate your HTML
            for (let index = 0; index < data.list.length; index = index + 8 ){
                


//                 var articlesDiv = document.getElementById("articles");
// var headerDiv = document.getElementById("header");

// // Change style by accessing style object's properties
// articlesDiv.children[0].children[1].style.fontSize = "50px";
// headerDiv.children[0].style.color = "white";
// headerDiv.children[1].style.color = "white";

                
                var weatherDate = data.list[index].dt_txt;
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
                var tempEl = $('<p>').text("Temp: " + temp + "°F")
                var windInfoEl = $('<p>').text("Wind: " + windInfo + "MPH")
                var humidityEl = $('<p>').text("Humidity: " + humidity + "%")
                

                // cardSlot.addClass('card row')
                
                console.log(weatherDate);
                console.log(temp);
                console.log(windInfo);
                console.log(humidity);

                // while (cardSlot.firstChild) {
                    console.log("im in a loop")
                
                    cardInfo.append(h4El);
                    cardInfo.append(weatherIconEl);
                    cardInfo.append(tempEl);
                    cardInfo.append(windInfoEl);
                    cardInfo.append(humidityEl);
                
                    cardSlot.append(cardInfo);
            }
            
            // }

            // °F




        });
        

}
function searchedCities(city){
    var savedList = JSON.parse(localStorage.getItem("searches")) || [];
    console.log(savedList); 

    savedList.push(city);

    localStorage.setItem("searches",JSON.stringify(savedList));
    console.log(savedList);
}


searchBtn.on('click', searchCity);



