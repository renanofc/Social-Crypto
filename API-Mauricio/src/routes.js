const { Router } = require('express');

const PostController = require('./Controllers/PostController');

const routes = Router();

routes.get('/run', (req, res) => {
    return res.status(200).json({ message: "Server on" });
});

routes.post('/posts', PostController.add);
routes.get('/posts', PostController.list);
routes.get('/posts/:id', PostController.listOne);
routes.put('/posts/:id', PostController.update);
routes.delete('/posts/:id', PostController.delete);

module.exports = routes;