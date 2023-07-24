const { generateToken, verifyToken } = require('./auth.js');

// Example usage: Generating a token
const payload = { id: 123456789 };
const token = generateToken(payload);

// Example usage: Verifying a token using middleware
app.get('/protected-route', verifyToken, (req, res) => {
  // Access the verified user data from req.user
  console.log('Decoded token:', req.user);
  res.json({ message: 'Access granted to protected route' });
});
