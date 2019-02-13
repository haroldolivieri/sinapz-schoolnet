import React from 'react'
import SinapzCard from './SinapzCard'

const BranchList = ({ branches }) => {
  if(!branches || !branches.length){
    return <div>Essa rede não tem filiais</div>
  }
  return branches.map(branch => {
    return(
      <SinapzCard branch={branch} key={branch.id} />
    )
  })
}

export default BranchList
