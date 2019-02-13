import React from 'react'
import { BranchList } from '../components'

class Branches extends React.Component {
  render() {
    return (
      <div>
        <h1>Filiais</h1>
        <BranchList branches={this.props.branches} />
      </div>
    )
  }
}

export default Branches