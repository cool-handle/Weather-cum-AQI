import React, {useState , useEffect} from 'react'
import './styles.css'
import {FaTemperatureHigh} from 'react-icons/fa'
function Temp(props) {
    const [value, setValue] = useState(props.temp);
    const [unit, setUnit] = useState('°C')
    const [away, setAway] = useState('°F')
    
    useEffect(()=>{
        if(away==='°C')
        setValue(props.temp*1.8 + 32)
        else
        setValue(props.temp)
    })

    const change = () =>{
        if(away==='°F'){
        setUnit('°F')
        setAway('°C')
        setValue(props.temp*1.8 + 32)
        }
        else{
        setUnit('°C')
        setAway('°F')
        setValue(props.temp)
        }
    }
    
    if(props.temp){
        
    return (
        <div className="A">
            <h2><FaTemperatureHigh color='red' size='30px' />Temperature- {value}&nbsp;{unit}&nbsp;|&nbsp;
            <a href="#" onClick={change}>{away}</a>
            </h2>
        </div>
    )
    }
    else{
        return null
    }
}

export default Temp
