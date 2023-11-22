import { faker } from '@faker-js/faker';
import { PrismaClient, posts, users, categories } from '../src/generated/client';

const prisma = new PrismaClient();

function post() {
  return {
    content: `<h1>Sed in rebus apertissimis nimium longi sumus.</h1>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illa sunt similia: hebes acies est cuipiam oculorum, corpore alius senescit; Quicquid porro animo cernimus, id omne oritur a sensibus; Duo Reges: constructio interrete. <a href='http://loripsum.net/' target='_blank'>Primum quid tu dicis breve?</a> <a href='http://loripsum.net/' target='_blank'>Videsne, ut haec concinant?</a> <a href='http://loripsum.net/' target='_blank'>Primum Theophrasti, Strato, physicum se voluit;</a> <b>Age, inquies, ista parva sunt.</b> Quam illa ardentis amores excitaret sui! Cur tandem? </p>

<p><a href='http://loripsum.net/' target='_blank'>Quare attende, quaeso.</a> Egone non intellego, quid sit don Graece, Latine voluptas? Quod mihi quidem visus est, cum sciret, velle tamen confitentem audire Torquatum. <b>Beatus autem esse in maximarum rerum timore nemo potest.</b> <i>Tollenda est atque extrahenda radicitus.</i> Sic consequentibus vestris sublatis prima tolluntur. Nam his libris eum malo quam reliquo ornatu villae delectari. Avaritiamne minuis? Quis est, qui non oderit libidinosam, protervam adolescentiam? </p>

<p>Quid ergo? Quis est, qui non oderit libidinosam, protervam adolescentiam? Honesta oratio, Socratica, Platonis etiam. Ne amores quidem sanctos a sapiente alienos esse arbitrantur. Quorum altera prosunt, nocent altera. Qui non moveatur et offensione turpitudinis et comprobatione honestatis? An me, inquam, nisi te audire vellem, censes haec dicturum fuisse? Illud mihi a te nimium festinanter dictum videtur, sapientis omnis esse semper beatos; </p>
`,
    excerpt: faker.lorem.words(10),
    title: faker.lorem.text(),
    image: faker.image.url(),
    created_at: new Date(),
    updated_at: new Date(),
  };
}

function user() {
  return {
    name: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    created_at: new Date(),
    updated_at: new Date(),
  };
}

function category() {
  return {
    title: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    created_at: new Date(),
    updated_at: new Date(),
  };
}

export const POSTS: { title: string; content: string; image: string }[] = faker.helpers.multiple(
  post,
  {
    count: 5,
  },
);

export const USERS: { name: string; email: string; avatar: string; password: string }[] =
  faker.helpers.multiple(user, {
    count: 5,
  });

export const CATEGORIES: { title: string; description: string }[] = faker.helpers.multiple(
  category,
  {
    count: 5,
  },
);

const createPostsSeed = async () => {
  const data: posts[] = [];

  for (const post of POSTS) {
    const created = await prisma.posts.create({
      data: {
        ...post,
      },
    });
    data.push(created);
  }

  return data;
};

const createUserSeed = async () => {
  const data: users[] = [];

  for (const user of USERS) {
    const created = await prisma.users.create({
      data: {
        ...user,
      },
    });
    data.push(created);
  }
  return data;
};

const createCategorySeed = async () => {
  const data: categories[] = [];
  for (const category of CATEGORIES) {
    const created = await prisma.categories.create({
      data: {
        ...category,
      },
    });
    data.push(created);
  }
  return data;
};

const main = async () => {
  const seeds = [0, 1, 2, 3, 4];

  const posts = await createPostsSeed();
  const users = await createUserSeed();
  const categories = await createCategorySeed();

  for (const seed of seeds) {
    await prisma.post_user_relations.create({
      data: {
        user_id: users[seed].id,
        post_id: posts[seed].id,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });

    await prisma.post_category_relations.create({
      data: {
        category_id: categories[seed].id,
        post_id: posts[seed].id,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });
  }
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
