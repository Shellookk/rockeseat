import http from 'node:http'
import { json } from './middlewares/json.js'
import { randomUUID } from 'node:crypto'


//commonJS => require
//ESmodules => import/export


const server = http.createServer(async (req, res) =>{
    const{ method, url} = req
    
    await json(req,res)
    


    if (method ==='GET' && url==='/users') {
        
    }

    if (method=== 'POST' && url ==='/users') {
        

return res.writeHead(404).end()
})

server.listen(3333)

// Http 
// - Metódo HTTP    
// - URL
// GET, POST, PUT, PATCH, DELETE

// GET => BUSCAR UMA INFORMAÇÃO DO BACK-END
// POST => CRIAR UMA INFORMAÇÃO NO BACK-END
// PUT => CRIAR UM RECURSO NO BACK-END
// PATCH => ATUALIZA UMA INFORMAÇÃO ESPECÍFICA DE UM RECURSO NO BACK-END

// Stateful - Stateless
// Stateful - Salva os dados na memória, stateless não salva nada em memória, salva em dispositivcos externos.

// Cabeçalhos (Requisição/Resposta) => metadados

// http status code