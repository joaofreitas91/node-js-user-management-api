import http from 'node:http'

const port = 3333

const users = []

const server = http.createServer((req, res) => {
    const { url, method } = req

    if(url === '/users' && method === 'GET') {
        console.log('GET USERS')
        return res.end(JSON.stringify(users))
    }

    if(url === '/users' && method === 'PUT') {
        return res.end('PUT USERS')
    }

    if(url === '/users' && method === 'POST') {

        users.push({
            id: 1,
            name: 'John Doe',
            email: 'johndoe@email.com'
        })
        
        return res.end('User created')
    }

    res.end('Hello World')
})

server.listen(port , () => {
    console.log(`Server is listening on port ${port}`)
}) 