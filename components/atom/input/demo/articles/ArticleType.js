import PropTypes from 'prop-types'

import {Anchor, AntDesignIcon, Article, Cell, Code, Grid, H2, H3, Paragraph} from '@s-ui/documentation-library'
import AtomLabel from '@s-ui/react-atom-label'
import PrimitiveVisuallyHidden from '@s-ui/react-primitive-visually-hidden'

import AtomInput, {inputTypes} from '../../src/index.js'

const ArticleType = ({className}) => {
  return (
    <Article className={className}>
      <H2>Type</H2>
      <Paragraph>
        AtomInput provides different types of usage depending on its <Code>type</Code> value prop.
      </Paragraph>
      <Grid cols={2} gutter={[8, 8]}>
        {[
          [
            'TEXT',
            {type: inputTypes.TEXT},
            {
              description: 'Elements of type text create basic single-line text fields'
            }
          ],
          [
            'SEARCH',
            {type: inputTypes.SEARCH},
            {
              description: 'Elements of type search create basic single-line text fields'
            }
          ],
          [
            'DATE',
            {type: inputTypes.DATE, charsSize: 10},
            {
              description:
                'Create input fields that let the user enter a date, either with a textbox that validates the input or a special date picker interface. The resulting value includes the year, month, and day, but not the time. The time and datetime-local input types support time and date+time input.'
            }
          ],
          [
            'MASK',
            {
              type: inputTypes.MASK,
              mask: {mask: 'ES00 0000 0000 00 0000000000'},
              placeholder: 'ES00 0000 0000 00 0000000000',
              charsSize: 31,
              value: 'ES1234567890123456789012'
            },
            {
              description: (
                <>
                  Let the user define its own mask for custom purposes. More info at{' '}
                  <Anchor href="http://shorturl.at/foBF1">http://shorturl.at/foBF1</Anchor>
                </>
              )
            }
          ],
          [
            'MASK WITH RIGHT ICON',
            {
              type: inputTypes.MASK,
              mask: {mask: Number},
              placeholder: '0',
              charsSize: 31,
              value: '100000',
              rightIcon: '€',
              radix: ',',
              thousandsSeparator: '.',
              mapToRadix: ['.']
            },
            {
              description: (
                <>
                  Let the user define its own mask for custom purposes. More info at{' '}
                  <Anchor href="http://shorturl.at/foBF1">http://shorturl.at/foBF1</Anchor>
                </>
              )
            }
          ],
          [
            'NUMBER',
            {
              type: inputTypes.NUMBER,
              placeholder: 'Number only input',
              charsSize: 10
            },
            {
              description: (
                <>
                  A control for entering a number. Displays a spinner and adds default validation when supported.
                  Displays a numeric keypad in some devices with dynamic keypads. Arrows for number inputs are not shown
                  due to: <Anchor href="http://shorturl.at/tR149">http://shorturl.at/tR149</Anchor>
                </>
              )
            }
          ],
          [
            'PASSWORD',
            {type: inputTypes.PASSWORD, placeholder: 'Password Input'},
            {
              description: 'A single-line text field whose value is obscured. Will alert user if site is not secure'
            }
          ],
          [
            'SUI_PASSWORD',
            {
              type: inputTypes.SUI_PASSWORD,
              placeholder: 'Password Input',
              pwShowLabel: <AntDesignIcon aria-label="hide" icon="AiOutlineEye" style={{color: 'currentColor'}} />,
              pwHideLabel: (
                <AntDesignIcon aria-label="show" icon="AiOutlineEyeInvisible" style={{color: 'currentColor'}} />
              )
            },
            {
              description: 'Like password but with a show button for value displaying state'
            }
          ],
          [
            'TEL',
            {type: inputTypes.TEL},
            {
              description:
                'A control for entering a telephone number. Displays a telephone keypad in some devices with dynamic keypads.'
            }
          ],
          [
            'EMAIL',
            {type: inputTypes.EMAIL},
            {
              description:
                'A field for editing an email address. Looks like a text input, but has validation parameters and relevant keyboard in supporting browsers and devices with dynamic keyboards.'
            }
          ]
        ].map(([key, {type, ...props}, {description} = {}], index) => (
          <Cell key={index}>
            <H3>{key}</H3>
            <PrimitiveVisuallyHidden>
              <AtomLabel htmlFor={`type-${type}-${key}`} text={type} />
            </PrimitiveVisuallyHidden>
            <AtomInput id={`type-${type}-${key}`} type={type} {...props} />
            <Paragraph>{description}</Paragraph>
          </Cell>
        ))}
      </Grid>
    </Article>
  )
}

ArticleType.propTypes = {
  className: PropTypes.node
}

export default ArticleType
