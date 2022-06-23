import {Fragment} from 'react'

import PropTypes from 'prop-types'

import {
  Article,
  Cell,
  Code,
  Grid,
  H2,
  Label,
  Paragraph
} from '@s-ui/documentation-library'

import AtomSwitch, {atomSwitchSizes, atomSwitchTypes} from '../../src/index.js'
import {flexCenteredStyle} from '../settings.js'

const ArticleCircleIcons = ({className}) => (
  <Article className={className}>
    <H2>leftIcon and rightIcon</H2>
    <Paragraph>
      The <Code>leftIcon</Code> and <Code>rightIcon</Code> is used to show the
      inner circle element. Usually used for icons
    </Paragraph>
    <Grid cols={7}>
      <Cell />
      {Object.values(atomSwitchTypes).map((type, index) => (
        <Cell key={index} style={flexCenteredStyle} span={2}>
          {type !== atomSwitchTypes.SINGLE && <Label>{type.toString()}</Label>}
          {type === atomSwitchTypes.SINGLE && <Label>{type.toString()}</Label>}
        </Cell>
      ))}
      {Object.values(atomSwitchSizes).map(atomSwitchSize => (
        <Fragment key={atomSwitchSize}>
          <Cell style={flexCenteredStyle}>
            <Label>{atomSwitchSize}</Label>
          </Cell>
          {Object.values(atomSwitchTypes).map((type, index) => (
            <Cell key={index} style={flexCenteredStyle} span={2}>
              <AtomSwitch
                size={atomSwitchSize}
                labelLeft={
                  type !== atomSwitchTypes.SINGLE ? 'labelLeft' : undefined
                }
                labelRight={
                  type !== atomSwitchTypes.SINGLE ? 'labelRight' : undefined
                }
                iconLeft="☽"
                iconRight="☼"
                label="label"
                name="name"
                type={type}
              />
            </Cell>
          ))}
        </Fragment>
      ))}
    </Grid>
  </Article>
)

ArticleCircleIcons.displayName = 'ArticleTypes'

ArticleCircleIcons.propTypes = {
  className: PropTypes.string
}

export default ArticleCircleIcons
