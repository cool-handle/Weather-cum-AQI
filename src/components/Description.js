import React from 'react'
import './styles.css'
function Description(props) {
    
    if(props.description){
        function toTitleCase(str) {
            return str.replace(
                /\w\S*/g,
                function(txt) {
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                }
            );
        }
        return (
            <div className="A">
                <h2>Description- {toTitleCase(props.description)}</h2>
            </div>
        )
    }
    else{
        return null
    }
}

export default Description
