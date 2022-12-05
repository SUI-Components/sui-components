import {Fragment} from 'react'

import PropTypes from 'prop-types'

import {Article, Cell, Grid, H2, Label} from '@s-ui/documentation-library'

import {useTheme} from '../../src/index.js'
import Color from '../Color.js'

const ArticleDefault = ({className}) => {
  const {
    color: {black, white, ...colors}
  } = useTheme()
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Grid cols={1} gutter={[8, 8]}>
        <Cell>
          {Object.entries(colors).map(([colorName, colorValue]) => (
            <Fragment key={colorName}>
              <Label fontWeight="bold">{colorName}</Label>
              <Grid>
                <Cell>
                  <Color
                    token={`var(--c-${colorName}-500)`}
                    name={colorName}
                    mode="dark"
                  />
                </Cell>
                <Cell>
                  <Grid cols={10}>
                    {Object.entries(colorValue).map(([valueKey, value]) => (
                      <Cell key={value}>
                        <Color
                          token={`${value}`}
                          name={`${colorName} ${valueKey}`}
                          mode={valueKey >= 400 && 'dark'}
                        />
                      </Cell>
                    ))}
                  </Grid>
                </Cell>
              </Grid>
            </Fragment>
          ))}
        </Cell>
        <Cell>
          <Color token={black} name="black" mode="dark" />
        </Cell>
        <Cell>
          <Color token={white} name="white" />
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleDefault.propTypes = {
  className: PropTypes.string
}

export default ArticleDefault
