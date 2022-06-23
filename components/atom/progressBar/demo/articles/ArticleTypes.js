import {useState} from 'react'

import PropTypes from 'prop-types'

import {
  Anchor,
  Article,
  Cell,
  Code,
  Grid,
  H2,
  H4,
  Label,
  ListItem,
  Paragraph,
  UnorderedList
} from '@s-ui/documentation-library'

import AtomProgressBar, {atomProgressBarTypes} from '../../src/index.js'

const ArticleTypes = ({className}) => {
  const [value, setValue] = useState(50)
  return (
    <Article className={className}>
      <H2>Types</H2>
      <Paragraph>
        You can choose your progressBar using the <Code>type</Code> prop. It is
        default configured an a Line type.
      </Paragraph>
      <H4>Types under atomProgressBarTypes</H4>
      <UnorderedList>
        <ListItem>
          <Anchor href="#linear-progress-bar">
            <Code>atomProgressBarTypes.LINE</Code>
          </Anchor>
          ("{atomProgressBarTypes.LINE}
          "): Linear Progress Bar
        </ListItem>
        <ListItem>
          <Anchor href="#circle-progress-bar">
            <Code>atomProgressBarTypes.CIRCLE</Code>
          </Anchor>
          ("
          {atomProgressBarTypes.CIRCLE}"): Circle Progress Bar
        </ListItem>
        <ListItem>
          <Anchor href="#linear-double-progress-bar">
            <Code>atomProgressBarTypes.LINE_DOUBLE_BAR</Code>
          </Anchor>
          ("
          {atomProgressBarTypes.LINE_DOUBLE_BAR}"): Linear Double Progress Bar
        </ListItem>
      </UnorderedList>
      <Grid
        cols={Object.values(atomProgressBarTypes).length + 1}
        gutter={[8, 8]}
      >
        <Cell span={Object.values(atomProgressBarTypes).length + 1}>
          <Label>percentage value</Label>: {value}
        </Cell>
        <Cell span={Object.values(atomProgressBarTypes).length + 1}>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={value}
            style={{width: '100%'}}
            onChange={event => setValue(parseInt(event.target.value))}
          />
        </Cell>
        {[
          ['undefined', undefined],
          ...Object.entries(atomProgressBarTypes)
        ].map(([atomProgressBarTypeKey, atomProgressBarTypeValue]) => (
          <Cell key={atomProgressBarTypeKey}>
            <Label>{`${atomProgressBarTypeValue}`}</Label>
          </Cell>
        ))}
        {[
          ['undefined', undefined],
          ...Object.entries(atomProgressBarTypes)
        ].map(([atomProgressBarTypeKey, atomProgressBarTypeValue]) => (
          <Cell
            key={atomProgressBarTypeKey}
            style={{display: 'flex', justifyContent: 'center'}}
          >
            <div style={{width: '100%'}}>
              <AtomProgressBar
                type={atomProgressBarTypeValue}
                percentage={value}
                {...(atomProgressBarTypeValue ===
                  atomProgressBarTypes.LINE_DOUBLE_BAR && {
                  mainBarPercentage: value / 2,
                  extraBarPercentage: value
                })}
              />
            </div>
          </Cell>
        ))}
      </Grid>
    </Article>
  )
}

ArticleTypes.displayName = 'ArticleTypes'

ArticleTypes.propTypes = {
  className: PropTypes.string
}

export default ArticleTypes
