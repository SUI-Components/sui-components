class OptionShown {
  value
  str
  highlighStart = 0
  highlighEnd = 0
  position = 0
  focus = false
  featured = false

  getId () {
    return this.getValue() + '' + ((this.featured) ? '_featured_' : '')
  }

  constructor (value, label, position) {
    this.str = label
    this.value = value
    this.position = position
  }

  getHighlight () {
    return [this.highlighStart, this.highlighEnd]
  }

  setHightlihgt (start, end) {
    this.highlighStart = parseInt(start)
    this.highlighEnd = parseInt(end)
  }

  isHighlited () {
    return this.highlighStart < this.highlighEnd
  }

  getPosition () {
    return this.position
  }

  setPosition (pos) {
    this.position = pos
  }

  getString () {
    return this.str
  }

  getStringTruncated () {
    const lenght = 35

    if (this.getString().length <= lenght) {
      return this.getString()
    }
    const trimmed = this.getString().substring(0, Math.min(lenght, this.getString().length))
    return trimmed + '...'
  }

  getFirstPartString () {
    return this.str.substring(0, this.highlighStart)
  }

  getHighlightedString () {
    return this.str.substring(this.highlighStart, this.highlighEnd)
  }

  getLastPartString () {
    return this.str.substring(this.highlighEnd, this.str.length)
  }

  isFocus () {
    return this.focus
  }

  focusRow () {
    this.focus = true
  }

  resetFocus () {
    this.focus = false
  }

  featuredRow () {
    this.featured = true
  }

  isFeatured () {
    return this.featured
  }

  getValue () {
    return this.value
  }
}

export default OptionShown
