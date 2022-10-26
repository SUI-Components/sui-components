import PropTypes from 'prop-types'

import {AntDesignIcon} from '@s-ui/documentation-library'
import AtomIcon, {atomIconColors, atomIconSizes} from '@s-ui/react-atom-icon'

const alert = (
  <AntDesignIcon icon="AiFillAlert" style={{color: 'currentcolor'}} />
)
const info = <AntDesignIcon icon="AiFillBulb" style={{color: 'currentcolor'}} />
const error = (
  <AntDesignIcon icon="AiOutlineExclamation" style={{color: 'currentcolor'}} />
)

const Icon = ({children, ...props}) => (
  <AtomIcon size={atomIconSizes.small} {...props}>
    {children}
  </AtomIcon>
)
Icon.propTypes = {
  children: PropTypes.node
}

const iconAlert = <Icon color={atomIconColors.alert}>{alert}</Icon>
const iconInfo = <Icon color={atomIconColors.success}>{info}</Icon>
const iconError = <Icon color={atomIconColors.error}>{error}</Icon>

const iconClose = (
  <svg viewBox="0 0 24 24">
    <path
      id="IconClose"
      d="M13.42 12l4.79-4.8a1 1 0 0 0-1.41-1.41L12 10.58 7.21 5.79A1 1 0 0 0 5.8 7.2l4.79 4.8-4.79 4.79a1 1 0 1 0 1.41 1.41L12 13.41l4.8 4.79a1 1 0 0 0 1.41-1.41L13.42 12z"
    />
  </svg>
)

const iconArrowDown = (
  <svg>
    <defs>
      <path
        id="IconArrowDown"
        d="M14.5 18.5a1 1 0 0 1-.71-.29l-4.08-4.08a3 3 0 0 1 0-4.24l4.09-4.1a1 1 0 0 1 1.41 1.41l-4.09 4.1a1 1 0 0 0 0 1.41l4.08 4.08a1 1 0 0 1-.71 1.71h.01z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <use
        fill="#666"
        fillRule="nonzero"
        transform="matrix(0 -1 -1 0 24.189 24.189)"
        xlinkHref="#IconArrowDown"
      />
    </g>
  </svg>
)

const iconSearch = (
  <svg viewBox="0 0 24 24">
    <path
      d="M18.8,17.4l5.7,5.7c0.4,0.4,0.4,1,0,1.4s-1,0.4-1.4,0l-5.7-5.7c-1.6,1.3-3.6,2-5.7,2c-5.1,0-9.2-4.1-9.2-9.2
s4.1-9.2,9.2-9.2s9.2,4.1,9.2,9.2C20.8,13.8,20.1,15.8,18.8,17.4z M11.7,18.8c4,0,7.2-3.2,7.2-7.2s-3.2-7.2-7.2-7.2
s-7.2,3.2-7.2,7.2S7.7,18.8,11.7,18.8z"
    />
  </svg>
)

export {iconClose, iconArrowDown, iconSearch, iconAlert, iconInfo, iconError}
