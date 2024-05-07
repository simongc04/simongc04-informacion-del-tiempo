document.getElementById("search-button").addEventListener("click", consultarAPI);

function consultarAPI() {
    let xhr, city, apikey, url;
   
    city = document.getElementById("place-input").value;
    apikey = "c3cc72a955e372602ec48bb56fc339bf";
    url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + 
    "&appid=" + apikey + "&units=metric";
    xhr = new XMLHttpRequest();
    xhr.onload = function(){
        console.log('Ok');
        mostrarInformacion(this);
    };
    xhr.open("GET", url);
    xhr.send();
}

function mostrarInformacion(xhr){
    let obj, city, temp, weatherDescription,countryCode, codigoHTML;
    obj = JSON.parse(xhr.responseText);
    if (obj.weather && obj.weather.length > 0) {
        city = obj.name;
        countryCode = obj.sys.country;
        temp = obj.main.temp;
        weatherDescription = obj.weather[0].description; 
        
        codigoHTML = "<div class='card'>";
        codigoHTML += "<h2 class='city-name'>" + city + "<sup>" + countryCode + "</sup></h2>"; // Incluir el código del país
        codigoHTML += "<p class='city-temp'>" + temp + "°C</p>";
        codigoHTML += "<figure>";
        codigoHTML += "<img src='https://openweathermap.org/img/wn/" + obj.weather[0].icon + ".png' alt=''>";
        codigoHTML += "<figcaption>" + weatherDescription + "</figcaption>";
        codigoHTML += "</figure>";
        codigoHTML += "</div>";

        document.getElementById("cards").innerHTML = codigoHTML; 
    } 
}
