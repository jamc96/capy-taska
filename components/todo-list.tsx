import prisma from '@/lib/prisma';
import TodoItem from './todo-item';

export default async function TodoList() {
  // fetch todos
  const todos = await prisma.todo.findMany({
    orderBy: {
      id: 'desc',
    },
  });

  return (
    <div className='space-y-3'>
      {todos.length === 0 ? (
        <p className='text-center text-muted-foreground py-4'>
          No tasks yet. Add one above!
        </p>
      ) : (
        todos.map((todoItem) => (
          <TodoItem key={`todo-item-${todoItem.id}`} {...todoItem} />
        ))
      )}
    </div>
  );
}
