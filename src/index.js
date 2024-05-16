
import connectDB from "./db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({
    path: './env'
})



connectDB()
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`SERVER IS RUNNING AT PORT : ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGODB CONNECTION FAILED !!! ",err)
})


































































































































// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("ERROR : ",error)
//             throw error
//         })


//         app.listen(process.env.PORT, ()=>{
//             console.log(`APP  IS LISTENING ON PORT ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("ERROR: ",error)
//         throw err
//     }
// })





