/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React from 'react'

import LayoutMediaQuery from '@s-ui/react-layout-media-query'

import MoleculePagination from '../../../../components/molecule/pagination/src'
import DynamicMoleculePagination from './DynamicMoleculePagination'
import {prevButtonIcon, nextButtonIcon} from './Icons'
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

const Demo = () => {
  return (
    <div className={BASE_CLASS_DEMO}>
      <h1>
        <code>MoleculePagination</code>
      </h1>
      <h2>
        Responsive <code>w/ LayoutMediaQuery</code>
      </h2>
      <div className={CLASS_DEMO_SECTION_RESPONSIVE}>
        <LayoutMediaQuery>
          {({S, M}) =>
            S ? (
              <DynamicMoleculePagination
                totalPages={25}
                page={17}
                showPages={M ? 10 : 5}
              />
            ) : (
              <DynamicMoleculePagination
                totalPages={25}
                page={17}
                compressed={!S}
              />
            )
          }
        </LayoutMediaQuery>
      </div>
      <h2>Dynamic</h2>
      <div className={CLASS_DEMO_SECTION}>
        <h3>Extended Version</h3>
        <DynamicMoleculePagination totalPages={25} page={17} />
        <h3>Extended Version (hide Disabled)</h3>
        <DynamicMoleculePagination totalPages={25} page={17} hideDisabled />
        <h3>
          Extended Version <code>showPages=7</code>
        </h3>
        <DynamicMoleculePagination totalPages={25} page={17} showPages={7} />
      </div>
      <div className={CLASS_DEMO_SECTION}>
        <h3>Compressed Version</h3>
        <DynamicMoleculePagination totalPages={25} page={17} compressed />
      </div>
      {/* ------------------------------------------------------------------------------------------------------------- */}
      <h2>Static</h2>
      <h3>Extended Version</h3>
      <div className={CLASS_DEMO_SECTION}>
        <h4>Basic</h4>
        <p>
          <code>totalPages=25 page=7</code>
        </p>
        <MoleculePagination totalPages={25} page={7} />
      </div>
      <div className={CLASS_DEMO_SECTION}>
        <h4>w/ Next</h4>
        <p>
          <code>totalPages=25 page=7</code>
        </p>
        <MoleculePagination totalPages={25} page={7} {...Icons} {...OnClicks} />
      </div>
      <div className={CLASS_DEMO_SECTION}>
        <h4>w/ Prev & Next</h4>
        <p>
          <code>totalPages=25 page=17</code>
        </p>
        <MoleculePagination
          totalPages={25}
          page={17}
          {...Icons}
          {...OnClicks}
        />
      </div>
      <div className={CLASS_DEMO_SECTION}>
        <h4>w/ Prev</h4>
        <p>
          <code>totalPages=25 page=27</code>
        </p>
        <MoleculePagination
          totalPages={25}
          page={27}
          {...Icons}
          {...OnClicks}
        />
      </div>
      <div className={CLASS_DEMO_SECTION}>
        <h4>No Arrows</h4>
        <p>
          <code>totalPages=25 page=7</code>
        </p>
        <MoleculePagination totalPages={25} page={17} {...OnClicks} />
      </div>
      <div className={CLASS_DEMO_SECTION}>
        <h4>Different Texts</h4>
        <p>
          <code>totalPages=25 page=7</code>
        </p>
        <MoleculePagination
          totalPages={25}
          page={17}
          {...Icons}
          {...Texts}
          {...OnClicks}
        />
      </div>
      <div className={CLASS_DEMO_SECTION}>
        <h4>Out of range current page</h4>
        <p>
          <code>totalPages=25 page=-2</code>
        </p>
        <MoleculePagination
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
          totalPages={25}
          page={2}
          hideDisabled
          {...Icons}
          {...Texts}
          {...OnClicks}
        />
      </div>
      {/* ------------------------------------------------------------------------------------------------------------- */}
      <h3>Compresed Version</h3>
      <div className={CLASS_DEMO_SECTION}>
        <h4>First Page (only next)</h4>
        <p>
          <code>totalPages=25 page=1</code>
        </p>
        <MoleculePagination
          totalPages={25}
          page={1}
          {...Icons}
          {...OnClicks}
          compressed
        />
      </div>
      <div className={CLASS_DEMO_SECTION}>
        <h4>w/ Prev & Next</h4>
        <p>
          <code>totalPages=25 page=17</code>
        </p>
        <MoleculePagination
          totalPages={25}
          page={17}
          {...Icons}
          {...OnClicks}
          compressed
        />
      </div>
      <div className={CLASS_DEMO_SECTION}>
        <h4>Out of range current page</h4>
        <p>
          <code>totalPages=25 page=27</code>
        </p>
        <MoleculePagination
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
          totalPages={25}
          page={17}
          {...OnClicks}
          compressed
        />
      </div>
      <div className={CLASS_DEMO_SECTION}>
        <h4>Different Texts</h4>
        <p>
          <code>totalPages=25 page=17</code>
        </p>
        <MoleculePagination
          totalPages={25}
          page={17}
          {...Icons}
          {...Texts}
          {...OnClicks}
          compressed
        />
      </div>
      <div className={CLASS_DEMO_SECTION}>
        <h4>Hide Disabled</h4>
        <p>
          <code>totalPages=25 page=1</code>
        </p>
        <MoleculePagination
          totalPages={25}
          page={1}
          {...Icons}
          {...Texts}
          {...OnClicks}
          compressed
          hideDisabled
        />
      </div>
    </div>
  )
}

export default Demo
