import http from 'node:http'
import { json } from './middleware/json.js'
import { routes } from './routes.js'

const port = 3333

const server = http.createServer(async (req, res) => {
    const { url, method } = req

    await json(req, res)

    const router = routes.find(route => (
        route.path === url && route.method === method
    ))

    if (router) {
        return router.handler(req, res)
    }        

    res.writeHead(404).end()
})

server.listen(port , () => {
    console.log(`Server is listening on port ${port}`)
}) 