import {Fragment, useState} from 'react'

import PropTypes from 'prop-types'

import {
  Article,
  Box,
  Cell,
  Code,
  Grid,
  H2,
  Input,
  Label,
  Paragraph,
  RadioButton,
  RadioButtonGroup
} from '@s-ui/documentation-library'

import AtomButton from '../../src/index.js'
import {
  atomButtonColorsIterator,
  atomButtonDesignsIterator,
  atomButtonSocialColorsIterator,
  CLASS_SECTION,
  flexCenteredStyle,
  starIcon
} from '../settings.js'

const ArticlePlayground = ({className}) => {
  const [state, setState] = useState({content: 'button', link: undefined})
  const {negative, content, icon, leftIcon, rightIcon, socialButtons, link} = state
  return (
    <Article className={CLASS_SECTION}>
      <H2>Other extra button boolean props</H2>
      <Paragraph>
        <Code>negative</Code>: proper usage with dark backgrounds.
      </Paragraph>
      <Paragraph>
        <Code>disabled</Code>: button is not triggerable.
      </Paragraph>
      <Paragraph>
        <Code>isLoading</Code> and <Code>loadingText</Code>: button status loading and its replacement text displayed.
      </Paragraph>
      <Paragraph>
        <Code>focused</Code>: button status activated.
      </Paragraph>
      <Paragraph>
        <Code>fullWidth</Code>: fits all the available with given.
      </Paragraph>
      <Paragraph>
        <Code>link</Code>: converts the button element to an anchor element, keeping its own configured design. A simple
        way to replace its own HTML element for an anchor ('a') element using the boolean link prop combined with the
        href prop for the destination url.
      </Paragraph>
      <Grid cols={2} gutter={10}>
        <Cell
          style={{
            ...flexCenteredStyle,
            justifyContent: 'flex-start',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}
        >
          <Label>boolean props</Label>
          <RadioButtonGroup
            onChange={(event, value) => {
              const newState = {
                ...state,
                negative: undefined,
                disabled: undefined,
                isLoading: undefined,
                focused: undefined,
                fullWidth: undefined
              }
              switch (value) {
                case 'negative':
                  setState({...newState, negative: true})
                  break
                case 'disabled':
                  setState({...newState, disabled: true})
                  break
                case 'isLoading':
                  setState({
                    ...newState,
                    isLoading: true
                  })
                  break
                case 'focused':
                  setState({...newState, focused: true})
                  break
                case 'fullWidth':
                  setState({...newState, fullWidth: true})
                  break
                default:
                  setState({...newState})
                  break
              }
            }}
          >
            <RadioButton value="negative" label="negative" />
            <RadioButton value="disabled" label="disabled" />
            <RadioButton value="isLoading" label="isLoading" />
            <RadioButton value="focused" label="focused" />
            <RadioButton value="fullWidth" label="fullWidth" />
          </RadioButtonGroup>
        </Cell>
        <Cell
          style={{
            ...flexCenteredStyle,
            justifyContent: 'flex-end',
            flexDirection: 'column',
            alignItems: 'flex-end'
          }}
        >
          <Label>content</Label>
          <Input
            value={content}
            onChange={ev => {
              const content = ev.target.value
              setState({...state, content, loadingText: content})
            }}
            placeholder="content"
          />
        </Cell>
        <Cell
          style={{
            ...flexCenteredStyle,
            justifyContent: 'flex-start',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}
        >
          <Label>size</Label>
          <RadioButtonGroup
            onChange={(event, value) => {
              setState({...state, size: value})
            }}
          >
            <RadioButton value="small" label="small" />
            <RadioButton value="medium" label="medium" />
            <RadioButton value="large" label="large" />
          </RadioButtonGroup>
        </Cell>
        <Cell
          style={{
            ...flexCenteredStyle,
            justifyContent: 'flex-end',
            flexDirection: 'column',
            alignItems: 'flex-end'
          }}
        >
          <Label>icon</Label>
          <RadioButton
            aria-label="add star icon"
            value="icon"
            onClick={(_, value) => {
              setState({...state, icon: value ? starIcon : undefined})
            }}
            label={starIcon}
          />
        </Cell>
        <Cell
          style={{
            ...flexCenteredStyle,
            justifyContent: 'flex-start',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}
        >
          <Label>Social buttons</Label>
          <RadioButton
            value={socialButtons}
            onClick={() => {
              setState({...state, socialButtons: !socialButtons})
            }}
            label={socialButtons ? 'disable' : 'enable'}
          />
        </Cell>
        <Cell
          style={{
            ...flexCenteredStyle,
            justifyContent: 'flex-end',
            flexDirection: 'column',
            alignItems: 'flex-end'
          }}
        >
          {icon && (
            <>
              <Label>icon position</Label>
              <RadioButtonGroup
                onChange={(event, value) => {
                  const status = {
                    leftIcon: value === 'leftIcon' ? starIcon : undefined,
                    rightIcon: value === 'rightIcon' ? starIcon : undefined
                  }
                  setState({...state, ...status})
                }}
              >
                <RadioButton value="leftIcon" label="leftIcon" />
                <RadioButton value="rightIcon" label="rightIcon" />
              </RadioButtonGroup>
            </>
          )}
        </Cell>
        <Cell
          span={2}
          style={{
            ...flexCenteredStyle,
            justifyContent: 'flex-start',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}
        >
          <Label>Link element</Label>
          <RadioButton
            value={link}
            onClick={() => {
              setState({...state, link: !link})
            }}
            label={link ? 'disable' : 'enable'}
          />
        </Cell>
        <Cell span={2}>
          <Box>
            <Grid cols={7} gutter={[10, 10]}>
              <Cell />
              {[[{design: undefined}], ...atomButtonDesignsIterator].map(([{design}], index) => (
                <Fragment key={index}>
                  <Cell style={flexCenteredStyle}>
                    <Label>{design || '–'}</Label>
                  </Cell>
                </Fragment>
              ))}
              <Cell />
              {[
                ...atomButtonColorsIterator,
                [{color: undefined}],
                ...(socialButtons ? atomButtonSocialColorsIterator : [])
              ].map(([{color}], index) => (
                <Fragment key={index}>
                  <Cell
                    style={{
                      ...flexCenteredStyle,
                      justifyContent: 'flex-start'
                    }}
                  >
                    <Label>{color || '–'}</Label>
                  </Cell>
                  {[[{design: undefined}], ...atomButtonDesignsIterator].map(([{design}], key) => (
                    <Fragment key={key}>
                      <Cell
                        style={{
                          ...flexCenteredStyle,
                          flexDirection: 'column'
                        }}
                      >
                        <AtomButton
                          onClick={() => {
                            console.log({color, design}) // eslint-disable-line no-console
                          }}
                          negative={negative === 'dark'}
                          design={design}
                          color={color}
                          {...state}
                          {...{
                            leftIcon: icon && leftIcon,
                            rightIcon: icon && rightIcon,
                            href: link ? '#' : undefined
                          }}
                        >
                          {icon && !leftIcon && !rightIcon ? starIcon : content}
                        </AtomButton>
                      </Cell>
                    </Fragment>
                  ))}
                  <Cell style={{...flexCenteredStyle, justifyContent: 'flex-end'}}>
                    <Label>{color || '–'}</Label>
                  </Cell>
                </Fragment>
              ))}
              <Cell />
              {[[{design: undefined}], ...atomButtonDesignsIterator].map(([{design}], index) => (
                <Fragment key={index}>
                  <Cell style={flexCenteredStyle}>
                    <Label>{design || '–'}</Label>
                  </Cell>
                </Fragment>
              ))}
              <Cell />
            </Grid>
          </Box>
        </Cell>
      </Grid>
    </Article>
  )
}

ArticlePlayground.displayName = 'ArticlePlayground'

ArticlePlayground.propTypes = {
  className: PropTypes.string
}

export default ArticlePlayground
