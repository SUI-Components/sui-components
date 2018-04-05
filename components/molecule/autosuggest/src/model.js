class OptionShown {
  value
  str
  highlighStart = 0
  highlighEnd = 0
  position = 0
  focus = false

  constructor (value, label, position) {
    this.str = label
    this.value = value
    this.position = position
  }

  setHightlihgt (start, end) {
    this.highlighStart = parseInt(start)
    this.highlighEnd = parseInt(end)
  }

  getPosition () {
    return this.position
  }

  getString () {
    return this.str
  }

  isHighlited () {
    return this.highlighStart < this.highlighEnd
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

  getValue () {
    return this.value
  }
}

export default OptionShown
