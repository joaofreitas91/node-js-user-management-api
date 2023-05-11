import http from 'node:http'
import { randomUUID } from 'node:crypto'

import { json } from './middleware/json.js'
import { Database } from './database.js'

const port = 3333

const database = new Database()

const server = http.createServer(async (req, res) => {
    const { url, method } = req

    await json(req, res)

    if(url === '/users' && method === 'GET') {
        return res.end(JSON.stringify(database.select('users')))
    }

    if(url === '/users' && method === 'POST') {
        const { name, email } = req.body

        const user = {
            id: randomUUID(),
            name,
            email
        }

        database.insert('users', user)
        
        return res.writeHead(201).end()
    }

    res.writeHead(404).end()
})

server.listen(port , () => {
    console.log(`Server is listening on port ${port}`)
}) 