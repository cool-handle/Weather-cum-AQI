import React from 'react'
import {FiSunset} from 'react-icons/fi'
function Sunset(props) {
    if(props.sunset){
        var myDate = new Date((props.sunset)*1000);
        const x = myDate.toLocaleString()
        return (
            <div className="A">
                <h2><FiSunset color="#FAD6A5" size='30px' />Sunset- {x}</h2>
            </div>
        )
    }
    else{
        return null
    }
}

export default Sunset
