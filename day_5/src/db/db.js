const mongoose = require('mongoose')

//server database se kaise connect hoga wo hum database mein likhte hai (this is production demand)

function ConnectToDB() {

    mongoose.connect("mongodb+srv://aniketdede12_db_user:rhCKgN0c5ddrU8SX@cluster0.ky0smsg.mongodb.net/Cohort")
        .then(
            () => {
                      console.log("Connected to DB");
                      
            }

        )


}


module.exports = ConnectToDB