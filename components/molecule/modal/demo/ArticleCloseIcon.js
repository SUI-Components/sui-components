import {useState} from 'react'

import PropTypes from 'prop-types'

import {
  AntDesignIcon,
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
import AtomIcon from '@s-ui/react-atom-icon'

import MoleculeModal from '../src/index.js'

const icons = {
  AiOutlineClose: 'AiOutlineClose',
  AiOutlineLine: 'AiOutlineLine',
  AiOutlineApple: 'AiOutlineApple',
  AiFillStar: 'AiFillStar',
  AiFillGolden: 'AiFillGolden'
}

const ArticleCloseIcon = ({className}) => {
  const [open, setOpen] = useState(false)
  const [icon, setIcon] = useState(icons.AiOutlineClose)
  const [floatingIconClose, setFloatingIconClose] = useState(false)

  const onChangeHandler = () => {
    setOpen(!open)
  }

  const onChangeFloatingIconClose = (_, value) => {
    setFloatingIconClose(value === undefined ? open : value)
  }

  const onCloseButtonHandler = () => {
    setOpen(false)
  }

  const onCloseHandler = (_, value) => {
    setOpen(false)
  }

  const onChangeIconHandler = (_, value) => {
    if (value !== undefined) {
      setIcon(value)
    }
  }

  return (
    <Article className={className}>
      <H2>Icon</H2>
      <Button onClick={onChangeHandler}>Open modal</Button>
      <Paragraph>
        The closing icon can be customized using the <Code>iconClose</Code> (node) prop.
      </Paragraph>
      <Grid cols={1} gutter={[8, 8]}>
        <Cell>
          <RadioButtonGroup value={icon} onChange={onChangeIconHandler} fullWidth>
            {Object.values(icons).map(iconValue => (
              <RadioButton
                key={`${iconValue}`}
                value={iconValue}
                label={
                  <AtomIcon>
                    <AntDesignIcon icon={iconValue} />
                  </AtomIcon>
                }
                checked={icon === iconValue}
              />
            ))}
          </RadioButtonGroup>
        </Cell>
      </Grid>
      <Paragraph>
        The closing icon can be floating positioned also using the <Code>floatingIconClose</Code> boolean prop.
      </Paragraph>
      <Grid cols={1} gutter={[8, 8]}>
        <Cell>
          <Label>floatingIconClose</Label>
        </Cell>
        <Cell>
          <RadioButtonGroup value={open} onChange={onChangeFloatingIconClose}>
            <RadioButton value label="true" checked={floatingIconClose === true} />
            <RadioButton value={false} label="false" checked={floatingIconClose === false} />
          </RadioButtonGroup>
        </Cell>
      </Grid>
      <MoleculeModal
        isOpen={open}
        onClose={onCloseHandler}
        closeOnOutsideClick
        closeOnEscKeyDown
        iconClose={
          <AtomIcon>
            <AntDesignIcon icon={icon} />
          </AtomIcon>
        }
        floatingIconClose={floatingIconClose}
      >
        <Grid cols={5} gutter={[8, 8]}>
          <Cell span={5}>
            <RadioButtonGroup value={icon} onChange={onChangeIconHandler} fullWidth>
              {Object.values(icons).map(iconValue => (
                <RadioButton
                  key={`${iconValue}`}
                  value={iconValue}
                  label={
                    <AtomIcon>
                      <AntDesignIcon icon={iconValue} />
                    </AtomIcon>
                  }
                  checked={icon === iconValue}
                />
              ))}
            </RadioButtonGroup>
          </Cell>
          <Cell span={5}>
            <RadioButton
              value
              label={`floatingIconClose ${floatingIconClose}`}
              onClick={(_, value) => {
                setFloatingIconClose(value === true)
              }}
              checked={floatingIconClose === true}
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

ArticleCloseIcon.propTypes = {
  className: PropTypes.string
}

export default ArticleCloseIcon
