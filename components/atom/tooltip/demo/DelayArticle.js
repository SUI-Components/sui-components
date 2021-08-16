import {useState} from 'react'
import {
  H2,
  Paragraph,
  Code,
  Article,
  Grid,
  Cell,
  Label,
  Input
} from '@s-ui/documentation-library'
import PropTypes from 'prop-types'
import AtomTooltip, {AtomTooltipTriggers} from '../src'

const DelayArticle = ({className, trigger}) => {
  const [all, setAll] = useState(0)
  const [show, setShow] = useState(0)
  const [hide, setHide] = useState(0)
  const [delay, setDelay] = useState(all)
  return (
    <Article className={className}>
      <H2>Delay</H2>
      <Paragraph>
        AtomTooltip <Code>delay</Code> prop (in ms) for opening and closing the
        tooltip
      </Paragraph>
      <Grid cols={3} gutter={[8, 8]}>
        <Cell>
          <Label>all</Label>{' '}
          <Input
            type="number"
            min={0}
            max={5}
            step={0.1}
            value={all / 1000}
            onChange={event => {
              const value = parseFloat(event.target.value, 10) * 1000
              setAll(value)
              setDelay(value)
            }}
          />{' '}
          <Label>s</Label>
        </Cell>
        <Cell>
          <Label>show</Label>{' '}
          <Input
            type="number"
            min={0}
            max={5}
            step={0.1}
            value={show / 1000}
            onChange={event => {
              const value = parseFloat(event.target.value, 10) * 1000
              setShow(value)
              setDelay({show: value, hide})
            }}
          />{' '}
          <Label>s</Label>
        </Cell>
        <Cell>
          <Label>hide</Label>{' '}
          <Input
            type="number"
            min={0}
            max={5}
            step={0.1}
            value={hide / 1000}
            onChange={event => {
              const value = parseFloat(event.target.value, 10) * 1000
              setHide(value)
              setDelay({hide: value, show})
            }}
          />{' '}
          <Label>s</Label>
        </Cell>
      </Grid>
      <Paragraph>
        <AtomTooltip delay={delay} content="Tooltip content" trigger={trigger}>
          Simple text delayed with tooltip
        </AtomTooltip>
      </Paragraph>
      <Label>delay</Label>: {JSON.stringify(delay)}ms
    </Article>
  )
}

DelayArticle.propTypes = {
  className: PropTypes.string,
  trigger: PropTypes.oneOf(Object.values(AtomTooltipTriggers))
}

export default DelayArticle
