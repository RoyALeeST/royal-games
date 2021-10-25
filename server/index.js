const express = require('express'); // Sever
const mongoose = require('mongoose'); // Database
const config = require('./config/dev'); // ENV variables
const FakeDB =  require('./models/fake-db');
const cookieParser = require('cookie-parser')
const twitchConnection =  require('./Connection/twitch_conn');


//#region App routes
    const customerRoutes = require('./routes/customer/customer');
    const spinWheelRoutes = require('./routes/SpinWheel/spinwheel');
    const millionaireQuestionRoutes = require('./routes/millionaireQuestions/millionaireQuestions');

//#endregion

const app = express();
const ROOT_URL = "/api/v1/";

// create application/json parser
// create application/x-www-form-urlencoded parser
app.use(express.urlencoded());
app.use(express.json());
// enable cors
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:4200'
}));
// Connect to DB
mongoose.connect(config.DB_URI, { useNewUrlParser: true , useUnifiedTopology: true }).then(()=>{ 
    console.log("Connected to MongoDB Atlas");
    // const fakeDb = new FakeDB();
    // fakeDb.seedDb();
 })
.catch(err => console.log("Could not connect",err))

// App configuration
app.use(cookieParser()); // Parsing application/json

// Add app routes to express App
app.use(ROOT_URL + 'customers', customerRoutes);
app.use(ROOT_URL + 'spinwheel', spinWheelRoutes);
app.use(ROOT_URL + 'millionaire', millionaireQuestionRoutes);

// Get environment port
const PORT = process.env.PORT || 3001;

// Start server
app.listen(PORT, function(){
    console.log(`===== SERVER RUNNING ON PORT ${PORT} ====`)
    twitchConnection.init(); // Connect to twitch chat
})