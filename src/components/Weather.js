import React, { Component } from 'react'
import ChooseCountry from './ChooseCountry'
import {dataToShow1} from './fetch'
import Temp from './Temp'
import Description from './Description'
import LastUpdated from './LastUpdated'
import Sunrise from './Sunrise'
import Sunset from './Sunset'
import Humidity from './Humidity'
import Sealevel from './Sealevel'
import Wind from './Wind'
import Pressure from './Pressure'
import WikiLink from './WikiLink'
import MyChart from './Chart'
import HumidityChart from './HumidityChart'
import './styles.css'
import Text from './Text'
import Alert from './Alert'
import Pm10 from './Pm10'
import Pm2 from './Pm2'
import O3 from './O3'
import Weatherforecast from './Weatherforcast'
import Covid from './Covid'
import Covidcity from './Covidcity'
class Weather extends Component {
    constructor(props){
        super(props)
        this.state ={
            selected : [],
            temperature : {},
            loading : false
        }
    }
    countryHandler= async (selectedData) => {
        console.log(selectedData[0].name)
        const dataToShow = await dataToShow1(selectedData[0].code,selectedData[0].name)
        
        this.setState({
            loading : true,
            selected: selectedData,
            temperature : dataToShow
        })
    }
    render() {
        
        return (
            <div>
                <h1 className="welcome">Welcome User!</h1>
                <ChooseCountry countryHandler = { this.countryHandler } />
                <Temp temp= {this.state.temperature.temp} />
                <Description description= {this.state.temperature.description} />
                <LastUpdated lastupdated= {this.state.temperature.lastUpdated} />
                <Humidity humidity={this.state.temperature.humidity} />
                {/* <Sealevel sealevel= {this.state.temperature.sealevel} /> */}
                <Wind wind= {this.state.temperature.wind} /> 
                <Pressure pressure={this.state.temperature.pressure} />
                <Sunrise sunrise= {this.state.temperature.sunrise} />
                <Sunset sunset= {this.state.temperature.sunset} />
                <WikiLink wikilink= {this.state.temperature.wikilink} />
                <MyChart chart= {this.state.temperature.forecastmin} chart1={this.state.temperature.forecastmax} days = {this.state.temperature.futuredays} />
                <HumidityChart chart = {this.state.temperature.humidityfor} days = {this.state.temperature.futuredays} />
                <Weatherforecast data = {this.state.temperature.weatherdis} day = {this.state.temperature.futuredays}/>
                <Covid data= {this.state.temperature.coviddatastate}/>
                <Covidcity data= {this.state.temperature.coviddatacity}/>
                {/* <Text text={this.state.temperature.text} color= {this.state.temperature.color} />
                <Alert alert={this.state.temperature.alert} color= {this.state.temperature.color} />
                <Pm2 pm2={this.state.temperature.pm2} loading={this.state.loading} />
                <Pm10 pm10 = {this.state.temperature.pm10} loading={this.state.loading} />
                <O3 o3= {this.state.temperature.o3} loading={this.state.loading} /> */}
            </div>
        )
    }
}

export default Weather
