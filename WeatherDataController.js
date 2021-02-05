function tryGetRequest(city){
    if(city == "" || city == " "){

       showAlert("Error Occurred","You must enter a valid city name","error");
        return;
    }

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8220b0180ac4a4f28505a8eed76e8d93`)
    .then(res => res.json())
    .then(data=>{

        if(data.cod == "404"){
            showAlert("City Not Found","Please check your city name and try again","error");
            return;
        }
        showOnUI(data.name,data.main.temp, data.weather[0].main);
    });
}

function showOnUI(name, temp, des){
    document.getElementById("city-name").innerText = name;
    document.getElementById("temp").innerText = temp;
    document.getElementById("description").innerText = des;
}

function showAlert(title,message,type){
    swal({
        title: title,
        text: message,
        icon: type,
        button: "Try Again!",

      });
}

tryGetRequest("Dhaka");

