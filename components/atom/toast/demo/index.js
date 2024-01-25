import {useState} from 'react'

import {atomToastAutoCloseTimes, atomToastPositions} from 'components/atom/toast/src/index.js'

import {
  AntDesignIcon,
  Article,
  Box,
  Button,
  Cell,
  Code,
  Grid,
  H1,
  H2,
  H3,
  Input,
  Label,
  Paragraph,
  RadioButton,
  RadioButtonGroup
} from '@s-ui/documentation-library'
import AtomIcon from '@s-ui/react-atom-icon'

import ToastDemo from './ToastDemo.js'

import './index.scss'

const Demo = () => {
  const [toasts, setToasts] = useState([])
  const pushToast = props => {
    const newToasts = [...toasts, {id: performance.now(), ...props}]
    setToasts(newToasts)
    return newToasts
  }
  const popToast = id => {
    if (!show) {
      const newToasts = toasts.filter(toast => toast.id !== id)
      setToasts(newToasts)
      return newToasts
    }
    return toasts
  }

  const [iconClose, setIconClose] = useState()
  const [show, setShow] = useState(true)
  const [autoClose, setAutoClose] = useState(true)
  const [autoCloseTime, setAutoCloseTime] = useState(atomToastAutoCloseTimes.short)
  const [globalClose, setGlobalClose] = useState()
  const [effect, setEffect] = useState(true)

  return (
    <div className="sui-StudioPreview">
      <H1>Toast</H1>
      <Paragraph>
        <Code>AtomToast</Code> is a component that renders an empty floating box.
      </Paragraph>
      <Article>
        <H2>Default</H2>
        <H3>Position</H3>
        <Paragraph>
          The <Code>position</Code> (enum) prop can configure the position where the toast is displayed.
        </Paragraph>
        <Box outline>
          <Grid cols={3} gutter={[8, 8]}>
            {[
              {
                position: atomToastPositions.topLeft,
                style: {justifyContent: 'flex-start', display: 'flex'}
              },
              {
                position: atomToastPositions.top,
                style: {justifyContent: 'center', display: 'flex'}
              },
              {
                position: atomToastPositions.topRight,
                style: {justifyContent: 'flex-end', display: 'flex'}
              },
              {
                span: 3,
                style: {justifyContent: 'center', display: 'flex'}
              },
              {
                position: atomToastPositions.bottomLeft,
                style: {justifyContent: 'flex-start', display: 'flex'}
              },
              {
                position: atomToastPositions.bottom,
                style: {justifyContent: 'center', display: 'flex'}
              },
              {
                position: atomToastPositions.bottomRight,
                style: {justifyContent: 'flex-end', display: 'flex'}
              }
            ].map(({position, span, style}, index) => (
              <Cell key={position || index} span={span}>
                {position ? (
                  <div style={style}>
                    <Button onClick={() => pushToast({position})}>{position}</Button>
                  </div>
                ) : (
                  <Label style={style}>Body</Label>
                )}
              </Cell>
            ))}
          </Grid>
        </Box>
        {toasts.map(({id, ...toastProps}) => (
          <ToastDemo
            key={id}
            {...toastProps}
            autoClose={Boolean(autoClose)}
            autoCloseTime={autoCloseTime}
            effect={effect}
            iconClose={
              iconClose && (
                <AtomIcon>
                  <AntDesignIcon icon={iconClose} style={{color: 'currentColor'}} />
                </AtomIcon>
              )
            }
            position={toastProps.position}
            onClose={() => {
              console.log(popToast(id)) // eslint-disable-line no-console
            }}
            show={show}
            globalClose={globalClose}
          />
        ))}
        <Grid cols={2} gutter={[8, 8]}>
          <Cell span={2}>
            <H3>AutoClose & AutoCloseTime</H3>
            <Paragraph>
              The <Code>autoClose</Code> (boolean) prop can set/unset a timeout to close the element with{' '}
              <Code>autoCloseTime</Code> (number in ms) value
            </Paragraph>
          </Cell>
          <Cell>
            <Label>autoClose</Label>
          </Cell>
          <Cell>
            <Label>autoCloseTime</Label>
          </Cell>
          <Cell>
            <RadioButton
              label={`autoClose ${autoClose ? 'enabled' : 'disabled'}`}
              onClick={() => setAutoClose(!autoClose)}
              checked={autoClose}
            />
          </Cell>
          <Cell>
            <Grid cols={1} gutter={[8, 0]}>
              <Cell>
                <RadioButtonGroup
                  onChange={(event, value) => {
                    setAutoCloseTime(value === undefined ? autoCloseTime : value)
                  }}
                >
                  {Object.entries(atomToastAutoCloseTimes).map(
                    ([atomToastAutoCloseTimeKey, atomToastAutoCloseTimeValue]) => (
                      <RadioButton
                        key={`${atomToastAutoCloseTimeKey}`}
                        checked={autoCloseTime === atomToastAutoCloseTimeValue}
                        label={atomToastAutoCloseTimeKey}
                        value={atomToastAutoCloseTimeValue}
                      />
                    )
                  )}
                </RadioButtonGroup>
              </Cell>
              <Cell>
                <Input value={autoCloseTime} onChange={event => setAutoCloseTime(event.target.value)} tyype="number" />
              </Cell>
            </Grid>
          </Cell>
          <Cell span={2}>
            <Grid cols={2} gutter={[8, 0]}>
              <Cell>
                <H3>Effect</H3>
                <Paragraph>
                  The <Code>effect</Code> (boolean) prop enables/disables the displaying transition.
                </Paragraph>
                <RadioButton
                  label={`effect ${effect ? 'enabled' : 'disabled'}`}
                  onClick={() => setEffect(!effect)}
                  checked={effect}
                />
              </Cell>
              <Cell>
                <H3>IconClose</H3>
                <Paragraph>
                  The <Code>iconClose</Code> (node) prop gives the posibility to customize the closing button.
                </Paragraph>
                <RadioButtonGroup
                  onChange={(event, value) => {
                    setIconClose(value)
                  }}
                >
                  {[undefined, 'AiOutlineClose', 'AiOutlinePoweroff', 'AiFillCloseCircle'].map((iconKey, index) => (
                    <RadioButton
                      key={`${iconKey}`}
                      checked={iconClose === iconKey}
                      label={
                        iconKey ? (
                          <AtomIcon>
                            <AntDesignIcon icon={iconKey} style={{color: 'currentColor'}} />
                          </AtomIcon>
                        ) : (
                          `${iconKey}`
                        )
                      }
                      value={iconKey}
                    />
                  ))}
                </RadioButtonGroup>
              </Cell>
            </Grid>
          </Cell>
          <Cell span={2}>
            <Grid cols={2} gutter={[8, 0]}>
              <Cell>
                <H3>Show/Hide</H3>
                <Paragraph>
                  under the <Code>show</Code> (boolean) prop the toast can be show/hidden.
                </Paragraph>
                <RadioButton label={`show ${show ? 'true' : 'false'}`} onClick={() => setShow(!show)} checked={show} />
              </Cell>
              <Cell>
                <H3>GlobalClose</H3>
                <Paragraph>
                  The <Code>globalClose</Code> (boolean) prop handles all the outside click events to fire the closing
                  toaster event
                </Paragraph>
                <RadioButton
                  label={`globalClose ${globalClose ? 'enabled' : 'disabled'}`}
                  onClick={() => setGlobalClose(!globalClose)}
                  checked={globalClose}
                />
              </Cell>
            </Grid>
          </Cell>
        </Grid>
      </Article>
    </div>
  )
}

export default Demo
