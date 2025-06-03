import useNetwork from 'react-use/lib/useNetwork'

import {Cell, Grid, Small} from '@s-ui/documentation-library'

import {flexCenteredStyle} from './settings.js'

const ConnectionViewer = () => {
  const {effectiveType, online, downlink, rtt} = useNetwork() || {}
  return (
    <Grid cols={8} gutter={[8, 8]}>
      <Cell style={{...flexCenteredStyle, justifyContent: 'flex-end'}}>
        <Small>effectiveType</Small>:
      </Cell>
      <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
        <Small>{`${effectiveType}`}</Small>
      </Cell>
      <Cell style={{...flexCenteredStyle, justifyContent: 'flex-end'}}>
        <Small>online</Small>:
      </Cell>
      <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
        <Small>{`${online}`}</Small>
      </Cell>
      <Cell style={{...flexCenteredStyle, justifyContent: 'flex-end'}}>
        <Small>downlink</Small>:
      </Cell>
      <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
        <Small>{`${downlink}`} kbps.</Small>
      </Cell>
      <Cell style={{...flexCenteredStyle, justifyContent: 'flex-end'}}>
        <Small>rtt</Small>:
      </Cell>
      <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
        <Small>{`${rtt}`} ms.</Small>
      </Cell>
    </Grid>
  )
}

export default ConnectionViewer
