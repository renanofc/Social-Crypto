const { Router } = require('express');

const UsuarioController = require('./Controllers/UsuarioController');

const routes = Router();

routes.get('/rodar', (req, res) => {
    return res.status(200).json({ message: "Server funcionando" });
});

routes.post('/usuarios', UsuarioController.criar);
routes.get('/usuarios', UsuarioController.buscar);
routes.put('/usuarios/:id', UsuarioController.editar);
routes.delete('/usuarios/:id', UsuarioController.deletar);

module.exports = routes;