import "./signIn.jsx"

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Add this to serve static files

// Initialize the Express app
const app = express();

// Cross-Origin Resource Sharing (CORS)
// This will allow requests between the back-end and front-end servers
const cors = require('cors');

// Middleware to parse JSON data
// Takes user-input and automatically formats it in a way the computer can understand
app.use(bodyParser.json());

// Use CORS middleware to allow cross-origin requests
app.use(cors());

// Serve static files (HTML, CSS, JavaScript)
app.use(express.static(path.join(__dirname, 'public')));

// Tim's Profile class
class Profile {
  constructor(email, password) {
    this.email = email;
    this._password = password; // Using _password to avoid overwriting the getter
  }

  // Getter for username (using email as username)
  get username() {
    return this.email;
  }

  // Getter for password
  // This is direct access to the password, only use in demo not anything else
  // If wanted, I can try figuring out hashing. It might get complicated with multiple users 
    // due to my limited knowledge - Kelly
  get password() {
    return this._password;
  }
}

// Dummy user data
const users = [
  new Profile('alice@example.com', 'password123'),
];

// POST endpoint for login
app.post('/signIn', (req, res) => {
  const { username, password } = req.body;

  // Find the user by username (email actually)
  const user = users.find((user) => user.username === username);

  if (!user) {
    // Return error code for 'Unauthorized'
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  // Directly compare the password (not secure!)
  if (user.password === password) {
    // Password is correct
    // Return code indicated 'Success'
    return res.status(200).json({ message: 'Login successful' });
  } else {
    // Password is incorrect
    return res.status(401).json({ message: 'Invalid username or password' });
  }
});

// Start the server
// server.js also starts a server on port 5000
// This is fine as long as ports don't conflict
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Front-end code for getting elements:
// const username = document.getElementById('username').value;
// const password = document.getElementById('password').value;

// Installations
/*
npm install express bcryptjs body-parser cors
*/