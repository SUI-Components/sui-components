import {useState} from 'react'
import PropTypes from 'prop-types'

import {
  H2,
  Article,
  Code,
  Paragraph,
  Bold,
  RadioButton,
  RadioButtonGroup
} from '@s-ui/documentation-library'

import AtomSkeleton, {atomSkeletonVariants} from '../src/index.js'

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
      <AtomSkeleton variant={variantState} />
    </Article>
  )
}

ArticleVariant.propTypes = {
  className: PropTypes.string
}

export default ArticleVariant
