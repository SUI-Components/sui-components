import JSONView from 'react-json-view'

import PropTypes from 'prop-types'

import {Article, Cell, Grid, Label} from '@s-ui/documentation-library'

import AtomToast, {type AtomToastProps} from '../src/index.tsx'

interface ToastDemoProps extends AtomToastProps {
  className?: string
  iconClose?: React.ReactNode
  onClose?: () => void
}

const ToastDemo = ({className, onClose, iconClose, ...toastProps}: ToastDemoProps) => {
  return (
    <AtomToast onClose={onClose} iconClose={iconClose} {...toastProps}>
      <Article className={className}>
        <Grid cols={1} gutter={[8, 8]}>
          <Cell>
            <Label>Props</Label>
          </Cell>
          <Cell>
            <JSONView
              src={toastProps}
              iconStyle="circle"
              displayDataTypes={false}
              displayObjectSize={false}
              indentWidth={2}
            />
          </Cell>
        </Grid>
      </Article>
    </AtomToast>
  )
}

ToastDemo.displayName = 'ToastDemo'

ToastDemo.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  iconClose: PropTypes.node
}

export default ToastDemo
