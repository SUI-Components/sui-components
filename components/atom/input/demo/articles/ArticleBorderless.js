import {useState} from 'react'

import PropTypes from 'prop-types'

import {
  Article,
  Cell,
  Code,
  Grid,
  H2,
  Paragraph,
  RadioButton
} from '@s-ui/documentation-library'

import AtomInput from '../../src/index.js'

const ArticleBorderless = ({className}) => {
  const [border, setBorder] = useState(true)
  const [mode, setMode] = useState('light')
  return (
    <Article mode={mode} className={className}>
      <H2>No border</H2>
      <Paragraph>
        The border of the input can be removed using the boolean prop{' '}
        <Code>noBorder</Code>
      </Paragraph>
      <Grid cols={2} gutter={[8, 8]}>
        <Cell>
          <RadioButton
            fullWidth
            value={border}
            label="hide border"
            onClick={(event, value) => setBorder(!value)}
          />
        </Cell>
        <Cell>
          <RadioButton
            fullWidth
            value={mode}
            label="set dark"
            onClick={(event, value) => setMode(value ? 'dark' : 'light')}
          />
        </Cell>
        <Cell span={2}>
          <AtomInput placeholder="click to interact" noBorder={!border} />
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleBorderless.propTypes = {
  className: PropTypes.string
}

ArticleBorderless.displayName = 'ArticleBorderless'

export default ArticleBorderless
