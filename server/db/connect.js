const mongoose = require("mongoose");

const connectDB = async (url) => {
try{
 await mongoose.connect(url);
  console.log(`🚀the db is connected🚀`)
}
catch(error){
  console.log('❌something wrong, the db is not connected❌',err)
}
}
module.exports = connectDB
