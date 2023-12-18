import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Label, Paragraph} from '@s-ui/documentation-library'

import Accordion, {moleculeAccordionAnimationDuration, MoleculeAccordionItem as AccordionItem} from '../../src/index.js'
import LoremIpsum from '../LoremIpsum.js'

const availableValues = {
  'value-1': {
    id: 'value-1',
    label: 'Accordion Item Header 1',
    content: (
      <>
        <p>Accordion Item Content 1</p>
        <p>
          <LoremIpsum units="words" count={200} format="plain" />
        </p>
      </>
    )
  },
  'value-2': {
    id: 'value-2',
    label: 'Accordion Item Header 2',
    content: (
      <>
        <p>Accordion Item Content 2</p>
        <p>
          <LoremIpsum units="words" count={200} format="plain" />
        </p>
      </>
    )
  }
}

const ArticleTransition = ({className}) => {
  const [values, setValues] = useState([])
  const onChange = (event, {values}) => {
    const nextValues =
      values.length === 0 ? Object.values(availableValues).map(availableValue => availableValue.id) : []
    setValues(nextValues)
  }
  return (
    <Article className={className}>
      <H2>Animation Duration</H2>
      <Paragraph>
        You can customize the expanding-collapsing animation duration using the <Code>animationDuration</Code> (number)
        value. The value must be declared in milliseconds. The packages also provides the{' '}
        <Code>moleculeAnimationDuration</Code> enum with {Object.values(moleculeAccordionAnimationDuration).length}{' '}
        different values.
      </Paragraph>
      <Grid cols={Object.values(moleculeAccordionAnimationDuration).length} gutter={[8, 8]}>
        {Object.entries(moleculeAccordionAnimationDuration).map(
          ([moleculeAnimationDurationKey, moleculeAnimationDurationValue], index) => (
            <Cell key={index}>
              <Label>
                moleculeAnimationDuration.{moleculeAnimationDurationKey}: {moleculeAnimationDurationValue}ms
              </Label>
            </Cell>
          )
        )}
        {Object.values(moleculeAccordionAnimationDuration).map((moleculeAnimationDuration, index) => (
          <Cell key={index}>
            <Accordion onChange={onChange} values={values} animationDuration={moleculeAnimationDuration}>
              {Object.values(availableValues).map(availableValue => (
                <AccordionItem
                  key={availableValue.id}
                  value={availableValue.id}
                  label={availableValue.label}
                  content={availableValue.content}
                />
              ))}
            </Accordion>
          </Cell>
        ))}
      </Grid>
    </Article>
  )
}

ArticleTransition.displayName = 'ArticleTransition'

ArticleTransition.propTypes = {
  className: PropTypes.string
}

export default ArticleTransition
