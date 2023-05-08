//process.stdin é um stream de leitura
//process.stdout é um stream de escrita

// process.stdin.
//     pipe(process.stdout)

import { Readable } from 'node:stream'

class OneToOneHundredStream extends Readable {
    index = 1
    _read() {
        const i = this.index++

        if (i > 100) {
            this.push(null)
        } else {
            const str = `${i}\n`
            this.push(str)
        }
    }
}

new OneToOneHundredStream().pipe(process.stdout)