import React from 'react'
import './styles.css'
function LastUpdated(props) {
    if(props.lastupdated){
        var myDate = new Date((props.lastupdated)*1000);
        const x = myDate.toLocaleString()
        return (
            <div className="A">
                <h2>Last Updated- {x}</h2>
            </div>
        )
    }
    else{
        return null
    }
}

export default LastUpdated
