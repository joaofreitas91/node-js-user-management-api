import http from 'node:http'
import { randomUUID } from 'node:crypto'

const port = 3333

const users = []

const server = http.createServer(async (req, res) => {
    const { url, method } = req

    const buffer = []

    for await (const chunk of req) {
        buffer.push(chunk)
    }

    try {
        req.body = JSON.parse(Buffer.concat(buffer).toString())
    } catch {
        req.body = {}
    }

    if(url === '/users' && method === 'GET') {
        return res.end(JSON.stringify(users))
    }

    if(url === '/users' && method === 'POST') {

        const { name, email } = req.body

        users.push({
            id: randomUUID(),
            name,
            email
        })
        
        return res.writeHead(201).end()
    }

    res.writeHead(404).end()
})

server.listen(port , () => {
    console.log(`Server is listening on port ${port}`)
}) 