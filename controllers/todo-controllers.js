const User = require('../models/User');
const { v4: uuidv4 } = require('uuid');

// Create new todo
exports.createTodo = async (req, res) => {
  const { title } = req.body;
  const todoId = uuidv4(); // Generate unique ID for the todo

  try {
    const user = await User.findById(req.user.id);
    const todo = { id: todoId, title, completed: false };
    user.todos.push(todo);
    await user.save();
    res.status(201).json(todo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all todos for the logged-in user
exports.getTodos = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json(user.todos);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get todo by ID
exports.getTodoById = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const todo = user.todos.find(todo => todo.id === req.params.id);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.json(todo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update todo
exports.updateTodo = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const todo = user.todos.find(todo => todo.id === req.params.id);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    todo.title = req.body.title || todo.title;
    todo.completed = req.body.completed !== undefined ? req.body.completed : todo.completed;
    todo.updatedAt = Date.now();

    await user.save();
    res.json(todo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete todo
exports.deleteTodo = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const todoIndex = user.todos.findIndex(todo => todo.id === req.params.id);
    if (todoIndex === -1) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    user.todos.splice(todoIndex, 1);
    await user.save();
    res.json({ message: 'Todo removed' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete all todos
exports.deleteAllTodos = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    user.todos = [];
    await user.save();
    res.json({ message: 'All todos removed' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
