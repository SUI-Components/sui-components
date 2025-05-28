import {Fragment, useState} from 'react'

import PropTypes from 'prop-types'

import {
  AntDesignIcon,
  Article,
  Cell,
  Code,
  Grid,
  H2,
  Label,
  Paragraph,
  RadioButton,
  RadioButtonGroup
} from '@s-ui/documentation-library'

import AtomIcon, {ATOM_ICON_SHAPES, ATOM_ICON_SIZES} from '../../src/index.js'
import {flexCenteredStyle, ICONS} from '../settings.js'

const ArticleShapesAndSizes = ({className}) => {
  const [selectedIcon, setIcon] = useState(Object.values(ICONS)[0])
  return (
    <Article className={className}>
      <H2>Shapes & Sizes</H2>
      <Paragraph>
        Icons can change its inner colors using the <Code>shape</Code> prop. The inner svg elements fill inherit by
        default the current color.
      </Paragraph>
      –––
      <br />
      <br />
      <RadioButtonGroup onChange={(event, value) => setIcon(value)} value={selectedIcon}>
        {Object.values(ICONS).map(({name, label}, index) => (
          <RadioButton
            key={index}
            value={{name, label}}
            aria-label={label}
            label={
              <AtomIcon>
                <AntDesignIcon icon={name} style={{color: 'currentColor'}} />
              </AtomIcon>
            }
          />
        ))}
      </RadioButtonGroup>
      <br />
      <br />
      <Grid cols={Object.values(ATOM_ICON_SHAPES).length + 2} gutter={[8, 8]}>
        <Cell />
        {Object.values(ATOM_ICON_SHAPES).map((iconShape, index) => (
          <Cell key={index} style={flexCenteredStyle}>
            <Label>{iconShape}</Label>
          </Cell>
        ))}
        <Cell />
        {Object.values(ATOM_ICON_SIZES).map((iconSize, indexSize) => (
          <Fragment key={indexSize}>
            <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
              <Label>{iconSize}</Label>
            </Cell>
            {Object.values(ATOM_ICON_SHAPES).map((iconShape, indexShape) => (
              <Cell key={`${indexSize}-${indexShape}`} style={{...flexCenteredStyle, minHeight: 32}}>
                <AtomIcon shape={iconShape} size={iconSize} as="button">
                  <AntDesignIcon icon={selectedIcon.name} style={{color: 'currentColor'}} />
                </AtomIcon>
              </Cell>
            ))}
            <Cell style={{...flexCenteredStyle, justifyContent: 'flex-end'}}>
              <Label>{iconSize}</Label>
            </Cell>
          </Fragment>
        ))}
        <Cell />
      </Grid>
    </Article>
  )
}

ArticleShapesAndSizes.propTypes = {
  className: PropTypes.node
}

export default ArticleShapesAndSizes
