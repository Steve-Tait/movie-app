const { PrismaClient } = require('@prisma/client');
const seedData = require('../data.json');

const prisma = new PrismaClient();

const load = async () => {
    try {
        await prisma.movie.deleteMany();
        for (const item of seedData) {
            await prisma.movie.create({
                data: {
                    ...item,
                    'Popularity': Number(item.Popularity),
                    'Vote_Average': Number(item.Vote_Average),
                    'Vote_Count': parseInt(item.Vote_Count),
                },
            })
        }

    } catch (e) {
        console.error(e)
    } finally {
        await prisma.$disconnect();
    }
};
load();