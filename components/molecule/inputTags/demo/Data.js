class Data {
  static #beattles = [
    'John Lennon',
    'Paul McCartney',
    'George Harrison',
    'Ringo Starr'
  ]

  static #ledZeppelin = [
    'Robert Plant',
    'Jimmy Page',
    'John Paul Jones',
    'John Bonham'
  ]

  static #queen = [
    'Brian May',
    'Freddie Mercury',
    'John Deacon',
    'Roger Taylor'
  ]

  static get beattles() {
    return this.#beattles
  }

  static get ledZeppelin() {
    return this.#ledZeppelin
  }

  static get queen() {
    return this.#queen
  }

  static getDataObject = array =>
    array.map((arrayElement, index) => ({key: index, label: arrayElement}))
}

export default Data
