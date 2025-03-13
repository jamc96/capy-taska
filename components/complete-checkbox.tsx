'use client';
import { completeTask } from '@/app/actions';
import { Checkbox } from './ui/checkbox';

export default function CompleteCheckBox({
  id,
  completed,
}: {
  id: number;
  completed: boolean;
}) {
  return (
    <Checkbox
      checked={completed}
      name='completed'
      className='cursor-pointer'
      onCheckedChange={async () => {
        await completeTask(id, completed);
      }}
    />
  );
}
