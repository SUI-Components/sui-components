import PropTypes from 'prop-types'

import {Article, Button, Cell, Grid, H2, Paragraph} from '@s-ui/documentation-library'

import AtomPopover from '../../src/index.js'
import IconClose from '../Icons/IconClose.js'

const ArticleType = ({className, content: Content}) => {
  return (
    <Article className={className}>
      <H2>Custom Types</H2>
      <Paragraph>
        You can even define some other extra types defining your own vertical custom types and looping this defined keys
        through scss.
      </Paragraph>
      <Grid cols={2} gutter={[8, 8]} style={{paddingTop: 150}}>
        <Cell style={{display: 'flex', justifyContent: 'center'}}>
          <AtomPopover type="dark" isVisible closeIcon={<IconClose />} content={Content} hideArrow={false}>
            <Button
              onClick={() => {}}
              outline
              style={{
                display: 'inline-block',
                margin: '0 auto',
                height: 'fit-content'
              }}
            >
              Target
            </Button>
          </AtomPopover>
        </Cell>
        <Cell style={{display: 'flex', justifyContent: 'center'}}>
          <AtomPopover type="alert" isVisible closeIcon={<IconClose />} content={Content} hideArrow={false}>
            <Button
              onClick={() => {}}
              outline
              style={{
                display: 'inline-block',
                margin: '0 auto',
                height: 'fit-content'
              }}
            >
              Target
            </Button>
          </AtomPopover>
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleType.propTypes = {
  className: PropTypes.string,
  content: PropTypes.elementType
}

export default ArticleType
