import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = 'sui-MoleculeAutosuggest-List-AtomItem'

export const AtomListFeaturedItem = function (props) {
  const {option, onClickCallback, onFocusCallback} = props
  const cxNames = (option.isFocus())
    ? cx(BASE_CLASS + '-row', BASE_CLASS + '-row-featured', BASE_CLASS + '-row-focus')
    : cx(BASE_CLASS + '-row', BASE_CLASS + '-row-featured')

  return (
    <div
      className={cxNames}
      key={option.getPosition() + '-featured'}
      onClick={onClickCallback(option)}
      onMouseOver={onFocusCallback(option)}
    >
      <span className='icon-left'>
        {IconClock}
      </span>
      <span className='text'>{option.getStringTruncated()}</span>
      <span className='icon-right'>
        {IconRemove}
      </span>
    </div>
  )
}

AtomListFeaturedItem.displayName = 'AtomListFeaturedItem'

AtomListFeaturedItem.propTypes = {
  /**
   * Options list
   */
  option: PropTypes.any,
  /**
   * Callback on click item
   */
  onClickCallback: PropTypes.any,
  /**
   * Callback on focus item
   */
  onFocusCallback: PropTypes.any
}

// todo this icons must be converted to stateless component and receive it as a prop
const IconClock = (
  <svg width='22px' height='22px' viewBox='0 0 22 22'>
    <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g id='icon-line-clock'>
        <g id='Clipped'>
          <g>
            <mask id='mask-2' fill='white'>
              <path
                d='M18.4,3.91 C15.8583063,1.18359845 12.0369058,0.0518751986 8.42045606,0.954517596 C4.80400629,1.85715999 1.96261856,4.65187195 1.00020429,8.25287612 C0.0377900134,11.8538803 1.10606796,15.6935002 3.79,18.28 C5.68675704,20.2253549 8.28306674,21.330857 11,21.35 L11.08,21.35 C15.2182707,21.3656617 18.9591867,18.8889385 20.5607783,15.0731248 C22.1623698,11.2573111 21.3097721,6.85257647 18.4,3.91 Z M11.09,19.85 L11,19.85 C6.16750849,19.83067 2.26567016,15.8974915 2.28500013,11.065 C2.3043301,6.23250849 6.23750849,2.33067011 11.07,2.35 L11.14,2.35 C15.9724915,2.36933007 19.8743298,6.30250851 19.8549998,11.135 C19.8356698,15.9674915 15.9024915,19.8693299 11.07,19.85 L11.09,19.85 Z M15.94,13.48 L11.84,11.16 L11.84,6.6 C11.8426699,6.40108245 11.7662016,6.20925325 11.6274209,6.06672172 C11.4886402,5.92419018 11.298918,5.84263456 11.1,5.84 C10.6896605,5.83996352 10.3554712,6.16969694 10.35,6.58 L10.35,11.58 C10.3493484,11.8521721 10.4942909,12.1039143 10.73,12.24 L15.21,14.78 C15.3194709,14.8435777 15.4434218,14.8780085 15.57,14.88 C15.9088618,14.8781268 16.2043735,14.6492647 16.2909584,14.3216461 C16.3775433,13.9940276 16.2336899,13.6490476 15.94,13.48 Z'
                id='path-1'/>
            </mask>
            <g id='a'/>
            <g id='Group' mask='url(#mask-2)' fill='#777777' fillRule='nonzero'>
              <g transform='translate(-1.000000, -1.000000)' id='Shape'>
                <polygon points='0 0 24 0 24 24 0 24'/>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
)

const IconRemove = (
  <svg width='12px' height='19px' viewBox='0 0 12 19'>
    <g id='Page-2' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g id='icon-fill-delete'>
        <g id='Clipped-1'>
          <g>
            <mask id='mask-3' fill='white'>
              <path
                d='M1,5.496 L11,5.496 C11.2761424,5.496 11.5,5.71985763 11.5,5.996 L11.5,16.829 C11.4983489,18.0247263 10.5297254,18.993797 9.334,18.996 L2.667,18.996 C1.47088409,18.9943475 0.501652477,18.0251159 0.5,16.829 L0.5,5.996 C0.5,5.71985763 0.723857625,5.496 1,5.496 Z M11.5,1.996 C11.7761424,1.996 12,2.21985763 12,2.496 L12,2.996 C12.0000022,3.27136321 11.777361,3.49489855 11.502,3.496 L0.502,3.543 L0.5,3.543 C0.224538988,3.54136193 0.00163806722,3.31846101 0,3.043 L0,2.496 C0,2.21985763 0.223857625,1.996 0.5,1.996 L2.295,1.996 L2.856,1.434 C3.13673657,1.15241178 3.51837795,0.99471468 3.916,0.996 L8.088,0.996 C8.489,0.996 8.866,1.151 9.148,1.434 L9.709,1.996 L11.5,1.996 Z'
                id='path-2'/>
            </mask>
            <g id='a1'/>
            <g id='Group1' mask='url(#mask-2)' fill='#777777' fillRule='nonzero'>
              <g transform='translate(-6.000000, -3.000000)' id='Shape1'>
                <polygon points='0 0 24 0 24 24 0 24'/>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
)