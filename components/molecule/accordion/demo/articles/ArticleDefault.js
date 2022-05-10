import {useState} from 'react'
import PropTypes from 'prop-types'

import {Article, H2, H3, Paragraph, Code} from '@s-ui/documentation-library'

import Accordion, {
  MoleculeAccordionItem as AccordionItem,
  moleculeAccordionBehavior
} from '../../src/index.js'
import LoremIpsum from '../LoremIpsum.js'

const ArticleDefault = ({className}) => {
  const [values] = useState([])
  const onChange = (event, {values, value, isExpanded}) => {
    console.log('onChange', event, {values, value, isExpanded}) // eslint-disable-line no-console
  }
  const onItemClick =
    item =>
    (event, {value, isExpanded, values}) =>
      console.log('onItemClick', item, event, {value, isExpanded, values}) // eslint-disable-line no-console

  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>paragraph</Paragraph>
      <Accordion
        onChange={onChange}
        defaultValues={values}
        behavior={moleculeAccordionBehavior.MULTIPLE}
      >
        <AccordionItem
          value="value-1"
          onClick={onItemClick('header1')}
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
          value="value-3"
          onClick={onItemClick('header1')}
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
      <H3>Handlers</H3>
      <Code>onChange</Code>
    </Article>
  )
}

ArticleDefault.displayName = 'ArticleDefault'

ArticleDefault.propTypes = {
  className: PropTypes.string
}

export default ArticleDefault
