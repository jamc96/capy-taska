import { Todo } from '@prisma/client';
import { Button } from './ui/button';
import { Trash2 } from 'lucide-react';
import { deleteItem } from '@/app/actions';
import CompleteCheckBox from './complete-checkbox';

export default function TodoItem({
  id,
  text,
  completed,
}: Todo & { editActionId?: number }) {
  const deleteItemWithId = deleteItem.bind(null, id);
  return (
    <div
      key={id}
      className='flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors'
    >
      <div className='flex items-center space-x-3'>
        <CompleteCheckBox id={id} completed={completed} />
        <label
          htmlFor={`completed-label-${id}`}
          className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
            completed ? 'line-through text-muted-foreground' : ''
          }`}
        >
          {text}
        </label>
      </div>
      <div className='inline-flex items-center'>
        <form action={deleteItemWithId}>
          <Button variant='ghost' size='icon' aria-label='Delete task'>
            <Trash2 className='h-4 w-4 text-destructive' />
          </Button>
        </form>
      </div>
    </div>
  );
}
