
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

export const dataToShow1 = async (code,name) => {

    var start = "https://api.openweathermap.org/data/2.5/weather?id="
    var api = "&units=metric&appid=1f812bf5bffdf73e8040a450bc10200a"
    var URL = `${start}${code}${api}`
    
    var datarecieved = await axios.get(`${URL}`)
    console.log(datarecieved)
    var long = datarecieved.data.coord.lon
    var lat = datarecieved.data.coord.lat
    var startA = "https://api.openweathermap.org/data/2.5/onecall?lat="
    
    var URL_range = `${startA}${lat}&lon=${long}${api}`
    // https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&units=metric&appid=1f812bf5bffdf73e8040a450bc10200a
    console.log(URL_range)
    var rangejson = await axios.get(`${URL_range}`)
    //console.log(rangejson)
    var forecast = rangejson.data.daily
    var forecastmax = []
    var forecastmin = []
    for(var i=0; i<7 ; i++){
        forecastmin.push(forecast[i+1].temp.min)
        forecastmax.push(forecast[i+1].temp.max)
    }
    var humidityfor = []
    for(var i=0; i<7; i++){
        humidityfor.push(forecast[i+1].humidity)
    }
    var weatherdis = []
    function capitalize(words) {
        var separateWord = words.toLowerCase().split(' ');
        for (var i = 0; i < separateWord.length; i++) {
           separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
           separateWord[i].substring(1);
        }
        return separateWord.join(' ');
     }
    for(var i=0 ; i<7 ; i++){
        var s = ""
        s = forecast[i+1].weather[0].main+ " - " + capitalize(forecast[i+1].weather[0].description)
        //console.log(s)
        weatherdis.push(s)
    }
    var cityconfirm, cityactive, citydeath, cityrecovered
    var stateactive,statedeath, stateconfirm,statename,staterecovered
    var covid = await axios.get(`https://api.covidindiatracker.com/state_data.json`)
    
    //https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise
    //https://api.covid19india.org/state_district_wise.json
    console.log(covid)
    for(var i=0; i<covid.data.length; i++){
        for(var j = 0 ; j<covid.data[i].districtData.length ; j++){
            if(covid.data[i].districtData[j].id == name){
                //cityconfirm = covid.data[i].districtData[j].confirmed
                stateactive = covid.data[i].active
                staterecovered = covid.data[i].recovered
                statedeath = covid.data[i].deaths
                stateconfirm = covid.data[i].confirmed
                statename = covid.data[i].state
                break;
            }
        }
    }
    var covidcity = await axios.get(`https://api.covid19india.org/state_district_wise.json`)
    cityconfirm= covidcity.data[`${statename}`].districtData[`${name}`].confirmed
    cityactive = covidcity.data[`${statename}`].districtData[`${name}`].active
    citydeath = covidcity.data[`${statename}`].districtData[`${name}`].deceased
    cityrecovered = covidcity.data[`${statename}`].districtData[`${name}`].recovered

    var coviddatastate = [stateconfirm,stateactive,staterecovered]
    var coviddatacity = [cityconfirm,cityactive,cityrecovered]
    //  console.log(cityconfirm)
    // console.log(staterecovered)
    // console.log(staterecovered)
    // console.log(statedeath)

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
    let wikilink = `http://en.wikipedia.org/wiki/${name}`
    //console.log(datarecieved.data.name)
    // var urlforapi = "https://www.triposo.com/api/20200803/location.json?id=London&token=3bm9eetdtd9a5jrmuamlctegyjji5w2d"

    // var poi_data = await axios.get(`${urlforapi}`)
   
    // var resultdata = poi_data.result
    // var image1 =[]
    // var image2 = []
    // var image3 = []
    // if(resultdata.length!=0){
    //     image1.push(resultdata[0].images[0].source_url)
    //     image1.push(resultdata[0].images[0].caption)
    // }

    // let text= waterdata.data.data.text
    // let alert = waterdata.data.data.alert
    // let color = waterdata.data.data.color
    // let pm2 = waterdata.data.data.aqiParams[1]
    // let pm10= waterdata.data.data.aqiParams[2]
    // let o3 = waterdata.data.data.aqiParams[0]

    return ({temp,description,humidity,sealevel,wind,
        pressure,lastUpdated,sunrise,sunset, wikilink,forecastmin,forecastmax,humidityfor,weatherdis, coviddatacity,coviddatastate
        // ,image1
        // text, alert, pm10, pm2, o3,color
    });
}
