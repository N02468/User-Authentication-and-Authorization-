// server.js
const express = require('express');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const app = express();
require('dotenv').config();
const cors = require('cors');
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoute);

// Start the server
app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));

app.get("/", (req, res) => {
  res.send(`
      <style>
        body {
          font-family: 'Comic-Neue', cursive;
          margin: 40px;
          background-color: black;
          color: white;

          
        }
        h1 {
          color: #007BFF;
          font-weight:bolder;
        }
        p {
          font-size: 18px;
        }
      </style>
      <h1>API is running successfully 🚀</h1>
      `);
});

