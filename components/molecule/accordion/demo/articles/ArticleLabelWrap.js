import {useState} from 'react'

import PropTypes from 'prop-types'

import {
  Article,
  Cell,
  Code,
  Grid,
  H2,
  Label,
  Paragraph,
  RadioButton,
  RadioButtonGroup
} from '@s-ui/documentation-library'

import Accordion, {moleculeAccordionHeaderLabelWraps, MoleculeAccordionItem as AccordionItem} from '../../src/index.js'
import LoremIpsum from '../LoremIpsum.js'

const ArticleLabelWrap = ({className}) => {
  const [currentLabelWrap, setCurrentLabelWrap] = useState()

  return (
    <Article className={className}>
      <H2>Label wrap</H2>
      <Paragraph>
        You can customize your header title label wrap style under the <Code>headerLabelWraps</Code> prop.
      </Paragraph>
      <Grid cols={1} gutter={[8, 8]}>
        <Label>headerLabelWrap</Label>
        <Cell>
          <RadioButtonGroup value={currentLabelWrap} onChange={(_, value) => setCurrentLabelWrap(value)}>
            {[undefined, ...Object.values(moleculeAccordionHeaderLabelWraps)].map(labelWrap => (
              <RadioButton
                key={`${labelWrap}`}
                value={labelWrap}
                checked={labelWrap === currentLabelWrap}
                label={`${labelWrap}`}
              />
            ))}
          </RadioButtonGroup>
        </Cell>
        <div style={{maxWidth: '350px'}}>
          <Accordion behavior="single" headerLabelWrap={currentLabelWrap}>
            <AccordionItem
              value="value-1"
              label="Accordion Item Header 1 with a long text that overflows the container"
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
              label="Accordion Item Header 2 with a long text that overflows the container"
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
        </div>
      </Grid>
    </Article>
  )
}

ArticleLabelWrap.displayName = 'ArticleLabelWrap'

ArticleLabelWrap.propTypes = {
  className: PropTypes.string
}

export default ArticleLabelWrap
