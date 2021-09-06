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
  Input,
  AntDesignIcon
} from '@s-ui/documentation-library'
import AtomIcon from '@s-ui/react-atom-icon'
import {useState} from 'react'
import MoleculeModal, {MoleculeModalSizes} from '../src'

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

  const onChangeHandler = (_, value) => {
    setOpen(value === undefined ? open : value)
  }

  const onCloseButtonHandler = () => {
    setOpen(false)
  }

  const onCloseHandler = (_, value) => {
    setOpen(false)
  }

  const onChangeIconHandler = (_, value) => {}

  return (
    <Article className={className}>
      <H2>Icon</H2>
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
        Sizes can be customized under the <Code>size</Code> prop.
      </Paragraph>
      <Grid cols={1} gutter={[8, 8]}>
        <Cell>
          <RadioButtonGroup
            value={icon}
            onChange={onChangeIconHandler}
            fullWidth
          >
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
      <MoleculeModal
        isOpen={open}
        onClose={onCloseHandler}
        closeOnOutsideClick={true}
        closeOnEscKeyDown={true}
        closeIcon={
          <AtomIcon>
            <AntDesignIcon icon={icon} />
          </AtomIcon>
        }
      >
        <Grid cols={5} gutter={[8, 8]}>
          <Cell span={5}>
            <RadioButtonGroup
              value={icon}
              onChange={onChangeIconHandler}
              fullWidth
            >
              {Object.values(icons).map(iconValue => (
                <RadioButton
                  key={`${iconValue}`}
                  value={iconValue}
                  label={`${iconValue}`}
                  checked={icon === iconValue}
                />
              ))}
            </RadioButtonGroup>
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
