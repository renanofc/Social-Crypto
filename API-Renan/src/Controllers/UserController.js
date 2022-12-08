const UserModel = require('../Models/UserModel');

class UserController {
    async adicionar(req, res) {
        const createdUser = await UserModel.create(req.body);

        return res.status(200).json(createdUser);
    }

    async encontrar(req, res) {
        const users = await UserModel.find();

        return res.status(200).json(users);
    }

    async atualizar(req, res) {
        const { id } = req.params;

        await UserModel.findByIdAndUpdate(id, req.body);

        return res.status(200).json({message: "User atualizado"});
    }

    async deletar(req, res) {
        const { id } = req.params;

        const userDeleted = await UserModel.findByIdAndDelete(id);

        if(!userDeleted){
            return res.status(404).json({message: "User não existe"});
        }

        return res.status(200).json({message: "User deletado"});
    }
}

module.exports = new UserController();