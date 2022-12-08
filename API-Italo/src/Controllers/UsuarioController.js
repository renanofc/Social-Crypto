const UsuarioModel = require('../Models/UsuarioModel');

class UsuarioController {
    async criar(req, res) {
        const createdUsuario = await UsuarioModel.create(req.body);

        return res.status(200).json(createdUsuario);
    }

    async buscar(req, res) {
        const usuarios = await UsuarioModel.find();

        return res.status(200).json(usuarios);
    }

    async editar(req, res) {
        const { id } = req.params;

        await UsuarioModel.findByIdAndUpdate(id, req.body);

        return res.status(200).json({message: "Post atualizado"});
    }

    async deletar(req, res) {
        const { id } = req.params;

        const usuarioDeleted = await UsuarioModel.findByIdAndDelete(id);

        if(!usuarioDeleted){
            return res.status(404).json({message: "Post não existe"});
        }

        return res.status(200).json({message: "Post deletado"});
    }
}

module.exports = new UsuarioController();