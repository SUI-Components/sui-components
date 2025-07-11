import {useState} from 'react'

import PropTypes from 'prop-types'

import {
  Anchor,
  Article,
  Button,
  Cell,
  Code,
  Grid,
  H2,
  Input,
  Label,
  ListItem,
  Paragraph,
  RadioButton,
  RadioButtonGroup,
  UnorderedList
} from '@s-ui/documentation-library'

import MoleculeModal from '../src/index.js'
import LoremIpsum from './LoremIpsum.js'

const ONCLOSING_CALLBACKS = {
  ESCAPE: 'closeOnEscKeyDown',
  OUTSIDE_CLICK: 'closeOnOutsideClick'
}

const ArticleDefault = ({className}) => {
  const [open, setOpen] = useState(false)
  const [count, setCount] = useState(3)
  const [header, setHeader] = useState('')
  const [onClosingFns, setOnClosingFns] = useState(Object.values(ONCLOSING_CALLBACKS))

  const onChangeHandler = () => {
    setOpen(!open)
  }

  const onChangeClosingHandler = (event, value) => {
    const label = event.target.innerHTML
    if (value === undefined && onClosingFns.length > 1) {
      setOnClosingFns(onClosingFns.filter(value => value !== label))
    } else if (value !== undefined && !onClosingFns.includes(label)) {
      setOnClosingFns([...onClosingFns, label])
    }
  }

  const onCloseButtonHandler = () => {
    setOpen(false)
  }

  const onChangeHeader = event => {
    setHeader(event.target.value)
  }

  const onCloseHandler = (_, value) => {
    setOpen(false)
  }

  const largeClickHandler = value => () => {
    const newValue = count + value
    if (newValue < 0 || newValue > 20) {
      setCount(value)
    } else {
      setCount(newValue)
    }
  }

  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>
        By Default MoleculeModal exports the <Code>MoleculeModalWithAnimation</Code> component. It's vertical animated
        on its show/hide action.{' '}
        <Anchor href="#MoleculeModalWithoutAnimation">
          <Code>MoleculeModalWithoutAnimation</Code>
        </Anchor>{' '}
        gives the same component removing this effects.
      </Paragraph>
      <Paragraph>
        It can be controlled using the <Code>isOpen</Code> boolean prop.
      </Paragraph>
      <Button onClick={onChangeHandler}>Open modal</Button>
      <Paragraph>
        Use <Code>onClose</Code> handler to toggle its value.
      </Paragraph>
      <Paragraph>
        Closing behavior can be fired by two different behaviors tacked with the combination of 2 different boolean
        props:
      </Paragraph>
      <UnorderedList>
        <ListItem>
          <Code>closeOnOutsideClick</Code>: boolean prop for firing onClose callback function when user clicks any other
          outer element.
        </ListItem>
        <ListItem>
          <Code>closeOnEscKeyDown</Code>: boolean prop for firing onClose callback function when user press 'ESC' key.
        </ListItem>
      </UnorderedList>
      <Grid cols={1} gutter={[8, 8]}>
        <Cell>
          <Label>closing handler:</Label>
        </Cell>
        <Cell>
          <RadioButtonGroup value={onClosingFns} onChange={onChangeClosingHandler}>
            <RadioButton
              value="closeOnOutsideClick"
              label="closeOnOutsideClick"
              checked={onClosingFns.includes(ONCLOSING_CALLBACKS.OUTSIDE_CLICK)}
            />
            <RadioButton
              value="closeOnEscKeyDown"
              label="closeOnEscKeyDown"
              checked={onClosingFns.includes(ONCLOSING_CALLBACKS.ESCAPE)}
            />
          </RadioButtonGroup>
        </Cell>
      </Grid>
      <Paragraph>
        A Modal <Code>header</Code> can also be configured using a react.node prop
      </Paragraph>
      <Grid cols={1} gutter={[8, 8]}>
        <Cell>
          <Label>header</Label>
        </Cell>
        <Cell>
          <Input value={header} onChange={onChangeHeader} />
        </Cell>
      </Grid>
      <MoleculeModal
        isOpen={open}
        onClose={onCloseHandler}
        closeOnOutsideClick={onClosingFns.includes(ONCLOSING_CALLBACKS.OUTSIDE_CLICK)}
        closeOnEscKeyDown={onClosingFns.includes(ONCLOSING_CALLBACKS.ESCAPE)}
        header={header}
      >
        <Grid cols={5} gutter={[8, 8]}>
          <Cell>
            <Button onClick={largeClickHandler(-1)} disabled={count <= 1} fullWidth>
              -1
            </Button>
          </Cell>
          <Cell span={3} style={{display: 'flex', justifyContent: 'center'}}>
            <Paragraph>Paragraph number: {count}</Paragraph>
          </Cell>
          <Cell>
            <Button onClick={largeClickHandler(1)} disabled={count >= 20} fullWidth>
              +1
            </Button>
          </Cell>
          <Cell span={5}>
            <LoremIpsum count={count} />
          </Cell>
          <Cell span={5}>
            <Button onClick={onCloseButtonHandler} fullWidth>
              Close
            </Button>
          </Cell>
        </Grid>
      </MoleculeModal>
    </Article>
  )
}

ArticleDefault.propTypes = {
  className: PropTypes.string
}

export default ArticleDefault
