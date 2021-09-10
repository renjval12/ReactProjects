import React, { Component } from "react";
import Div3 from "./DivThree";

export default class Div2 extends Component {
    render() {
        return (
            <div>
                <div>
                    <Div3 name={this.props.name} change={this.props.change} />
                </div>
                <div>
                    <Div3 name={this.props.name} change={this.props.change} />
                </div>
            </div >
        )
    }
}

