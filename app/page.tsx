import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import TodoList from '@/components/todo-list';
import NewItemForm from '@/components/new-item-form';

export default function TodoApp() {
  return (
    <>
      <section className='flex-1'>
        <Card className='mx-auto w-full shrink-0 max-w-xl'>
          <CardHeader>
            <CardTitle className='text-2xl text-center'>Todo App</CardTitle>
          </CardHeader>
          <CardContent className='w-full'>
            <NewItemForm />
            <TodoList />
          </CardContent>
        </Card>
      </section>
    </>
  );
}
