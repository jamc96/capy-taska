import { Trash2 } from 'lucide-react';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Todo } from '@/lib/types';

export default function TodoList() {
  // fetch todos
  const todos: Todo[] = [];
  return (
    <div className='space-y-3'>
      {todos.length === 0 ? (
        <p className='text-center text-muted-foreground py-4'>
          No tasks yet. Add one above!
        </p>
      ) : (
        todos.map((todo) => (
          <div
            key={todo.id}
            className='flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors'
          >
            <div className='flex items-center space-x-3'>
              <Checkbox
                checked={todo.completed}
                onCheckedChange={() => console.log('completed')}
                id={todo.id}
              />
              <label
                htmlFor={todo.id}
                className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                  todo.completed ? 'line-through text-muted-foreground' : ''
                }`}
              >
                {todo.text}
              </label>
            </div>
            <Button
              variant='ghost'
              size='icon'
              onClick={() => console.log('deleted')}
              aria-label='Delete task'
            >
              <Trash2 className='h-4 w-4 text-destructive' />
            </Button>
          </div>
        ))
      )}
    </div>
  );
}
