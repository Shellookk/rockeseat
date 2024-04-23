const  {Router} = require("express");

const UsersController = require("../controllers/UsersController")

const usersRoutes = Router()

const usersControler = new UsersController()
usersRoutes.post("/", usersControler.create)



usersRoutes.get("/", (request, response) =>{
    const {page, limit} = request.query;

    response.send(`Página ${page}. Mostrar: ${limit}.`)
})


module.exports = usersRoutes;
