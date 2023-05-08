//process.stdin é um stream de leitura
//process.stdout é um stream de escrita

// process.stdin.
//     pipe(process.stdout)

import { Readable, Transform, Writable } from 'node:stream'

//Readable é um stream de leitura, nesse caso ele vai ler de 1 a 100
class OneToOneHundredStream extends Readable {
    index = 1
    _read() {
        const i = this.index++

        if (i > 100) {
            this.push(null)
        } else {
            const str = Buffer.from(`${i}\n`)
            this.push(str)
        }
    }
}
//Transform é um stream de transformação, nesse caso ele vai inverter o número antes de passar para o próximo stream
//nesse exemplo o stream será transformado antes de ser exibido
class InvertNumberStream extends Transform {
    _transform(chunk, encoding, callback) {
        const number = parseInt(chunk.toString())
        const result = number * -1
        const str = Buffer.from(`${result}\n`)
        this.push(str)
        callback()
    }
}

//Writable é um stream de escrita, nesse caso ele vai multiplicar o número por 10 e escrever no console
//nesse exemplo o stream será processado e exibido mas o dado original não será alterado
class MultiplyByTenStream extends Writable {
    _write(chunk, encoding, callback) {
        const number = parseInt(chunk.toString())
        const result = number * 10
        process.stdout.write(`${result}\n`)
        callback()
    }
}

new OneToOneHundredStream()
    .pipe(new InvertNumberStream())
    .pipe(new MultiplyByTenStream())