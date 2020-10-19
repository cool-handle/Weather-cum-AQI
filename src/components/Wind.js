import React from 'react'

import {WiWindy} from 'react-icons/wi'
function Wind(props) {
    if(props.wind){
        return (
            <div className="A">
                <h2><WiWindy color="#cabec0" size="30px"/>Wind Speed- {props.wind} m/sec</h2>
            </div>
        )
        }
    else{
        return null
    }
}

export default Wind
