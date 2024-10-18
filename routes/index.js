const express = require('express');
const router = express.Router();

// Route untuk root path ("/")
router.get('/', (req, res) => {
  res.json({
    message: "Welcome to the ToDoList APP!",
  });
});

router.use("/user")
router.use("/todoList")

module.exports = router;
