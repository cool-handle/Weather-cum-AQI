import React from 'react'
import {FiSunrise} from 'react-icons/fi'
function Sunrise(props) {
    if(props.sunrise){
        var myDate = new Date((props.sunrise)*1000);
        const x = myDate.toLocaleString()
        return (
            <div className="A">
                <h2><FiSunrise color="#ffdb00" size='30px' />Sunrise- {x}</h2>
            </div>
        )
    }
    else{
        return null
    }
}

export default Sunrise
