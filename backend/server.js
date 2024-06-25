const mongoose = require('mongoose');
const express = require('express');
// const testRoutes = require('./routes/testRoutes') 
// const { User, Test, Question, Option, Response } = require('./models/testConduction');
const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://jainhemang55:9Jpszy8HlzrE7qFe@cluster0.u3oyruj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

connectDB();
module.exports = connectDB;

const app = express();
app.use(express.json());
app.use('/api', require('./routes/testRoutes'));

//post request for bringing frntend data and console logging here
// app.post('/api/create-test', (req, res) => {
//     // const ;
//     const { quizData , questionData , optionData } = req.body;
//     console.log(quizData);
//     console.log(questionData);
//     console.log(optionData);
        
//     // console.log(req.body);
//     res.send('Data received');
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));