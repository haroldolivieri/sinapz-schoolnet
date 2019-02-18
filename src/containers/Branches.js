import React from 'react'
import { BranchList } from '../components'
import '../css/Branches.css'
import PropTypes from 'prop-types'

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

Branches.propTypes = {
  branches: PropTypes.array
}

export default Branches