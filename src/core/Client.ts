export default class Client {
  #name: string
  #age: number
  #id: string

  constructor(name: string, age: number, id: string = null) {
    this.#name = name
    this.#age = age
    this.#id = id
  }

  static void() {
    return new Client('', 0)
  }

  get name() {
    return this.#name
  }

  get age() {
    return this.#age
  }

  get id() {
    return this.#id
  }
}