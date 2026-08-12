function validateUser(req, res, next) {
  const { nome, email } = req.body;

  if (!nome || typeof nome !== 'string' || nome.trim() === '') {
    return res.status(400).json({
      error: 'O campo "nome" é obrigatório e deve ser uma string não vazia.'
    });
  }

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({
      error: 'O campo "email" é obrigatório e deve ser um e-mail válido.'
    });
  }

  next();
}

export { validateUser };