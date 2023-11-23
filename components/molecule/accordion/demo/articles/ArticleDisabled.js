import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'

import Accordion, {MoleculeAccordionItem as AccordionItem} from '../../src/index.js'
import LoremIpsum from '../LoremIpsum.js'

const ArticleDisabled = ({className}) => {
  return (
    <Article className={className}>
      <H2>Disabled</H2>
      <Paragraph>
        If an AccordionItem is declared <Code>disabled</Code> using the disabled (boolean) prop, it becomes unClickable
        and there is no way to trigger its event.
      </Paragraph>
      <Accordion behavior="multiple">
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
          disabled
          value="value-2"
          label="Disabled Accordion Item Header 2"
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
          disabled
          isExpanded
          value="value-3"
          label="Disabled Accordion Item Header 3"
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
    </Article>
  )
}

ArticleDisabled.displayName = 'ArticleDisabled'

ArticleDisabled.propTypes = {
  className: PropTypes.string
}

export default ArticleDisabled
