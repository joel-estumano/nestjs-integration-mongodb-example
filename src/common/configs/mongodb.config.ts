import { registerAs } from '@nestjs/config';

export default registerAs('mongodbConfig', () => ({
  host: `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_CLUSTER}/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`
}));
