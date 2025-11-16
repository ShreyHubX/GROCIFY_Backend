const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const groceryRoutes = require('./routes/groceryRoutes');
const expenseRoutes = require('./routes/expenseRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
require('dotenv').config();  // Add this at the top if not already


const uri = process.env.MONGO_URI;  // reads URI from .env

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.error("MongoDB connection error:", err));


app.use('/grocery', groceryRoutes);
app.use('/expense', expenseRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
