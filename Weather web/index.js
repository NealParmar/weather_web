var inputvalue = document.querySelector('#Input');
var btn = document.querySelector('#submit');
var cityout = document.querySelector('#cityout');
var des = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = "29dc7c9508917e7e0bbcb8799d216acd";

function conversion(val) {
    return (val - 273).toFixed(3);
}

btn.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
        .then(res => res.json())

        .then(data => {
            var nameval = data['name'];
            var descrip = data['weather']['0']['description'];
            var temperature = data['main']['temp'];
            var wndspeed = data['wind']['speed'];

            cityout.innerHTML = `Weather of <span>${nameval}</span>`;
            des.innerHTML = `Sky Condition <span>${descrip}</span>`;
            temp.innerHTML = `Temperature is <span>${conversion(temperature)}C</span>`;
            wind.innerHTML = `Wind speed is <span>${wndspeed}</span>`;

        })

        .catch(err => alert('You have entered wrong city'));
})
