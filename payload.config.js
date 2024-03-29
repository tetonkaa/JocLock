import { buildConfig } from 'payload/config';
import Categories from './collections/Categories';
import Posts from './collections/Posts';

import Users from './collections/Users';


export default buildConfig({
  serverURL: process.env.HEROKUURL,
  admin: {
    user: Users.slug,
  },
  collections: [
    Categories,
    Posts,
    Users,
  ],
});
