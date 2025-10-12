// server.js

// Import required modules
const express = require('express');
const cors = require('cors'); // To handle requests from different origins (your website to your server)
const bodyParser = require('body-parser'); // To parse the incoming request body

// Create an Express application
const app = express();
const PORT = 3000; // The port our server will run on

// --- Middleware ---
// CORS: Allows our front-end (HTML page) to talk to this server
app.use(cors()); 
// Body Parser: Helps us read the JSON data sent from the form
app.use(bodyParser.json()); 

// --- Routes ---
// This is the "endpoint" or URL that our form will send data to.
// It listens for POST requests at '/register'
app.post('/register', (req, res) => {
    console.log('Received a registration request!');
    
    // The form data sent from the front-end is in req.body
    const registrationData = req.body;

    console.log('--- New Registration Data ---');
    console.log('Selected Conferences:', registrationData.selectedConferences);
    console.log('Attendees:');
    registrationData.attendees.forEach((attendee, index) => {
        console.log(`  Attendee ${index + 1}:`);
        console.log(`    Full Name: ${attendee.fullName}`);
        console.log(`    Email: ${attendee.email}`);
        console.log(`    Phone: ${attendee.phone}`);
    });
    console.log('-----------------------------');

    // In a real application, you would save this `registrationData` to a database here.
    // For now, we'll just send a success message back to the front-end.
    
    res.status(200).json({ message: 'Registration successful! Thank you for registering.' });
});

// --- Start the Server ---
// This tells our server to start listening for requests on the specified port
app.listen(PORT, () => {
    console.log(`Server is running and listening on http://localhost:${PORT}`);
    console.log('Waiting for registrations...');
});
