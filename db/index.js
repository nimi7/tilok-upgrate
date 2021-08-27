const mongoose = require('mongoose');

mongoose
    .connect(process.env.URI || "mongodb+srv://Nimrod-Admin:nimi0528266913@cluster0.yzitu.mongodb.net/Tilok?retryWrites=true&w=majority",{ useNewUrlParser: true,useUnifiedTopology:true })
    .catch(e => {
        console.error('Connection error', e.message)
    });
const db = mongoose.connection;

module.exports = db;

