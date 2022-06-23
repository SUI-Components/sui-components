import {Fragment} from 'react'

import PropTypes from 'prop-types'

import {
  Article,
  Cell,
  Code,
  Grid,
  H2,
  Paragraph
} from '@s-ui/documentation-library'

import Accordion, {
  MoleculeAccordionItem as AccordionItem
} from '../../src/index.js'
import LoremIpsum from '../LoremIpsum.js'

const ArticleDemo = ({className}) => {
  return (
    <Article className={className}>
      <H2>Spacing</H2>
      <Paragraph>
        Every single AccordionItem (header-panel pair) can be wrapped as a non
        logical element (Fragment) using the <Code>as</Code> prop.
      </Paragraph>
      <Paragraph>
        This can be used combined with the Compound Component principle to give
        space between Items using a layoutGrid in the Accordion.
      </Paragraph>
      <Accordion behavior="multiple" as={Fragment}>
        <Grid cols={1} gutter={[8, 8]}>
          <Cell>
            <AccordionItem
              as="section"
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
          </Cell>
          <Cell>
            <AccordionItem
              as="section"
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
          </Cell>
          <Cell>
            <AccordionItem
              as="section"
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
          </Cell>
        </Grid>
      </Accordion>
      <Paragraph>...or maybe just clean for self style...</Paragraph>
      <Accordion behavior="multiple" as={Fragment}>
        <Grid cols={1} gutter={[8, 8]}>
          <Cell>
            <AccordionItem
              as={Fragment}
              headerAs={Fragment}
              panelAs={Fragment}
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
          </Cell>
          <Cell>
            <AccordionItem
              as={Fragment}
              headerAs={Fragment}
              panelAs={Fragment}
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
          </Cell>
          <Cell>
            <AccordionItem
              as={Fragment}
              headerAs={Fragment}
              panelAs={Fragment}
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
          </Cell>
        </Grid>
      </Accordion>
    </Article>
  )
}

ArticleDemo.displayName = 'ArticleDemo'

ArticleDemo.propTypes = {
  className: PropTypes.string
}

export default ArticleDemo
