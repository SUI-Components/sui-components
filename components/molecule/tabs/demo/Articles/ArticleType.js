import {useState} from 'react'

import MoleculeTabs, {
  MoleculeTab,
  moleculeTabsTypes
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

const ArticleDefault = ({className}) => {
  const [type, setType] = useState(moleculeTabsTypes.VERTICAL)
  return (
    <Article className={className}>
      <H2>Type</H2>
      <Paragraph>
        Using the <Code>type</Code> (enum) prop you can set it to any of the
        predefined types. The default type values are exported on an enum called{' '}
        <Code>moleculeTabsTypes</Code>:
      </Paragraph>
      <UnorderedList>
        {Object.entries(moleculeTabsTypes).map(
          ([moleculeTabsTypeKey, moleculeTabsTypeValue]) => (
            <ListItem key={moleculeTabsTypeKey}>
              <Code>moleculeTabsTypes.{moleculeTabsTypeKey}</Code>: "
              {moleculeTabsTypeValue}"
            </ListItem>
          )
        )}
      </UnorderedList>
      <Grid cols={1} gutter={[8, 8]}>
        <Cell>
          <Label>type</Label>
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
        <Cell>
          <MoleculeTabs type={type}>
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

ArticleDefault.displayName = 'ArticleDefault'

ArticleDefault.propTypes = {
  className: PropTypes.string
}

export default ArticleDefault
