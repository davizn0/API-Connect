import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_PATH = path.join(__dirname, '../data/users.json');

function readUsers() {
  const rawData = fs.readFileSync(DATA_PATH, 'utf-8');
  return JSON.parse(rawData);
}

function writeUsers(users) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(users, null, 2));
}

function generateNextId(users) {
  if (users.length === 0) return 1;
  const maxId = Math.max(...users.map(user => user.id));
  return maxId + 1;
}

export { readUsers, writeUsers, generateNextId };