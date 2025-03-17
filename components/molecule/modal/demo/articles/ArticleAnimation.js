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
  Label,
  Paragraph,
  RadioButton,
  RadioButtonGroup
} from '@s-ui/documentation-library'

import MoleculeModal, {MoleculeModalWithoutAnimation} from '../src/index.js'

const ArticleAnimation = ({className}) => {
  const [open, setOpen] = useState(false)
  const [animation, setAnimation] = useState(false)

  const onChangeHandler = () => {
    setOpen(true)
  }

  const onCloseButtonHandler = () => {
    setOpen(false)
  }

  const onChangeAnimationHandler = (_, value) => {
    setAnimation(prev => !prev)
  }

  const onCloseHandler = (_, value) => {
    setOpen(false)
  }

  const Component = animation ? MoleculeModal : MoleculeModalWithoutAnimation

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
      <Grid cols={1} gutter={[8, 8]}>
        <Cell>
          <Button onClick={onChangeHandler}>Open modal</Button>
        </Cell>
        <Cell>
          <Label>Animate</Label>
        </Cell>
        <Cell>
          <RadioButtonGroup value={animation} onChange={onChangeAnimationHandler}>
            <RadioButton value label="true" checked={animation === true} />
            <RadioButton value={false} label="false" checked={animation === false} />
          </RadioButtonGroup>
        </Cell>
      </Grid>

      <Component isOpen={open} onClose={onCloseHandler} closeOnOutsideClick closeOnEscKeyDown>
        <Grid cols={1} gutter={[8, 8]}>
          <Cell>
            <Label>Animation</Label>
          </Cell>
          <Cell>
            <RadioButtonGroup value={animation} onChange={onChangeAnimationHandler} fullWidth>
              <RadioButton value label="true" checked={animation === true} />
              <RadioButton value={false} label="false" checked={animation === false} />
            </RadioButtonGroup>
          </Cell>
          <Cell span={1}>
            <Button onClick={onCloseButtonHandler} fullWidth>
              Close
            </Button>
          </Cell>
        </Grid>
      </Component>
    </Article>
  )
}

ArticleAnimation.propTypes = {
  className: PropTypes.string
}

export default ArticleAnimation
