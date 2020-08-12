/* eslint-disable no-console */

import React from 'react'
import cx from 'classnames'
import './index.scss'

import MoleculeRating, {
  MoleculeRatingSizes
} from '../../../../components/molecule/rating/src'

import {IconStarFilled, IconStarHalfFilled, IconStarOutline} from './Icons'

const BASE_CLASS_DEMO = 'DemoMoleculeRating'
const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`
const CLASS_DEMO_SECTION_ICONS = `${CLASS_DEMO_SECTION}-icons`

const customPropsStar = {
  IconStarFilled,
  IconStarHalfFilled,
  IconStarEmpty: IconStarOutline
}

const Demo = () => (
  <div className="sui-StudioPreview">
    <div className="sui-StudioPreview-content sui-StudioDemo-preview">
      <h1>Rating</h1>
      <h2>Size SMALL</h2>
      <div className={CLASS_DEMO_SECTION}>
        <MoleculeRating value={0} label="25 opiniones" />
        <MoleculeRating value={2.5} label="25 opiniones" />
      </div>
      <h3>With Link</h3>
      <div className={CLASS_DEMO_SECTION}>
        <MoleculeRating
          value={4}
          label="25 opiniones"
          link
          href="https://www.adevinta.com/"
        />
      </div>
      <h2>Size MEDIUM</h2>
      <div className={CLASS_DEMO_SECTION}>
        <MoleculeRating
          value={0}
          size={MoleculeRatingSizes.MEDIUM}
          label="25 opiniones"
        />
        <MoleculeRating
          value={2.5}
          size={MoleculeRatingSizes.MEDIUM}
          label="25 opiniones"
        />
      </div>
      <h3>With Link</h3>
      <div className={CLASS_DEMO_SECTION}>
        <MoleculeRating
          value={4}
          size={MoleculeRatingSizes.MEDIUM}
          label="25 opiniones"
          href="https://www.adevinta.com/"
        />
      </div>

      <h2>Size LARGE</h2>
      <div className={CLASS_DEMO_SECTION}>
        <MoleculeRating
          value={0}
          size={MoleculeRatingSizes.LARGE}
          label="25 opiniones"
        />
        <MoleculeRating
          value={2.5}
          size={MoleculeRatingSizes.LARGE}
          label="25 opiniones"
        />
      </div>
      <h3>With Link</h3>
      <div className={CLASS_DEMO_SECTION}>
        <MoleculeRating
          value={4}
          size={MoleculeRatingSizes.LARGE}
          label="25 opiniones"
          href="https://www.adevinta.com/"
        />
      </div>

      <h3>Custom Star</h3>
      <div className={cx(CLASS_DEMO_SECTION, CLASS_DEMO_SECTION_ICONS)}>
        <MoleculeRating
          value={3.5}
          size={MoleculeRatingSizes.LARGE}
          label="25 opiniones"
          href="https://www.adevinta.com/"
          {...customPropsStar}
        />
      </div>
    </div>
  </div>
)

export default Demo
