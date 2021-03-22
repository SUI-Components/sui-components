import {useState} from 'react'
import PropTypes from 'prop-types'
import {
  Article,
  H2,
  Paragraph,
  Box,
  Code,
  Bold,
  UnorderedList,
  ListItem,
  Grid,
  Cell,
  Label,
  Separator,
  Button,
  Text
} from '@s-ui/documentation-library'
import AtomPopover, {
  atomPopoverTriggers
} from '../../../../components/atom/popover/src'
import {atomPopoverPositions} from '../../../../components/atom/popover'

const StatusDisplayer = ({value, values = []}) => (
  <Box fullWidth>
    <Grid cols={values.length} gutter={[8, 8]} style={{width: '100%'}}>
      {values.map((v, key) => (
        <Cell key={key} style={{display: 'flex', justifyContent: 'center'}}>
          <Text
            className={`blink${
              value === v.value ? ' is-blinking' : ' is-unblinking'
            }`}
            fontWeight="semi-bold"
          >
            {v.label}
          </Text>
        </Cell>
      ))}
    </Grid>
  </Box>
)

StatusDisplayer.propTypes = {
  value: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.string)
}

const BehaviorDisplayer = ({
  trigger = '',
  content,
  onFocus = () => null,
  onBlur = () => null,
  onMouseEnter = () => null,
  onMouseLeave = () => null,
  onClick = () => null,
  isVisible
}) => {
  const [hover, setHover] = useState('')
  const [focus, setFocus] = useState('')
  const [visible, setVisible] = useState('')
  const timeout = (callbackFn, args, fnHandler = () => null) => () => {
    callbackFn(...args)
    setTimeout(() => {
      callbackFn('')
      fnHandler()
    }, 50)
  }
  const onHandle = (log, callbackFn) => () => callbackFn(...log)
  return (
    <Box style={{display: 'flex', justifyContent: 'center', padding: 0}}>
      <Grid cols={1} gutter={[0, 8]} style={{width: '100%'}}>
        <Cell>
          <Separator>{trigger}</Separator>
        </Cell>
        <Cell
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            justifyItems: 'center'
          }}
        >
          <AtomPopover
            isVisible={isVisible}
            content={content}
            trigger={trigger}
            onOpen={onHandle(
              [trigger.toString().toUpperCase(), 'open'],
              timeout(setVisible, ['in'])
            )}
            onClose={onHandle(
              [trigger.toString().toUpperCase(), 'close'],
              timeout(setVisible, ['out'])
            )}
            placement={atomPopoverPositions.TOP}
          >
            <Button
              onFocus={onHandle(
                [trigger.toString().toUpperCase(), 'focus'],
                timeout(setFocus, ['in'], onFocus)
              )}
              onBlur={onHandle(
                [trigger.toString().toUpperCase(), 'blur'],
                timeout(setFocus, ['out'], onBlur)
              )}
              onMouseEnter={onHandle(
                [trigger.toString().toUpperCase(), 'hover in'],
                timeout(setHover, ['in'], onMouseEnter)
              )}
              onMouseLeave={onHandle(
                [trigger.toString().toUpperCase(), 'hover out'],
                timeout(setHover, ['out'], onMouseLeave)
              )}
              onClick={onClick}
              outline
              style={{display: 'inline-flex', marginTop: 20}}
            >
              Target
            </Button>
          </AtomPopover>
        </Cell>
        <Cell>
          <StatusDisplayer
            value={visible}
            values={[
              {value: 'in', label: 'open'},
              {value: 'out', label: 'close'}
            ]}
          />
        </Cell>
        <Cell>
          <StatusDisplayer
            value={hover}
            values={[
              {value: 'in', label: 'hover in'},
              {value: 'out', label: 'hover out'}
            ]}
          />
        </Cell>
        <Cell>
          <StatusDisplayer
            value={focus}
            values={[
              {value: 'in', label: 'focus'},
              {value: 'out', label: 'blur'}
            ]}
          />
        </Cell>
      </Grid>
    </Box>
  )
}

