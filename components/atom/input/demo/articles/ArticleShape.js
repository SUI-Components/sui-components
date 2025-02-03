import {Fragment} from 'react'

import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Label, Paragraph} from '@s-ui/documentation-library'
import AtomLabel from '@s-ui/react-atom-label/lib'
import PrimitiveVisuallyHidden from '@s-ui/react-primitive-visually-hidden'

import AtomInput, {inputShapes, inputSizes} from '../../src/index.js'

const ArticleShape = ({className}) => (
  <Article className={className}>
    <H2>Shape</H2>
    <Paragraph>
      The border radius of the input can be set using the <Code>shape</Code> property.
    </Paragraph>
    <Grid cols={Object.values(inputShapes).length + 1} gutter={[8, 8]}>
      {Object.entries({default: undefined, ...inputShapes}).map(([key]) => (
        <Cell key={`${key}`}>
          <Label htmlFor={`input-shape-${key}`}>{`${key}`}</Label>
        </Cell>
      ))}
      {Object.entries({default: undefined, ...inputShapes}).map(([key, value]) => (
        <Cell key={`${key}`}>
          <AtomInput id={`input-shape-${key}`} shape={value} />
        </Cell>
      ))}
    </Grid>
    <Paragraph>In even preserves its own shaping combined with addons and sizes also.</Paragraph>
    <Grid cols={Object.values(inputShapes).length + 1 + 1} gutter={[8, 8]}>
      <Cell />
      {Object.entries({default: undefined, ...inputShapes}).map(([key]) => (
        <Cell key={`${key}`}>
          <Label>{`${key}`}</Label>
        </Cell>
      ))}
      {Object.entries({default: undefined, ...inputSizes}).map(([sizeKey, sizeValue]) => (
        <Fragment key={`${sizeKey}`}>
          <Cell key={`${sizeKey}`}>
            <Label>{`${sizeKey}`}</Label>
          </Cell>
          {Object.entries({default: undefined, ...inputShapes}).map(([shapeKey, shapeValue]) => (
            <Cell key={`${shapeKey}-${sizeKey}`}>
              <PrimitiveVisuallyHidden>
                <AtomLabel htmlFor={`input-${sizeValue}-${shapeValue}`} text={`input-${sizeValue}-${shapeValue}`} />
              </PrimitiveVisuallyHidden>
              <AtomInput
                id={`input-${sizeValue}-${shapeValue}`}
                shape={shapeValue}
                size={sizeValue}
                leftAddon={<span>left</span>}
                rightAddon={<span>right</span>}
              />
            </Cell>
          ))}
        </Fragment>
      ))}
    </Grid>
  </Article>
)

ArticleShape.propTypes = {
  className: PropTypes.node
}

export default ArticleShape
