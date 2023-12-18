import PropTypes from 'prop-types'

import {Article, Cell, Grid, H2, Input, Label, Paragraph} from '@s-ui/documentation-library'

import AtomValidationText, {AtomValidationTextTypes} from '../../src/index.js'
import {flexCenteredStyle, nodeText} from '../settings.js'

const ArticleNodes = ({className}) => {
  return (
    <Article className={className}>
      <H2>Node texts</H2>
      <Paragraph>The component is prepared for admit react node elements as a text.</Paragraph>
      <br />
      <br />
      <Grid cols={Object.values(AtomValidationTextTypes).length} gutter={[10, 10]}>
        {Object.values(AtomValidationTextTypes).map((type, index) => (
          <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}} key={index}>
            <Label>{type}</Label>
          </Cell>
        ))}
        {Object.values(AtomValidationTextTypes).map((type, index) => (
          <Cell
            style={{
              ...flexCenteredStyle,
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}
            key={index}
          >
            <Input />
            <AtomValidationText type={type} text={nodeText} />
          </Cell>
        ))}
      </Grid>
    </Article>
  )
}

ArticleNodes.propTypes = {
  className: PropTypes.string
}

export default ArticleNodes
