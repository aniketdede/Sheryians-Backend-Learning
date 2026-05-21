const mongoose = require('mongoose')

//server database se kaise connect hoga wo hum database mein likhte hai (this is production demand)

function ConnectToDB() {

   mongoose.connect(process.env.MONGODB_URI)
        .then(
            () => {
                      console.log("Connected to DB");
                      
            }

        )


}


module.exports = ConnectToDB