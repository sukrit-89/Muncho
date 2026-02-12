import mongoose, { connect } from "mongoose";

const connectDB =async()=>
{
    try{
        await mongoose.connect(process.env.MONGO_URI as string,{
            dbName:"Muncho",
        });
        console.log("Connected to mongo DB");
        
    }catch(error){
        console.log(error);  
    }
};

export default connectDB;