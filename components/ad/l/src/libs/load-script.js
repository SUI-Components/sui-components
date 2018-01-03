// http://stackoverflow.com/questions/4539740/how-do-you-synchronously-load-a-script-from-another-directory-via-an-ajax-call
export const loadScript = ({url, symbol} = {}) => {
  const expire = new Date().getTime() + 20000 // 20 seconds
  const delta = 100 /* ms */

  return new Promise((resolve, reject) => {
    // Already there?
    // That is a
    if (window[symbol]) {
      resolve('already loaded')
      return
    }

    // Load the script
    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    script.src = url
    document.body.appendChild(script)

    // Our symbol-checking function
    const lookForSymbol = () => {
      if (window[symbol]) {
        // There's the symbol, we're done
        resolve('success')
      } else if (new Date().getTime() > expire) {
        // Timed out, tell the callback
        reject(new Error('timeout'))
      } else {
        // Schedule the next check
        setTimeout(lookForSymbol, delta)
      }
    }

    // Start looking for the symbol to appear, yielding as
    // briefly as the browser will let us.
    setTimeout(lookForSymbol, 0)
  })
}
