const zod = require('zod');

const createTodo = zod.object({
    todo:zod.string(),
    userId:zod.string(),
})

const updateTodo = zod.object({
    id:zod.string(),
    userId:zod.string(),
})

module.exports={
    createTodo,
    updateTodo
}