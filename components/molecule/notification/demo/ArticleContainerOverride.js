import {useRef} from 'react'

import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Paragraph} from '@s-ui/documentation-library'

import MoleculeNotification from '../src/index.js'

const ArticleContainerOverride = ({className}) => {
  const targetRef = useRef()
  return (
    <Article className={className}>
      <H2>Override container</H2>
      <Paragraph>
        using <Code>overrideContainer</Code> (boolean) prop, the component can be placed in the desired DOM placement
        combined with the <Code>targetRef</Code> prop. If there is not ref provided it will be placed at the end of the
        body.
      </Paragraph>
      <Grid gutter={[8, 8]} cols={1}>
        <Cell>
          <div ref={targetRef} />
          <MoleculeNotification autoClose="manual" overrideContainer targetRef={targetRef}>
            overrideContainer with targetRef
          </MoleculeNotification>
        </Cell>
        <Cell>
          <MoleculeNotification autoClose="manual" overrideContainer>
            overrideContainer
          </MoleculeNotification>
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleContainerOverride.displayName = 'ArticleContainerOverride'

ArticleContainerOverride.propTypes = {
  className: PropTypes.string
}

export default ArticleContainerOverride
