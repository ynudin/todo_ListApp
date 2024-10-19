const express = require('express');
const router = express.Router();
const { createTodo, getTodos, getTodoById, updateTodo, deleteTodo, deleteAllTodos } = require('../controllers/todo-controllers');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, createTodo);
router.get('/', authMiddleware, getTodos);
router.get('/:id', authMiddleware, getTodoById);
router.put('/:id', authMiddleware, updateTodo);
router.delete('/:id', authMiddleware, deleteTodo);
router.delete('/', authMiddleware, deleteAllTodos);

module.exports = router;
