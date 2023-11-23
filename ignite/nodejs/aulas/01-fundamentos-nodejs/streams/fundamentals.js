// Netflix & Spotify

// Importação de clientes via csv (Excel)

// Readable Streams / Writable Streams
// Strems para leitura / Stream para escrever

import { transcode } from 'node:buffer'
import {Readable, Writable, Transform} from 'node:stream'

class OneToHundredSteam extends Readable{
    index = 1

    _read(){
        const i = this.index++
        
        setTimeout(() =>{
            
        if (i>100){
            this.push(null)
        } else{
          const buf = Buffer.from(String(i))

          this.push(buf)
        }
        
        }, 1000)
    }
}

class MultiplyByTenStream extends Writable {
    _write(chunck, encoding, callback){  //chunck é o pedaço que a gente leu no buf //encoding é como é como essa informação está codificada //callback função de escrita que precisa chamar. 
        console.log(Number(chunck.toString())* 10)
        callback()
    }
}

class InverseNumberStream extends Transform{
    _transform(chunck,encoding, callback){
        const transformed = Number(chunck.toString()) * -1
        callback(null, Buffer.from(String(transformed)))
    }
}


new OneToHundredSteam()
.pipe(new InverseNumberStream())
.pipe(new MultiplyByTenStream())