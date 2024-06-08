const express = require("express");
const bodyParser = require("body-parser");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const cors = require("cors");

const app = express();
const PORT = 3001;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
// Middleware to enable CORS
app.use(cors());

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
