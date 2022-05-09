const mongoose = require("mongoose");

const connect=()=>{
    return mongoose.connect('mongodb+srv://pranjal2795:Saridon1@cluster0.e0wvc.mongodb.net/womensdata1?retryWrites=true&w=majority');
    
}



module.exports = connect;