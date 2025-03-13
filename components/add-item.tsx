'use client';
import { PlusCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export default function AddItem() {
  return (
    <div className='flex space-x-2 mb-6'>
      <Input
        placeholder='Add a new task...'
        onChange={(e) => console.log(e.target.value)}
      />
      <Button>
        <PlusCircle className='h-5 w-5 mr-1' />
        Add
      </Button>
    </div>
  );
}
