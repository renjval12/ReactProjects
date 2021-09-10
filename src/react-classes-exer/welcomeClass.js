import { Component } from 'react'

export default class Welcome extends Component {
  render(){
    return (
      <div>
        Hello {this.props.fname}, {this.props.children}
      </div>
    )
  }
}

export class Wel1 extends Component {
  render() {
    return <div>Hello {this.props.fname}</div>
  }
}

export class Wel2 extends Component {
  render() {
    return <div>Hello {this.props.fname}</div>
  }
}