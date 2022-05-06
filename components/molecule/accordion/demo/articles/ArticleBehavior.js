import {useState} from 'react'
import PropTypes from 'prop-types'

import {
  Article,
  H2,
  Paragraph,
  Grid,
  Cell,
  Label
} from '@s-ui/documentation-library'

import Accordion, {
  MoleculeAccordionItem as AccordionItem,
  moleculeAccordionBehavior
} from '../../src/index.js'
import LoremIpsum from '../LoremIpsum.js'

const ArticleBehavior = ({className}) => {
  const [values, setValues] = useState([])
  const onChange = (event, {values, value, isExpanded}) => {
    console.log('onChange', event, {values, value, isExpanded})
    setValues(
      values.includes(value)
        ? values.filter(v => v !== value)
        : [...values, value]
    )
  }

  return (
    <Article className={className}>
      <H2>Behavior</H2>
      <Paragraph>paragraph</Paragraph>
      <Accordion values={values} onChange={onChange}>
        <AccordionItem
          value="value-1"
          label="Accordion Item Header 1"
          content={
            <>
              <p>Accordion Item Content 1</p>
              <p>
                <LoremIpsum units="words" count={200} format="plain" />
              </p>
            </>
          }
        />
        <AccordionItem
          value="value-2"
          label="Accordion Item Header 2"
          content={
            <>
              <p>Accordion Item Content 2</p>
              <p>
                <LoremIpsum units="words" count={200} format="plain" />
              </p>
            </>
          }
        />
      </Accordion>
      <Paragraph>
        By default, there are two main behaviors provided by the package:
      </Paragraph>
      <Grid cols={2} gutter={[8, 8]}>
        {Object.values(moleculeAccordionBehavior).map(
          (moleculeAccordionBehavior, index) => (
            <Cell key={index}>
              <Label>{moleculeAccordionBehavior}</Label>
              <Accordion behavior={moleculeAccordionBehavior}>
                <AccordionItem
                  value="value-1"
                  label="Accordion Item Header 1"
                  content={
                    <>
                      <p>Accordion Item Content 1</p>
                      <p>
                        <LoremIpsum units="words" count={200} format="plain" />
                      </p>
                    </>
                  }
                />
                <AccordionItem
                  value="value-2"
                  label="Accordion Item Header 2"
                  content={
                    <>
                      <p>Accordion Item Content 2</p>
                      <p>
                        <LoremIpsum units="words" count={200} format="plain" />
                      </p>
                    </>
                  }
                />
              </Accordion>
            </Cell>
          )
        )}
      </Grid>
    </Article>
  )
}

ArticleBehavior.displayName = 'ArticleBehavior'

ArticleBehavior.propTypes = {
  className: PropTypes.string
}

export default ArticleBehavior
