/* 8b386b72e48c2a304f8f25a691112ef3 set to a variable APIKEY */
//  + philadelphia + '&appid=8b386b72e48c2a304f8f25a691112ef3'
var frontUrl = 'https://api.openweathermap.org/data/2.5/forecast?q='
var cityEl = $('#citySearch');
var endUrl = '&appid=8b386b72e48c2a304f8f25a691112ef3'
var searchBtn = $('.btn');

// console.log(city);  

function searchCity(){
    
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
    // TODO: Loop through the data and generate your HTML
    
        var weatherDate = data.list[0].dt;
        var temp = data.list[0].main.temp;
       
        // userContainer.append(users);
        // userContainer.append(url);
        console.log(temp);
        console.log(weatherDate);
    
    
    
    });

}

searchBtn.on('click', searchCity);



// for (var i = 0; i < data.length; i ++) {
//     var weatherDate = document.createElement('h3');
//     var temp = document.createElement('a');
//     weatherDate.textContent = data.list[i].dt;
//     temp.textContent = data.list[i].main.temp;
   
//     // userContainer.append(users);
//     // userContainer.append(url);
//     console.log(temp);
// }


// });