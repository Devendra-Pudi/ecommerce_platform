// backend/server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('E-commerce Platform Backend');
});
require('dotenv').config(); // Load environment variables

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch((err) => console.error('❌ MongoDB Connection Error:', err));
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});