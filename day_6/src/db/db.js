const mongoose = require("mongoose")


function ConnectToDB() {
    mongoose.connect(process.env.MONGODB_URI)
        .then(() => {
            console.log("Connected to DB");

        })
}


module.exports = ConnectToDB