BehaviorDisplayer.propTypes = {
  trigger: PropTypes.string,
  content: PropTypes.node,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onClick: PropTypes.func,
  isVisible: PropTypes.bool
}

const ArticleBehavior = ({className, content: Content}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Article className={className}>
      <H2>Behavior</H2>
      <Paragraph>
        The behavior of the tooltip can change using the <Code>trigger</Code>{' '}
        prop. This is "<Bold>legacy</Bold>" by default but it can be changed ad
        combined as an array of values. Popover is opened when the wrapped
        element is clicked and trigger will define the closing behavior.
      </Paragraph>
      <Paragraph>The possible values are:</Paragraph>
      <UnorderedList>
        <ListItem>
          <Label>legacy</Label>: (default) Legacy is a reactstrap special
          trigger value (outside of bootstrap's spec/standard). Before
          reactstrap correctly supported click and focus, it had a hybrid which
          was very useful and has been brought back as trigger="legacy". One
          advantage of the legacy trigger is that it allows the popover text to
          be selected while also closing when clicking outside the triggering
          element and popover itself.
        </ListItem>
        <ListItem>
          <Label>click</Label>: Clicking on the triggering element makes this
          popover appear. Clicking on it again will make it disappear. You can
          select this text, but clicking away (somewhere other than the
          triggering element) will not dismiss this popover.
        </ListItem>
        <ListItem>
          <Label>focus</Label>: Focusing on the trigging element makes this
          popover appear. Blurring (clicking away) makes it disappear. You
          cannot select this text as the popover will disappear when you try.
        </ListItem>
        <ListItem>
          <Label>hover</Label>: Hovering out the wrapped element will close the
          AtomPopover.
        </ListItem>
        <ListItem>
          <Label>manual</Label>: User must define the behaviors that open &
          close the popover manually (controlled-component).
        </ListItem>
      </UnorderedList>
      <Paragraph>
        All this possible trigger values are provided by{' '}
        <Code>atomPopoverTriggers</Code> enum.
      </Paragraph>
      <Grid cols={5} gutter={[8, 0]}>
        <Cell>
          <BehaviorDisplayer
            content={<Content />}
            trigger={atomPopoverTriggers.LEGACY}
          />
        </Cell>
        <Cell>
          <BehaviorDisplayer
            content={<Content />}
            trigger={atomPopoverTriggers.CLICK}
          />
        </Cell>
        <Cell>
          <BehaviorDisplayer
            content={<Content />}
            trigger={atomPopoverTriggers.FOCUS}
          />
        </Cell>
        <Cell>
          <BehaviorDisplayer
            content={<Content />}
            trigger={atomPopoverTriggers.HOVER}
          />
        </Cell>
        <Cell>
          <BehaviorDisplayer
            isVisible={isOpen}
            content={<Content />}
            trigger={atomPopoverTriggers.MANUAL}
            onClick={() => setIsOpen(!isOpen)}
          />
        </Cell>
      </Grid>
      <Paragraph>
        The element wrapped must be focusable in some cases so it's necessary to
        define an available element. Today's browsers define focus() on
        HTMLElement, but an element won't actually take focus unless it's one
        of:
      </Paragraph>
      <UnorderedList>
        <ListItem>HTMLAnchorElement/HTMLAreaElement with an href.</ListItem>
        <ListItem>
          HTMLInputElement/HTMLSelectElement/HTMLTextAreaElement/HTMLButtonElement
          but not with disabled (IE actually gives you an error if you try), and
          file uploads have unusual behaviour for security reasons.
        </ListItem>
        <ListItem>
          HTMLIFrameElement (though focusing it doesn't do anything useful).
          Other embedding elements also, maybe, I haven't tested them all.
        </ListItem>
        <ListItem>Any element with a tabindex.</ListItem>
      </UnorderedList>
    </Article>
  )
}

ArticleBehavior.propTypes = {
  className: PropTypes.string,
  content: PropTypes.Element
}

export default ArticleBehavior
