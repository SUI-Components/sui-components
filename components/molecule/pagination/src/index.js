import PropTypes from 'prop-types'

import AtomButton, {
  atomButtonColors,
  atomButtonDesigns,
  atomButtonShapes,
  atomButtonSizes
} from '@s-ui/react-atom-button'

import {isValidPage, isValidShowPages, isValidTotalPages} from './customPropTypes/index.js'
import * as pagination from './helpers/pagination/index.js'
import PageButton from './PageButton.js'
import {BASE_CLASS, defaultCreateUrl, DIVIDER, noop} from './settings.js'

const MoleculePagination = ({
  ariaLabel,
  onSelectNext = noop,
  onSelectPage = noop,
  onSelectPrev = noop,
  page = 1,
  totalPages,
  showPages = 10,
  prevButtonText = 'Previous',
  prevButtonIcon: PrevButtonIcon,
  nextButtonText = 'Next',
  nextButtonIcon: NextButtonIcon,
  compressed = false,
  hideDisabled,
  selectedPageButtonDesign = atomButtonDesigns.SOLID,
  showEdges,
  nonSelectedPageButtonDesign = atomButtonDesigns.FLAT,
  prevButtonDesign = atomButtonDesigns.FLAT,
  nextButtonDesign = atomButtonDesigns.FLAT,
  selectedPageButtonColor = 'primary',
  shape,
  size,
  nonSelectedPageButtonColor = 'primary',
  prevButtonColor = 'primary',
  pagePrefixAriaLabel,
  prevLinkAriaLabel,
  nextButtonColor = 'primary',
  nextLinkAriaLabel,
  linkFactory,
  createUrl = defaultCreateUrl,
  urlPattern = '#',
  renderLinks = false
}) => {
  const paramsPagination = {
    page,
    totalPages,
    showPages,
    showEdges
  }

  const FIRST_PAGE = 1

  const handleClickNext = e => {
    const page = pagination.nextPage(paramsPagination)
    onSelectNext(e, {page})
  }

  const handleClickPrev = e => {
    const page = pagination.prevPage(paramsPagination)
    onSelectPrev(e, {page})
  }

  const range = pagination.range(paramsPagination)
  const nextPage = pagination.nextPage(paramsPagination)
  const prevPage = pagination.prevPage(paramsPagination)
  const isHidePrev = hideDisabled && !prevPage
  const isHideNext = hideDisabled && !nextPage

  const linkProps = pageNumber =>
    renderLinks && {
      link: true,
      href: createUrl({pageNumber, urlPattern}),
      ...(linkFactory && {linkFactory})
    }

  return (
    <nav aria-label={ariaLabel}>
      <ul className={BASE_CLASS}>
        {!isHidePrev && (
          <li className={`${BASE_CLASS}-item`}>
            <AtomButton
              aria-label={prevLinkAriaLabel}
              aria-disabled={!prevPage}
              onClick={handleClickPrev}
              design={prevButtonDesign}
              color={prevButtonColor}
              disabled={!prevPage}
              shape={shape}
              size={size}
              leftIcon={PrevButtonIcon && <PrevButtonIcon />}
              {...linkProps(prevPage)}
            >
              {prevButtonText}
            </AtomButton>
          </li>
        )}
        {compressed ? (
          <PageButton
            aria-current="page"
            aria-label={`${pagePrefixAriaLabel} ${page}`}
            page={page}
            design={selectedPageButtonDesign}
            color={selectedPageButtonColor}
            onSelectPage={onSelectPage}
            shape={shape}
            size={size}
            {...linkProps(page)}
          >
            {page}
          </PageButton>
        ) : (
          <>
            {showEdges && range[0] !== FIRST_PAGE && (
              <>
                <PageButton
                  aria-label={`${pagePrefixAriaLabel} ${FIRST_PAGE}`}
                  page={FIRST_PAGE}
                  design={page === FIRST_PAGE ? selectedPageButtonDesign : nonSelectedPageButtonDesign}
                  color={page === FIRST_PAGE ? selectedPageButtonColor : nonSelectedPageButtonColor}
                  onSelectPage={onSelectPage}
                  shape={shape}
                  size={size}
                  {...linkProps(FIRST_PAGE)}
                  {...(page === FIRST_PAGE && {'aria-current': 'page'})}
                >
                  {FIRST_PAGE}
                </PageButton>
                {range[0] - 1 > FIRST_PAGE && <li className={`${BASE_CLASS}-divider`}>{DIVIDER}</li>}
              </>
            )}
            {range.map(pageRange => (
              <PageButton
                aria-label={`${pagePrefixAriaLabel} ${pageRange}`}
                key={pageRange}
                page={pageRange}
                design={pageRange === page ? selectedPageButtonDesign : nonSelectedPageButtonDesign}
                color={pageRange === page ? selectedPageButtonColor : nonSelectedPageButtonColor}
                onSelectPage={onSelectPage}
                shape={shape}
                size={size}
                {...linkProps(pageRange)}
                {...(pageRange === page && {'aria-current': 'page'})}
              >
                {pageRange}
              </PageButton>
            ))}
            {showEdges && totalPages > 1 && range[range.length - 1] !== totalPages && (
              <>
                {totalPages - range[range.length - 1] > 1 && <li className={`${BASE_CLASS}-divider`}>{DIVIDER}</li>}
                <PageButton
                  aria-label={`${pagePrefixAriaLabel} ${totalPages}`}
                  page={totalPages}
                  design={page === totalPages ? selectedPageButtonDesign : nonSelectedPageButtonDesign}
                  color={page === totalPages ? selectedPageButtonColor : nonSelectedPageButtonColor}
                  onSelectPage={onSelectPage}
                  shape={shape}
                  size={size}
                  {...linkProps(totalPages)}
                  {...(totalPages === page && {'aria-current': 'page'})}
                >
                  {totalPages}
                </PageButton>
              </>
            )}
          </>
        )}
        {!isHideNext && (
          <li className={`${BASE_CLASS}-item`}>
            <AtomButton
              aria-disabled={!nextPage}
              aria-label={nextLinkAriaLabel}
              onClick={handleClickNext}
              design={nextButtonDesign}
              color={nextButtonColor}
              disabled={!nextPage}
              shape={shape}
              size={size}
              rightIcon={NextButtonIcon && <NextButtonIcon />}
              {...linkProps(nextPage)}
            >
              {nextButtonText}
            </AtomButton>
          </li>
        )}
      </ul>
    </nav>
  )
}

