import { Database } from './database.js'
import { randomUUID } from 'node:crypto'
import { buildRouterPathRegExp } from './utils/build-router-path.js'


const database = new Database()

export const  routes = [
    {
        path: buildRouterPathRegExp('/users'),
        method: 'GET',
        handler: (req, res) => {
            return res.end(JSON.stringify(database.select('users')))
        },
    },
    {
        path: buildRouterPathRegExp('/users/:id'),
        method: 'GET',
        handler: (req, res) => {
            const { id } = req.params

            const user = database.selectOne('users', id)

            if (!user) {
                return res.writeHead(404).end()
            }

            return res.end(JSON.stringify(user))
        }
    },
    {
        path: buildRouterPathRegExp('/users'),
        method: 'POST',
        handler: (req, res) => {
            const { name, email } = req.body

            const user = {
                id: randomUUID(),
                name,
                email
            }
  
            database.insert('users', user)
          
            return res.writeHead(201).end()
        },
    },
    {
        path: buildRouterPathRegExp('/users/:id'),
        method: 'DELETE',
        handler: (req, res) => {
            const { id } = req.params

            database.select('users')

            database.delete('users', id)

            return res.writeHead(204).end()
        }
    }
]