import React from 'react'

function Sealevel(props) {
    if(props.sealevel){
        return (
            <div className="A">
                <h2>Sea Level- {props.sealevel}</h2>
            </div>
        )
        }
        else{
            return null
        }
}

export default Sealevel
