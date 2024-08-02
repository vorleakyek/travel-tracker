/* eslint-disable @typescript-eslint/no-unused-vars -- Remove when used */
import 'dotenv/config';
import express from 'express';
import pg from 'pg';
import { ClientError, authMiddleware, errorMiddleware } from './lib/index.js';
import { count } from 'console';

type UsersWithCountries = {
  color: string;
  country_code: string;
  name: string;
  user_id: number;
}

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

// Create paths for static directories
const reactStaticDir = new URL('../client/dist', import.meta.url).pathname;
const uploadsStaticDir = new URL('public', import.meta.url).pathname;

app.use(express.static(reactStaticDir));
// Static directory for file uploads server/public/
app.use(express.static(uploadsStaticDir));
app.use(express.json());

type User = {
  id: number;
  name: string;
  color: string;
}

export type CurrentUser = {
  countries: string[];
  total: number;
  color: string;
  allUsers: User[];
}

async function checkVisited(currentUserId: number): Promise<string[]> {
  const sql = `
    select country_code from visited_countries
      join users
      on users.id = user_id
      where user_id = $1
  `;

  const param = [currentUserId]
  const result = await db.query(sql,param);
  const countries: string[]= [];
  result.rows.forEach(country => countries.push(country.country_code));
  return countries;
}

async function getAllUsers(): Promise<User[]> {
  const sql = `
    select * from users
  `;
  const result = await db.query(sql);
  const users: User[] = result.rows;
  return users;
}

app.get('/api/:currentUserId', async (req, res) => {
  const countries = await checkVisited(+req.params.currentUserId);
  const allUsers = await getAllUsers();
  const currentUser = allUsers.find(user => user.id == +req.params.currentUserId);
  res.json({
    countries: countries,
    total: countries.length,
    color: currentUser?.color,
    allUsers: allUsers
  })
})

/*
 * Handles paths that aren't handled by any other route handler.
 * It responds with `index.html` to support page refreshes with React Router.
 * This must be the _last_ route, just before errorMiddleware.
 */
app.get('*', (req, res) => res.sendFile(`${reactStaticDir}/index.html`));

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log('Listening on port', process.env.PORT);
});
