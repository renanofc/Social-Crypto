const PostModel = require('../Models/PostModel');

class PostController {
    async add(req, res) {
        const createdPost = await PostModel.create(req.body);

        return res.status(200).json(createdPost);
    }

    async list(req, res) {
        const posts = await PostModel.find();

        return res.status(200).json(posts);
    }

    async listOne(req, res) {
        try {
            const { id } = req.params;

            const post = await PostModel.findById(id);

            if(!post){
                return res.status(404).json({message: "Post não existe"});
            }

            return res.status(200).json(post);
        } catch (error) {
            return res.status(404).json({message: "Falha ao listar"});
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;

            await PostModel.findByIdAndUpdate(id, req.body);

            return res.status(200).json({message: "Post atualizado"});
        } catch (error) {
            return res.status(404).json({message: "Falha ao atualizar"});
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;

            const postDeleted = await PostModel.findByIdAndDelete(id);

            if(!postDeleted){
                return res.status(404).json({message: "Post não existe"});
            }

            return res.status(200).json({message: "Post deletado"});
        } catch (error) {
            return res.status(404).json({message: "Falha ao deletar"});
        }
    }
}

module.exports = new PostController();