const scriptPromises = []

/**
 * Loads the given script. If the script was already loaded it will immediately resolve.
 * @param  {string} src
 * @param  {func} verifier
 * @param  {bool} isAsync
 * @return {Promise}
 */
const loadScript = ({src, verifier, isAsync, detectionDelay}) => {
  scriptPromises[src] =
    scriptPromises[src] ||
    new Promise((resolve, reject) => {
      const isLoaded = verifier()

      if (isLoaded) {
        resolve(isLoaded)
        return
      }

      injectScript({src, isAsync})
      waitUntil(verifier, resolve, reject, detectionDelay)
    })

  return scriptPromises[src]
}

/**
 * Injects the script into the dom.
 * @param  {string} src
 * @param  {bool} isAsync
 * @return {void}
 */
const injectScript = ({src, isAsync}) => {
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
const waitUntil = (
  truthyFn,
  callback,
  timeoutCallback,
  delay,
  interval = 100
) => {
  let intervalId = setInterval(() => {
    let value = truthyFn()

    if (value) {
      clearInterval(intervalId)
      callback(value)
    }
    if (delay <= 0) {
      clearInterval(intervalId)
      timeoutCallback(value)
    }

    delay -= interval
  }, interval)
}

export {loadScript}
