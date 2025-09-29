/* eslint-disable no-console */

import MoleculeRating, {MoleculeRatingSizes} from 'components/molecule/rating/src/index.js'

import {IconStarFilled, IconStarFilledCustom, IconStarOutline, IconStarOutlineCustom} from './Icons/index.js'

const customPropsStar = {
  IconStarFilled: IconStarFilledCustom,
  IconStarHalfFilled: IconStarOutlineCustom,
  IconStarEmpty: IconStarOutlineCustom
}

const handleClick = (e, {value}) => {
  console.log(value)
}

const Demo = () => (
  <div className="sui-StudioPreview">
    <div className="sui-StudioPreview-content sui-StudioDemo-preview">
      <h1 className="sui-Studio-h1">Rating</h1>
      <p className="sui-Studio-h4">
        `MoleculeRating` will display a rating showing how good or popular someone o something is.
      </p>
      <div className="sui-Studio-wrapper--light">
        <h2 className="sui-Studio-h2">Size</h2>
        <div>
          <p className="sui-Studio-p">Small</p>
          <MoleculeRating value={0} label="25 opiniones" />
          <MoleculeRating value={2.5} label="25 opiniones" />
        </div>
        <div>
          <p className="sui-Studio-p">Medium</p>
          <MoleculeRating value={0} size={MoleculeRatingSizes.MEDIUM} label="25 opiniones" />
          <MoleculeRating value={2.5} size={MoleculeRatingSizes.MEDIUM} label="25 opiniones" />
          <div>
            <p className="sui-Studio-p">Large</p>
            <MoleculeRating value={0} size={MoleculeRatingSizes.LARGE} label="25 opiniones" />
            <MoleculeRating value={2.5} size={MoleculeRatingSizes.LARGE} label="25 opiniones" />
          </div>
        </div>
      </div>
      <div className="sui-Studio-wrapper--light">
        <h2 className="sui-Studio-h2">With Link</h2>
        <div>
          <div>
            <p>Small</p>
            <MoleculeRating value={4} label="25 opiniones" link href="https://www.adevinta.com/" />
          </div>
          <div>
            <p>Medium</p>
            <MoleculeRating
              value={4}
              label="25 opiniones"
              size={MoleculeRatingSizes.MEDIUM}
              link
              href="https://www.adevinta.com/"
            />
          </div>
          <div>
            <p>Large</p>
            <MoleculeRating
              value={4}
              label="25 opiniones"
              size={MoleculeRatingSizes.LARGE}
              link
              href="https://www.adevinta.com/"
            />
          </div>
        </div>
      </div>

      <div className="sui-Studio-wrapper--light">
        <h2 className="sui-Studio-h2">Custom Star</h2>
        <div>
          <MoleculeRating
            value={3.5}
            size={MoleculeRatingSizes.LARGE}
            label="25 opiniones"
            href="https://www.adevinta.com/"
            {...customPropsStar}
          />
        </div>
      </div>

      <div className="sui-Studio-wrapper--light">
        <h2 className="sui-Studio-h2">Stars with Hover and with onClick</h2>
        <div>
          <MoleculeRating
            isHovered
            ratingValues={[1, 2, 3, 4, 5]}
            size={MoleculeRatingSizes.LARGE}
            onClick={handleClick}
            IconStarEmpty={IconStarOutline}
            IconStarFilled={IconStarFilled}
          />
        </div>
      </div>
    </div>
  </div>
)

export default Demo
