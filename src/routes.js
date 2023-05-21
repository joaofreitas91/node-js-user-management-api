import { Database } from './database.js'
import { randomUUID } from 'node:crypto'


const database = new Database()

export const  routes = [
    {
        path: '/users',
        method: 'GET',
        handler: (req, res) => {
            return res.end(JSON.stringify(database.select('users')))
        },
    },
    {
        path: '/users',
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
]