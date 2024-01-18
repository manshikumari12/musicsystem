const express = require("express")
const {AudiobookModel} = require("../model/audio.model")
audiobookRoute = express.Router()

audiobookRoute.get("/audioget", async (req,res)=>{
    try {
     const alldata = await AudiobookModel.find()
     res.json(alldata)
    } catch (error) {
     console.log(error)
    }
   })
audiobookRoute.post("/audioadd",async(req,res)=>{
    const payload = req.body;
    try {
      const posts = new AudiobookModel(payload);
      // await posts.save()
      res.status(200).send(await posts.save());
    } catch (err) {
      res.status(400).send({ msg: "Post is not created", err: err.message });
      
    }
    
})

audiobookRoute.get('/audiogetBycId/:cid', async (req,res)=>{
    try {
        const {cid} = req.params;

        const data = await AudiobookModel.find({courseId : cid})
      res.send(data)
    } catch (error) {
        
    }
}
)
module.exports ={audiobookRoute}