import React from 'react'
import './styles.css'
import {WiHumidity} from 'react-icons/wi'
function Humidity(props) {
    if(props.humidity){
        return (
            <div className="A">
                <h2><WiHumidity color= "#b6a28e" size="30px"  />Humidity- {props.humidity}%</h2>
            </div>
        )
    }
    
    else{
        return null
    }
}

export default Humidity
