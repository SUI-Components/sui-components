import {Fragment} from 'react'

import PropTypes from 'prop-types'

import {Article, Cell, Grid, H2, Label} from '@s-ui/documentation-library'

import Color from '../Color.js'

const ArticleDefault = ({className}) => {
  return (
    <Article className={className}>
      <H2>Default</H2>
      {[
        'primary',
        'accent',
        'success',
        'alert',
        'error',
        'info',
        'neutral'
      ].map(colorName => (
        <Fragment key={colorName}>
          <Label fontWeight="bold">{colorName}</Label>
          <Grid>
            <Cell>
              <Color
                token={`var(--color-${colorName}-500)`}
                name={colorName}
                mode="dark"
              />
            </Cell>
            <Cell>
              <Grid cols={10}>
                {[
                  {value: 50},
                  {value: 100},
                  {value: 200},
                  {value: 300},
                  {value: 400, mode: 'dark'},
                  {value: 500, mode: 'dark'},
                  {value: 600, mode: 'dark'},
                  {value: 700, mode: 'dark'},
                  {value: 800, mode: 'dark'},
                  {value: 900, mode: 'dark'}
                ].map(({value, mode}) => (
                  <Cell key={value}>
                    <Color
                      token={`var(--color-${colorName}-${value})`}
                      name={`${colorName} ${value}`}
                      mode={mode}
                    />
                  </Cell>
                ))}
              </Grid>
            </Cell>
          </Grid>
        </Fragment>
      ))}
    </Article>
  )
}

ArticleDefault.propTypes = {
  className: PropTypes.string
}

export default ArticleDefault
