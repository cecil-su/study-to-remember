const Queue = require('./queue.js')

class LoopQueue extends Queue {
  constructor (items) {
    super(items)
  }

  getIndex (index) {
    const length = this.items.length
    console.log(this.size)
    return index > length ? (index % length) : index
  }

  find (index) {
    return !this.isEmpty ? this.items[this.getIndex(index)] : null
  }
}

const loopQueue = new LoopQueue(['Surmon'])
loopQueue.enqueue('SkyRover')
loopQueue.enqueue('Even')
loopQueue.enqueue('Alice')
console.log(loopQueue.size, loopQueue.isEmpty)
loopQueue.print()

console.log(loopQueue.find(26))
console.log(loopQueue.find(87651))