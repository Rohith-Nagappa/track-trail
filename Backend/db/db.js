const mongoose = require('mongoose');
const db = async () => {
    try {
        mongoose.set('strictQuery',false)
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Db Connected");
        
    } catch (error) {
        console.log("Db connected Error");
        
    }
}

module.exports = {db};