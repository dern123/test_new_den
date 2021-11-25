import './App.css';
import axios from 'axios'
import { Button, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import User from './components/User';
import 'bootstrap/dist/css/bootstrap.min.css';

const url = 'http://localhost:8085/api/users/';


function App() {
  const [user, setUser] = useState({
    userName:"",
    userAge: "",
  })
  const [users, setUsers] = useState([])

  useEffect(()=>{
   watchUsers();
  
  })

  const watchUsers = () => {
     axios.get(url).then(res => setUsers(res.data))
  }

  const usersData = users.map(item => <User key={item.id} name={item.userName} age={item.userAge} id={item._id}/>)

  const click = () => {
    axios.post(url,user)
  }

  const handleChange=(e)=>{
    setUser({...user, [e.target.name]:e.target.value})
  }

  return (
    <div className="App">
      <Form noValidate  style={{ width: '18rem', marginBottom: '10px' }} onSubmit={click}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control name="userName" type="text" placeholder="Enter name" onChange={handleChange} defaultValue={user.userName}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Age</Form.Label>
          <Form.Control name="userAge" type="text" placeholder="Age ago"  onChange={handleChange} defaultValue={user.userAge}/>
        </Form.Group>
        <Button className="mx-2" variant="primary" type="submit" >
          Add
        </Button>
      </Form>
      <div>
        {usersData}
      </div>
    </div>
  );
}

export default App;
