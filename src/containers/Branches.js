import React from 'react'
import { BranchList } from '../components'
import '../css/Branches.css'

class Branches extends React.Component {
  render() {
    return (
      <div>
        <h1>Filiais</h1>
        <div className=".branch-list-container">
          <BranchList branches={this.props.branches} />
        </div>
      </div>
    )
  }
}

export default Branches