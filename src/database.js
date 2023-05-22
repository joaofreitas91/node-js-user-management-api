import fs from 'node:fs/promises'

const databasePath = new URL('./database.json', import.meta.url)

export class Database {
    #database = {}

    constructor() {
        fs.readFile(databasePath).then(data => {
            this.#database = JSON.parse(data)
        }).catch(() => {
            this.#persist()
        })
    }

    #persist() {
        fs.writeFile(databasePath, JSON.stringify(this.#database))
    }

    select(table, search) {
        let data = this.#database[table] ?? []

        if (search) {
            const paramsToSearch = {
                name: search,
                email: search
            }

            data = data.filter(row => {
                return Object.entries(paramsToSearch).some(([key, value]) => {
                    return row[key].toLowerCase().includes(value.toLowerCase())
                })
            })    
        }
        
        return data
    }

    selectOne(table, id) {
        const data = this.#database[table] ?? []
        
        return data.find(data => data.id === id)
    }

    insert(table, data) {
        if (Array.isArray(this.#database[table])) {
            this.#database[table].push(data)
        } else {
            this.#database[table] = [data]
        }

        this.#persist()

        return data
    }

    update(table, id, data) {
        const index = this.#database[table].findIndex(data => data.id === id)

        if (index > -1) {
            this.#database[table][index] = { ...data, id }
            this.#persist()
        }

    }

    delete(table, id) {
        this.#database[table] = this.#database[table].filter(data => data.id !== id)

        this.#persist()
    }
}