import http from 'node:http'
//commonJS => require
//ESmodules => import/export
const server = http.createServer((req, res) =>{
    const{ method, url} = req

    if (method ==='GET' && url==='/users') {
        return res.end('Listagem de usuários')
    }

    if (method=== 'POST' && url ==='/users') {
        return res.end('Criação de usuário')
    }
    
    return res.end('Hello World')
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