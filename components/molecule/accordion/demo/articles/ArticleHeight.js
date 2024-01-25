import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Input, Label, Paragraph} from '@s-ui/documentation-library'

import {moleculeAccordionBehavior} from '../../lib/index.js'
import Accordion, {MoleculeAccordionItem as AccordionItem} from '../../src/index.js'
import LoremIpsum from '../LoremIpsum.js'

const ArticleHeight = ({className}) => {
  const [height, setHeight] = useState(50)
  return (
    <Article className={className}>
      <H2>maxHeight</H2>
      <Paragraph>
        The maxHeight of the panels can be customized using the <Code>maxHeight</Code> (number) Accordion prop. It can
        be customized for each panel using its own maxHeight prop as well for setting different maxHeight values on each
        one. By default it is 0, which means autosize.
      </Paragraph>
      <Grid cols={1} gutter={[8, 8]}>
        <Cell>
          <Label>maxHeight</Label>
        </Cell>
        <Cell>
          <Input
            value={height}
            type="number"
            mix={50}
            max={500}
            step={1}
            onChange={event => {
              const int = parseInt(event.target.value)
              if (Number.isInteger(int) && !isNaN(int)) {
                setHeight(int)
              }
            }}
          />{' '}
          px
        </Cell>
        <Cell>
          <Accordion maxHeight={height} behavior={moleculeAccordionBehavior.MULTIPLE}>
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
      </Grid>
    </Article>
  )
}

ArticleHeight.displayName = 'ArticleHeight'

ArticleHeight.propTypes = {
  className: PropTypes.string
}

export default ArticleHeight
