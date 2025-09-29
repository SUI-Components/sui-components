import {type ChangeEvent, type FormEvent, useState} from 'react'

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

import {type AutoCloseTime, type Position, AUTO_CLOSE_TIMES} from '../src/config.ts'
import {type AtomToastProps, atomToastAutoCloseTimes} from '../src/index.tsx'
import ToastDemo from './ToastDemo.tsx'

import './index.scss'

interface AtomToastPropsWithId extends AtomToastProps {
  id: number
}

const Demo = () => {
  const [toasts, setToasts] = useState<AtomToastPropsWithId[]>([])
  const pushToast = (props: AtomToastProps) => {
    const newToasts = [...toasts, {id: performance.now(), ...props}]
    setToasts(newToasts)
    return newToasts
  }
  const popToast = (id: number) => {
    if (!show) {
      const newToasts = toasts.filter(toast => toast.id !== id)
      setToasts(newToasts)
      return newToasts
    }
    return toasts
  }

  const [iconClose, setIconClose] = useState<React.ReactNode>()
  const [show, setShow] = useState(true)
  const [autoClose, setAutoClose] = useState(true)
  const [autoCloseTime, setAutoCloseTime] = useState<AutoCloseTime>(AUTO_CLOSE_TIMES.short)
  const [globalClose, setGlobalClose] = useState(false)
  const [effect, setEffect] = useState(true)

  const gridOptions: Array<{
    position?: Position
    span?: number
    style: React.CSSProperties
  }> = [
    {
      position: 'top-left',
      style: {justifyContent: 'flex-start', display: 'flex'}
    },
    {
      position: 'top',
      style: {justifyContent: 'center', display: 'flex'}
    },
    {
      position: 'top-right',
      style: {justifyContent: 'flex-end', display: 'flex'}
    },
    {
      span: 3,
      style: {justifyContent: 'center', display: 'flex'}
    },
    {
      position: 'bottom-left',
      style: {justifyContent: 'flex-start', display: 'flex'}
    },
    {
      position: 'bottom',
      style: {justifyContent: 'center', display: 'flex'}
    },
    {
      position: 'bottom-right',
      style: {justifyContent: 'flex-end', display: 'flex'}
    }
  ]

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
            {gridOptions.map(({position, span, style}, index) => (
              <Cell key={position !== undefined ? position : index} span={span}>
                {position !== undefined ? (
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
              iconClose !== undefined && (
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
                  onChange={(_event: FormEvent, value: AutoCloseTime) => {
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
                <Input
                  value={autoCloseTime}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setAutoCloseTime(Number(event.target.value) as AutoCloseTime)
                  }
                  type="number"
                />
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
                  onChange={(_event: ChangeEvent<HTMLInputElement>, value: React.ReactNode) => {
                    setIconClose(value)
                  }}
                >
                  {[undefined, 'AiOutlineClose', 'AiOutlinePoweroff', 'AiFillCloseCircle'].map(iconKey => (
                    <RadioButton
                      key={iconKey}
                      checked={iconClose === iconKey}
                      label={
                        iconKey !== undefined ? (
                          <AtomIcon>
                            <AntDesignIcon icon={iconKey} style={{color: 'currentColor'}} />
                          </AtomIcon>
                        ) : (
                          String(iconKey)
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
