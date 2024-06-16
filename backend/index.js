const express = require('express');
const app = express();
const { createTodo } = require('./zod');
const { todo } = require('./db'); 
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
const port = process.env.PORT || 3000;
app.get('/', async (req, res) => {
    try {
        const todos = await todo.find();
        // console.log(todos);
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

app.post('/add', async (req, res) => {
    console.log("Incoming request body:", req.body); // Log the request body

    const createPayload = req.body;
    const newTodo = createTodo.safeParse(createPayload);

    if (!newTodo.success) {
        console.error("Validation errors:", newTodo.error.errors); // Log validation errors
        res.status(400).json({ msg: "Invalid inputs", errors: newTodo.error.errors });
        return;
    }

    try {
        await todo.create({
            todo: createPayload.todo,
            completed: false,
        });
        res.json({ msg: "Successfully created todo" });
    } catch (error) {
        console.error("Error creating todo:", error);
        res.status(500).json({ msg: "Error creating todo" });
    }
});

app.patch('/update', async (req, res) => {
    try {
        const { todoId, todoCompleted } = req.body;
        const updatedTodo = await todo.findByIdAndUpdate(todoId, { completed: todoCompleted });
        res.json({ msg: "Successfully updated todo"});
    } catch (err) {
        res.status(500).json({ msg: "Updation failed" });
    }
});

app.delete('/delete', async (req, res) => {
    try {
        const { todoId } = req.body;
        await todo.findByIdAndDelete(todoId);
        res.json({ msg: "Successfully deleted todo" });
    } catch (err) {
        res.status(500).json({ msg: "Deletion failed" });
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
