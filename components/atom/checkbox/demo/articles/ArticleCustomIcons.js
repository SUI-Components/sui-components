import {useState} from 'react'

import PropTypes from 'prop-types'

import {
  Article,
  Cell,
  Code,
  Grid,
  H2,
  Label,
  Paragraph,
  RadioButton,
  RadioButtonGroup
} from '@s-ui/documentation-library'
import PrimitiveVisuallyHidden from '@s-ui/react-primitive-visually-hidden'

import AtomCheckbox from '../../src/index.js'
import {flexCenteredStyle, ICONS} from '../settings.js'

const ArticleCustomIcons = ({className}) => {
  const [state, setStatus] = useState({
    checkedIcon: 'aiOutlineCheck',
    indeterminateIcon: 'aiOutlineLine'
  })
  const setState = overrideState => setStatus({...state, ...overrideState})
  const {checkedIcon, indeterminateIcon} = state
  return (
    <Article className={className}>
      <H2>Custom icons</H2>
      <Paragraph>
        Tick icons can be fully customized using the props unless if the <Code>isNative</Code> flag is activated.
      </Paragraph>
      <Paragraph>
        <Code>checkedIcon</Code>: icon displayed when checkbox status is checked.
      </Paragraph>
      <Grid cols={6}>
        <Cell>
          <RadioButtonGroup
            value={checkedIcon}
            fullWidth
            onChange={(event, value) => value && setState({checkedIcon: value})}
          >
            <RadioButton
              aria-label="outline-check"
              value="AiOutlineCheck"
              label={<ICONS.AiOutlineCheck />}
              checked={state.checkedIcon === 'AiOutlineCheck'}
            />
            <RadioButton
              aria-label="outline-close"
              value="AiOutlineClose"
              label={<ICONS.AiOutlineClose />}
              checked={state.checkedIcon === 'AiOutlineClose'}
            />
          </RadioButtonGroup>
        </Cell>
        <Cell style={flexCenteredStyle}>
          <AtomCheckbox
            checkedIcon={ICONS[checkedIcon] || null}
            indeterminateIcon={ICONS[indeterminateIcon] || null}
            checked
            id="icon-custom-checked"
            aria-label="icon-custom-checked"
          />
          <PrimitiveVisuallyHidden>
            <Label htmlFor="icon-custom-checked">icon custom checked</Label>
          </PrimitiveVisuallyHidden>
        </Cell>
      </Grid>
      <Paragraph>
        <Code>indeterminateIcon</Code>: icon displayed when checkbox status is checked unchecked and{' '}
        <Code>indeterminate</Code> prop i true.
      </Paragraph>
      <Grid cols={6}>
        <Cell>
          <RadioButtonGroup
            value={indeterminateIcon}
            fullWidth
            onChange={(event, value) => value && setState({indeterminateIcon: value})}
          >
            <RadioButton
              aria-label="outline-line"
              value="AiOutlineLine"
              label={<ICONS.AiOutlineLine />}
              checked={state.indeterminateIcon === 'AiOutlineLine'}
            />
            <RadioButton
              aria-label="outline-info"
              value="AiOutlineInfo"
              label={<ICONS.AiOutlineInfo />}
              checked={state.indeterminateIcon === 'AiOutlineInfo'}
            />
            <RadioButton
              aria-label="outline-pause"
              value="AiOutlinePause"
              label={<ICONS.AiOutlinePause />}
              checked={state.indeterminateIcon === 'AiOutlinePause'}
            />
            <RadioButton
              aria-label="outline-plus"
              value="AiOutlinePlus"
              label={<ICONS.AiOutlinePlus />}
              checked={state.indeterminateIcon === 'AiOutlinePlus'}
            />
          </RadioButtonGroup>
        </Cell>
        <Cell style={flexCenteredStyle}>
          <AtomCheckbox
            checkedIcon={ICONS[checkedIcon] || null}
            indeterminateIcon={ICONS[indeterminateIcon] || null}
            indeterminate
            id="icon-custom-indeterminate"
            aria-label="icon-custom-indeterminate"
          />
          <PrimitiveVisuallyHidden>
            <Label htmlFor="icon-custom-indeterminate">icon custom checked</Label>
          </PrimitiveVisuallyHidden>
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleCustomIcons.displayName = 'ArticleCustomIcons'
ArticleCustomIcons.propTypes = {
  className: PropTypes.string
}

export default ArticleCustomIcons
