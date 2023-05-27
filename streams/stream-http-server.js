import http from 'node:http'

const server = http.createServer(async (req, res) => {
    const buffer = []

    for await (const chunk of req) {
        buffer.push(chunk)
    }

    const fullStreamContent = Buffer.concat(buffer).toString()

    res.end(fullStreamContent)
})

server.listen(3334, () => {
    console.log('Server is running')
})