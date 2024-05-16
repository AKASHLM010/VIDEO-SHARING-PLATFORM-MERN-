import mongoose from "mongoose";

import { DB_NAME } from "../constansts.js";

const connectDB = async ()=>{
    try {
        const connecttionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MONGODB connected !! DB HOST: ${connecttionInstance.connection.host}`)

    } catch (error) {
        console.error("MONGODB CONNECTION FAILED ERROR: ",error)
        process.exit(1)
    }
}

export default connectDB