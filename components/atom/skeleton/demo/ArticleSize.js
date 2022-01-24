import {useState} from 'react'
import PropTypes from 'prop-types'

import {
  H2,
  Article,
  Paragraph,
  Input,
  Label,
  Code,
  Grid,
  Cell,
  Small
} from '@s-ui/documentation-library'

import AtomSkeleton from '../src/index.js'

const ArticleSize = ({className}) => {
  const [width, setWidth] = useState('100')
  const [height, setHeight] = useState('100')
  return (
    <Article className={className}>
      <H2>Size</H2>
      <Paragraph>
        Size can be customized using the <Code>width</Code> and{' '}
        <Code>height</Code> props.
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
                value={width}
                onChange={event => setWidth(event.target.value)}
                fullWidth
              />
            </Cell>
          </Grid>
        </Cell>
        <Cell>
          <Grid cols={1} gutter={[8, 0]}>
            <Cell>
              <Label>
                Height <Small>(px)</Small>
              </Label>
            </Cell>
            <Cell>
              <Input
                type="number"
                max={1000}
                min={1}
                value={height}
                onChange={event => setHeight(event.target.value)}
                fullWidth
              />
            </Cell>
          </Grid>
        </Cell>
      </Grid>
      <br />
      <AtomSkeleton width={`${width}px`} height={`${height}px`} />
    </Article>
  )
}

ArticleSize.propTypes = {
  className: PropTypes.string
}

export default ArticleSize
