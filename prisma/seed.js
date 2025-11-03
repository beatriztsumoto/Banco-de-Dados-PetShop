import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const pets = [
  { nome: "Toddy", especie: "Cachorro", idade: 7, dono: "Luciana" },
  { nome: "Piu Piu", especie: "Calopsita", idade: 5, dono: "Andrea" },
  { nome: "Thor", especie: "Cachorro", idade: 4, dono: "João" },
  { nome: "Luna", especie: "Gato", idade: 1, dono: "Marina" },
  { nome: "Bolt", especie: "Cachorro", idade: 5, dono: "Pedro" },
  { nome: "Nina", especie: "Cachorro", idade: 2, dono: "Fernanda" },
  { nome: "Simba", especie: "Gato", idade: 3, dono: "Eduardo" },
  { nome: "Bidu", especie: "Cachorro", idade: 6, dono: "Rafael" },
  { nome: "Mel", especie: "Cachorro", idade: 1, dono: "Laura" },
  { nome: "Frajola", especie: "Gato", idade: 4, dono: "André" },
  { nome: "Lili", especie: "Cachorro", idade: 3, dono: "Camila" },
  { nome: "Toby", especie: "Cachorro", idade: 2, dono: "Henrique" },
  { nome: "Sushi", especie: "Gato", idade: 5, dono: "Juliana" },
  { nome: "Bob", especie: "Cachorro", idade: 4, dono: "Ricardo" },
  { nome: "Maggie", especie: "Cachorro", idade: 2, dono: "Patrícia" },
  { nome: "Chico", especie: "Pássaro", idade: 1, dono: "Ana" },
  { nome: "Kira", especie: "Cachorro", idade: 3, dono: "Gustavo" },
  { nome: "Léo", especie: "Gato", idade: 4, dono: "Carla" },
  { nome: "Zeca", especie: "Peixe", idade: 1, dono: "Sofia" },
  { nome: "Pingo", especie: "Cachorro", idade: 2, dono: "Diego" },
  { nome: "Amora", especie: "Gato", idade: 3, dono: "Tatiane" },
  { nome: "Duke", especie: "Cachorro", idade: 6, dono: "Vinícius" },
  { nome: "Pandora", especie: "Gato", idade: 2, dono: "Isabela" },
  { nome: "Spike", especie: "Cachorro", idade: 4, dono: "Renan" },
  { nome: "Cookie", especie: "Gato", idade: 1, dono: "Natália" },
  { nome: "Zeus", especie: "Cachorro", idade: 5, dono: "Gabriel" },
  { nome: "Teca", especie: "Gato", idade: 2, dono: "Melissa" },
  { nome: "Marley", especie: "Cachorro", idade: 3, dono: "Rodrigo" },
  { nome: "Fiona", especie: "Cachorro", idade: 1, dono: "Aline" },
  { nome: "Nino", especie: "Gato", idade: 4, dono: "Letícia" },
  { nome: "Loki", especie: "Cachorro", idade: 2, dono: "Caio" },
  { nome: "Maya", especie: "Gato", idade: 3, dono: "Bruna" },
  { nome: "Jade", especie: "Cachorro", idade: 5, dono: "Felipe" },
  { nome: "Tom", especie: "Gato", idade: 2, dono: "Carol" },
  { nome: "Apolo", especie: "Cachorro", idade: 4, dono: "Rafaela" },
  { nome: "Tigresa", especie: "Gato", idade: 3, dono: "Daniel" },
  { nome: "Snow", especie: "Cachorro", idade: 2, dono: "Manuela" },
  { nome: "Pipoca", especie: "Cachorro", idade: 1, dono: "Samuel" },
  { nome: "Bela", especie: "Cachorro", idade: 6, dono: "Débora" },
  { nome: "Kiwi", especie: "Pássaro", idade: 2, dono: "Vitor" },
  { nome: "Raj", especie: "Gato", idade: 4, dono: "Catarina" },
  { nome: "Lulu", especie: "Cachorro", idade: 3, dono: "Igor" },
  { nome: "Pretinha", especie: "Gato", idade: 2, dono: "Amanda" },
  { nome: "Max", especie: "Cachorro", idade: 5, dono: "Fernando" },
  { nome: "Ziggy", especie: "Gato", idade: 1, dono: "Marcos" },
  { nome: "Lara", especie: "Cachorro", idade: 4, dono: "Paula" },
  { nome: "Fred", especie: "Cachorro", idade: 3, dono: "Otávio" },
  { nome: "Biscoito", especie: "Gato", idade: 2, dono: "Helena" },
  { nome: "Charlie", especie: "Cachorro", idade: 1, dono: "Rebeca" },
  { nome: "Blue", especie: "Pássaro", idade: 2, dono: "Hugo" },
  { nome: "Tigrão", especie: "Gato", idade: 5, dono: "Patrícia" },
];

async function seed() {
    await prisma.pet.deleteMany({});

    const result = await prisma.pet.createMany({
        data: pets,
        skipDuplicates: true
    })

    console.log(`DB seeded com ${result.count} registros de pets adicionados`);

    await prisma.$disconnect();
}

seed().catch(e => {
    console.error(e);
    
    prisma.$disconnect();
    process.exit(1);
})