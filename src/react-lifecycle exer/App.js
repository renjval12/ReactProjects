import React from 'react'
import Test from './Test.js'


class App extends React.Component {

  state = {
    counter: 0
  }

  // Runs only when the component is constructed/added to the DOM 
  componentDidMount() {
    console.log('App Component mounted...')
    const increment = () => this.setState({ counter: this.state.counter + 1 })
    setTimeout(increment, 3000)
    setTimeout(increment, 6000)
    setTimeout(increment, 9000)
  }

  componentWillUnmount() {
    console.log('App Component unmounted...')
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('App Component updated...')
  }

  // Let's React know if render method should be run or not
  shouldComponentUpdate(nextProp, nextState) {
    if (nextState.count > 2) {
      return false
    }
    return true
  }




  render() {

    console.log('rendering App...')

    return (
      <div className="app">
        App
        {this.state.counter < 3 ? <Test /> : null}
      </div>
    )
  }
}

export default App;
