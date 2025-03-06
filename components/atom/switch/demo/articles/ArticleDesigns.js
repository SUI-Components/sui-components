import {useState} from 'react'

import PropTypes from 'prop-types'

import {
  Anchor,
  Article,
  Cell,
  Code,
  Grid,
  H2,
  H3,
  Input,
  Label,
  ListItem,
  Paragraph,
  Strong,
  UnorderedList
} from '@s-ui/documentation-library'
import PrimitiveVisuallyHidden from '@s-ui/react-primitive-visually-hidden'

import AtomSwitch, {atomSwitchDesigns} from '../../src/index.js'

const ArticleDesigns = ({className}) => {
  const [singleLabelLeft, setSingleLabelLeft] = useState('label left')
  const [singleLabel, setSingleLabel] = useState('label')
  const [singleLabelRight, setSingleLabelRight] = useState('label right')
  const [singleLabelOptionalText, setSingleLabelOptionalText] = useState('optional text')
  const [toggleLabelLeft, setToggleLabelLeft] = useState('label left')
  const [toggleLabel, setToggleLabel] = useState('label')
  const [toggleLabelRight, setToggleLabelRight] = useState('label right')
  const [toggleLabelOptionalText, setToggleLabelOptionalText] = useState('optional text')
  const [selectLabelLeft, setSelectLabelLeft] = useState('label left')
  const [selectLabel, setSelectLabel] = useState('label')
  const [selectLabelRight, setSelectLabelRight] = useState('label right')
  const [selectLabelOptionalText, setSelectLabelOptionalText] = useState('optional text')
  return (
    <Article className={className}>
      <H2>Designs</H2>
      <Paragraph>
        The Switch is pre-defined to satisfy 3 different requirements with its different <Code>design</Code> values.
        Those values are listed in the exported <Code>atomSwitchDesigns</Code> object.
      </Paragraph>
      <UnorderedList>
        <ListItem style={{padding: '8px 0'}}>
          <Anchor href="#design-single">
            <Code>atomSwitchDesigns.SINGLE: "single"</Code>
          </Anchor>
        </ListItem>
        <ListItem style={{padding: '8px 0'}}>
          <Anchor href="#design-toggle">
            <Code>atomSwitchDesigns.TOGGLE: "toggle"</Code>
          </Anchor>
        </ListItem>
        <ListItem style={{padding: '8px 0'}}>
          <Anchor href="#design-select">
            <Code>atomSwitchDesigns.SELECT: "select"</Code>
          </Anchor>
        </ListItem>
      </UnorderedList>
      <H3 id="design-single">
        <Strong>Single</Strong>
      </H3>
      <Article elementType="section">
        <Paragraph>
          <Code>design="atomSwitchDesigns.SINGLE": "single"</Code> is the default design. It is a simple switch with
          just only 1 label which can be positioned on the left or right side by using the <Code>labelLeft</Code> or{' '}
          <Code>labelRight</Code> props. You can also use the <Code>label</Code> prop which will be positioned on the
          left.
        </Paragraph>
        <Grid gutter={[20, 0]}>
          <Cell>
            <Grid cols={4}>
              <Cell>
                <Label htmlFor="switch-design-single-labelLeft">single-labelLeft</Label>
              </Cell>
              <Cell>
                <Label htmlFor="switch-design-single-label">single-label</Label>
              </Cell>
              <Cell>
                <Label htmlFor="switch-design-single-labelRight">single-labelRight</Label>
              </Cell>
              <Cell>
                <Label htmlFor="switch-design-single-labelOptionalText">single-labelOptionalText</Label>
              </Cell>
              <Cell>
                <Input
                  id="switch-design-single-labelLeft"
                  onChange={ev => setSingleLabelLeft(ev.target.value)}
                  value={singleLabelLeft}
                />
              </Cell>
              <Cell>
                <Input
                  id="switch-design-single-label"
                  onChange={ev => setSingleLabel(ev.target.value)}
                  value={singleLabel}
                />
              </Cell>
              <Cell>
                <Input
                  id="switch-design-single-labelRight"
                  onChange={ev => setSingleLabelRight(ev.target.value)}
                  value={singleLabelRight}
                />
              </Cell>
              <Cell>
                <Input
                  id="switch-design-single-labelOptionalText"
                  onChange={ev => setSingleLabelOptionalText(ev.target.value)}
                  value={singleLabelOptionalText}
                />
              </Cell>
            </Grid>
          </Cell>
          <Cell>
            <AtomSwitch
              id="switch-design-single"
              design={atomSwitchDesigns.SINGLE}
              labelLeft={singleLabelLeft}
              label={singleLabel}
              labelRight={singleLabelRight}
              labelOptionalText={singleLabelOptionalText}
            />
            <PrimitiveVisuallyHidden>
              <Label htmlFor="switch-design-single">Single switch</Label>
            </PrimitiveVisuallyHidden>
          </Cell>
        </Grid>
      </Article>
      <H3 id="design-toggle">
        <Strong>Toggle</Strong>
      </H3>
      <Article elementType="section">
        <Paragraph>
          <Code>design="atomSwitchDesigns.TOGGLE": "toggle"</Code> is a switch with 2 labels. The left label is the
          leading label and the right label is the trailing label.
        </Paragraph>
        <Grid gutter={[20, 0]}>
          <Cell>
            <Grid cols={4} gutter={[0, 8]}>
              <Cell>
                <Label htmlFor="switch-design-toggle-labelLeft">toggle-labelLeft</Label>
              </Cell>
              <Cell>
                <Label htmlFor="switch-design-toggle-label">toggle-label</Label>
              </Cell>
              <Cell>
                <Label htmlFor="switch-design-toggle-labelRight">toggle-labelRight</Label>
              </Cell>
              <Cell>
                <Label htmlFor="switch-design-toggle-labelOptionalText">toggle-labelOptionalText</Label>
              </Cell>
              <Cell>
                <Input
                  id="switch-design-toggle-labelLeft"
                  onChange={ev => setToggleLabelLeft(ev.target.value)}
                  value={toggleLabelLeft}
                />
              </Cell>
              <Cell>
                <Input
                  id="switch-design-toggle-label"
                  onChange={ev => setToggleLabel(ev.target.value)}
                  value={toggleLabel}
                />
              </Cell>
              <Cell>
                <Input
                  id="switch-design-toggle-labelRight"
                  onChange={ev => setToggleLabelRight(ev.target.value)}
                  value={toggleLabelRight}
                />
              </Cell>
              <Cell>
                <Input
                  id="switch-design-toggle-labelOptionalText"
                  onChange={ev => setToggleLabelOptionalText(ev.target.value)}
                  value={toggleLabelOptionalText}
                />
              </Cell>
            </Grid>
          </Cell>
          <Cell>
            <AtomSwitch
              id="switch-design-toggle"
              design={atomSwitchDesigns.TOGGLE}
              labelLeft={toggleLabelLeft}
              label={toggleLabel}
              labelRight={toggleLabelRight}
              labelOptionalText={toggleLabelOptionalText}
            />
            <PrimitiveVisuallyHidden>
              <Label htmlFor="switch-design-toggle">Single switch</Label>
            </PrimitiveVisuallyHidden>
          </Cell>
        </Grid>
      </Article>
      <H3 id="design-select">
        <Strong>Select</Strong>
      </H3>
      <Article elementType="section">
        <Paragraph>
          <Code>design="atomSwitchDesigns.SELECT": "select"</Code> is a switch with 2 labels. The left label is the
          leading label and the right label is the trailing label.
        </Paragraph>
        <Grid gutter={[20, 0]}>
          <Cell>
            <Grid cols={4} gutter={[0, 8]}>
              <Cell>
                <Label htmlFor="switch-design-select-labelLeft">select-labelLeft</Label>
              </Cell>
              <Cell>
                <Label htmlFor="switch-design-select-label">select-label</Label>
              </Cell>
              <Cell>
                <Label htmlFor="switch-design-select-labelRight">select-labelRight</Label>
              </Cell>
              <Cell>
                <Label htmlFor="switch-design-select-labelOptionalText">select-labelOptionalText</Label>
              </Cell>
              <Cell>
                <Input
                  id="switch-design-select-labelLeft"
                  onChange={ev => setSelectLabelLeft(ev.target.value)}
                  value={selectLabelLeft}
                />
              </Cell>
              <Cell>
                <Input
                  id="switch-design-select-label"
                  onChange={ev => setSelectLabel(ev.target.value)}
                  value={selectLabel}
                />
              </Cell>
              <Cell>
                <Input
                  id="switch-design-select-labelRight"
                  onChange={ev => setSelectLabelRight(ev.target.value)}
                  value={selectLabelRight}
                />
              </Cell>
              <Cell>
                <Input
                  id="switch-design-select-labelOptionalText"
                  onChange={ev => setSelectLabelOptionalText(ev.target.value)}
                  value={selectLabelOptionalText}
                />
              </Cell>
            </Grid>
          </Cell>
          <Cell>
            <AtomSwitch
              id="switch-design-select"
              design={atomSwitchDesigns.SELECT}
              labelLeft={selectLabelLeft}
              label={selectLabel}
              labelRight={selectLabelRight}
              labelOptionalText={selectLabelOptionalText}
            />
            <PrimitiveVisuallyHidden>
              <Label htmlFor="switch-design-select">Select switch</Label>
            </PrimitiveVisuallyHidden>
          </Cell>
        </Grid>
      </Article>
    </Article>
  )
}

ArticleDesigns.displayName = 'ArticleDesigns'

ArticleDesigns.propTypes = {
  className: PropTypes.string
}

export default ArticleDesigns
