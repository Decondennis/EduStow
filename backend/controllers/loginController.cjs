const axios = require('axios');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel.cjs');

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const login = async (req, res) => {
  try {
    // Fetch the user data from http://localhost:5000/users
    const userResponse = await axios.get('http://localhost:5000/users');
    const usersData = userResponse.data;

    // Find the user based on the provided email
    const user = await User.findOne({ where: { email: req.body.email } });

    if (user) {
      // Check if both passwords are defined
      if (req.body.password && user.password) {
        // Compare the provided password with the hashed password
        const passwordMatch = await bcrypt.compare(req.body.password, user.password);

        if (passwordMatch) {
          // Generate a new token using the secret key
          try {
            const newToken = jwt.sign(
              { userId: user.id, email: user.email, role: user.role },
              JWT_SECRET_KEY,
              { algorithm: 'HS256' }
            );

            console.log(newToken);
            // Rest of the code
            res.status(200).json({ token: newToken, role: user.role });
          } catch (error) {
            console.error('JWT token generation error:', error);
            // Handle the error accordingly
            res.status(500).json({ message: 'Internal server error' });
          }
        } else {
          // Invalid password
          res.status(401).json({ message: 'Invalid email or password' });
        }
      } else {
        // Password not provided or user password not found
        res.status(401).json({ message: 'Invalid email or password' });
      }
    } else {
      // User not found
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { login };
