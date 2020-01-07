/** @format */

import React, {Component, Fragment} from 'react'
import Userdata from './Userdata'
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import FaceIcon from '@material-ui/icons/Face'
import Divider from '@material-ui/core/Divider'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import './App.css'

export default class User extends Component {
  render() {
    console.log(this.props.userid)
    let listStyle = {fontFamily: 'caveat'}
    return (
      <div>
        {/* {this.props.user.map(user => (<li key={user.id}><a href=".">{user.name}</a></li>
                        ))     */}
        {this.props.users.map(user => (
          <div>
            <Link style={{textDecoration: 'none'}} to={`/userdata/${user.id}`}>
              <List component="nav" aria-label="main mailbox folders">
                <Button style={{width: '100%'}}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://image.freepik.com/free-vector/profile-icon-male-avatar-hipster-man-wear-headphones_48369-8728.jpg"
                      />
                    </ListItemAvatar>
                    {/* <ListItemIcon>
                  <FaceIcon />
                </ListItemIcon> */}
                    <ListItemText
                      disableTypography
                      primary={
                        <Typography type="body2" style={{fontFamily: 'caveat', fontSize: '25px', color: 'red'}}>
                          {user.name}
                        </Typography>
                      }
                    />
                  </ListItem>
                </Button>
                <Divider />
              </List>{' '}
            </Link>
          </div>
        ))}
      </div>
    )
  }
}
