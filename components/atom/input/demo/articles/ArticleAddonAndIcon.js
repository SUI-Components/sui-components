import {useState} from 'react'

import PropTypes from 'prop-types'

import {
  AntDesignIcon,
  Article,
  Cell,
  Code,
  Grid,
  H2,
  Input,
  ListItem,
  Paragraph,
  RadioButton,
  RadioButtonGroup,
  UnorderedList
} from '@s-ui/documentation-library'
import AtomLabel from '@s-ui/react-atom-label/lib'
import PrimitiveVisuallyHidden from '@s-ui/react-primitive-visually-hidden'

import AtomInput from '../../src/index.js'

const ArticleAddonAndIcon = ({className}) => {
  const [state, setState] = useState({})
  const {icon, iconValue, rightAddon, leftAddon} = state
  const setStatus = (newState = {}) => setState({...state, ...newState})
  const valueIcon = iconValue ? <AntDesignIcon icon={iconValue} style={{color: 'currentColor'}} /> : null
  return (
    <Article className={className}>
      <H2>Addon and Icon</H2>
      <Paragraph>Input offers the possibility to add icons and contents on its left or right positions</Paragraph>
      <UnorderedList>
        <ListItem>
          <Code>leftAddon</Code> and <Code>rightAddon</Code>: use it as a label for the input field
        </ListItem>
        <ListItem>
          <Code>leftIcon</Code> and <Code>rightIcon</Code>: use it as a valid symbol for the field
        </ListItem>
      </UnorderedList>
      <Paragraph>This field props can be combined all together.</Paragraph>
      <Grid cols={2} gutter={[8, 8]}>
        <Cell span={2}>
          <PrimitiveVisuallyHidden>
            <AtomLabel htmlFor="input-icons-and-addons" text="icons and addons" />
          </PrimitiveVisuallyHidden>
          <AtomInput
            id="input-icons-and-addons"
            placeholder="icons and addons"
            leftIcon={icon === 'leftIcon' ? valueIcon : undefined}
            rightIcon={icon === 'rightIcon' ? valueIcon : undefined}
            leftAddon={leftAddon}
            rightAddon={rightAddon}
          />
        </Cell>
        <Cell>
          <RadioButtonGroup
            onChange={(event, value) => {
              setStatus({icon: value})
            }}
            fullWidth
          >
            <RadioButton value="leftIcon" label="leftIcon" />
            <RadioButton value="rightIcon" label="rightIcon" />
          </RadioButtonGroup>
        </Cell>
        <Cell>
          <RadioButtonGroup
            onChange={(event, value) =>
              setStatus({
                iconValue: value
              })
            }
            fullWidth
          >
            <RadioButton
              value="AiFillFire"
              aria-label="fire"
              label={<AntDesignIcon icon="AiFillFire" style={{color: 'currentColor'}} />}
            />
            <RadioButton
              value="AiOutlineSketch"
              aria-label="sketch"
              label={<AntDesignIcon icon="AiOutlineSketch" style={{color: 'currentColor'}} />}
            />
            <RadioButton
              value="AiOutlineInfoCircle"
              aria-label="info"
              label={<AntDesignIcon icon="AiOutlineInfoCircle" style={{color: 'currentColor'}} />}
            />
            <RadioButton
              value="AiTwotoneSkin"
              aria-label="skin"
              label={<AntDesignIcon icon="AiTwotoneSkin" style={{color: 'currentColor'}} />}
            />
            <RadioButton
              value="AiOutlineExclamationCircle"
              aria-label="exclamation"
              label={<AntDesignIcon icon="AiOutlineExclamationCircle" style={{color: 'currentColor'}} />}
            />
            <RadioButton
              value="AiOutlineCar"
              aria-label="car"
              label={<AntDesignIcon icon="AiOutlineCar" style={{color: 'currentColor'}} />}
            />
            <RadioButton
              value="AiOutlineAppstore"
              aria-label="appstore"
              label={<AntDesignIcon icon="AiOutlineAppstore" style={{color: 'currentColor'}} />}
            />
            <RadioButton
              value="AiFillTrophy"
              aria-label="trophy"
              label={<AntDesignIcon icon="AiFillTrophy" style={{color: 'currentColor'}} />}
            />
          </RadioButtonGroup>
        </Cell>
        <Cell>
          <Input
            fullWidth
            placeholder="leftAddon text"
            onChange={event => setStatus({leftAddon: event.target.value})}
          />
        </Cell>
        <Cell>
          <Input
            fullWidth
            placeholder="rightAddon text"
            onChange={event => setStatus({rightAddon: event.target.value})}
          />
        </Cell>
      </Grid>
      <H2>Interactive Icons</H2>
      <Paragraph>
        Icons can be made interactive by adding click handlers. This is useful for actions like search, clear input, or
        triggering additional functionality.
      </Paragraph>

      <Grid cols={1} gutter={[8, 8]}>
        <Paragraph>Left Icon Actions</Paragraph>
        <Cell>
          <PrimitiveVisuallyHidden>
            <AtomLabel htmlFor="input-info-action" text="Information input with help action" />
          </PrimitiveVisuallyHidden>
          <AtomInput
            id="input-info-action"
            placeholder="Enter your email address"
            leftIcon={<AntDesignIcon icon="AiOutlineInfoCircle" style={{color: '#1890ff'}} />}
            ariaLabelLeftIcon="Show help information"
            onClickLeftIcon={() => alert('Email format: example@domain.com')}
          />
        </Cell>

        <Cell>
          <Paragraph>Right Icon Actions</Paragraph>
          <PrimitiveVisuallyHidden>
            <AtomLabel htmlFor="input-clear-action" text="Input with clear action" />
          </PrimitiveVisuallyHidden>
          <AtomInput
            id="input-clear-action"
            placeholder="Type something to clear..."
            rightIcon={<AntDesignIcon icon="AiOutlineClose" />}
            ariaLabelRightIcon="Clear input"
            onClickRightIcon={() => {
              document.getElementById('input-clear-action').value = ''
            }}
          />
        </Cell>
      </Grid>

      <H2>Button Customization</H2>
      <Paragraph>
        Use <Code>leftIconButtonProps</Code> and <Code>rightIconButtonProps</Code> to customize the appearance and
        behavior of icon buttons.
      </Paragraph>

      <Grid cols={1} gutter={[8, 8]}>
        <Cell>
          <Paragraph>
            <strong>Custom Button Designs</strong>
          </Paragraph>
          <PrimitiveVisuallyHidden>
            <AtomLabel htmlFor="input-solid-design" text="Search input with solid design button" />
          </PrimitiveVisuallyHidden>
          <AtomInput
            id="input-solid-design"
            placeholder="Search with solid design..."
            leftIcon={<AntDesignIcon icon="AiOutlineSearch" />}
            ariaLabelLeftIcon="Search"
            onClickLeftIcon={() => alert('Searching...')}
            leftIconButtonProps={{
              style: {backgroundColor: '#1890ff', color: '#fff'}
            }}
          />
        </Cell>

        <Cell>
          <PrimitiveVisuallyHidden>
            <AtomLabel htmlFor="input-outline-design" text="Filter input with outline design button" />
          </PrimitiveVisuallyHidden>
          <AtomInput
            id="input-outline-design"
            placeholder="Filter with outline design..."
            rightIcon={<AntDesignIcon icon="AiOutlineFilter" />}
            ariaLabelRightIcon="Apply filters"
            onClickRightIcon={() => alert('Applying filters...')}
            rightIconButtonProps={{
              style: {backgroundColor: 'red', color: '#fff'}
            }}
          />
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleAddonAndIcon.propTypes = {
  className: PropTypes.node
}

export default ArticleAddonAndIcon
