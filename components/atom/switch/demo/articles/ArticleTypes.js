import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, H3, Label, Paragraph, Small} from '@s-ui/documentation-library'

import AtomSwitch, {atomSwitchTypes} from '../../src/index.js'
import {flexCenteredStyle} from '../settings.js'

const ArticleTypes = ({className}) => (
  <Article className={className}>
    <H2>Types</H2>
    <Paragraph>
      This package gives 3 different <Code>type</Code> values provided under the <Code>atomSwitchTypes</Code> exported
      variable.
    </Paragraph>
    <Grid cols={3}>
      {Object.values(atomSwitchTypes).map((type, index) => (
        <Cell key={index} style={flexCenteredStyle}>
          {type !== atomSwitchTypes.SINGLE && <Label>{type.toString()}</Label>}
          {type === atomSwitchTypes.SINGLE && <Label>{type.toString()}</Label>}
        </Cell>
      ))}
      {Object.values(atomSwitchTypes).map((type, index) => (
        <Cell key={index} style={flexCenteredStyle}>
          <AtomSwitch
            labelLeft={type !== atomSwitchTypes.SINGLE ? 'labelLeft' : undefined}
            labelRight={type !== atomSwitchTypes.SINGLE ? 'labelRight' : undefined}
            label="label"
            name="name"
            type={type}
          />
        </Cell>
      ))}
    </Grid>
    <H3>Single type</H3>
    <Paragraph>
      Single type switch has 3 behaviors, depending on the labels props you fill. <Code>label</Code>{' '}
      <Code>labelLeft</Code> <Code>labelRight</Code>
    </Paragraph>
    <Grid cols={3}>
      <Cell key="typeSingleCellLabel" style={flexCenteredStyle}>
        <Label>Single</Label>
      </Cell>
      <Cell key="typeSingleLeftCellLabel" style={flexCenteredStyle}>
        <Label>
          Single <Small>(With left label)</Small>
        </Label>
      </Cell>
      <Cell key="typeSingleRightCellLabel" style={flexCenteredStyle}>
        <Label>
          Single <Small>(With right label)</Small>
        </Label>
      </Cell>
      <Cell key="typeSingleCell" style={flexCenteredStyle}>
        <AtomSwitch label="label" name="name" type={atomSwitchTypes.SINGLE} />
      </Cell>
      <Cell key="typeSingleLeftCell" style={flexCenteredStyle}>
        <AtomSwitch labelLeft="labelLeft" name="name" type={atomSwitchTypes.SINGLE} />
      </Cell>
      <Cell key="typeSingleRightCell" style={flexCenteredStyle}>
        <AtomSwitch labelRight="labelRight" name="name" type={atomSwitchTypes.SINGLE} />
      </Cell>
    </Grid>
  </Article>
)

ArticleTypes.displayName = 'ArticleTypes'

ArticleTypes.propTypes = {
  className: PropTypes.string
}

export default ArticleTypes