MoleculePagination.displayName = 'MoleculePagination'

MoleculePagination.propTypes = {
  /** Aria label nav */
  ariaLabel: PropTypes.string,

  /** Total number of pages */
  totalPages: isValidTotalPages.isRequired,

  /** Current page selected */
  page: isValidPage,

  /** Number of pages to be displayed in the range (10 by default) */
  showPages: isValidShowPages,

  /** Shape of buttons */
  shape: PropTypes.oneOf(Object.values(atomButtonShapes)),

  /** Size of buttons */
  size: PropTypes.oneOf(Object.values(atomButtonSizes)),

  /** If the pagination should be displayed in compressed mode or not */
  compressed: PropTypes.bool,

  /** Text to be displayed on the previous button */
  prevButtonText: PropTypes.string,

  /** Icon to be displayed on the previous button */
  prevButtonIcon: PropTypes.any,

  /** Prefix aria label page */
  pagePrefixAriaLabel: PropTypes.string,

  /** Aria label prev button */
  prevLinkAriaLabel: PropTypes.string,

  /** Text to be displayed on the next button */
  nextButtonText: PropTypes.string,

  /** Aria label next button */
  nextLinkAriaLabel: PropTypes.string,

  /** Icon to be displayed on the next button */
  nextButtonIcon: PropTypes.any,

  /** Callback that will be called with (event, page) on prev button click */
  onSelectPrev: PropTypes.func,

  /** Callback that will be called with (event, page) on next button click */
  onSelectNext: PropTypes.func,

  /** Callback that will be called with (event, page) on each page button click */
  onSelectPage: PropTypes.func,

  /** Hide Previous/Next buttons if they're disabled */
  hideDisabled: PropTypes.bool,

  /** Design to be used for the selected page. Design types 'solid', 'outline' or 'flat' */
  selectedPageButtonDesign: PropTypes.string,

  /** Design to be used for the selected page. Design types 'solid', 'outline' or 'flat' */
  nonSelectedPageButtonDesign: PropTypes.string,

  /** Design to be used for the previous button if its visible. Design types 'solid', 'outline' or 'flat' */
  prevButtonDesign: PropTypes.string,

  /** Design to be used for the next button if its visible. Design types 'solid', 'outline' or 'flat */
  nextButtonDesign: PropTypes.string,

  /** Color to be used for the selected page. */
  selectedPageButtonColor: PropTypes.oneOf(atomButtonColors),

  /** Makes first and last always visible. */
  showEdges: PropTypes.bool,

  /** Color to be used for the selected page. */
  nonSelectedPageButtonColor: PropTypes.oneOf(atomButtonColors),

  /** Color to be used for the previous button if its visible. */
  prevButtonColor: PropTypes.oneOf(atomButtonColors),

  /** Color to be used for the next button if its visible. */
  nextButtonColor: PropTypes.oneOf(atomButtonColors),

  /** Factory used to create navigation links */
  linkFactory: PropTypes.func,

  /** Factory used to create the urls */
  createUrl: PropTypes.func,

  /** URL patterns */
  urlPattern: PropTypes.string,

  /** tells wether to render links as anchor tags or as buttons */
  renderLinks: PropTypes.bool
}

export {
  atomButtonDesigns as moleculePaginationDesigns,
  atomButtonShapes as moleculePaginationShapes,
  atomButtonSizes as moleculePaginationSizes
}

export default MoleculePagination
