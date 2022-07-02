//This holds the functions executed be each route of the CRUD operation
//import the data model
const todo = require("../model/todoModel");

//get all todo tasks
exports.getAllTodo = async (req, res) => {
  try {
    let todos = await todo.find();
    //if the todos are empty, output a 404 page
    if (todos.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No To-dos in Database",
        todos,
      });
    }
    res.status(200).json({
      success: true,
      message: "All Users Found",
      todos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server",
      error: error.message,
    });
  }
};

//get single todo task
exports.getTodo = async (req, res) => {
  try {
    let id = {_id: req.params.id}
    let OneTodo = await todo.findOne(id);
    if (!OneTodo) {
      return res.status(400).json({
        success: false,
        message: "Todo Not found! ID not recognised",
      });
    }
    res.status(200).json({
      success: true,
      message: `Todo ID ${req.params.id} found`,
      todo: OneTodo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server",
      error: error.message,
    });
  }
};

//create a todo
exports.createTodo = async (req, res) => {
  try {
    let newTask = await req.body;
    let createNewTask = await todo.create(newTask);
    //if request body is empty, let the user know
    if (!createNewTask) {
      return res.status(400).json({
        success: false,
        message: "Failed to add todo",
      });
    }
    res.status(200).json({
      success: true,
      message: "New todo created!",
      todo: createNewTask,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server",
      error: error.message,
    });
  }
};

//update a todo
exports.updateTodo = async (req, res) => {
  try {
    let update = await req.body;
    let id = { _id: req.params.id };
    let uTodo = await todo.findOneAndUpdate(id, update, { new: true });
    if (!uTodo) {
      return res.status(400).json({
        success: false,
        message: "Unable to update",
      });
    }
    res.status(200).json({
      success: true,
      message: `Todo of id ${req.params.id} was updated`,
      todo: uTodo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server",
      error: error.message,
    });
  }
};

//delete a todo
exports.deleteTodo = async (req, res) => {
  try {
    let id = { _id: req.params.id };
    let dTodo = await todo.findOneAndDelete(id)
    if (!dTodo){
       return res.status(400).json({
            success: false,
            message: "Unable to delete",
          });
    }
    res.status(200).json({
        success: true,
        message: `Todo of id ${req.params.id} was deleted`,
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server",
      error: error.message,
    });
  }
};
