import PropTypes from 'prop-types'

import {Article, H2, Paragraph} from '@s-ui/documentation-library'

import Accordion, {
  MoleculeAccordionItem as AccordionItem
} from '../../src/index.js'
import LoremIpsum from '../LoremIpsum.js'

const ArticleDemo = ({className}) => {
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>paragraph</Paragraph>
      <Accordion>
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
    </Article>
  )
}

ArticleDemo.displayName = 'ArticleDemo'

ArticleDemo.propTypes = {
  className: PropTypes.string
}

export default ArticleDemo
