import {useState} from 'react'

import PropTypes from 'prop-types'

import {
  AntDesignIcon,
  Article,
  Button,
  Cell,
  Grid,
  H2,
  Label,
  RadioButton,
  RadioButtonGroup
} from '@s-ui/documentation-library'

import AtomProgressBar, {
  atomProgressBarColors,
  atomProgressBarSizes,
  atomProgressBarStatus,
  atomProgressBarTypes
} from '../../src/index.js'
import {getShuffledValue} from '../settings.js'

const ArticleLinearDefault = ({className}) => {
  const [value, setValue] = useState(50)
  const [isAnimated, setIsAnimated] = useState(true)
  const [isBorderless, setIsBorderless] = useState(false)
  const [hideIndicator, setHideIndicator] = useState()
  const [indicatorBottom, setIndicatorBottom] = useState()
  const [indicatorTotal, setIndicatorTotal] = useState()
  const [status, setStatus] = useState()
  const [size, setSize] = useState()
  const [color, setColor] = useState()

  return (
    <Article className={className}>
      <H2 id="linear-progress-bar">Linear Progress Bar</H2>
      <Grid cols={2} gutter={[8, 8]}>
        <Cell span={2}>
          <Label>value</Label>
        </Cell>
        <Cell span={2}>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={value}
            style={{width: '100%'}}
            onChange={event => setValue(parseInt(event.target.value))}
          />
        </Cell>
        <Cell span={2}>
          <Label>shuffle value</Label>
        </Cell>
        <Cell span={2}>
          <Button onClick={() => setValue(getShuffledValue())}>
            <AntDesignIcon icon="AiOutlineRetweet" style={{fill: 'currentColor'}} />
          </Button>
        </Cell>
        <Cell>
          <Label>isAnimatedOnChange</Label>
        </Cell>
        <Cell>
          <Label>hideIndicator</Label>
        </Cell>
        <Cell>
          <RadioButton
            onClick={() => {
              setIsAnimated(!isAnimated)
              setValue(getShuffledValue())
            }}
            label={isAnimated ? 'enabled' : 'disabled'}
            checked={isAnimated}
          />
        </Cell>
        <Cell>
          <RadioButton
            onClick={() => setHideIndicator(!hideIndicator)}
            label={hideIndicator ? 'hidden' : 'shown'}
            checked={hideIndicator}
          />
        </Cell>
        <Cell>
          <Label>indicatorBottom</Label>
        </Cell>
        <Cell>
          <Label>indicatorTotal</Label>
        </Cell>
        <Cell>
          <RadioButton
            onClick={() => setIndicatorBottom(!indicatorBottom)}
            label={indicatorBottom ? 'true' : 'false'}
            checked={indicatorBottom}
          />
        </Cell>
        <Cell>
          <RadioButton
            onClick={() => setIndicatorTotal(!indicatorTotal)}
            label={indicatorTotal ? 'true' : 'false'}
            checked={indicatorTotal}
          />
        </Cell>
        <Cell>
          <Label>status</Label>
        </Cell>
        <Cell>
          <Label>size</Label>
        </Cell>
        <Cell>
          <RadioButtonGroup value={status} onChange={(event, value) => setStatus(value)}>
            {[['undefined', undefined], ...Object.entries(atomProgressBarStatus)].map(
              ([, atomProgressBarStatusValue]) => (
                <RadioButton
                  key={`${atomProgressBarStatusValue}`}
                  label={`${atomProgressBarStatusValue}`}
                  value={atomProgressBarStatusValue}
                  checked={status === atomProgressBarStatusValue}
                />
              )
            )}
          </RadioButtonGroup>
        </Cell>
        <Cell>
          <RadioButtonGroup value={size} onChange={(event, value) => setSize(value)}>
            {[['undefined', undefined], ...Object.entries(atomProgressBarSizes)].map(([, atomProgressBarSizeValue]) => (
              <RadioButton
                key={`${atomProgressBarSizeValue}`}
                label={`${atomProgressBarSizeValue}`}
                value={atomProgressBarSizeValue}
                checked={size === atomProgressBarSizeValue}
              />
            ))}
          </RadioButtonGroup>
        </Cell>
        <Cell>
          <Label>color</Label>
        </Cell>
        <Cell span={1}>
          <Label>isBorderless</Label>
        </Cell>
        <Cell>
          <RadioButtonGroup value={color} onChange={(event, value) => setColor(value)}>
            {[['undefined', undefined], ...Object.entries(atomProgressBarColors)].map(
              ([, atomProgressBarLineCapsValue]) => (
                <RadioButton
                  key={`${atomProgressBarLineCapsValue}`}
                  label={`${atomProgressBarLineCapsValue}`}
                  value={atomProgressBarLineCapsValue}
                  checked={color === atomProgressBarLineCapsValue}
                />
              )
            )}
          </RadioButtonGroup>
        </Cell>
        <Cell span={1}>
          <RadioButton
            onClick={() => {
              setIsBorderless(!isBorderless)
            }}
            label={isBorderless ? 'true' : 'false'}
            checked={isBorderless}
          />
        </Cell>
        <Cell span={2}>
          <Label>result</Label>
        </Cell>
        <Cell span={2}>
          <AtomProgressBar
            type={atomProgressBarTypes.LINE}
            percentage={value}
            isAnimatedOnChange={isAnimated}
            isBorderless={isBorderless}
            status={status}
            size={size}
            hideIndicator={hideIndicator}
            indicatorBottom={indicatorBottom}
            indicatorTotal={indicatorTotal}
            color={color}
          />
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleLinearDefault.displayName = 'ArticleLinearDefault'

ArticleLinearDefault.propTypes = {
  className: PropTypes.string
}

export default ArticleLinearDefault
