const mongoose = require("mongoose");

function connectDatabase(){
    mongoose.connect(process.env.MONGO_DB_LOCAL_URI)
    .then(() => console.log("Database is connected"))
    .catch((err) => console.err("Error while connecting database!\n" + err.message))
}

module.exports = connectDatabase;