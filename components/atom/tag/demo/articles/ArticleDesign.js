import {Fragment} from 'react'

import AtomTag, {atomTagDesigns} from 'components/atom/tag/src/index.js'
import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Label, Paragraph, Small} from '@s-ui/documentation-library'

import {closeIcon, flexCenteredStyle, icon} from '../settings.js'

const ArticleDesign = ({className}) => {
  return (
    <Article className={className}>
      <H2>Design</H2>
      <Paragraph>
        Tags structure can have 2 designs: Solid <Small>(default)</Small> and outline. You can use this prop{' '}
        <Code>design</Code> to modify it.
      </Paragraph>
      <Grid cols={5} gutter={10}>
        {['', 'normal', 'close icon', 'icon', 'icon & closeIcon'].map((value, index) => (
          <Cell key={index} style={flexCenteredStyle}>
            <Label>{value}</Label>
          </Cell>
        ))}
        {Object.values(atomTagDesigns)
          .reverse()
          .map((design, index) => (
            <Fragment key={index}>
              <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
                <Label>{design}</Label>
              </Cell>
              <Cell style={flexCenteredStyle}>
                <AtomTag label="Tag Structure" design={design} />
              </Cell>
              <Cell style={flexCenteredStyle}>
                <AtomTag closeIcon={closeIcon} label="Close Tag" design={design} />
              </Cell>
              <Cell style={flexCenteredStyle}>
                <AtomTag icon={icon} label="Icon Tag" design={design} />
              </Cell>
              <Cell style={flexCenteredStyle}>
                <AtomTag closeIcon={closeIcon} icon={icon} label="Icon & Close Tag" design={design} />
              </Cell>
            </Fragment>
          ))}
      </Grid>
    </Article>
  )
}

ArticleDesign.displayName = 'ArticleDesign'

ArticleDesign.propTypes = {
  className: PropTypes.string
}

export default ArticleDesign
