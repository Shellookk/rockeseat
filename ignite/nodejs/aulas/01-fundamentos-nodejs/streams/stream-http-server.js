import http from 'node:http'
import { Transform } from 'node:stream'

class InverseNumberStream extends Transform{
    _transform(chunck,encoding, callback){
        const transformed = Number(chunck.toString()) * -1
        callback(null, Buffer.from(String(transformed)))
    }
}

// req => readableStream
// res => WritableStream

const server = http.createServer(async (req,res) => {
    const buffers = []

    for await (const chunck of req){
        buffers.push(chunck)
    }

    const  fullstreamContent = Buffer.concat(buffers).toString()

    console.log(fullstreamContent)

    return res.end(fullstreamContent)
})


server.listen(3334)