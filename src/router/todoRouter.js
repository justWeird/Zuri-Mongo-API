//This holds the route methods for each operation
const express = require("express");
const controller = require("../controller/todoController");

//initialize router
const router = express.Router();

router
.get('/', controller.getAllTodo)
.post('/', controller.createTodo)
.get('/:id', controller.getTodo)
.put('/:id', controller.updateTodo)
.delete('/:id', controller.deleteTodo);

module.exports = router;
