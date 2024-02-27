import mongoose from "mongoose";

let isConnected = false

export  const connectToDB = async () => {

    try {
        if(isConnected){
            return
        }
        else{
            await mongoose.connect(process.env.MONGO_DB_URL as string);
            isConnected=true
        }

    }
    catch (e) {
        console.log(e, "MongoDB connection crashed")
    }
}
