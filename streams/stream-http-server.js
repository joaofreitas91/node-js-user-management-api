import http from 'node:http'
import { Transform } from 'node:stream'

class InvertNumberStream extends Transform {
    _transform(chunk, encoding, callback) {
        const number = parseInt(chunk.toString())
        const result = number * -1
        const str = Buffer.from(`${result}\n`)

        console.log(result)

        this.push(str)
        callback()
    }
}

const server = http.createServer((req, res) => {
    console.log('Request received')
    req
        .pipe(new InvertNumberStream())
        .pipe(res)
})

server.listen(3333, () => {
    console.log('Server is running')
})