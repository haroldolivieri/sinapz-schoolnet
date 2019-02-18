import React from 'react'
import CardDetailsWithAvatar from './CardDetailsWithAvatar'

const BranchList = ({ branches }) => {
  if(!branches || !branches.length){
    return <p>Essa rede não tem filiais</p>
  }
  return branches.map(branch => {
    return(
      <CardDetailsWithAvatar branch={branch} key={branch.id} />
    )
  })
}

export default BranchList
