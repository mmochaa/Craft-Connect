import { useState } from 'react';

class Profile{
    constructor(username, password){
        this.username = username;
        this.password = password;
    }
}

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

function handlePassword(e) {
    setPassword(e.target.value);
  }

class Profile2 extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        username: username,
        password: password,
      };
    }
    render(){
      return (
        <div>
          Username: {this.state.username}
          Password: {this.state.password}
        </div> 
      );
    }
  }
