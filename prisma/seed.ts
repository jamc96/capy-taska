import prisma from '@/lib/prisma';

// seed.ts
interface Todo {
    text: string;
    completed: boolean;
}

const todos: Todo[] = [
    {
        text: "Buy groceries",
        completed: false
    },
    {
        text: "Finish homework",
        completed: true
    },
    {
        text: "Call mom",
        completed: false
    },
    {
        text: "Exercise for 30 minutes",
        completed: true
    },
    {
        text: "Read book chapter",
        completed: false
    },
    {
        text: "Write blog post",
        completed: false
    },
    {
        text: "Clean kitchen",
        completed: true
    },
    {
        text: "Schedule dentist appointment",
        completed: false
    },
    {
        text: "Water plants",
        completed: true
    },
    {
        text: "Plan weekend trip",
        completed: false
    }
];

// Prisma seeding function with TypeScript
async function main(): Promise<void> {


    try {
        // Clear existing todos
        await prisma.todo.deleteMany();

        // Create new todos
        for (const todo of todos) {
            await prisma.todo.create({
                data: todo
            });
        }
        console.log("Database seeded successfully with 10 todos!");
    } catch (error) {
        console.error("Error seeding database:", error);
    } finally {
        await prisma.$disconnect();
    }
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});