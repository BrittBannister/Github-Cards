import React from 'react';
import './App.css';
import { Button } from 'semantic-ui-react'
import {Card, Icon, Image} from 'semantic-ui-react'


const GITHUB_USER = "https://api.github.com/users/BrittBannister"


class App extends React.Component {
  state = {
    users: {},
    active: false
  }

    handleTooggle = () => {
      console.log('it works')
      if(this.state.active === false) {
        fetch(GITHUB_USER)
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          this.setState({
            user: data,
            active: true
          })
        })
      } else {
        // this.setState({user: data, active: false})
        this.setState({active: false})
      }
    }

    render(){
      return(
        <React.Fragment>
        <Button onClick = {this.handleTooggle}>Toggle</Button>
        {this.state.active && (
          <React.Fragment>
          <Card>
         <Image src = {this.state.user.avatar_url} />
         <Card.Content>
           <Card.Header>{this.state.user.name}</Card.Header>
           <Card.Meta>{this.state.user.bio}</Card.Meta>
           <br />
           <Card.Meta>{this.state.user.location}</Card.Meta>
         </Card.Content>
        <Card.Content extra>
          <Icon name = 'user' />{this.state.user.followers}{' '}followers
        </Card.Content>
       </Card>
        </React.Fragment>
        )}
        </React.Fragment>
      )
    }
  }
  export default App
 

