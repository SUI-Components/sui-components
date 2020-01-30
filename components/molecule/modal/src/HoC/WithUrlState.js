import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'

const checkHash = hash => window.location.hash.includes(hash)

const emptyFn = () => {}

/**
 * It must be refactored with react-router hooks (in React Router > 5)
 * - useHistory
 * - useLocation
 */
export default BaseComponent => {
  const displayName = BaseComponent.displayName

  if (typeof window === 'undefined') return BaseComponent

  const WithUrlState = props => {
    const {hash, openModalTrigger, onClose, ...rest} = props
    const {isOpen} = rest
    const [isPopStateChange, setIsPopStateChange] = useState(checkHash(hash))

    useEffect(() => {
      const getUrl = ({hash: hashName} = {}) => {
        const location = window.location
        const hash = hashName ? `#${hashName}` : ''
        return `${location.origin}${location.pathname}${location.search}${hash}`
      }

      const _handleStateChange = () => {
        if (isPopStateChange) return setIsPopStateChange(false)

        const nextUrl = isOpen ? getUrl({hash}) : getUrl()
        window.history.pushState({hash}, '', nextUrl)
      }

      _handleStateChange()
    }, [hash, isOpen]) // eslint-disable-line

    useEffect(() => {
      const _handlePopState = ev => {
        const hasHash = checkHash(hash)
        setIsPopStateChange(true)

        if (hasHash) openModalTrigger()
        else onClose()
      }

      if (checkHash(hash)) openModalTrigger()

      window.onpopstate = _handlePopState
      return () => {
        window.onpopstate = emptyFn
      }
    }, [hash]) // eslint-disable-line

    return <BaseComponent {...rest} onClose={onClose} />
  }

  WithUrlState.displayName = `WithUrlState(${displayName})`

  WithUrlState.propTypes = {
    hash: PropTypes.string.isRequired,
    openModalTrigger: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
  }

  return WithUrlState
}
