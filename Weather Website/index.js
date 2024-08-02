var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik ="57a34906f98f050a73a56685152da7a9"
function convertion(val)
{
    return (val - 273).toFixed(3)
}

btn.addEventListener('click', function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid=' +apik)
    .then(res => res.json())

    .then(data =>
    {
        var nameval = data['name']
        var descrip = data['weather']['0']['description']
        var tempature = data['main']['temp']
        var windspeed = data['wind']['speed']

        city.innerHTML=`Weather of <span>${nameval}<span>`
        temp.innerHTML= `Tempature: <span>${ convertion(tempature)} c</span>`
        description.innerHTML = `sky condition: <span>${ descrip}<span>`
        wind.innerHTML= `wind speed: <span>${windspeed} km/hr<span>`


    })
    .catch(err => alert('You entered wrong city name'))
    
})
