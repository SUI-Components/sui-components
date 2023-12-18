import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Input, Label, Paragraph, Small} from '@s-ui/documentation-library'

import AtomSkeleton from '../src/index.js'

const ArticleCount = ({className}) => {
  const [count, setCount] = useState('1')
  return (
    <Article className={className}>
      <H2>Count</H2>
      <Paragraph>
        The number of skeleton elements provided can be configured using the <Code>count</Code> (integer) prop.
      </Paragraph>
      <Grid cols={2} gutter={[0, 8]}>
        <Cell>
          <Grid cols={1} gutter={[8, 0]}>
            <Cell>
              <Label>
                Width <Small>(px)</Small>
              </Label>
            </Cell>
            <Cell>
              <Input
                type="number"
                max={1000}
                min={1}
                value={count}
                onChange={event => setCount(event.target.value)}
                fullWidth
              />
            </Cell>
          </Grid>
        </Cell>
      </Grid>
      <br />
      <AtomSkeleton count={parseInt(count, 10)} />
    </Article>
  )
}

ArticleCount.propTypes = {
  className: PropTypes.string
}

export default ArticleCount
