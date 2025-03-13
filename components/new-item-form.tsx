'use client';
import { PlusCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { addItem } from '@/app/actions';
import { useActionState } from 'react';

const initialState = {
  succes: false,
  message: '',
};
export default function NewItemForm() {
  const [state, formAction, pending] = useActionState(addItem, initialState);
  return (
    <form className='flex flex-col mb-6 ' action={formAction}>
      <div className='flex gap-x-2'>
        <div className='flex-1 space-y-1 flex flex-col'>
          <Input
            placeholder='Add a new task...'
            name='text'
            className={`${state?.errors?.text ? 'border-red-500' : ''} `}
            defaultValue={state?.inputs?.text}
            required
            minLength={2}
          />
        </div>

        <Button type='submit' disabled={pending}>
          <PlusCircle className='h-5 w-5 mr-1' />
          Add
        </Button>
      </div>
      {state?.errors?.text && (
        <p id='streetAddress-error' className='text-sm text-red-500'>
          {state.errors.text[0]}
        </p>
      )}
  </form>
  );
}
