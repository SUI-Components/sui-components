import PropTypes from 'prop-types'
import {
  Article,
  H2,
  Paragraph,
  Code,
  ListItem,
  UnorderedList,
  Anchor,
  RadioButton,
  RadioButtonGroup,
  Button,
  Label,
  Grid,
  Cell,
  Input
} from '@s-ui/documentation-library'
import {useState} from 'react'
import MoleculeModal, {MoleculeModalSizes} from '../src'
import LoremIpsum from './LoremIpsum'

const ONCLOSING_CALLBACKS = {
  ESCAPE: 'closeOnEscKeyDown',
  OUTSIDE_CLICK: 'closeOnOutsideClick'
}

const ArticleDefault = ({className}) => {
  const [open, setOpen] = useState(false)
  const [size, setSize] = useState(undefined)
  const [fitContent, setFitContent] = useState(false)
  const [count, setCount] = useState(3)
  const [header, setHeader] = useState('')
  const [enableContentScroll, setEnableContentScroll] = useState(false)
  const [onClosingFns, setOnClosingFns] = useState(
    Object.values(ONCLOSING_CALLBACKS)
  )

  const onChangeHandler = (_, value) => {
    setOpen(value === undefined ? open : value)
  }
  const onChangeClosingHandler = (event, value) => {
    const label = event.target.innerHTML
    console.log({onClosingFns, value, label})
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

  const onChangeSizeHandler = (_, value) => {
    setSize(value)
  }

  const largeClickHandler = value => () => {
    const newValue = count + value
    if (newValue < 0 || newValue > 20) {
      setCount(value)
    } else {
      setCount(newValue)
    }
  }

  const onFitContentHandler = () => {
    setFitContent(!fitContent)
  }
  const onEnableContentScroll = () => {
    setEnableContentScroll(!enableContentScroll)
  }

  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>
        By Default MoleculeModal exports the{' '}
        <Code>MoleculeModalWithAnimation</Code> component.
      </Paragraph>
      <Paragraph>
        It can be controlled using the <Code>isOpen</Code> boolean prop.
      </Paragraph>
      <Grid cols={1} gutter={[8, 8]}>
        <Cell>
          <Label>isOpen</Label>
        </Cell>
        <Cell>
          <RadioButtonGroup value={open} onChange={onChangeHandler}>
            <RadioButton value={true} label="true" checked={open === true} />
            <RadioButton value={false} label="false" checked={open === false} />
          </RadioButtonGroup>
        </Cell>
      </Grid>
      <Paragraph>
        Use <Code>onClose</Code> handler to toggle its value.
      </Paragraph>
      <Paragraph>
        Closing behavior can be fired by two different behaviors tacked with the
        combination of 2 different boolean props:
      </Paragraph>
      <UnorderedList>
        <ListItem>
          <Code>closeOnOutsideClick</Code>: boolean prop for firing onClose
          callback function when user clicks any other outer element.
        </ListItem>
        <ListItem>
          <Code>closeOnEscKeyDown</Code>: boolean prop for firing onClose
          callback function when user press 'ESC' key.
        </ListItem>
      </UnorderedList>
      <Grid cols={1} gutter={[8, 8]}>
        <Cell>
          <Label>closing handler:</Label>
        </Cell>
        <Cell>
          <RadioButtonGroup
            value={onClosingFns}
            onChange={onChangeClosingHandler}
          >
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
        A Modal <Code>header</Code> can also be configured using a react.node
        prop
      </Paragraph>
      <Grid cols={1} gutter={[8, 8]}>
        <Cell>
          <Label>header</Label>
        </Cell>
        <Cell>
          <Input value={header} onChange={onChangeHeader} />
        </Cell>
      </Grid>
      <Paragraph>
        Sizes can be customized under the <Code>size</Code> prop.
      </Paragraph>
      <Grid cols={1} gutter={[8, 8]}>
        <Cell>
          <RadioButtonGroup
            value={size}
            onChange={onChangeSizeHandler}
            fullWidth
          >
            {[undefined, ...Object.values(MoleculeModalSizes)].map(
              sizeValue => (
                <RadioButton
                  key={`${sizeValue}`}
                  value={sizeValue}
                  label={`${sizeValue}`}
                  checked={size === sizeValue}
                />
              )
            )}
          </RadioButtonGroup>
        </Cell>
      </Grid>
      <MoleculeModal
        isOpen={open}
        onClose={onCloseHandler}
        closeOnOutsideClick={onClosingFns.includes(
          ONCLOSING_CALLBACKS.OUTSIDE_CLICK
        )}
        closeOnEscKeyDown={onClosingFns.includes(ONCLOSING_CALLBACKS.ESCAPE)}
        enableContentScroll={enableContentScroll}
        header={header}
        size={size}
        fitContent={fitContent}
      >
        <Grid cols={5} gutter={[8, 8]}>
          <Cell>
            <Button
              onClick={largeClickHandler(-1)}
              disabled={count <= 1}
              fullWidth
            >
              -1
            </Button>
          </Cell>
          <Cell span={3} style={{display: 'flex', justifyContent: 'center'}}>
            <Paragraph>Paragraph number: {count}</Paragraph>
          </Cell>
          <Cell>
            <Button
              onClick={largeClickHandler(1)}
              disabled={count >= 20}
              fullWidth
            >
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
          <Cell span={2}>
            <RadioButton
              value={fitContent}
              label={`fitContent ${fitContent === true}`}
              onClick={onFitContentHandler}
              fullWidth
            />
          </Cell>
          <Cell span={3}>
            <Paragraph>(mobile only)</Paragraph>
          </Cell>
          <Cell span={5}>
            <RadioButton
              value={enableContentScroll}
              label={`enableContentScroll ${enableContentScroll === true}`}
              onClick={onEnableContentScroll}
              fullWidth
            />
          </Cell>
          <Cell span={5}>
            <RadioButtonGroup
              value={size}
              onChange={onChangeSizeHandler}
              fullWidth
            >
              {[undefined, ...Object.values(MoleculeModalSizes)].map(
                sizeValue => (
                  <RadioButton
                    key={`${sizeValue}`}
                    value={sizeValue}
                    label={`${sizeValue}`}
                    checked={size === sizeValue}
                  />
                )
              )}
            </RadioButtonGroup>
          </Cell>
        </Grid>
      </MoleculeModal>
      <Paragraph>The package also have:</Paragraph>
      <UnorderedList>
        <ListItem>
          <Code>MoleculeModal</Code>
        </ListItem>
        <ListItem>
          <Anchor href="#MoleculeModalWithAnimation">
            <Code>MoleculeModalWithAnimation</Code>
          </Anchor>
        </ListItem>
        <ListItem>
          <Anchor href="#MoleculeModalWithoutAnimation">
            <Code>MoleculeModalWithoutAnimation</Code>
          </Anchor>
        </ListItem>
        <ListItem>
          <Anchor href="#MoleculeModalWithURLState">
            <Code>MoleculeModalWithURLState</Code>
          </Anchor>
        </ListItem>
      </UnorderedList>
      <Paragraph>
        User can also compound <Code>MoleculeModal</Code> using:
      </Paragraph>
      <UnorderedList>
        <ListItem>
          <Code>MoleculeModalContent</Code>
        </ListItem>
        <ListItem>
          <Code>MoleculeModalFooter</Code>
        </ListItem>
      </UnorderedList>
    </Article>
  )
}

ArticleDefault.propTypes = {
  className: PropTypes.string
}

export default ArticleDefault
