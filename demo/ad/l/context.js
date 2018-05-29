module.exports = {
  default: {
    i18n: {
      t(s) {
        return s
          .split('')
          .reverse()
          .join('')
      }
    }
  }
}
