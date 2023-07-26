import mongoose from "mongoose";

 const connect = async () => {
    mongoose.connect(process.env.DB_URL,{useNewUrlParser:true,useUnifiedTopology:true,dbName:'messenger'});
    console.log("connect successfully");
}
export default connect;