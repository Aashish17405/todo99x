const zod = require('zod');

const createTodo = zod.object({
    todo:zod.string(),
})

const updateTodo = zod.object({
    id:zod.string(),
})

module.exports={
    createTodo,
    updateTodo
}