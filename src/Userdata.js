/** @format */
import LinearProgress from '@material-ui/core/LinearProgress'
import React, {Component, Fragment} from 'react'
import Link from 'react-router-dom/Link'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import CallIcon from '@material-ui/icons/Call'
import RoomIcon from '@material-ui/icons/Room'
import ContactMailIcon from '@material-ui/icons/ContactMail'
import LanguageIcon from '@material-ui/icons/Language'
import {Divider} from '@material-ui/core'

export default class Userdata extends Component {
  state = {
    loading: false,
    user: null,
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          loading: true,
          user: json,
        })
      })
  }
  // useStyles = makeStyles(theme => ({
  //   root: {
  //     flexGrow: 1,
  //   },
  //   paper: {
  //     padding: theme.spacing(2),
  //     //textAlign: 'center',
  //     color: theme.palette.text.secondary,
  //   },
  // }))
  useStyles = makeStyles({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  })

  render() {
    if (!this.state.loading) {
      // return 'Loading....'
      console.log(this.state.user)
      return <LinearProgress style={{marginTop: '5px'}} />
    }
    const {user} = this.state
    const makeStyle = {
      width: '50%',
      maxWidth: '200px',
      Height: 'auto',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      borderRadius: '10%',
    }
    const styleFont = {
      fontFamily: 'Caveat',
      fontSize: '30px',
      overflowWrap: 'break-word',
    }
    const classes = this.useStyles
    return (
      <Fragment>
        <Button style={{color: 'red', fontFamily: 'Caveat'}}>
          <Link
            to="/react-app-userprofile"
            style={{
              color: 'white',
              textDecoration: 'none',
              border: '1px solid black',
              padding: '4px',
              margin: '8px',
              backgroundColor: 'black',
            }}>
            Go Back
          </Link>
        </Button>
        <div>
          {/* <p>Name:{user.name}</p>
          <p>Id:{user.id}</p>
          <p>Username:{user.username}</p>
          <p>Email:{user.email}</p> */}
          {/* <p>Username:{}</p>
          <p></p> */}
        </div>
        <center>
          <Card style={{maxWidth: 600}}>
            <CardActionArea>
              <CardContent style={styleFont}>
                <div style={{backgroundColor: 'pink', borderRadius: '5%'}}>
                  <img src={`https://source.unsplash.com/1600x900/?people,${Math.random()}`} style={makeStyle}></img>
                </div>
                <Divider />
                Id:{user.id}
                <br />
                <Divider />
                Name:{user.name}
                <br /> <Divider />
                UserName:{user.username}
                <br /> <Divider />
                <CallIcon style={{height: '40px', width: '40px', color: 'green'}} />
                {user.phone}
                <Divider />
                <LanguageIcon style={{height: '40px', width: '40px', color: 'black'}} />
                {user.website}
                <Divider />
                <ContactMailIcon style={{height: '40px', width: '40px', color: 'orange'}} />
                {user.email}
                <Divider />
                <RoomIcon style={{height: '40px', width: '40px', color: 'red'}} />
                St.{user.address.street},{user.address.suite},{user.address.city},<br />
                ZipCode:
                {user.address.zipcode}
                <br /> <Divider />
              </CardContent>
            </CardActionArea>
          </Card>
        </center>
      </Fragment>
    )
  }
}
