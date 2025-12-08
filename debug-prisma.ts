import { PrismaClient } from '@prisma/client';
import 'dotenv/config';

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});

async function main() {
    try {
        console.log('Connecting to database...');
        await prisma.$connect();
        console.log('Connected successfully!');

        console.log('Fetching Todos...');
        const todos = await prisma.todo.findMany();
        console.log('Todos found:', todos);

        console.log('Fetching Countdowns...');
        const countdowns = await prisma.countdown.findMany();
        console.log('Countdowns found:', countdowns);

    } catch (e) {
        console.error('ERROR OCCURRED:', e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
