const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();


app.use(express.json()); 
app.use(cors());         

const users = []; 

const JWT_SECRET = "my_super_secret_jwt_key_123"; 
app.get('/', (req, res) => {
  res.send(' The server is running perfectly.');
});
//reg end point
app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  // checkin if user already exists
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.status(400).json({ message: "User already exists!" });
  }

  // Hash the password securely
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Save the new user to our "database"
  const newUser = { id: Date.now().toString(), email, password: hashedPassword };
  users.push(newUser);

  res.status(201).json({ message: "User registered successfully!" });
});

// //loginendpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Find the user in the database
  const user = users.find(u => u.email === email);
  if (!user) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  // Compare the entered password with the saved hashed password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  // If password matches, generate a JWT token
  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });

  // Send the token back to the frontend
  res.json({ 
    message: "Login successful!",
    token: token 
  });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});