import React from 'react'

function Pressure(props) {
    if(props.pressure){
        return (
            <div className="A">
                <h2>Pressure- {props.pressure} milibar</h2>
            </div>
        )
        }
        else{
            return null
        }
}

export default Pressure
