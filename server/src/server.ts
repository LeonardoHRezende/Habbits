import Fastify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();
const app = Fastify();

app.register(cors);

app.get('', async () => {
    const habits = await prisma.habit.findMany({
        where: {
            title: {
                startsWith: 'Beber'
            }
        }
    })
});

app.listen({
    port: 3333
});