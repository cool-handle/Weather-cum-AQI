import React from 'react'


function Weatherforecast(props) {
    if(props.data){
        return (
            <div>
                <h2 class = "D">Weather forecast for next 7 days</h2>
                <div>
                    <div className = "C">
                        <p>{props.day[0]}</p>
                        <p>{props.data[0]}</p>
                    </div>
                    <div className = "C">
                        <p>{props.day[1]}</p>
                        <p>{props.data[1]}</p>
                    </div>
                    <div className = "C">
                        <p>{props.day[2]}</p>
                        <p>{props.data[2]}</p>
                    </div>
                    <div className = "C">
                        <p>{props.day[3]}</p>
                        <p>{props.data[3]}</p>
                    </div>
                    <div className = "C">
                        <p>{props.day[4]}</p>
                        <p>{props.data[4]}</p>
                    </div>
                    <div className = "C">
                        <p>{props.day[5]}</p>
                        <p>{props.data[5]}</p>
                    </div>
                    <div className = "C">
                        <p>{props.day[6]}</p>
                        <p>{props.data[6]}</p>
                    </div>
                </div>
            </div>
        )
        }
        else{
            return null
        }
}

export default Weatherforecast
