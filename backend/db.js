const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb+srv://manshisbp:manshi@cluster0.pfcmitv.mongodb.net/plylistaudioaudiobook?retryWrites=true&w=majority")
// 

module.exports={connection}