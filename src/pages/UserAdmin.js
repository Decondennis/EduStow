import { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import SweetAlert from 'sweetalert';


const UserAdmin = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);
  
  const getUsers = async () => {
    const response = await axios.get('http://localhost:5000/users');
    setUser(response.data);
    console.log(response.data);
  }

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/users/${id}`);
    getUsers();
  }

  const onDelete = (id) => {
    SweetAlert({
      title: "Are you sure you want to delete?",
      text: "This action cannot be undone.",
      icon: "warning",
      buttons: {
        cancel: "Cancel",
        confirm: "Delete"
      },
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        deleteUser(id);
      } else {
        SweetAlert("Your data is safe.");
      }
    });
  }

  return (
    <div>
      <Link to="/Contact" className="button is-primary mt-2">Add New</Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>School Name</th>
            <th>email</th>
            <th>School Address</th>
            <th>Phone No.</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (

            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.schoolName}</td>
              <td>{user.email}</td>
              <td>{user.schoolAddress}</td>
              <td>{user.phone}</td>
              <td>{user.status ? 'Active' : 'Inactive'}</td>
              <td>
                <Link to={`/EditUser/${user.id}`} className="button is-small is-info">Edit</Link>
                <Button variant="danger" onClick={() => onDelete(user.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default UserAdmin;
