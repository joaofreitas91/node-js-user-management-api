import http from 'node:http'

const port = 3333

const server = http.createServer((req, res) => {
    const { url, method } = req

    if(url === '/users' && method === 'GET') {
        return res.end('GET USERS')
    }

    if(url === '/users' && method === 'PUT') {
        return res.end('PUT USERS')
    }

    if(url === '/users' && method === 'POST') {
        console.log('POST USERS')
        return res.end('POST USERS')
    }

    res.end('Hello World')
})

server.listen(port , () => {
    console.log(`Server is listening on port ${port}`)
})