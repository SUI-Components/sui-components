import {Fragment} from 'react'
import {IconBrandGithub, IconBrandGithubFilled} from '@tabler/icons-react'

import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Label, Paragraph} from '@s-ui/documentation-library'

import AtomIcon, {ATOM_ICON_COLORS, ATOM_ICON_DESIGNS} from '../../src/index.js'
import {flexCenteredStyle} from '../settings.js'

const ArticleDesign = ({className}) => {
  return (
    <Article className={className}>
      <H2>Design</H2>
      <Paragraph>
        Icons can change its color strategy using the <Code>design</Code> prop.
      </Paragraph>
      <Paragraph>
        Sui-components provides {Object.values(ATOM_ICON_DESIGNS).length} different icon designs under the{' '}
        <Code>design</Code> prop.
      </Paragraph>
      –––
      <br />
      <br />
      <Grid cols={9} gutter={[8, 8]}>
        <Cell />
        {Object.values(ATOM_ICON_COLORS).map((iconColor, index) => (
          <Cell key={index} style={flexCenteredStyle}>
            <Label>{iconColor}</Label>
          </Cell>
        ))}
        <Cell />
        {Object.values(ATOM_ICON_DESIGNS).map((iconDesign, indexSize) => {
          const icon = iconDesign === ATOM_ICON_DESIGNS.FILLED ? <IconBrandGithubFilled /> : <IconBrandGithub />
          return (
            <Fragment key={indexSize}>
              <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
                <Label>{iconDesign}</Label>
              </Cell>
              {Object.values(ATOM_ICON_COLORS).map((iconColor, indexColor) => (
                <Cell key={`${indexSize}-${indexColor}`} style={{...flexCenteredStyle, minHeight: 32}}>
                  <AtomIcon color={iconColor} design={iconDesign}>
                    {icon}
                  </AtomIcon>
                </Cell>
              ))}
              <Cell style={{...flexCenteredStyle, justifyContent: 'flex-end'}}>
                <Label>{iconDesign}</Label>
              </Cell>
            </Fragment>
          )
        })}
        <Cell />
      </Grid>
    </Article>
  )
}

ArticleDesign.propTypes = {
  className: PropTypes.node
}

export default ArticleDesign
