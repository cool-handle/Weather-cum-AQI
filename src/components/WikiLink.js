import React from 'react'
import {FcWikipedia} from 'react-icons/fc'
function WikiLink(props) {
    if(props.wikilink){
        return (
            <div className="A">
                <h2><a target= "_blank" thref={props.wikilink}><FcWikipedia size="40px" /></a></h2>
            </div>
        )
    }
    else{
        return null
    }
}

export default WikiLink
