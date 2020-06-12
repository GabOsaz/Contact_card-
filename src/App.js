import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    users: []
  }  

  componentDidMount () {
    const url = 'https://jsonplaceholder.typicode.com/users';

    fetch(url)
    .then(result => result.json())
    .then(result => {
      this.setState({
        users: result,
      })
    });
  }

  render() {
    const { users } = this.state;

    console.log(users);
    return (
      
      <div className="container mx- auto" >
        {users.map(user => {
          return (
        <div className="card w-100 border-success text-center my-4" >
            <div>
              <div className="card-header">
                {user.name}
              </div>
              <ul key={user.id} className="list-group list-group-flush">
                <li className="list-group-item">Username: {user.username}</li>
                <li className="list-group-item">Email: {user.email}</li>
                <li className="list-group-item">Phone: {user.phone}</li>
                <li className="list-group-item">Website: {user.website}</li>
              </ul>
              <div className="card-footer text-muted">
                 Address: {user.address.street}, {user.address.suite}, {user.address.city}.
              </div>
            </div>
        </div>
          )
        }
        )}
        
      </div>
    )
  }
}

export default App;
