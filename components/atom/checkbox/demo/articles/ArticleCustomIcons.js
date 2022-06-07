import {useState} from 'react'
import PropTypes from 'prop-types'

import {
  Article,
  Cell,
  Code,
  Grid,
  H2,
  Paragraph,
  RadioButton,
  RadioButtonGroup
} from '@s-ui/documentation-library'

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
        Tick icons can be fully customized using the props unless if the{' '}
        <Code>isNative</Code> flag is activated.
      </Paragraph>
      <Paragraph>
        <Code>checkedIcon</Code>: icon displayed when checkbox status is
        checked.
      </Paragraph>
      <Grid cols={6}>
        <Cell>
          <RadioButtonGroup
            value={checkedIcon}
            fullWidth
            onChange={(event, value) => value && setState({checkedIcon: value})}
          >
            <RadioButton
              value="aiOutlineCheck"
              label={ICONS.aiOutlineCheck}
              checked={state.checkedIcon === 'aiOutlineCheck'}
            />
            <RadioButton
              value="aiOutlineClose"
              label={ICONS.aiOutlineClose}
              checked={state.checkedIcon === 'aiOutlineClose'}
            />
          </RadioButtonGroup>
        </Cell>
        <Cell style={flexCenteredStyle}>
          <AtomCheckbox
            checkedIcon={() => ICONS[checkedIcon] || null}
            indeterminateIcon={() => ICONS[indeterminateIcon] || null}
            checked
          />
        </Cell>
      </Grid>
      <Paragraph>
        <Code>indeterminateIcon</Code>: icon displayed when checkbox status is
        checked unchecked and <Code>indeterminate</Code> prop i true.
      </Paragraph>
      <Grid cols={6}>
        <Cell>
          <RadioButtonGroup
            value={indeterminateIcon}
            fullWidth
            onChange={(event, value) =>
              value && setState({indeterminateIcon: value})
            }
          >
            <RadioButton
              value="aiOutlineLine"
              label={ICONS.aiOutlineLine}
              checked={state.indeterminateIcon === 'aiOutlineLine'}
            />
            <RadioButton
              value="aiOutlineInfo"
              label={ICONS.aiOutlineInfo}
              checked={state.indeterminateIcon === 'aiOutlineInfo'}
            />
            <RadioButton
              value="aiOutlinePause"
              label={ICONS.aiOutlinePause}
              checked={state.indeterminateIcon === 'aiOutlinePause'}
            />
            <RadioButton
              value="aiOutlinePlus"
              label={ICONS.aiOutlinePlus}
              checked={state.indeterminateIcon === 'aiOutlinePlus'}
            />
          </RadioButtonGroup>
        </Cell>
        <Cell style={flexCenteredStyle}>
          <AtomCheckbox
            checkedIcon={() => ICONS[checkedIcon] || null}
            indeterminateIcon={() => ICONS[indeterminateIcon] || null}
            indeterminate
          />
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
