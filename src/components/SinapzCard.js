import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  card: {
    marginTop: theme.spacing.unit * 4,
    flexGrow: 1,
  },
  title: {
    fontSize: theme.spacing.unit * 4
  },
  inCharge: {
    fontSize: theme.spacing.unit * 2
  },
})

export const SinapzCard = (props) => {
  const { classes, branch } = props

  return (
    <Card key={branch.id} className={classes.card}>
      <Grid container direction="row" spacing={8}>
        <Grid item xs={1} container>
          <CardHeader avatar={
            <Avatar>R</Avatar>
          }
        />
        </Grid>
        <Grid item xs={8}>
          <CardContent>
            <Grid item xs={2}>
              <Typography className={classes.title} variant="h4" gutterBottom>
                {branch.name}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography className={classes.inCharge} variant="subtitle1" gutterBottom>
                {branch.inCharge}
              </Typography>
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}

export default withStyles(styles)(SinapzCard)