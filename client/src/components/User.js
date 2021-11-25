import React, { useState } from 'react'
import { Button, Form, Card} from 'react-bootstrap';
import axios from 'axios'

const url = 'http://localhost:8085/api/users';

const User = ({key, id, name, age}) => {
    const [user, setUser] = useState({
        userName:name,
        userAge: age,
      })
      const [isEdit, setIsEdit] = useState(false);
      
      const handleChange=(e)=>{
        setUser({...user, [e.target.name]:e.target.value})
      }
      const edit = () => {
          setIsEdit(!isEdit);
      }

      const save = () => {
        setIsEdit(!isEdit);
        console.log("user", user)

        axios.put(`${url}/${id}`,user)
      }
    return (
        <div key={key}>
          
           {!isEdit&& <div key={key}>  
               <Card key={key} border="primary" style={{ width: '18rem' }}>
                <Card.Header>User name: {name}</Card.Header>
                <Card.Body>
                  
                  <Card.Text>
                  user age: {age}
                  
                  </Card.Text>
                  <Button onClick={edit}>Edit</Button> 
                </Card.Body>
              </Card>
              <br/>
           
           
           </div>}
           {isEdit&& <Card  border="primary" style={{ width: '18rem' }}>
           <Form.Control name='userName' type="text" defaultValue={name} onChange={handleChange}/>
           <Form.Control name='userAge' type="text" defaultValue={age} onChange={handleChange}/>
           <Button onClick={save}>Save</Button>
           </Card>}

        </div>
    )
}

export default User
