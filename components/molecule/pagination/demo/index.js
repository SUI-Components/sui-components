/* eslint-disable react/prop-types, no-unused-vars, no-console */

import {H1, H2, H3, H4, Paragraph} from '@s-ui/documentation-library'
import LayoutMediaQuery from '@s-ui/react-layout-media-query'

import MoleculePagination from '../src/index.js'
import DynamicMoleculePagination from './DynamicMoleculePagination/index.js'
import {nextButtonIcon, prevButtonIcon} from './Icons/index.js'

import './index.scss'

const prevButtonText = 'Anterior'
const nextButtonText = 'Siguiente'

const onSelectNext = (_, {page}) => {
  console.log(page)
}
const onSelectPrev = (_, {page}) => {
  console.log(page)
}
const onSelectPage = (_, {page}) => {
  console.log(page)
}

const Icons = {prevButtonIcon, nextButtonIcon}
const Texts = {prevButtonText, nextButtonText}
const OnClicks = {onSelectNext, onSelectPrev, onSelectPage}

const BASE_CLASS_DEMO = 'DemoMoleculePagination'
const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`
const CLASS_DEMO_SECTION_RESPONSIVE = `${CLASS_DEMO_SECTION}-responsive`

const PAGINATION_URL = '/?page=%{pageNumber}'

const linkFactory = ({children, ...props}) => {
  return <a {...props}>{children}</a>
}

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <H1>Pagination</H1>
        <H2>Size</H2>
        <div className={CLASS_DEMO_SECTION}>
          <H3>Small</H3>
          <MoleculePagination
            ariaLabel="Paginación"
            prevLinkAriaLabel="Página previa"
            nextLinkAriaLabel="Página siguiente"
            pagePrefixAriaLabel="Página"
            totalPages={25}
            page={17}
            size="small"
          />
          <H3>Large</H3>
          <MoleculePagination
            ariaLabel="Paginación"
            prevLinkAriaLabel="Página previa"
            nextLinkAriaLabel="Página siguiente"
            pagePrefixAriaLabel="Página"
            totalPages={25}
            page={17}
          />
        </div>

        <H2>Responsive with LayoutMediaQuery</H2>
        <div className={CLASS_DEMO_SECTION_RESPONSIVE}>
          <LayoutMediaQuery>
            {({S, M}) =>
              S ? (
                <DynamicMoleculePagination totalPages={25} page={17} showPages={M ? 10 : 5} />
              ) : (
                <DynamicMoleculePagination totalPages={25} page={17} compressed={!S} />
              )
            }
          </LayoutMediaQuery>
        </div>

        <H2>Dynamic</H2>
        <div className={CLASS_DEMO_SECTION}>
          <H3>Extended Version</H3>
          <DynamicMoleculePagination totalPages={25} page={17} />
          <H3>Extended Version (hide Disabled)</H3>
          <DynamicMoleculePagination totalPages={25} page={17} hideDisabled />
          <h3>
            Extended Version <code>showPages=7</code>
          </h3>
          <DynamicMoleculePagination totalPages={25} page={17} showPages={7} />
          <H3>
            Extended Version <code>showEdges</code>
          </H3>
          <DynamicMoleculePagination totalPages={25} page={17} showPages={7} showEdges />
        </div>
        <div className={CLASS_DEMO_SECTION}>
          <H3>Compressed Version</H3>
          <DynamicMoleculePagination totalPages={25} page={17} compressed />
        </div>

        <H2>Static</H2>
        <H3>Extended Version</H3>
        <div className={CLASS_DEMO_SECTION}>
          <H4>Basic</H4>
          <Paragraph>
            <code>totalPages=25 page=7</code>
          </Paragraph>
          <MoleculePagination
            ariaLabel="Paginación"
            prevLinkAriaLabel="Página previa"
            nextLinkAriaLabel="Página siguiente"
            pagePrefixAriaLabel="Página"
            totalPages={25}
            page={7}
          />
        </div>
        <div className={CLASS_DEMO_SECTION}>
          <h4>Basic with links and linkFactory</h4>
          <Paragraph>
            <code>
              totalPages=25 page=7 linkFactory urlPattern="
              {`/?page=%{pageNumber}`}" renderLinks
            </code>
          </Paragraph>
          <MoleculePagination
            ariaLabel="Paginación"
            prevLinkAriaLabel="Página previa"
            nextLinkAriaLabel="Página siguiente"
            pagePrefixAriaLabel="Página"
            totalPages={25}
            page={7}
            linkFactory={linkFactory}
            urlPattern={PAGINATION_URL}
            renderLinks
          />
        </div>
        <div className={CLASS_DEMO_SECTION}>
          <H4>w/ Next</H4>
          <Paragraph>
            <code>totalPages=25 page=7</code>
          </Paragraph>
          <MoleculePagination
            ariaLabel="Paginación"
            prevLinkAriaLabel="Página previa"
            nextLinkAriaLabel="Página siguiente"
            pagePrefixAriaLabel="Página"
            totalPages={25}
            page={7}
            {...Icons}
            {...OnClicks}
          />
        </div>
        <div className={CLASS_DEMO_SECTION}>
          <H4>w/ Prev & Next</H4>
          <p>
            <code>totalPages=25 page=17</code>
          </p>
          <MoleculePagination
            ariaLabel="Paginación"
            prevLinkAriaLabel="Página previa"
            nextLinkAriaLabel="Página siguiente"
            pagePrefixAriaLabel="Página"
            totalPages={25}
            page={17}
            {...Icons}
            {...OnClicks}
          />
        </div>
        <div className={CLASS_DEMO_SECTION}>
          <H4>w/ Prev</H4>
          <p>
            <code>totalPages=25 page=27</code>
          </p>
          <MoleculePagination
            ariaLabel="Paginación"
            prevLinkAriaLabel="Página previa"
            nextLinkAriaLabel="Página siguiente"
            pagePrefixAriaLabel="Página"
            totalPages={25}
            page={27}
            {...Icons}
            {...OnClicks}
          />
        </div>
        <div className={CLASS_DEMO_SECTION}>
          <H4>No Arrows</H4>
          <p>
            <code>totalPages=25 page=7</code>
          </p>
          <MoleculePagination
            ariaLabel="Paginación"
            prevLinkAriaLabel="Página previa"
            nextLinkAriaLabel="Página siguiente"
            pagePrefixAriaLabel="Página"
            totalPages={25}
            page={17}
            {...OnClicks}
          />
        </div>
        <div className={CLASS_DEMO_SECTION}>
          <H4>Different Texts</H4>
          <p>
            <code>totalPages=25 page=7</code>
          </p>
          <MoleculePagination
            ariaLabel="Paginación"
            prevLinkAriaLabel="Página previa"
            nextLinkAriaLabel="Página siguiente"
            pagePrefixAriaLabel="Página"
            totalPages={25}
            page={17}
            {...Icons}
            {...Texts}
            {...OnClicks}
          />
        </div>
        <div className={CLASS_DEMO_SECTION}>
          <H4>Out of range current page</H4>
          <p>
            <code>totalPages=25 page=-2</code>
          </p>
          <MoleculePagination
            ariaLabel="Paginación"
            prevLinkAriaLabel="Página previa"
            nextLinkAriaLabel="Página siguiente"
            pagePrefixAriaLabel="Página"
            totalPages={25}
            page={-2}
            {...Icons}
            {...Texts}
            {...OnClicks}
          />
        </div>
        <div className={CLASS_DEMO_SECTION}>
          <h4>Hide Disabled</h4>
          <p>
            <code>totalPages=25 page=2</code>
          </p>
          <MoleculePagination
            ariaLabel="Paginación"
            prevLinkAriaLabel="Página previa"
            nextLinkAriaLabel="Página siguiente"
            pagePrefixAriaLabel="Página"
            totalPages={25}
            page={2}
            hideDisabled
            {...Icons}
            {...Texts}
            {...OnClicks}
          />
        </div>
        <div className={CLASS_DEMO_SECTION}>
          <H4>Show edges</H4>
          <p>
            <code>totalPages=25 page=15 showEdges</code>
          </p>
          <MoleculePagination
            ariaLabel="Paginación"
            prevLinkAriaLabel="Página previa"
            nextLinkAriaLabel="Página siguiente"
            pagePrefixAriaLabel="Página"
            totalPages={25}
            page={15}
            showEdges
          />
        </div>

        <h3>Compressed Version</h3>
        <div className={CLASS_DEMO_SECTION}>
          <h4>First Page (only next)</h4>
          <p>
            <code>totalPages=25 page=1</code>
          </p>
          <MoleculePagination
            ariaLabel="Paginación"
            prevLinkAriaLabel="Página previa"
            nextLinkAriaLabel="Página siguiente"
            pagePrefixAriaLabel="Página"
            totalPages={25}
            page={1}
            {...Icons}
            {...OnClicks}
            compressed
          />
        </div>
        <div className={CLASS_DEMO_SECTION}>
          <H4>w/ Prev & Next</H4>
          <p>
            <code>totalPages=25 page=17</code>
          </p>
          <MoleculePagination
            ariaLabel="Paginación"
            prevLinkAriaLabel="Página previa"
            nextLinkAriaLabel="Página siguiente"
            pagePrefixAriaLabel="Página"
            totalPages={25}
            page={17}
            {...Icons}
            {...OnClicks}
            compressed
          />
        </div>
        <div className={CLASS_DEMO_SECTION}>
          <H4>Out of range current page</H4>
          <p>
            <code>totalPages=25 page=27</code>
          </p>
          <MoleculePagination
            ariaLabel="Paginación"
            prevLinkAriaLabel="Página previa"
            nextLinkAriaLabel="Página siguiente"
            pagePrefixAriaLabel="Página"
            totalPages={25}
            page={27}
            {...Icons}
            {...OnClicks}
            compressed
          />
        </div>
        <div className={CLASS_DEMO_SECTION}>
          <h4>No Arrows</h4>
          <p>
            <code>totalPages=25 page=17</code>
          </p>
          <MoleculePagination
            ariaLabel="Paginación"
            prevLinkAriaLabel="Página previa"
            nextLinkAriaLabel="Página siguiente"
            pagePrefixAriaLabel="Página"
            totalPages={25}
            page={17}
            {...OnClicks}
            compressed
          />
        </div>
        <div className={CLASS_DEMO_SECTION}>
          <H4>Different Texts</H4>
          <p>
            <code>totalPages=25 page=17</code>
          </p>
          <MoleculePagination
            ariaLabel="Paginación"
            prevLinkAriaLabel="Página previa"
            nextLinkAriaLabel="Página siguiente"
            pagePrefixAriaLabel="Página"
            totalPages={25}
            page={17}
            {...Icons}
            {...Texts}
            {...OnClicks}
            compressed
          />
        </div>
        <div className={CLASS_DEMO_SECTION}>
          <H4>Hide Disabled</H4>
          <p>
            <code>totalPages=25 page=1</code>
          </p>
          <MoleculePagination
            ariaLabel="Paginación"
            prevLinkAriaLabel="Página previa"
            nextLinkAriaLabel="Página siguiente"
            pagePrefixAriaLabel="Página"
            totalPages={25}
            page={1}
            {...Icons}
            {...Texts}
            {...OnClicks}
            compressed
            hideDisabled
          />
        </div>
        <div className={CLASS_DEMO_SECTION}>
          <H4>Change Navigation Buttons</H4>
          <p>
            <code>totalPages=25 page=1</code>
          </p>
          <DynamicMoleculePagination
            totalPages={25}
            page={1}
            {...Icons}
            {...Texts}
            {...OnClicks}
            hideDisabled
            prevButtonDesign="flat"
            nextButtonDesign="solid"
            showPages={5}
            nonSelectedPageButtonDesign="outline"
          />

          <p>
            <code>totalPages=25 page=3</code>
          </p>
          <DynamicMoleculePagination
            totalPages={25}
            page={3}
            {...Icons}
            {...Texts}
            {...OnClicks}
            hideDisabled
            prevButtonDesign="flat"
            nextButtonDesign="flat"
            showPages={5}
            selectedPageButtonDesign="outline"
            nonSelectedPageButtonDesign="flat"
            selectedPageButtonColor="accent"
            nonSelectedPageButtonColor="accent"
            prevButtonColor="accent"
            nextButtonColor="accent"
          />
        </div>
      </div>
    </div>
  )
}

export default Demo
