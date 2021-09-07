import PropTypes from 'prop-types'
import {
  Article,
  H2,
  Paragraph,
  Code,
  Anchor,
  RadioButton,
  RadioButtonGroup,
  Button,
  Label,
  Grid,
  Cell
} from '@s-ui/documentation-library'
import {useState} from 'react'
import MoleculeModalWithAnimation, {MoleculeModalWithoutAnimation} from '../lib'

const ArticleAnimation = ({className}) => {
  const [open, setOpen] = useState(false)
  const [animation, setAnimation] = useState(false)

  const onChangeHandler = (_, value) => {
    setOpen(value === undefined ? open : value)
  }

  const onCloseButtonHandler = () => {
    setOpen(false)
  }

  const onChangeAnimationHandler = (_, value) => {
    setAnimation(value === undefined ? open : value)
  }

  const onCloseHandler = (_, value) => {
    setOpen(false)
  }

  const Component = animation
    ? MoleculeModalWithAnimation
    : MoleculeModalWithoutAnimation

  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>
        By Default MoleculeModal exports the{' '}
        <Code>MoleculeModalWithAnimation</Code> component. It's vertical
        animated on its show/hide action.{' '}
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
          <Label>isOpen</Label>
        </Cell>
        <Cell>
          <RadioButtonGroup value={open} onChange={onChangeHandler}>
            <RadioButton value label="true" checked={open === true} />
            <RadioButton value={false} label="false" checked={open === false} />
          </RadioButtonGroup>
        </Cell>
        <Cell>
          <Label>Animate</Label>
        </Cell>
        <Cell>
          <RadioButtonGroup
            value={animation}
            onChange={onChangeAnimationHandler}
          >
            <RadioButton value label="true" checked={animation === true} />
            <RadioButton
              value={false}
              label="false"
              checked={animation === false}
            />
          </RadioButtonGroup>
        </Cell>
      </Grid>

      <Component
        isOpen={open}
        onClose={onCloseHandler}
        closeOnOutsideClick
        closeOnEscKeyDown
      >
        <Grid cols={1} gutter={[8, 8]}>
          <Cell>
            <Label>Animation</Label>
          </Cell>
          <Cell>
            <RadioButtonGroup
              value={animation}
              onChange={onChangeAnimationHandler}
              fullWidth
            >
              <RadioButton value label="true" checked={animation === true} />
              <RadioButton
                value={false}
                label="false"
                checked={animation === false}
              />
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
