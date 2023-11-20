import http from 'node:http'
//commonJS => require
//ESmodules => import/export
const users = []

const server = http.createServer((req, res) =>{
    const{ method, url} = req

    if (method ==='GET' && url==='/users') {
        return res
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users))


    }

    if (method=== 'POST' && url ==='/users') {
        users.push({
            id: 1,
            name:'John Doe',
            email: 'Johndoe@example.com '
        })

        return res.writeHead(201).end()

}

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