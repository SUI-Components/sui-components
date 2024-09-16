import {useState} from 'react'

import AtomVideoPlayer, {AUTOPLAY} from 'components/atom/videoPlayer/src/index.js'
import PropTypes from 'prop-types'

import {Cell, Grid, H2, Input, RadioButton, RadioButtonGroup} from '@s-ui/documentation-library'

const DemoPlayer = ({src}) => {
  const [autoPlay, setAutoPlay] = useState(false)
  const [controls, setControls] = useState(true)
  const [muted, setMuted] = useState(false)
  const [loop, setLoop] = useState(false)
  const [timeLimit, setTimeLimit] = useState(0)
  const [timeOffset, setTimeOffset] = useState(0)
  return (
    <>
      <H2>Autoplay</H2>
      <RadioButtonGroup value={autoPlay} onChange={(event, value) => setAutoPlay(value)}>
        <RadioButton value={AUTOPLAY.TRUE} label={'Enabled'} />
        <RadioButton value={AUTOPLAY.FALSE} label={'Disabled'} />
        <RadioButton value={AUTOPLAY.ON_VIEWPORT} label={'On viewport intersection'} />
      </RadioButtonGroup>
      <H2>Controls</H2>
      <RadioButtonGroup value={controls} onChange={(event, value) => setControls(value)}>
        <RadioButton value={true} label={'Enabled'} />
        <RadioButton value={false} label={'Disabled'} />
      </RadioButtonGroup>
      <H2>Muted</H2>
      <RadioButtonGroup value={muted} onChange={(event, value) => setMuted(value)}>
        <RadioButton value={true} label={'Enabled'} />
        <RadioButton value={false} label={'Disabled'} />
      </RadioButtonGroup>
      <H2>Loop</H2>
      <RadioButtonGroup value={loop} onChange={(event, value) => setLoop(value)}>
        <RadioButton value={true} label={'Enabled'} />
        <RadioButton value={false} label={'Disabled'} />
      </RadioButtonGroup>

      <H2>Time offset / limit</H2>
      <Grid cols={2} gutter={[8, 8]}>
        <Cell span={1}>
          <Input fullWidth type="number" onChange={event => setTimeOffset(event.target.value)} placeholder="Offset" />
        </Cell>
        <Cell span={1}>
          <Input fullWidth type="number" onChange={event => setTimeLimit(event.target.value)} placeholder="Limit" />
        </Cell>
      </Grid>

      <div className="DemoVideoPlayerComponent">
        <AtomVideoPlayer
          autoPlay={autoPlay}
          controls={controls}
          muted={muted}
          loop={loop}
          src={src}
          timeLimit={timeLimit > 0 ? timeLimit : undefined}
          timeOffset={timeOffset > 0 ? timeOffset : undefined}
          key={`${src}${autoPlay}${muted}${controls}${timeLimit}${timeOffset}`}
        />
      </div>
    </>
  )
}

DemoPlayer.propTypes = {
  src: PropTypes.string.isRequired
}

export default DemoPlayer
