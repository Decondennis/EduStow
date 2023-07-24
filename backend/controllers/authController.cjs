const axios = require('axios');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel.cjs');

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user based on the provided email
    const user = await User.findOne({ where: { email } });
    console.log('User role:', user.role);
    if (user) {
      // Check if both passwords are defined
      if (password && user.password) {
        // Compare the provided password with the hashed password
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
          // Generate a new token using the secret key
          try {
            const token = jwt.sign(
              { userId: user.id, email: user.email, role: user.role },
              JWT_SECRET_KEY,
              { algorithm: 'HS256' }
            );

            // Return the token and role to the client
            res.status(200).json({ message: 'Login successful', token, role: user.role });
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
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = login;



