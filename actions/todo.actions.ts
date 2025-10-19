import { PrismaClient } from "@prisma/client";
import { get } from "http";


const prisma = new PrismaClient();

export const getTodoListAction = () => {
    // return prisma.todo.findMany()
    return prisma.todo.findMany({
        select: {
            id: true,
            title: true,
            body: true,
            // completed: true,
            createdAt: true,
            // author: true
        }
    })
}

export const createTodoAction = () => {
    return prisma.todo.create({
        data: {
            title: "New todo",
            body: "New todo body",
            completed: false,
            authorId: "1"
        }
    })
}

export const updateTodoAction = () => {
    return prisma.todo.update({
        where: {
            id: "1"
        },
        data: {
            title: "Updated todo",
            body: "Updated todo body",
            completed: true
        }
    })
}

export const deleteTodoAction = () => {
    return prisma.todo.delete({
        where: {
            id: "1"
        }
    })
}
