import {useRef, useState} from 'react'

import PropTypes from 'prop-types'

import {
  Article,
  Box,
  Cell,
  Code,
  Grid,
  H2,
  H3,
  ListItem,
  Paragraph,
  RadioButton,
  UnorderedList
} from '@s-ui/documentation-library'

import usePortal from '../../src/index.js'

const ArticleCloseOnEvent = ({className}) => {
  // outside click
  const targetedOutsideClickRef = useRef()
  const [isOpenTargetedOutsideClick, setIsOpenTargetedOutsideClick] =
    useState(false)
  const {Portal: PortalOutsideClick} = usePortal({
    hasCloseOnOutsideClick: true,
    target: targetedOutsideClickRef.current,
    isOpen: isOpenTargetedOutsideClick,
    onClose: () => {
      setIsOpenTargetedOutsideClick(!isOpenTargetedOutsideClick)
    }
  })

  // esc press
  const targetedEscPressRef = useRef()
  const [isOpenCloseOnEsc, setIsOpenCloseOnEsc] = useState(false)
  const {Portal: PortalEscPress} = usePortal({
    hasCloseOnEsc: true,
    target: targetedEscPressRef.current,
    isOpen: isOpenCloseOnEsc,
    onClose: () => {
      setIsOpenCloseOnEsc(!isOpenCloseOnEsc)
    }
  })
  return (
    <Article className={className}>
      <H2>Configured event listeners</H2>
      <Paragraph>
        <Code>usePortal</Code> hook has 2 configuration properties for event
        triggers:
      </Paragraph>
      <UnorderedList>
        <ListItem>
          <Code>hasCloseOnOutsideClick</Code> (bool|false)
        </ListItem>
        <ListItem>
          <Code>hasCloseOnEsc</Code> (bool|false)
        </ListItem>
      </UnorderedList>
      <H3>hasCloseOnOutsideClick</H3>
      <Paragraph>
        If the hook is configured with this feature enabled (true), the portal
        will close on every single clicking event out of its own bounding area.
      </Paragraph>
      <Grid cols={1} gutter={[8, 8]}>
        <Cell>
          <RadioButton
            label="open"
            checked={isOpenTargetedOutsideClick}
            onClick={() =>
              setIsOpenTargetedOutsideClick(!isOpenTargetedOutsideClick)
            }
          />
        </Cell>
        <Cell>
          <div className="target" ref={targetedOutsideClickRef} />
        </Cell>
      </Grid>
      <PortalOutsideClick isOpen={isOpenTargetedOutsideClick}>
        <Box mode="dark">
          <Paragraph>This text is closed when clicking outside!</Paragraph>
        </Box>
      </PortalOutsideClick>
      <H3>hasCloseOnEsc</H3>
      <Paragraph>
        If the hook is configured with this feature enabled (true), the portal
        will close on every single 'Esc' keypress event.
      </Paragraph>
      <Grid cols={1} gutter={[8, 8]}>
        <Cell>
          <RadioButton
            label="open"
            checked={isOpenCloseOnEsc}
            onClick={() => setIsOpenCloseOnEsc(!isOpenCloseOnEsc)}
          />
        </Cell>
        <Cell>
          <div className="target" ref={targetedEscPressRef} />
        </Cell>
      </Grid>
      <PortalEscPress isOpen={isOpenCloseOnEsc}>
        <Box mode="dark">
          <Paragraph>This text is closed when pressing Esc key!</Paragraph>
        </Box>
      </PortalEscPress>
      <Paragraph>Portals can use both behaviors enabled also.</Paragraph>
    </Article>
  )
}

ArticleCloseOnEvent.displayName = 'ArticleCloseOnEvent'

ArticleCloseOnEvent.propTypes = {
  className: PropTypes.string
}

export default ArticleCloseOnEvent
