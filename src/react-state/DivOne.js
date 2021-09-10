import React, { Component } from "react"
import Div2 from "./DivTwo"

export default class Div1 extends Component {
    render() {
        return (
            <div>
                <Div2 name={this.props.name} change={this.props.change}/>
            </div>
        )
    }
}