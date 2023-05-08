import http from 'node:http'

const port = 3333

const users = []

const server = http.createServer((req, res) => {
    const { url, method } = req

    if(url === '/users' && method === 'GET') {
        console.log('GET USERS')
        return res.end(JSON.stringify(users))
    }

    if(url === '/users' && method === 'POST') {

        users.push({
            id: 1,
            name: 'John Doe',
            email: 'johndoe@email.com'
        })
        
        return res.writeHead(201).end()
    }

    res.writeHead(404).end()
})

server.listen(port , () => {
    console.log(`Server is listening on port ${port}`)
}) 