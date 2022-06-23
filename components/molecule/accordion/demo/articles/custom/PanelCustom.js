import cx from 'classnames'
import PropTypes from 'prop-types'

import {Button, Cell, Grid} from '@s-ui/documentation-library'

const PanelCustom = ({
  className,
  children,
  onNext,
  onPrevious,
  step,
  stepsNumber
}) => {
  return (
    <div className={cx('demo-panel-custom', className)} style={{padding: 8}}>
      <Grid cols={1} gutter={[8, 0]}>
        <Cell span={2}>{children}</Cell>
        <Cell style={{display: 'flex', justifyContent: 'space-between'}}>
          {onPrevious ? (
            <Button type="button" onClick={onPrevious} disabled={step <= 1}>
              ←
            </Button>
          ) : (
            <span />
          )}
          {onNext ? (
            <Button
              type="button"
              onClick={onNext}
              disabled={step === stepsNumber}
            >
              →
            </Button>
          ) : (
            <span />
          )}
        </Cell>
      </Grid>
    </div>
  )
}

PanelCustom.displayName = 'PanelCustom'
PanelCustom.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
  step: PropTypes.number,
  stepsNumber: PropTypes.number
}

export default PanelCustom
