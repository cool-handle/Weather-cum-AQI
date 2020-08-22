import React, { Component } from 'react'

import {fetch} from './fetch'
class ChooseCountry extends Component {
    constructor(props){
        super(props)
        this.state ={
            list : fetch,
            city : ''
        }
        
    }
    handleChange = (e) => {
        var result = this.state.list.filter(obj => {
            return obj.name === e.target.value
        })
        const fun = () => this.props.countryHandler(result)
        fun();
        this.setState({
            city: e.target.value
        })
    }
    render() {
        // var indiaList= complete.filter(obj => {
        //     return obj.country === "IN"
        // })
        // var newlist =indiaList.map((element) => {
        //     var name = element.name
        //     var code = element.id
        // return (
        //     {name, code}
        // )        
        // })
        // console.log(newlist);
        
        return (
            <div className="welcome">
                <form>
                    <label>Choose the desired city<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>  </label>
                    
                    <select  value={this.state.city} onChange={this.handleChange}>
                    { 
                        this.state.list.map((data)=> <option key={data.code} value={data.name}>{data.name}</option>)
                    }
                    </select>
                </form>
            </div>
        )
    }
}

export default ChooseCountry
