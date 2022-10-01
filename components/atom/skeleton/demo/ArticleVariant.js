import {useState} from 'react'

import PropTypes from 'prop-types'

import {
  Article,
  Bold,
  Code,
  H2,
  Paragraph,
  RadioButton,
  RadioButtonGroup
} from '@s-ui/documentation-library'

import AtomSkeleton, {atomSkeletonVariants} from '../src/index.js'

const height = 200
const width = 200

const ArticleVariant = ({className}) => {
  const [variantState, setVariantState] = useState()
  return (
    <Article className={className}>
      <H2>Variant</H2>
      <Paragraph>
        The component provides the <Code>atomSkeletonVariants</Code> constants
        object with includes {Object.values(atomSkeletonVariants).join(', ')}{' '}
        valid values.
      </Paragraph>
      <Paragraph>
        The default variant is <Bold>'{atomSkeletonVariants.round}'</Bold>
      </Paragraph>
      <RadioButtonGroup
        defaultValue={`${variantState}`}
        onChange={(ev, value) => setVariantState(value)}
      >
        {[undefined, ...Object.values(atomSkeletonVariants)].map(
          variantMode => (
            <RadioButton
              key={`${variantMode}`}
              value={variantMode}
              checked={variantMode === variantState}
              label={`${variantMode}`}
            />
          )
        )}
      </RadioButtonGroup>
      <br />
      <br />
      <AtomSkeleton
        height={`${height}px`}
        variant={variantState}
        width={`${width}px`}
      />
    </Article>
  )
}

ArticleVariant.propTypes = {
  className: PropTypes.string
}

export default ArticleVariant
