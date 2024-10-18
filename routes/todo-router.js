const express = require('express');
const router = express.Router();
const { createTodo, getTodos, getTodoById, updateTodo, deleteTodo, deleteAllTodos } = require('../controllers/todo-controllers');
const userMiddleware = require('../middleware/userMiddleware');

router.use(userMiddleware); // Use authentication middleware for all todo routes

router.post('/', createTodo);
router.get('/', getTodos);
router.get('/:id', getTodoById);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);
router.delete('/', deleteAllTodos);

module.exports = router;
