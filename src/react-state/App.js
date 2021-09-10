import React, { Component } from "react";
import './App.css';
import Div1 from "./DivOne";
export default class App extends Component {
    // state = {
    //     tardis: {
    //         name: "Time and Relative Dimension in Space",
    //         caps: false,
    //     },
    // };
    // changeIt = (text) => {
    //     if (this.state.tardis.caps) {
    //         this.setState({
    //             tardis: {
    //                 name: text.toLowerCase(),
    //                 caps: false,
    //             },
    //         });
    //     } else {
    //         this.setState({
    //             tardis: {
    //                 name: text.toUpperCase(),
    //                 caps: true,
    //             },
    //         });
    //     }
    // };
    render() {
        return (
            <div>
                <Div1 name={this.state.tardis.name} change={this.changeIt}/>
            </div>
        );
    }
}
