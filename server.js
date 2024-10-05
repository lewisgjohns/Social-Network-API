const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/socialnetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Log Mongo queries
mongoose.set('debug', true);

app.use('/api',require('./routes')); // Assuming your routes are defined in a 'routes' folder

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});
