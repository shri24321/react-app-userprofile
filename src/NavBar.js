/** @format */

import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import {Link} from 'react-router-dom'
// import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}))

export default function DenseAppBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" style={{fontFamily: 'caveat', fontSize: '50px'}}>
            UserProfileApp
          </Typography>

          {/* <Link to="/" style={{color: 'white'}}>
            Home
          </Link> */}
        </Toolbar>
      </AppBar>
    </div>
  )
}
