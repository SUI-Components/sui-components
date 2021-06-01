import {useState} from 'react'
import PropTypes from 'prop-types'
import {
  Article,
  H2,
  H4,
  Paragraph,
  RadioButtonGroup,
  RadioButton,
  Grid,
  Cell,
  Code,
  Separator,
  Bold
} from '@s-ui/documentation-library'

const ArticleDefault = ({className}) => {
  const [isVisible, setIsVisible] = useState(undefined)
  const [defaultIsVisible, setDefaultIsVisible] = useState(undefined)

  return (
    <Article className={className}>
      <H2>Default</H2>

      <Grid cols={6} gutter={[8, 8]}>
        <Cell span={3}>
          <H4>Uncontrolled component</H4>
          <Paragraph>
            The Popover is normally used as uncontrolled component. User can use
            it wrapping the component desired to be targeted and deciding the
            default onLoading configuration of the element under the{' '}
            <Code>defaultIsVisible</Code> prop. By default it is false.
          </Paragraph>
          <Paragraph>
            If the Popover is not visible and the use clicks on the target area,
            the popover will toggle its internal visible state showing an
            element positioned on top of the other elements of the document.
          </Paragraph>
          <Paragraph>
            When the popover is visible, it there is any click or tap event on
            any part of the document not contained in the popover content, it
            will immediately toggle its inner visible state becoming invisible.
          </Paragraph>
        </Cell>

        <Cell span={3}>
          <H4>Controlled component</H4>
          <Paragraph>
            The popover can be controlled using the <Code>isVisible</Code> prop.
            It is a boolean prop and its value is undefined.
          </Paragraph>
          <Paragraph>
            Acting as a controlled component, the behavior of its visibility
            state might be fully controlled by an outer component defining its
            function handler (<Code>onClose</Code>, <Code>onOpen</Code>) props.
          </Paragraph>
        </Cell>
        <Cell span={3}>
          <Separator style={{display: 'flex', justifyContent: 'space-between'}}>
            <span>defaultIsVisible</span>
            <span>Uncontrolled</span>
          </Separator>
        </Cell>
        <Cell span={3}>
          <Separator style={{display: 'flex', justifyContent: 'space-between'}}>
            <span>Controlled</span>
            <span>isVisible</span>
          </Separator>
        </Cell>
        <Cell>
          <Paragraph>{`${defaultIsVisible}`}</Paragraph>
        </Cell>
        <Cell span={2}>
          <Paragraph>a</Paragraph>
        </Cell>
        <Cell span={2}>
          <Paragraph>Lorem ipsum dolor sit </Paragraph>
        </Cell>
        <Cell>
          <Paragraph style={{textAlign: 'right'}}>{`${isVisible}`}</Paragraph>
        </Cell>
        <Cell span={3}>
          <RadioButtonGroup
            value={`${defaultIsVisible}`}
            fullWidth
            onChange={(event, value) => {
              switch (value) {
                case 'true':
                  setDefaultIsVisible(true)
                  break
                case 'false':
                  setDefaultIsVisible(false)
                  break
                case 'undefined':
                default:
                  setDefaultIsVisible(undefined)
                  break
              }
            }}
          >
            {[undefined, false, true].map((possibleValue, index) => (
              <RadioButton
                key={index}
                value={`${possibleValue}`}
                label={`${possibleValue}`}
              />
            ))}
          </RadioButtonGroup>
        </Cell>
        <Cell span={3}>
          <RadioButtonGroup
            value={`${isVisible}`}
            fullWidth
            onChange={(event, value) => {
              switch (value) {
                case 'true':
                  setIsVisible(true)
                  break
                case 'false':
                  setIsVisible(false)
                  break
                case 'undefined':
                default:
                  setIsVisible(undefined)
                  break
              }
            }}
          >
            {[undefined, false, true].map((possibleValue, index) => (
              <RadioButton
                key={index}
                value={`${possibleValue}`}
                label={`${possibleValue}`}
              />
            ))}
          </RadioButtonGroup>
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleDefault.displayName = 'ArticleDefault'
ArticleDefault.propTypes = {
  className: PropTypes.string,
  content: PropTypes.elementType
}

export default ArticleDefault
