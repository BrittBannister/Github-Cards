import React from 'react';
import './App.css';
import {Button, Card} from 'react-bootstrap'

//TODO: replace with actual username
const GITHUB_USER = "https://api.github.com/users/BrittBannister"

//const GITHUB_USER = (githubUserName) => 'https://api.github.com/users/${githubuserName}

class App extends React.Component {
  state = {
    users: {},
    active: false
  }
  
    handleTooggle = (evt) => {
      if(this.state.active === false) {
        this.setState({active: false})
      } else {
        this.setState({active: true})
      }
      console.log('its working')
      fetch(GITHUB_USER) //(GITHUB_USER ('ivey'))
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.setState({user: data, active: true})
      })
    }

 
// TODO render avatar_url, name, 2 other pieces of info from them
  render() {
    return (
      <>
      <Button onClick = {this.handleTooggle}>Toggle Users.</Button>
      {this.state.active === true && (
        <Card>
        <Card.Body>
        {/* <img src = {this.state.user.avatar_url} alt = ''/> */}
        <Card.Img variant = 'top' src = {this.state.user.avatar_url} />
          <Card.Title>{this.state.user.login}</Card.Title>
          <Card.Text>{this.state.user.bio}</Card.Text>
          {/* <Card description = {this.state.user.bio} /> */}
        </Card.Body>
         
        </Card>

      )}
      </>
    )
  }
}

export default App;
