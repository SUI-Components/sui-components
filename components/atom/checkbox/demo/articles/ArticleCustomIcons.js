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
              value="AiOutlineCheck"
              label={<ICONS.AiOutlineCheck />}
              checked={state.checkedIcon === 'AiOutlineCheck'}
            />
            <RadioButton
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
              value="AiOutlineLine"
              label={<ICONS.AiOutlineLine />}
              checked={state.indeterminateIcon === 'AiOutlineLine'}
            />
            <RadioButton
              value="AiOutlineInfo"
              label={<ICONS.AiOutlineInfo />}
              checked={state.indeterminateIcon === 'AiOutlineInfo'}
            />
            <RadioButton
              value="AiOutlinePause"
              label={<ICONS.AiOutlinePause />}
              checked={state.indeterminateIcon === 'AiOutlinePause'}
            />
            <RadioButton
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
