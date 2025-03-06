import {Fragment} from 'react'

import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Label, Paragraph} from '@s-ui/documentation-library'
import PrimitiveVisuallyHidden from '@s-ui/react-primitive-visually-hidden'

import AtomSwitch, {atomSwitchDesigns, atomSwitchSizes} from '../../src/index.js'
import {flexCenteredStyle, icons} from '../settings.js'

const ArticleIcons = ({className}) => (
  <Article className={className}>
    <H2>leftIcon and rightIcon</H2>
    <Paragraph>
      The <Code>leftIcon</Code> and <Code>rightIcon</Code> is used to show the inner circle element. Usually used for
      icons
    </Paragraph>
    <Grid cols={7}>
      <Cell />
      {Object.values(atomSwitchDesigns).map((design, index) => (
        <Cell key={index} style={flexCenteredStyle} span={2}>
          {design !== atomSwitchDesigns.SINGLE && <Label>{design.toString()}</Label>}
          {design === atomSwitchDesigns.SINGLE && <Label>{design.toString()}</Label>}
        </Cell>
      ))}
      {Object.values(atomSwitchSizes).map(atomSwitchSize => (
        <Fragment key={atomSwitchSize}>
          <Cell style={flexCenteredStyle}>
            <Label>{atomSwitchSize}</Label>
          </Cell>
          {Object.values(atomSwitchDesigns).map((design, index) => (
            <Cell key={index} style={flexCenteredStyle} span={2}>
              <AtomSwitch
                id={`switch-icons-${atomSwitchSize}-${design}`}
                size={atomSwitchSize}
                labelLeft={design !== atomSwitchDesigns.SINGLE ? 'labelLeft' : undefined}
                labelRight={design !== atomSwitchDesigns.SINGLE ? 'labelRight' : undefined}
                iconLeft={icons.left}
                iconRight={icons.right}
                label="label"
                name="name"
                design={design}
              />
              <PrimitiveVisuallyHidden>
                <Label htmlFor={`switch-icons-${atomSwitchSize}-${design}`}>
                  {`switch icons ${atomSwitchSize} ${design}`}
                </Label>
              </PrimitiveVisuallyHidden>
            </Cell>
          ))}
        </Fragment>
      ))}
    </Grid>
  </Article>
)

ArticleIcons.displayName = 'ArticleTypes'

ArticleIcons.propTypes = {
  className: PropTypes.string
}

export default ArticleIcons
