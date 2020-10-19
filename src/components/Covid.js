import React from 'react'
import {Bar} from 'react-chartjs-2';
import './styles.css'
function Covid(props) {
    if(props.data){
        const state = {
            labels: ['Confirmed in city', 'Confirmed in state', 'Active in state',
                     'Recovered in state', 'Deaths in state'],
            datasets: [
              {
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: props.data
              }
            ]
          }
        return (
            <div class ="E">
              <Bar
                height={450}
                data={state}
                options={{
                    maintainAspectRatio: false,
                  title:{
                    display:true,
                    text:'COVID-19 Cases in City/State',
                    fontColor: "white",
                    fontSize:20
                  },
                  legend:{
                    display:false
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

export default Covid
