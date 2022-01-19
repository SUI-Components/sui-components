import PropTypes from 'prop-types'
import {isValidPage} from './customPropTypes'
import {BASE_CLASS} from './settings'

const PageButton = ({onSelectPage, page, design, color, ...props}) => {
  const _onSelectPage = e => {
    onSelectPage(e, {page})
  }
  return (
    <li className={`${BASE_CLASS}-item`}>
      <AtomButton
        onClick={_onSelectPage}
        design={design}
        color={color}
        {...props}
      />
    </li>
  )
}

PageButton.propTypes = {
  /** Callback that will be called with (event, page) on each page button click */
  onSelectPage: PropTypes.func,
  /** Current page selected */
  page: isValidPage,
  /** Design to be used for the page button. Design types 'solid', 'outline' or 'flat' */
  design: PropTypes.string,
  /** Button color */
  color: PropTypes.string,
  /** Factory used to create navigation links */
  linkFactory: PropTypes.func
}

PageButton.displayName = 'MoleculePaginationPageButton'

export default PageButton
