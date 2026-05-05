import 'dotenv/config';
import { defineConfig } from 'prisma/config';

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
    seed: 'node --loader ts-node/esm src/seed.ts',
  },
  datasource: {
    url: process.env.DATABASE_URL,
  }
});
