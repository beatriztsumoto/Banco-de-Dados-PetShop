import * as PetsModel from './../Models/petsModel.js';

export const listarTodos = async (req, res) => {
    try {
        const pets = await PetsModel.findAll();

        if (!pets || pets.length === 0) {
            res.status(404).json({
                total: pets.length,
                mensagem: 'Não há pets na lista',
                pets
            })
            
        }

        res.status(200).json({
            total: pets.length,
            mensagem: 'lista de pets',
            pets
        })

    } catch (error) {
    res.status(500).json({ 
        erro: 'erro interno do servidor',
        detalhes: error.message,
        status: 500
        })
    }
}


export const listarUm = async (req, res) => {
    try {
    const  id  = req.params.id;
    const pet = await PetsModel.findById(id);

        if (!pet) {
            return res.status(404).json ({
                erro: 'pet não encontrado',
                mensagem: 'Verifique se o id do pet está correto',
                id: id
            })
        }

        res.status(200).json({
            mensagem: 'pet encontrado com sucesso!',
            pet
        })

    } catch (error) {
        res.status(500).json ({
        erro: 'Erro ao buscar pet',
        detalhes: error.message
        })
    }
}