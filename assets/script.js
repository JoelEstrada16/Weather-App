let apiKey = '95f31e90e46f49d2648cf7cbf3e16363'
let cityName = document.querySelector('.cityName')
let lgCard = document.querySelector('.recent')
let inputGrp = document.querySelector('.input-group')
let currentName = document.querySelector('.city-name')
let tempOne = document.querySelector('.temp')
let windOne = document.querySelector('.wind')
let HumidityOne = document.querySelector('.humidity')


let history = JSON.parse(localStorage.getItem('Weather')) || []

for(let i = 0; i < history.length; i++){
    let cityBtn = document.createElement('button')
    let citySv = cityBtn.textContent = history[i].city
    cityBtn.setAttribute('type', 'button')
    cityBtn.setAttribute('class', 'cityBtn')
    cityBtn.setAttribute('id', 'style')

    inputGrp.appendChild(cityBtn)
}

function submit(event){
    event.preventDefault()
    let cityNameVal = cityName.value
    let apiUrlweath = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${cityNameVal}&units=imperial`
    let searchBtnEl = document.createElement('button')
    let citySv = searchBtnEl.textContent = cityNameVal
    searchBtnEl.setAttribute('type', 'button')
    searchBtnEl.setAttribute('class', 'cityBtn')
    searchBtnEl.setAttribute('id', 'style')
    inputGrp.appendChild(searchBtnEl)
    let searchVal = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${citySv}&units=imperial`

    fetch(apiUrlweath)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            lgCard.innerHTML = ''
            let imgIcon = document.createElement('img')
            let icon = data.weather[0].icon
            let iconImg = `https://openweathermap.org/img/wn/${icon}.png`
            imgIcon.setAttribute('src', iconImg)
            currentName.textContent = data.name
            tempOne.textContent = `Temp: ${data.main.temp} `
            windOne.textContent = `Wind: ${data.wind.speed} MPH `
            HumidityOne.textContent = `Humidity: ${data.main.humidity}% `

            currentName.appendChild(imgIcon)
            lgCard.appendChild(currentName)
            lgCard.appendChild(tempOne)
            lgCard.appendChild(windOne)
            lgCard.appendChild(HumidityOne)

            let obj = {
                city: citySv,
                temp: data.main.temp,
                wind: data.wind.speed,
                humidity: data.main.humidity,
                icon: iconImg,
            }
            
            let history = JSON.parse(localStorage.getItem('Weather')) || []
            history.push(obj)
            localStorage.setItem('Weather', JSON.stringify(history))
            let lat = data.cord.lat
            let lon = data.cord.lon
            let apiUrlfore = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`

            fetch(apiUrlfore)
                .then(function (response){
                    return response.json();
                })
                .then(function(data){
                    let infoArr = []
                    for (let i = 0; i < data.list.length; i++){
                        if(i % 8 === 0){
                            let index = data.list[i]
                            infoArr.push(index)
                        }
                    }
                    function update(){
                        let time = dayjs()
                        let plus = todaysTime.add((i + 1), 'day')
                        document.querySelector(`#plus-${[i]}`).textContent = plus.format('MM/DD/YYYY');
                        
                    }
                })
        })
}   