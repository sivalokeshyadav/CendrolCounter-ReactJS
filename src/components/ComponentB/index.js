// Write your code here
import {Component} from 'react'

import './index.css'

class ComponentB extends Component {
  state = {isColor: true}

  onClickButton = () => {
    this.setState(prevState => ({isColor: !prevState.isColor}))
  }

  render() {
    const {isColor} = this.state
    const {cendol, onIncrement} = this.props

    const buttonColor = isColor ? 'red-color' : 'blue-color'
    return (
      <div className="app-container">
        <div className="main-container">
          <div className="counter-container">
            <div className="counter">
              <h1 className="heading">{cendol}</h1>
              <button className="button" type="button" onClick={onIncrement}>
                Click to Increase counter
              </button>
            </div>
          </div>
          <div className="button-container">
            <button
              className={`text-btn ${buttonColor}`}
              type="button"
              onClick={this.onClickButton}
            >
              Change Color
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ComponentB
