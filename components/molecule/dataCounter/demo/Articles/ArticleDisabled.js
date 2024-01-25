import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Paragraph, RadioButton} from '@s-ui/documentation-library'

import MoleculeDataCounter from '../../src/index.js'
import {propsMessages} from '../settings.js'

const ArticleDisabled = ({className}) => {
  const [isDisabled, setIsDisabled] = useState(true)

  return (
    <Article className={className}>
      <H2>Disabled</H2>
      <Paragraph>
        The dataCounter component has a <Code>disabled</Code> (boolean) prop for disabling it.
      </Paragraph>
      <Grid cols={1} gutter={[8, 0]}>
        <Cell>
          <RadioButton
            checked={isDisabled}
            label={`${isDisabled ? 'disabled' : 'not disabled'}`}
            onClick={() => setIsDisabled(!isDisabled)}
          />
        </Cell>
        <Cell>
          <MoleculeDataCounter label="label" disabled={isDisabled} {...propsMessages} />
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleDisabled.displayName = 'ArticleDisabled'

ArticleDisabled.propTypes = {
  className: PropTypes.string
}

export default ArticleDisabled
