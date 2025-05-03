const express = require('express');
const userRoutes = require('./routes/userRoutes');
const lawyerRoutes = require('./routes/lawyerRoutes');
const clientRoutes = require('./routes/clientRoutes');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Enable CORS for all origins
app.use(cors({
  origin: '*', // allow all domains
  credentials: true
}));

app.use(express.json());

mongoose.connect("mongodb+srv://sakthi-user:mernpassword123@recipe.o8rvaih.mongodb.net/consultant?retryWrites=true&w=majority&appName=recipe")
  .then(() => {
    console.log("MongoDB connected");
  });

app.set('view engine', 'ejs');

// Routes
app.use('/user', userRoutes);
app.use('/lawyer', lawyerRoutes);
app.use('/client', clientRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
