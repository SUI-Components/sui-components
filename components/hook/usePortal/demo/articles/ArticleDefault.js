import {useRef} from 'react'

import PropTypes from 'prop-types'

import {
  Anchor,
  Article,
  Bold,
  Box,
  Button,
  Code,
  H2,
  H3,
  H4,
  ListItem,
  OrderedList,
  Paragraph,
  UnorderedList
} from '@s-ui/documentation-library'

import usePortal from '../../src/index.js'

const ArticleDefault = ({className}) => {
  const {Portal, portalRef} = usePortal()
  const articleRef = useRef()
  return (
    <Article className={className} ref={articleRef}>
      <H2>Default</H2>
      <Paragraph>
        The portal is default appended at the document body. It is default opened unless you define its initial{' '}
        <Code>isOpen</Code> configuration settings to false.
      </Paragraph>
      <Button onClick={() => portalRef.current.scrollIntoView()}>Scroll into view</Button>
      <Portal ref={portalRef} isOpen>
        <Box style={{margin: '0px 16px 16px 16px'}} mode="dark">
          <H4>Default Portal Result </H4>
          <Paragraph>
            This text is portaled at the end of document.body from the{' '}
            <Anchor
              elementType="button"
              onClick={() => articleRef.current.scrollIntoView()}
              style={{
                border: 0,
                padding: 0,
                margin: 0,
                backgroundColor: 'transparent'
              }}
            >
              default demo
            </Anchor>
            !
          </Paragraph>
        </Box>
      </Portal>
      <Paragraph>
        <Code>usePortal</Code> hook admits many different options as an <Bold>object argument</Bold> to configure the
        portal:
      </Paragraph>
      <UnorderedList>
        <ListItem>
          <Code>isOpen</Code> (boolean|true): sets the initial state visible or not.
        </ListItem>
        <ListItem>
          <Code>onOpen</Code> (func): opens the portal
        </ListItem>
        <ListItem>
          <Code>onClose</Code> (func): closes the portal
        </ListItem>
        <ListItem>
          <Code>onToggle</Code> (func): changes between open/close the portal
        </ListItem>
        <ListItem>
          <Code>hasCloseOnOutsideClick</Code> (boolean|false): auto-close the portal on outside click
        </ListItem>
        <ListItem>
          <Code>hasCloseOnEsc</Code> (boolean|false): autoClose the portal on 'Esc' press
        </ListItem>
      </UnorderedList>
      <H3>Result</H3>
      <Paragraph>
        <Code>usePortal</Code> hook result can be destructured using an array or an object.
      </Paragraph>
      <H4>Array</H4>
      <Paragraph>const [Portal, open, close, isOpen, togglePortal, triggerRef, portalRef] = usePortal()</Paragraph>
      <H4>Object</H4>
      <Paragraph>{'const {Portal, open, close, isOpen, togglePortal, triggerRef, portalRef} = usePortal()'}</Paragraph>
      <OrderedList>
        <ListItem>
          <Code>Portal</Code>: The portal component
        </ListItem>
        <ListItem>
          <Code>open</Code>: The action to open the portal
        </ListItem>
        <ListItem>
          <Code>close</Code>: The action to close the portal
        </ListItem>
        <ListItem>
          <Code>isOpen</Code>: The portal current state
        </ListItem>
        <ListItem>
          <Code>togglePortal</Code>: The action to toggle the state
        </ListItem>
        <ListItem>
          <Code>triggerRef</Code>: The trigger element ref
        </ListItem>
        <ListItem>
          <Code>portalRef</Code>: The portal element ref
        </ListItem>
      </OrderedList>
    </Article>
  )
}

ArticleDefault.displayName = 'ArticleDefault'

ArticleDefault.propTypes = {
  className: PropTypes.string
}

export default ArticleDefault
