const Task = require('../models/task')
const getAllTask = async (req, res) => {
  try{
 const tasks = await Task.find({})
 res.status(200).json({task:tasks})
  } catch(error){
    res.status(500).json({msg:error})
  }
};
const getTask = async (req, res) => {
  try{
    const {id: TaskId} = req.params
    const tasks = await Task.findById({_id :req.params.id})
    if(!tasks){
      return res.status(404).json({msg: `No Task id find with ${TaskId}`})
    }
    res.status(200).json({ task: tasks });  
  }catch (error){
    res.status(500).json({msg:error})
  }
};
const deleteTask = async (req, res) => {
try{
  const {id: TaskId} = req.params
  const tasks = await Task.findOneAndDelete({_id :req.params.id})
  if(!tasks){
    return res.status(404).json({msg: `No Task id find with ${TaskId}`})
  }
  res.status(200).json({ task: null ,status:"delete succes" }); 
} 
catch (error){
  res.status(500).json({msg:error})
}
};
const updateTask = async (req, res) => {
  try{
    const {id: TaskId} = req.params
    const tasks = await Task.findByIdAndUpdate({_id :req.params.id},req.body,{
      new:true,
      runValidators:true
    })
    if(!tasks){
      return res.status(404).json({msg: `No Task id find with ${TaskId}`})
    }
    res.status(200).json({ msg: "update succes" }); 
  }
  catch (error){
    res.status(500).json({msg:error})
  }
};

const createTask = async  (req, res) => {

  try{
    let task = await Task.create(req.body)
  res.status(201).json({task})
  }catch(error){
    res.status(401).json({msg: error})
  }

};
module.exports = {
  getAllTask,
  createTask,
  getTask,
  deleteTask,
  updateTask,
};
