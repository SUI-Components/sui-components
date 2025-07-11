/* eslint react/prop-types: 0 */
/* eslint react/no-multi-comp: 0 */

import AtomIcon, {ATOM_ICON_SIZES} from '@s-ui/react-atom-icon'

const IconClose = () => (
  <AtomIcon size={ATOM_ICON_SIZES.medium}>
    <svg viewBox="0 0 24 24">
      <path
        id="a"
        d="M13.42 12l4.79-4.8a1 1 0 0 0-1.41-1.41L12 10.58 7.21 5.79A1 1 0 0 0 5.8 7.2l4.79 4.8-4.79 4.79a1 1 0 1 0 1.41 1.41L12 13.41l4.8 4.79a1 1 0 0 0 1.41-1.41L13.42 12z"
      />
    </svg>
  </AtomIcon>
)

const ContentWithCloseButton = ({children, onClose}) => (
  <div>
    {children}
    <button type="button" onClick={onClose}>
      close modal
    </button>
  </div>
)

const Content = ({children}) => <div>{children}</div>

const pText = 'Cras '
const pLoremStyle = {maxWidth: '600px'}
const pScrollableLoremStyle = {
  maxWidth: '600px',
  maxHeight: '70px',
  border: '1px solid grey',
  overflow: 'auto'
}

const LoremIpsumParagraph = () => <p style={pLoremStyle}>{pText}</p>
const ScrollableLoremIpsumParagraph = () => <p style={pScrollableLoremStyle}>{pText}</p>
const LoremPicsumImage = () => <img src="https://picsum.photos/500/200" />

export {
  IconClose,
  ContentWithCloseButton,
  Content,
  LoremIpsumParagraph,
  ScrollableLoremIpsumParagraph,
  LoremPicsumImage
}
