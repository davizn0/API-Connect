import { readUsers, writeUsers, generateNextId } from '../services/users.service.js';

function listUsers(req, res) {
  const users = readUsers();
  return res.status(200).json({ data: users });
}

function getUserById(req, res) {
  const { id } = req.params;
  const users = readUsers();

  const user = users.find(u => u.id === Number(id));

  if (!user) {
    return res.status(404).json({ error: 'Usuário não encontrado' });
  }

  return res.status(200).json({ data: user });
}

function createUser(req, res) {
  const { nome, email } = req.body;

  const users = readUsers();

  const newUser = {
    id: generateNextId(users),
    nome,
    email
  };

  users.push(newUser);
  writeUsers(users);

  return res.status(201).json({ data: newUser });
}

function updateUser(req, res) {
  const { id } = req.params;
  const { nome, email } = req.body;

  const users = readUsers();
  const index = users.findIndex(u => u.id === Number(id));

  if (index === -1) {
    return res.status(404).json({ error: 'Usuário não encontrado' });
  }

  users[index] = {
    ...users[index],
    nome: nome ?? users[index].nome,
    email: email ?? users[index].email
  };

  writeUsers(users);

  return res.status(200).json({ data: users[index] });
}

function deleteUser(req, res) {
  const { id } = req.params;

  const users = readUsers();
  const index = users.findIndex(u => u.id === Number(id));

  if (index === -1) {
    return res.status(404).json({ error: 'Usuário não encontrado' });
  }

  users.splice(index, 1);
  writeUsers(users);

  return res.status(204).send();
}

export { listUsers, getUserById, createUser, updateUser, deleteUser };