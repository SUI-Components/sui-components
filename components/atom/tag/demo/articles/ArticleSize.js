import {Fragment} from 'react'

import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Label, Paragraph, Small} from '@s-ui/documentation-library'

import AtomTag, {atomTagDesigns, atomTagSizes} from '../../src/index.js'
import {closeIcon, flexCenteredStyle, icon} from '../settings.js'

const ArticleSize = ({className}) => {
  return (
    <Article className={className}>
      <H2>Size</H2>
      <Paragraph>
        Tags structure can have 3 main sizes: small, medium <Small>(default)</Small> and large. You can use this prop{' '}
        <Code>size</Code> to modify it.
      </Paragraph>
      <Grid cols={6} gutter={10}>
        {['', 'normal', 'outline', 'close icon', 'icon', 'icon & closeIcon'].map((value, index) => (
          <Cell key={index} style={flexCenteredStyle}>
            <Label>{value}</Label>
          </Cell>
        ))}
        {Object.values(atomTagSizes)
          .reverse()
          .map((size, index) => (
            <Fragment key={index}>
              <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
                <Label>{size}</Label>
              </Cell>
              <Cell style={flexCenteredStyle}>
                <AtomTag label="Tag Structure" size={size} />
              </Cell>
              <Cell style={flexCenteredStyle}>
                <AtomTag design={atomTagDesigns.OUTLINE} label="Tag Outline" size={size} />
              </Cell>
              <Cell style={flexCenteredStyle}>
                <AtomTag closeIcon={closeIcon} label="Close Tag" size={size} />
              </Cell>
              <Cell style={flexCenteredStyle}>
                <AtomTag icon={icon} label="Icon Tag" size={size} />
              </Cell>
              <Cell style={flexCenteredStyle}>
                <AtomTag closeIcon={closeIcon} icon={icon} label="Icon & Close Tag" size={size} disabled />
              </Cell>
            </Fragment>
          ))}
      </Grid>
    </Article>
  )
}

ArticleSize.displayName = 'ArticleSize'

ArticleSize.propTypes = {
  className: PropTypes.string
}

export default ArticleSize
