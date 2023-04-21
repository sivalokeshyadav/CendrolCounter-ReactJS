import {Component} from 'react'

import ComponentB from '../ComponentB'

class ComponentA extends Component {
  state = {cendol: 2}

  onIncrement = () => {
    this.setState(prevState => ({cendol: prevState.cendol + 10}))
  }

  render() {
    const {cendol} = this.state
    return <ComponentB cendol={cendol} onIncrement={this.onIncrement} />
  }
}

export default ComponentA
