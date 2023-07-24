const axios = require('axios');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY3LCJyb2xlIjoidXNlciIsImlhdCI6MTY4NjM5MTg4OX0.pNi8-mb09FnvdJVvqYBzAg07qKtvUyJDSZAgM1CDCF8';

axios.get('http://localhost:5000/userData', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
  .then(response => {
    console.log(response.data.user); // User data retrieved from the server
  })
  .catch(error => {
    console.error(error);
  });
