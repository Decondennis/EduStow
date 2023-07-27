const { generateToken, verifyToken } = require('./auth.js');


const payload = { id: 123456789 };
const token = generateToken(payload);

app.get('/protected-route', verifyToken, (req, res) => {
 
  console.log('Decoded token:', req.user);
  res.json({ message: 'Access granted to protected route' });
});
