import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import TodoList from '@/components/todo-list';
import AddItem from '@/components/add-item';

export default function TodoApp() {
  return (
    <>
      <section className='flex-1 self-center'>
        <Card className='w-full max-w-md'>
          <CardHeader>
            <CardTitle className='text-2xl text-center'>Todo App</CardTitle>
          </CardHeader>
          <CardContent>
            <AddItem />
            <TodoList />
          </CardContent>
        </Card>
      </section>
    </>
  );
}
