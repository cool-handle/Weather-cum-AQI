
import data from './current.city.list.json'
import axios from 'axios'

var india_list = data.filter((obj) =>{
    return obj.country === "IN"
    }
)

var beforesort = india_list.map((element) => {
    let name=element.name
    let code=element.id
    
    return(
        {name, code}
    )
})

export const fetch = beforesort.sort(function(a,b){
    var x= a.name.toLowerCase()
    var y= b.name.toLowerCase()
    return x>y? 1 : -1
});

export const dataToShow1 = async (code) => {

    var start = "https://api.openweathermap.org/data/2.5/weather?id="
    var api = "&units=metric&appid=1f812bf5bffdf73e8040a450bc10200a"
    var URL = `${start}${code}${api}`
    var datarecieved = await axios.get(`${URL}`)
    var long = datarecieved.data.coord.lon
    var lat = datarecieved.data.coord.lat
    var startA = "https://api.openweathermap.org/data/2.5/onecall?lat="
    
    var URL_range = `${startA}${lat}&lon=${long}${api}`
    // https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&units=metric&appid=1f812bf5bffdf73e8040a450bc10200a
    var rangejson = await axios.get(`${URL_range}`)
    var forecast = rangejson.data.daily
    var forecastmax = []
    var forecastmin = []
    for(var i=0; i<7 ; i++){
        forecastmin.push(forecast[i+1].temp.min)
        forecastmax.push(forecast[i+1].temp.max)
    }
    //var waterdata = await axios.get(`http://api.airpollutionapi.com/1.0/aqi?lat=${lat}&lon=${long}&APPID=cgs822luim0mi45psso3bdk4tf`)
    // console.log(waterdata)
    // console.log(waterdata.data.data.text)
    
    let temp=datarecieved.data.main.temp
    let description= datarecieved.data.weather[0].description
    let humidity = datarecieved.data.main.humidity
    let sealevel = datarecieved.data.main.sea_level
    let wind = datarecieved.data.wind.speed
    let pressure = datarecieved.data.main.pressure
    let lastUpdated = datarecieved.data.dt
    let sunrise= datarecieved.data.sys.sunrise
    let sunset= datarecieved.data.sys.sunset
    let wikilink = `http://en.wikipedia.org/wiki/${datarecieved.data.name}`
    
    // let text= waterdata.data.data.text
    // let alert = waterdata.data.data.alert
    // let color = waterdata.data.data.color
    // let pm2 = waterdata.data.data.aqiParams[1]
    // let pm10= waterdata.data.data.aqiParams[2]
    // let o3 = waterdata.data.data.aqiParams[0]

    return ({temp,description,humidity,sealevel,wind,
        pressure,lastUpdated,sunrise,sunset, wikilink,forecastmin,forecastmax
        // text, alert, pm10, pm2, o3,color
    });
}
