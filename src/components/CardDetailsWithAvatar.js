import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import '../css/CardDetailsWithAvatar.css'
import PropTypes from 'prop-types'

export const CardDetailsWithAvatar = ({branch}) => {
  return (
    <Card key={branch.id} className="card-container">
      <div className="avatar-item">
        <CardHeader avatar={
          <Avatar>R</Avatar>
        }
        />
      </div>
      <div className="content-item">
        <span className="item-card-text-name">{branch.name}</span>
        <span className="item-card-text-sub">{`Responsável: ${branch.inCharge}`}</span>
      </div>
    </Card>
  )
}

CardDetailsWithAvatar.propTypes = {
  branch: PropTypes.object.isRequired
}

export default CardDetailsWithAvatar