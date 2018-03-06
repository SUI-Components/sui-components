const DETECTION_DELAY = 5000
const scriptPromises = []

/**
 * Loads the given script. If the script was already loaded it will immediately resolve.
 * @param  {string} src
 * @param  {func} verifier
 * @param  {bool} isAsync
 * @return {Promise}
 */
const loadScript = ({ src, verifier, isAsync }) => {
  scriptPromises[src] = scriptPromises[src] || new Promise((resolve) => {
    const isLoaded = verifier()

    if (isLoaded) {
      resolve(isLoaded)
      return
    }

    injectScript({src, isAsync})
    waitUntil(verifier, resolve, DETECTION_DELAY)
  })

  return scriptPromises[src]
}

/**
 * Injects the script into the dom.
 * @param  {string} src
 * @param  {bool} isAsync
 * @return {void}
 */
const injectScript = ({ src, isAsync }) => {
  const script = document.createElement('script')

  script.src = src
  script.async = isAsync

  document.body.appendChild(script)
}

/**
 * Waits until truthyFn returns a truthy value, then calls callback.
 * @param  {func} truthyFn
 * @param  {func} callback
 * @param  {integer} delay
 * @param  {integer} interval
 * @return {void}
 */
const waitUntil = (truthyFn, callback, delay = 100, interval = 100) => {
  let intervalId = setInterval(() => {
    let value = truthyFn()
    if (value || delay <= 0) {
      clearInterval(intervalId)
      callback(value)
    }
    delay -= interval
  }, interval)
}

export { loadScript }
