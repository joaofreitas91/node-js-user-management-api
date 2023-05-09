import { Readable } from 'node:stream'

class OneToOneHundredStream extends Readable {
    index = 1
    _read() {
        const i = this.index++

        setTimeout(() => {
            if (i > 100) {
                this.push(null)
            } else {
                const str = Buffer.from(`${i}\n`)
                this.push(str)
            }
        }, 50)
    }
}

fetch('http://localhost:3333', {
    method: 'POST',
    body: new OneToOneHundredStream(),
    duplex: 'half'
})
    .then((res) => res.text())
    .then((text) => console.log(text))