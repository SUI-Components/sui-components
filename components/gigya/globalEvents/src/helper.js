const ONLOGIN_EVENT = 'onLogin'
const ONLOGOUT_EVENT = 'onLogout'

let alreadyRegistered = false
const listeners = {
  onLogin: [],
  onLogout: []
}

// Checks if global handlers had been register already, if not, registers them
const initListener = () => {
  alreadyRegistered ||
    window.gigya.accounts.addEventHandlers({
      onLogin: executeOnLogin,
      onLogout: executeOnLogout
    })
  alreadyRegistered = true
}

// Will execute all the configured listeners for the OnLogin event
const executeOnLogin = event =>
  listeners.onLogin.forEach(listener => listener(event))

// Will execute all the configured listeners for the OnLogout evnet
const executeOnLogout = event =>
  listeners.onLogout.forEach(listener => listener(event))

// Subscribes a listener to a specific event
const addSubscriber = event => listener => {
  listeners[event].push(listener)
}

// Unsubscribes a listener to a specific event
const removeSubscriber = event => listener => {
  listeners[event] = listeners[event].filter(func => func !== listener)
}

const addOnLoginSubscriber = addSubscriber(ONLOGIN_EVENT)
const addOnLogoutSubscriber = addSubscriber(ONLOGIN_EVENT)

const removeOnLoginSubscriber = removeSubscriber(ONLOGIN_EVENT)
const removeOnLogoutSubscriber = removeSubscriber(ONLOGOUT_EVENT)

export {
  initListener,
  addOnLoginSubscriber,
  removeOnLoginSubscriber,
  addOnLogoutSubscriber,
  removeOnLogoutSubscriber
}
