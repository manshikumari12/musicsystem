const express = require("express")
const {CourseModel} = require("../model/course.model")
courseRoute = express.Router()
// Get all courses
courseRoute.get("/courses", async (req,res)=>{
    try {
     const alldata = await CourseModel.find()
     res.json(alldata)
    } catch (error) {
     console.log(error)
    }
   })
   
   
 
   
   courseRoute.post("/add", async (req, res) => {
       const payload = req.body;
       try {
         const posts = new CourseModel(payload);
         // await posts.save()
         res.status(200).send(await posts.save());
       } catch (err) {
         res.status(400).send({ msg: "Post is not created", err: err.message });
         
       }


       
     });
   
   

   
   
 
   
   
   
   
   
   courseRoute.delete("/delete/:id", async (req,res) =>{
     const Id = req.params.id;
     try {
         await CourseModel.findByIdAndDelete(Id);
         res.json({ success: true, message: 'Card deleted successfully.' });
     } catch (error) {
         console.error('Error deleting card:', error);
         res.status(500).json({ success: false, error: 'An error occurred while deleting card.' });
     }
   })
  


module.exports ={courseRoute}