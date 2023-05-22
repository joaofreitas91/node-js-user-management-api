import http from 'node:http'
import { json } from './middleware/json.js'
import { routes } from './routes.js'
import { extractQueryParams } from './utils/extract-query-params.js'

const port = 3333

const server = http.createServer(async (req, res) => {
    const { url, method } = req

    await json(req, res)

    const router = routes.find(route => (
        route.method === method && route.path.test(url)
    ))

    if (router) {
        const routeParams = req.url.match(router.path)

        const {query, ...params} = routeParams.groups
        
        req.params = params || {}
        req.query = query ? extractQueryParams(query) : {}

        return router.handler(req, res)
    }        

    res.writeHead(404).end()
})

server.listen(port , () => {
    console.log(`Server is listening on port ${port}`)
}) 