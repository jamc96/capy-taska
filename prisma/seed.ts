import prisma from '@/lib/prisma';

async function main() {
  await prisma.todo.deleteMany(); // Clear any existing data (optional, since DB is new)

  await prisma.todo.createMany({
    data: [
      {
        text: 'Learn Prisma',
        completed: false,
        createdAt: new Date('2025-03-01T10:00:00Z'), // Optional: custom date
        updatedAt: new Date('2025-03-01T10:00:00Z')  // Optional: custom date
      },
      {
        text: 'Build an app',
        completed: true,
        createdAt: new Date('2025-03-02T14:30:00Z'),
        updatedAt: new Date('2025-03-03T09:15:00Z')
      },
      // Add more todos as needed (12 rows to match your original data?)
      { text: 'Write docs', completed: false },
      { text: 'Test app', completed: false },
      { text: 'Deploy app', completed: false },
      { text: 'Fix bugs', completed: true },
      { text: 'Add features', completed: false },
      { text: 'Review code', completed: false },
      { text: 'Plan next sprint', completed: false },
      { text: 'Meet team', completed: true },
      { text: 'Update dependencies', completed: false },
      { text: 'Celebrate launch', completed: false },
    ],
  });
  console.log(`Database seeded completed!`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });