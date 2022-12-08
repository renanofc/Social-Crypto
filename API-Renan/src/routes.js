const { Router } = require('express');

const UserController = require('./Controllers/UserController');

const routes = Router();

routes.get('/run', (req, res) => {
    return res.status(200).json({ message: "Server is running" });
});

routes.post('/users', UserController.adicionar);
routes.get('/users', UserController.encontrar);
routes.put('/users/:id', UserController.atualizar);
routes.delete('/users/:id', UserController.deletar);

module.exports = routes;