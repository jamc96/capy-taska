'use server';
import prisma from '@/lib/prisma';
import { Todo } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { z } from 'zod'

const newItemSchema = z.object({
  text: z.string().min(2).regex(/^[a-zA-Z]+( [a-zA-Z]+)*$/, { message: "Text must contain only alphabetical characters" }),
  completed: z.boolean().default(false)
})
export async function addItem(prevState: unknown, formData: unknown) {
  if (!(formData instanceof FormData)) { return { message: 'Invalid form data' } }

  const dataFields: Omit<Todo, 'id' | 'createdAt' | 'updatedAt'> = {
    text: formData.get('text') as string,
    completed: false,
  };

  const validateFields = newItemSchema.safeParse(dataFields)
  if (!validateFields.success) {
    return {
      success: false,
      message: 'Please fix the errors in the form',
      errors: validateFields.error.flatten().fieldErrors,
      inputs: dataFields
    }
  }

  await prisma.todo.create({ data: dataFields })

  revalidatePath('/')

}

export async function deleteItem(id: number) {
  await prisma.todo.delete({
    where: {
      id
    }
  })
  revalidatePath('/')
}

export async function completeTask(id: number, completed: boolean) {
  await prisma.todo.update({
    where: { id },
    data: {
      completed: !completed
    }
  })
  revalidatePath('/')
}