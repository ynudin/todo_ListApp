const Todo = require('../models/Todo');

// Create new Todo
exports.createTodo = async (req, res) => {
    const { title } = req.body;

    try {
        const todo = new Todo({ title, user: req.user.id });
        await todo.save();
        res.status(201).json(todo);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all Todos
exports.getTodos = async (req, res) => {
    try {
        const todos = await Todo.find({ user: req.user.id });
        res.status(200).json(todos);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get Todo by ID
exports.getTodoById = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo || todo.user.toString() !== req.user.id)
            return res.status(404).json({ message: 'Todo not found' });

        res.status(200).json(todo);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Update Todo
exports.updateTodo = async (req, res) => {
    const { title, completed } = req.body;

    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo || todo.user.toString() !== req.user.id)
            return res.status(404).json({ message: 'Todo not found' });

        todo.title = title || todo.title;
        todo.completed = completed !== undefined ? completed : todo.completed;
        await todo.save();
        res.status(200).json(todo);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete Todo
exports.deleteTodo = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo || todo.user.toString() !== req.user.id)
            return res.status(404).json({ message: 'Todo not found' });

        await todo.remove();
        res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete All Todos
exports.deleteAllTodos = async (req, res) => {
    try {
        await Todo.deleteMany({ user: req.user.id });
        res.status(200).json({ message: 'All todos deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};
