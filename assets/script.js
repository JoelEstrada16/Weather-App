var cityName = ""

var apiUrlfore = "https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}"
var apiUrlweath = "https://api.openweathermap.org/data/2.5/weather?appid=" + cityName + "${apiKey}&q=${city}&units=imperial"

fetch()
