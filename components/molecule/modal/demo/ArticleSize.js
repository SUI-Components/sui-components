import {useState} from 'react'

import PropTypes from 'prop-types'

import {
  Article,
  Button,
  Cell,
  Code,
  Grid,
  H2,
  Paragraph,
  RadioButton,
  RadioButtonGroup
} from '@s-ui/documentation-library'

import MoleculeModal, {MoleculeModalSizes} from '../src/index.js'
import LoremIpsum from './LoremIpsum.js'

const ArticleSize = ({className}) => {
  const [open, setOpen] = useState(false)
  const [size, setSize] = useState(undefined)
  const [count, setCount] = useState(3)
  const [fitContent, setFitContent] = useState(false)

  const onChangeHandler = () => {
    setOpen(!open)
  }

  const onCloseButtonHandler = () => {
    setOpen(false)
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

  return (
    <Article className={className}>
      <H2>Sizes</H2>
      <Button onClick={onChangeHandler}>Open modal</Button>

      <Paragraph>
        Sizes can be customized under the <Code>size</Code> prop.
      </Paragraph>
      <Grid cols={1} gutter={[8, 8]}>
        <Cell>
          <RadioButtonGroup value={size} onChange={onChangeSizeHandler} fullWidth>
            {[undefined, ...Object.values(MoleculeModalSizes)].map(sizeValue => (
              <RadioButton key={`${sizeValue}`} value={sizeValue} label={`${sizeValue}`} checked={size === sizeValue} />
            ))}
          </RadioButtonGroup>
        </Cell>
      </Grid>
      <Paragraph>
        User can also configure <Code>fitContent</Code> boolean prop to fit the width in mobile devices only. It looks
        like full size but only in extra-small width-devices with default false value. If it's true keeps modal look and
        feel with borders and its overlay.
      </Paragraph>
      <RadioButton value={fitContent} label={`fitContent ${fitContent === true}`} onClick={onFitContentHandler} />
      <MoleculeModal
        isOpen={open}
        onClose={onCloseHandler}
        closeOnOutsideClick
        closeOnEscKeyDown
        size={size}
        fitContent={fitContent}
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
            <RadioButtonGroup value={size} onChange={onChangeSizeHandler} fullWidth>
              {[undefined, ...Object.values(MoleculeModalSizes)].map(sizeValue => (
                <RadioButton
                  key={`${sizeValue}`}
                  value={sizeValue}
                  label={`${sizeValue}`}
                  checked={size === sizeValue}
                />
              ))}
            </RadioButtonGroup>
          </Cell>
          <Cell span={5}>
            <RadioButton
              value={fitContent}
              label={`fitContent (mobile only) ${fitContent === true}`}
              onClick={onFitContentHandler}
              fullWidth
            />
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

ArticleSize.propTypes = {
  className: PropTypes.string
}

export default ArticleSize
