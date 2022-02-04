import {useState} from 'react'
import PropTypes from 'prop-types'

import {
  H2,
  H4,
  Article,
  Paragraph,
  Code,
  Grid,
  Cell,
  Input
} from '@s-ui/documentation-library'

import MoleculeDataCounter from '../../src/index.js'
import {propsMessages} from '../settings.js'

const ArticleState = ({className}) => {
  const [stateLessValue, setStateLessValue] = useState(50)
  const [stateFulValue, setStateFulValue] = useState(50)
  const [label, setLabel] = useState('label')
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>
        The dataCounter component can work as a stateless components using{' '}
        <Code>value</Code> (number) prop or stateful component using{' '}
        <Code>initialValue</Code> (number) prop.
      </Paragraph>
      <Paragraph>
        in case of combining both of them, the most declarative (value) is
        prioritized over initialValue
      </Paragraph>
      <Grid cols={2} gutter={[8, 8]}>
        <Cell>
          <H4>stateful (uncontrolled)</H4>
          <Input value={stateFulValue} readOnly />
        </Cell>
        <Cell>
          <H4>stateless (controlled)</H4>
          <Input
            value={stateLessValue}
            type="number"
            onChange={e => setStateLessValue(e.target.value)}
          />
        </Cell>
        <Cell>
          <MoleculeDataCounter
            label={label}
            onChange={(e, {value}) => setStateFulValue(value)}
            initialValue={stateFulValue}
            {...propsMessages}
          />
        </Cell>
        <Cell>
          <MoleculeDataCounter
            label={label}
            onChange={(e, {value}) => setStateLessValue(value)}
            value={stateLessValue}
            {...propsMessages}
          />
        </Cell>
        <Cell span={2}>
          <Paragraph>
            User can also edit the label using the <Code>label</Code> (string)
            prop.
          </Paragraph>
          <Input
            value={label}
            onChange={event => setLabel(event.target.value)}
          />
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleState.displayName = 'ArticleState'

ArticleState.propTypes = {
  className: PropTypes.string
}

export default ArticleState
