import {forwardRef, useEffect, useState} from 'react'

import PropTypes from 'prop-types'

import MoleculeModal from './MoleculeModal.js'

const checkHash = hash => typeof window !== 'undefined' && window.location.hash.includes(hash)

/**
 * It must be refactored with react-router hooks (in React Router > 5)
 * - useHistory
 * - useLocation
 */
const MoleculeModalWithURLState = forwardRef((props, ref) => {
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

    window.addEventListener('popstate', _handlePopState)
    return () => window.removeEventListener('popstate', _handlePopState)
  }, [hash]) // eslint-disable-line

  if (typeof window === 'undefined') return <MoleculeModal {...props} />

  return <MoleculeModal ref={ref} {...rest} onClose={onClose} />
})

MoleculeModalWithURLState.displayName = `${MoleculeModal.displayName}WithUrlState`

MoleculeModalWithURLState.propTypes = {
  hash: PropTypes.string.isRequired,
  openModalTrigger: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
}

export default MoleculeModalWithURLState
