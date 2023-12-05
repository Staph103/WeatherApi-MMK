/* 8b386b72e48c2a304f8f25a691112ef3 set to a variable APIKEY */
//  + philadelphia + '&appid=8b386b72e48c2a304f8f25a691112ef3'
var frontUrl = 'https://api.openweathermap.org/data/2.5/forecast?q='
var cityEl = $('#citySearch');
var endUrl = '&appid=8b386b72e48c2a304f8f25a691112ef3&units=imperial'
var searchBtn = $('.s-btn');
var cardSlot = $('cardSlot')
var fIcon = 'https://openweathermap.org/img/wn/'



// console.log(city);  




function searchCity() {

    let city = cityEl.val()
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
            // TODO: Loop through the data and generate your HTML
            for (var i = 0; i < data.list.length; i = i + 8 ) {
                 //= document.createElement('h3');
                 //= document.createElement('p');
                var weatherDate = data.list[i].dt_txt;
                var temp = data.list[i].main.temp;
                var windInfo = data.list[i].wind.speed;
                var humidity = data.list[i].main.humidity;
                var iconCode =  data.list[i].weather[0].icon;
                var weatherIcon = fIcon + iconCode + ".png";
                console.log(weatherIcon);

                var cardInfo = $('<div>');
                var weatherDateEl = $('<p>').text(weatherDate)
                var tempEl = $('<p>').text(temp)
                var windInfoEl = $('<p>').text(windInfo)
                var humidityEl = $('<p>').text(humidity)
                var weatherIconEl = $('<img>');
    
                cardInfo.append(weatherDateEl)
                cardInfo.append(tempEl)
                cardInfo.append(windInfoEl)
                cardInfo.append(humidityEl)
                cardInfo.append(weatherIconEl)
                // cardSlot.addClass('card row')
                cardSlot.append(cardInfo)
                

                // userContainer.append(users);
                // userContainer.append(url);
                console.log(temp);
                console.log(weatherDate);
                console.log(windInfo);
                console.log(humidity);
            }
        

        


    // userContainer.append(users);
    // userContainer.append(url);
    // console.log(temp);
    // console.log(weatherDate);



    });
    // get nearby values of the description in jQuery
    //  var text = $(this).siblings('.description').val();
    //  // get the id attribute of the parent div element
    //  var timeKey = $(this).parent().attr('id');
    //  localStorage.setItem(timeKey, text);
}

searchBtn.on('click', searchCity);



// var weatherDate = data.list[0].dt;
// Var temp = data.list[0].main.temp