export const sandBoxDocumentWrite = (fn, ...args) => {
  const _write = document.write
  const _writeln = document.writeln
  let buffer = ''
  document.write = str => (buffer += str)
  document.writeln = str => (buffer += str)

  fn.apply(fn, args)

  document.write = _write
  document.writeln = _writeln

  return buffer
}
