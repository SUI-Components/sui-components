import PropTypes from 'prop-types'

import {Article, Cell, Grid, H2, Label, Paragraph} from '@s-ui/documentation-library'

import AtomSwitch from '../../src/index.js'
import {flexCenteredStyle} from '../settings.js'

const DisabledArticle = ({className}) => (
  <Article className={className}>
    <H2>Disabled</H2>
    <Paragraph>This prop is available to get a blocked status component</Paragraph>
    <Grid cols={3} style={{width: 400}}>
      {[
        ['value', {...flexCenteredStyle, justifyContent: 'flex-start'}],
        ['true', flexCenteredStyle],
        ['false', flexCenteredStyle]
      ].map(([key, style], index) => (
        <Cell key={index} style={style}>
          <Label>{key}</Label>
        </Cell>
      ))}
      <Cell />
      {[{value: true}, {value: false}].map((props, index) => (
        <Cell key={index} style={flexCenteredStyle}>
          <AtomSwitch disabled {...props} />
        </Cell>
      ))}
    </Grid>
  </Article>
)

DisabledArticle.displayName = 'DisabledArticle'

DisabledArticle.propTypes = {
  className: PropTypes.string
}

export default DisabledArticle
