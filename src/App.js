/** @format */
import NavBar from './NavBar'
import React, {Component, Fragment} from 'react'
import './App.css'
import User from './User'
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'
import Userdata from './Userdata'
import {LinearProgress} from '@material-ui/core'
import Button from '@material-ui/core/Button'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userdata: [],
      user: null,
      isLoaded: false,
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          userdata: json,
        })
      })
  }

  render() {
    console.log(this.state.userdata)
    //var {items,isLoaded} = this.state;
    if (!this.state.isLoaded) {
      return <LinearProgress />
    }
    return (
      <Router>
        <Fragment>
          <div className="App">
            <NavBar />

            <Route path="/react-app-userprofile" exact render={props => <User users={this.state.userdata} />} />
            <Route path="/userdata/:id" render={props => <Userdata {...props} />}></Route>

            {/* <Button variant="contained" color="primary">
              Hello World
            </Button> */}
          </div>
        </Fragment>
      </Router>
    )
  }
}
