import {useState, useEffect} from 'react'
import {
  H1,
  Paragraph,
  RadioButtonGroup,
  RadioButton,
  AntDesignIcon,
  ListItem,
  UnorderedList,
  Bold,
  Code,
  Label
} from '@s-ui/documentation-library'

import DefaultArticle from './DefaultArticle'
import ControlledAndUncontrolledArticle from './ControlledAndUncontrolledArticle'
import PlacementArticle from './PlacementArticle'
import DelayArticle from './DelayArticle'
import ColorArticle from './ColorArticle'
import IsArrowedArticle from './IsArrowedArticle'

const baseClass = 'DemoTooltip'
const articleClass = `${baseClass}-article`

const DEVICE_TO_TRIGGER = {
  undefined: '',
  desktop: 'hover',
  mobile: 'legacy',
  tablet: 'legacy'
}

const Demo = () => {
  const [device, setDevice] = useState('undefined')
  const [trigger, setTrigger] = useState(undefined)

  useEffect(() => {
    setTrigger(DEVICE_TO_TRIGGER[device])
  }, [device, setTrigger])

  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <H1>Tooltip</H1>
        <Paragraph>
          A tooltip is a transient view that shows on a content screen when a
          user hovers on a defined html element. It is generally used in big
          screens (tablet or bigger) and might be avoid for mobile devices.
        </Paragraph>
        <Paragraph>General behaviour will be:</Paragraph>
        <UnorderedList>
          <ListItem>
            <Bold>Desktop (Non-touch devices)</Bold>: tooltip will be displayed
            only on <Code>mouseover</Code>.
          </ListItem>
          <ListItem>
            <Bold>Mobile (Touch devices)</Bold>: tooltip will be displayed on{' '}
            <Code>touch</Code> over target element and hidden w/ another{' '}
            <Code>touch</Code> outside of it
          </ListItem>
        </UnorderedList>
        <Label>Device:</Label>
        <RadioButtonGroup
          value={device}
          onChange={(ev, val) => setDevice(val || 'undefined')}
        >
          <RadioButton
            checked={device === 'undefined'}
            value="undefined"
            label="undefined"
          />
          <RadioButton
            checked={device === 'desktop'}
            value="desktop"
            label={<AntDesignIcon icon="AiOutlineDesktop" />}
          />
          <RadioButton
            checked={device === 'mobile'}
            value="mobile"
            label={<AntDesignIcon icon="AiOutlineMobile" />}
          />
          <RadioButton
            checked={device === 'tablet'}
            value="tablet"
            label={<AntDesignIcon icon="AiOutlineTablet" />}
          />
        </RadioButtonGroup>
        <br />
        <br />
        <DefaultArticle className={articleClass} trigger={trigger} />
        <br />
        <ControlledAndUncontrolledArticle
          className={articleClass}
          trigger={trigger}
        />
        <br />
        <ColorArticle className={articleClass} trigger={trigger} />
        <br />
        <PlacementArticle className={articleClass} trigger={trigger} />
        <br />
        <DelayArticle className={articleClass} trigger={trigger} />
        <br />
        <IsArrowedArticle className={articleClass} trigger={trigger} />
        <br />
      </div>
    </div>
  )
}

export default Demo
