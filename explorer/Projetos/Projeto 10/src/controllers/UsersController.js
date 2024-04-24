const AppError = require("../utils/AppError")



class UsersController{
 /*
    index - GET para listar vários registros
    show - GET para exibir um registro especifico
    create - POST para criar um registro
    update - PUt para atualizar um registro
    delete - DELETE para deletar registros
 */
    create(request, response){
            
        const {name, email, senha} = request.body;

        if(!name){
            throw new AppError("Nome é obrigatório")
        }

        response.status(201).json({name, email, senha})


    }
}

module.exports = UsersController;