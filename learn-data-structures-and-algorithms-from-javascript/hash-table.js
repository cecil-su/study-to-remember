// HashTable 类，也叫 HashMap 类，是 Dictionary 类的一种散列表实现方式。
// 散列算法的作用是尽可能快地在数据结构中找到一个值。在上面的例子中，如果要在数据结
// 构中获得一个值（使用get方法），需要遍历整个数据结构来得到它。如果使用散列函数，就
// 知道值的具体位置，因此能够快速检索到该值，散列函数的作用是给定一个键值，然后返回值在表中的地址。


class HashTable {
  constructor () {
    this.table = []
  }
  // 散列函数
  static loseloseHashCode (key) {
    let hash = 0 
    for (let codePoint of key) {
      hash += codePoint.charCodeAt()
    }
    return hash % 37
  }

  put (key, value) {
    const position = HashTable.loseloseHashCode(key)
    console.log(`${position} - ${key}`)
    this.table[position] = value
  }

  get (key) {
    return this.table[HashTable.loseloseHashCode(key)]
  }

  remove (key) {
    this.table[HashTable.loseloseHashCode(key)] = undefined
  }
}

const hash = new HashTable()
hash.put('Surmon', 'surmon@email.com')
hash.put('John', 'johnsnow@email.com')
hash.put('Tyrion', 'tyrion@email.com')

console.log(hash.get('Surmon'))
console.log(hash.get('Loiane'))
console.log(hash)