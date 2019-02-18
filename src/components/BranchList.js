import React from 'react'
import CardDetailsWithAvatar from './CardDetailsWithAvatar'
import PropTypes from 'prop-types'

const BranchList = ({ branches = [] }) => {
  if(!branches || !branches.length){
    return <p>Essa rede não tem filiais</p>
  }
  return branches.map(branch => {
    return(
      <CardDetailsWithAvatar branch={branch} key={branch.id} />
    )
  })
}

BranchList.propTypes = {
  branches: PropTypes.array
}

export default BranchList
