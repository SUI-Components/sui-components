import {useState} from 'react'

import MoleculeTabs, {
  MoleculeTab,
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

const ArticleVariant = ({className}) => {
  const [variant, setVariant] = useState(moleculeTabsVariants.HIGHLIGHTED)
  const [type, setType] = useState()
  return (
    <Article className={className}>
      <H2>Variant</H2>
      <Paragraph>
        Using the <Code>variant</Code> (enum) prop you can set it to any of the
        predefined variants. The default type values are exported on an enum
        called <Code>moleculeTabsVariants</Code>:
      </Paragraph>
      <UnorderedList>
        {Object.entries(moleculeTabsVariants).map(
          ([moleculeTabsVariantKey, moleculeTabsVariantValue]) => (
            <ListItem key={moleculeTabsVariantKey}>
              <Code>moleculeTabsVariants.{moleculeTabsVariantKey}</Code>: "
              {moleculeTabsVariantValue}"
            </ListItem>
          )
        )}
      </UnorderedList>
      <Grid cols={2} gutter={[8, 8]}>
        <Cell>
          <Label>variant</Label>
        </Cell>
        <Cell>
          <Label>type</Label>
        </Cell>
        <Cell>
          <RadioButtonGroup
            value={variant}
            onChange={(event, value) => setVariant(value)}
          >
            {[
              ['undefined', undefined],
              ...Object.entries(moleculeTabsVariants)
            ].map(([moleculeTabsVariantKey, moleculeTabsVariantValue]) => (
              <RadioButton
                key={`${moleculeTabsVariantKey}`}
                label={`${moleculeTabsVariantKey}`}
                value={moleculeTabsVariantValue}
                checked={moleculeTabsVariantValue === variant}
              />
            ))}
          </RadioButtonGroup>
        </Cell>
        <Cell>
          <RadioButtonGroup
            value={type}
            onChange={(event, value) => setType(value)}
          >
            {[
              ['undefined', undefined],
              ...Object.entries(moleculeTabsTypes)
            ].map(([moleculeTabsTypeKey, moleculeTabsTypeValue]) => (
              <RadioButton
                key={`${moleculeTabsTypeKey}`}
                label={`${moleculeTabsTypeKey}`}
                value={moleculeTabsTypeValue}
                checked={moleculeTabsTypeValue === type}
              />
            ))}
          </RadioButtonGroup>
        </Cell>
        <Cell span={2}>
          <MoleculeTabs variant={variant} type={type}>
            {Array(5)
              .fill(true)
              .map((v, index) => (
                <MoleculeTab
                  key={index + 1}
                  label={
                    <span style={{padding: '0 8px'}}>Label {index + 1}</span>
                  }
                  numTab={index + 1}
                  active={index + 1 === 1}
                >
                  <Content
                    title="Title"
                    number={index + 1}
                    className={CLASS_DEMO_CONTENT_TAB}
                  />
                </MoleculeTab>
              ))}
          </MoleculeTabs>
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleVariant.displayName = 'ArticleVariant'

ArticleVariant.propTypes = {
  className: PropTypes.string
}

export default ArticleVariant
