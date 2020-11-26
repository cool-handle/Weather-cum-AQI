import React from 'react';
import {Line} from 'react-chartjs-2';

function HumidityChart(props) {
    if(props.chart){
        const state = {
            labels: props.days,
            datasets: [
              {
                fill: false,
                label: 'Humidity in %',
                lineTension: 0.4,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 2,
                data: props.chart
              },
            ]
        }
        return (
        <div className = "B">
          <Line
            width={50}
            height={450}
            data={state}
            options={{
            maintainAspectRatio: false,
              title:{
                display:true,
                text:'Humidity forecast for next 7 Days',
                fontColor: "white",
                fontSize:20
              },
              legend:{
                display:true,
                position:'bottom',
                labels: {
                    fontColor: 'white'
                }
              },
              scales: {
                yAxes: [{
                    gridLines: {
                        color: 'green'
                        },
                    ticks: {
                        fontColor: "white",
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontSize:20,
                        fontColor: "white",
                    }
                }]
            }
            }}
          />
        </div>
        );
    }
    
    else{
        return null
    }
  }
export default HumidityChart