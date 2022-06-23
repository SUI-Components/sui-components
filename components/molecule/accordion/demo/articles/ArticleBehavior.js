import {useState} from 'react'

import PropTypes from 'prop-types'

import {
  Article,
  Cell,
  Code,
  Grid,
  H2,
  Label,
  Paragraph
} from '@s-ui/documentation-library'

import Accordion, {
  moleculeAccordionBehavior,
  MoleculeAccordionItem as AccordionItem
} from '../../src/index.js'
import LoremIpsum from '../LoremIpsum.js'

const ArticleBehavior = ({className}) => {
  const [values, setValues] = useState([])
  const onChange = (event, {values, value, isExpanded}) => {
    console.log('onChange', event, {values, value, isExpanded}) // eslint-disable-line no-console
    setValues(
      values.includes(value)
        ? values.filter(v => v !== value)
        : [...values, value]
    )
  }

  return (
    <Article className={className}>
      <H2>Behavior</H2>
      <Paragraph>
        Use the Accordion as a controlled component using the{' '}
        <Code>values</Code> (array of ids) prop. Change the containing expanded
        ids using the <Code>onChange</Code> Accordion handler.
      </Paragraph>
      <Paragraph>
        The onChange handler has the event and an object which contains the
        expanded id <Code>values</Code>, the clicked id <Code>value</Code> and
        its current state under the <Code>isExpanded</Code> boolean state.
      </Paragraph>
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
        <AccordionItem
          value="value-3"
          label="Accordion Item Header 3"
          content={
            <>
              <p>Accordion Item Content 3</p>
              <p>
                <LoremIpsum units="words" count={200} format="plain" />
              </p>
            </>
          }
        />
        <AccordionItem
          value="value-4"
          label="Accordion Item Header 4"
          content={
            <>
              <p>Accordion Item Content 4</p>
              <p>
                <LoremIpsum units="words" count={200} format="plain" />
              </p>
            </>
          }
        />
      </Accordion>
      <Paragraph>
        By default, there are two main behaviors provided by the package to
        declare its default behavior:
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
                <AccordionItem
                  value="value-3"
                  label="Accordion Item Header 3"
                  content={
                    <>
                      <p>Accordion Item Content 3</p>
                      <p>
                        <LoremIpsum units="words" count={200} format="plain" />
                      </p>
                    </>
                  }
                />
                <AccordionItem
                  value="value-4"
                  label="Accordion Item Header 4"
                  content={
                    <>
                      <p>Accordion Item Content 4</p>
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
