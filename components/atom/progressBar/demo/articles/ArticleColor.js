import {Fragment, useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, H4, Label, ListItem, Paragraph, UnorderedList} from '@s-ui/documentation-library'

import AtomProgressBar, {atomProgressBarColors, atomProgressBarTypes} from '../../src/index.js'

const ArticleColor = ({className}) => {
  const [value, setValue] = useState(50)
  return (
    <Article className={className}>
      <H2>Color</H2>
      <Paragraph>
        You can choose your progressBar color using the <Code>color</Code> prop.
      </Paragraph>
      <H4>Types under atomProgressBarColors</H4>
      <UnorderedList>
        {Object.entries(atomProgressBarColors).map(([atomProgressBarColorKey, atomProgressBarColorValue]) => {
          return (
            <ListItem key={atomProgressBarColorKey}>
              <Code>atomProgressBarColors.{atomProgressBarColorKey}</Code>: '{atomProgressBarColorValue}'
            </ListItem>
          )
        })}
      </UnorderedList>
      <Grid cols={Object.values(atomProgressBarTypes).length + 1} gutter={[8, 8]}>
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
        {Object.entries(atomProgressBarColors).map(([atomProgressBarColorKey, atomProgressBarColorValue]) => {
          return (
            <Fragment key={atomProgressBarColorKey}>
              {[['undefined', undefined], ...Object.entries(atomProgressBarTypes)].map(
                ([atomProgressBarTypeKey, atomProgressBarTypeValue]) => (
                  <Cell key={atomProgressBarTypeKey}>
                    <Label>{`${atomProgressBarTypeValue}`}</Label>
                  </Cell>
                )
              )}
              {[['undefined', undefined], ...Object.entries(atomProgressBarTypes)].map(
                ([atomProgressBarTypeKey, atomProgressBarTypeValue]) => (
                  <Cell key={atomProgressBarTypeKey} style={{display: 'flex', justifyContent: 'center'}}>
                    <div style={{width: '100%'}}>
                      <AtomProgressBar
                        color={atomProgressBarColorValue}
                        type={atomProgressBarTypeValue}
                        percentage={value}
                        {...(atomProgressBarTypeValue === atomProgressBarTypes.LINE_DOUBLE_BAR && {
                          mainBarPercentage: value / 2,
                          extraBarPercentage: value
                        })}
                      />
                    </div>
                  </Cell>
                )
              )}
            </Fragment>
          )
        })}
      </Grid>
    </Article>
  )
}

ArticleColor.displayName = 'ArticleColor'

ArticleColor.propTypes = {
  className: PropTypes.string
}

export default ArticleColor
