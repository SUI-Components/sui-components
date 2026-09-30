import {useState} from 'react'

import MoleculeTabs, {
  MoleculeTab,
  moleculeTabsJustifyContent,
  moleculeTabsTypes,
  moleculeTabsVariants
} from 'components/molecule/tabs/src/index.js'
import PropTypes from 'prop-types'

import {
  Article,
  Cell,
  Code,
  Grid,
  H2,
  Label,
  ListItem,
  Paragraph,
  RadioButton,
  RadioButtonGroup,
  UnorderedList
} from '@s-ui/documentation-library'

import Content from '../components/Content.js'
import {CLASS_DEMO_CONTENT_TAB} from '../config.js'

const ArticleTabsJustifyContent = ({className}) => {
  const [type, setType] = useState(undefined)
  const [variant, setVariant] = useState(undefined)
  const [justifyContent, setJustifyContent] = useState(undefined)
  return (
    <Article className={className}>
      <H2>JustifyContent</H2>
      <Paragraph>
        Using the <Code>tabsJustifyContent</Code> (enum) prop you can set it to any of the predefined types. The default
        type values are exported on an enum called <Code>moleculeTabsJustifyContent</Code>:
      </Paragraph>
      <UnorderedList>
        {Object.entries(moleculeTabsJustifyContent).map(
          ([moleculeTabsJustifyContentKey, moleculeTabsJustifyContentValue]) => (
            <ListItem key={moleculeTabsJustifyContentKey}>
              <Code>moleculeTabsTypes.{moleculeTabsJustifyContentKey}</Code>: "{moleculeTabsJustifyContentValue}"
            </ListItem>
          )
        )}
      </UnorderedList>
      <Grid cols={1} gutter={[8, 8]}>
        <Cell>
          <Label>JustifyContent</Label>
        </Cell>
        <Cell>
          <RadioButtonGroup value={justifyContent} onChange={(event, value) => setJustifyContent(value)}>
            {[['undefined', undefined], ...Object.entries(moleculeTabsJustifyContent)].map(
              ([moleculeTabsJustifyContentKey, moleculeTabsJustifyContentValue]) => (
                <RadioButton
                  key={`${moleculeTabsJustifyContentKey}`}
                  label={`${moleculeTabsJustifyContentKey}`}
                  value={moleculeTabsJustifyContentValue}
                  checked={moleculeTabsJustifyContentValue === justifyContent}
                />
              )
            )}
          </RadioButtonGroup>
        </Cell>
        <Cell>
          <Label>type</Label>
        </Cell>
        <Cell>
          <RadioButtonGroup value={type} onChange={(event, value) => setType(value)}>
            {[['undefined', undefined], ...Object.entries(moleculeTabsTypes)].map(
              ([moleculeTabsTypesKey, moleculeTabsTypesValue]) => (
                <RadioButton
                  key={`${moleculeTabsTypesKey}`}
                  label={`${moleculeTabsTypesKey}`}
                  value={moleculeTabsTypesValue}
                  checked={moleculeTabsTypesValue === type}
                />
              )
            )}
          </RadioButtonGroup>
        </Cell>
        <Cell>
          <Label>variant</Label>
        </Cell>
        <Cell>
          <RadioButtonGroup value={variant} onChange={(event, value) => setVariant(value)}>
            {[['undefined', undefined], ...Object.entries(moleculeTabsVariants)].map(
              ([moleculeTabsVariantsKey, moleculeTabsVariantsValue]) => (
                <RadioButton
                  key={`${moleculeTabsVariantsKey}`}
                  label={`${moleculeTabsVariantsKey}`}
                  value={moleculeTabsVariantsValue}
                  checked={moleculeTabsVariantsValue === variant}
                />
              )
            )}
          </RadioButtonGroup>
        </Cell>
        <Cell>
          <MoleculeTabs type={type} variant={variant} tabsJustifyContent={justifyContent}>
            {Array(5)
              .fill(true)
              .map((v, index) => (
                <MoleculeTab
                  key={index + 1}
                  label={<span style={{padding: '0 8px'}}>Label {index + 1}</span>}
                  numTab={index + 1}
                  active={index + 1 === 1}
                >
                  <Content title="Title" number={index + 1} className={CLASS_DEMO_CONTENT_TAB} />
                </MoleculeTab>
              ))}
          </MoleculeTabs>
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleTabsJustifyContent.displayName = 'ArticleTabsJustifyContent'

ArticleTabsJustifyContent.propTypes = {
  className: PropTypes.string
}

export default ArticleTabsJustifyContent
