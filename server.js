const express = require('express');
const payload = require('payload');
const cors = require('cors')
const router = express.Router();
const app = express();
require('dotenv').config();

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

//middleware
app.use('/api', router)
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Initialize Payload
payload.init({
  secret: process.env.PAYLOAD_SECRET,
  mongoURL: process.env.MONGODB_URI,
  express: app,
  onInit: () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
  },
});

// Add your own express routes here

app.listen(process.env.PORT);
