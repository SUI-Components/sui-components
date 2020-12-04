/* eslint-disable react/prop-types, no-unused-vars, no-console */

import {useState, Fragment} from 'react'

import AtomButton, {
  atomButtonColors,
  atomButtonDesigns,
  atomButtonSizes
} from '../../../../components/atom/button/src'
import {
  AntDesignIcon,
  Label,
  H1,
  H2,
  Box,
  Paragraph,
  Article,
  Code,
  Grid,
  Cell,
  RadioButtonGroup,
  RadioButton,
  Input
} from '@s-ui/documentation-library'

const BASE_CLASS_DEMO = `DemoAtomButton`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

const facebookIcon = (
  <AntDesignIcon icon="AiFillFacebook" style={{color: 'currentColor'}} />
)
const twitterIcon = (
  <AntDesignIcon icon="AiOutlineTwitter" style={{color: 'currentColor'}} />
)
const googleIcon = (
  <AntDesignIcon icon="AiOutlineGoogle" style={{color: 'currentColor'}} />
)
const youtubeIcon = (
  <AntDesignIcon icon="AiFillYoutube" style={{color: 'currentColor'}} />
)
const whatsappIcon = (
  <AntDesignIcon icon="AiOutlineWhatsApp" style={{color: 'currentColor'}} />
)
const instagramIcon = (
  <AntDesignIcon icon="AiFillInstagram" style={{color: 'currentColor'}} />
)
const starIcon = (
  <AntDesignIcon icon="AiFillStar" style={{color: 'currentColor'}} />
)

const atomButtonColorsIterator = atomButtonColors
  .filter(color =>
    ['primary', 'accent', 'neutral', 'success', 'alert', 'error'].includes(
      color
    )
  )
  .map((color, index) => [{color}, index])
const atomButtonSocialColorsIterator = atomButtonColors
  .filter(color =>
    [
      'social-facebook',
      'social-twitter',
      'social-google',
      'social-youtube',
      'social-whatsapp',
      'social-instagram'
    ].includes(color)
  )
  .map((color, index) => [{color}, index])
const atomButtonDesignsIterator = Object.values(
  atomButtonDesigns
).map((design, index) => [{design}, index])
const atomButtonSizesIterator = [
  atomButtonSizes.SMALL,
  undefined,
  atomButtonSizes.LARGE
].map((size, index) => [{size}, index])
const socialIconsMapper = {
  'social-facebook': facebookIcon,
  'social-twitter': twitterIcon,
  'social-google': googleIcon,
  'social-youtube': youtubeIcon,
  'social-whatsapp': whatsappIcon,
  'social-instagram': instagramIcon
}

const flexCenteredStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  wrap: 'nowrap',
  alignItems: 'center',
  alignContent: 'center'
}

const LinkAndDesignLinkArticle = () => {
  const [state, setState] = useState({mode: 'light', size: undefined})
  const setStatus = newState => setState({...state, ...newState})
  const {size, mode} = state
  return (
    <Article className={CLASS_SECTION}>
      <H2>Combining Design Link and Prop Link</H2>
      <Paragraph>
        This component offers a simple way to replate its own HTML element for
        an anchor ('a') element using the boolean <Code>link</Code> prop
        combined with the <Code>href</Code> prop for the destination url.
      </Paragraph>
      <Grid cols={2} gutter={[10, 10]}>
        <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
          <Label>negative</Label>
        </Cell>
        <Cell style={{...flexCenteredStyle, justifyContent: 'flex-end'}}>
          <Label>size</Label>
        </Cell>
        <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
          <RadioButtonGroup
            label="negative"
            value={mode === 'light' ? 'false' : 'true'}
            onChange={value =>
              setStatus({mode: value === 'true' ? 'dark' : 'light'})
            }
          >
            <RadioButton value="false" label="false" />
            <RadioButton value="true" label="true" />
          </RadioButtonGroup>
        </Cell>
        <Cell style={{...flexCenteredStyle, justifyContent: 'flex-end'}}>
          <RadioButtonGroup onChange={value => setStatus({size: value})}>
            <RadioButton value="small" label="small" />
            <RadioButton value="medium" label="medium" />
            <RadioButton value="large" label="large" />
          </RadioButtonGroup>
        </Cell>
      </Grid>
      <br />
      <Box mode={mode}>
        <Grid cols={12} gutter={[10, 10]}>
          <Cell />
          {[...atomButtonDesignsIterator, [{design: undefined}]].map(
            ([{design}], index) => (
              <Fragment key={index}>
                <Cell span={2} style={flexCenteredStyle}>
                  <Label>{design || '-'}</Label>
                </Cell>
              </Fragment>
            )
          )}
          <Cell />
          <Cell />
          {Array.from(Array(5).keys()).map(key => (
            <Fragment key={key}>
              {['button', 'link'].map((type, index) => (
                <Cell key={index} style={flexCenteredStyle}>
                  <Label>{type}</Label>
                </Cell>
              ))}
            </Fragment>
          ))}
          <Cell />
          {[
            ...atomButtonColorsIterator,
            [{color: undefined}],
            ...atomButtonSocialColorsIterator
          ].map(([{color}], index) => (
            <Fragment key={index}>
              <Cell
                style={{...flexCenteredStyle, justifyContent: 'flex-start'}}
              >
                <Label>{color || '–'}</Label>
              </Cell>
              {[...atomButtonDesignsIterator, [{design: undefined}]].map(
                ([{design}], key) => (
                  <Fragment key={key}>
                    <Cell
                      style={{...flexCenteredStyle, flexDirection: 'column'}}
                    >
                      <AtomButton
                        design={design}
                        color={color}
                        leftIcon={socialIconsMapper[color]}
                        negative={mode === 'dark'}
                        size={size}
                        fullWidth
                      >
                        Button
                      </AtomButton>
                    </Cell>
                    <Cell
                      style={{...flexCenteredStyle, flexDirection: 'column'}}
                    >
                      <AtomButton
                        link
                        href="#"
                        design={design}
                        color={color}
                        leftIcon={socialIconsMapper[color]}
                        negative={mode === 'dark'}
                        size={size}
                        fullWidth
                      >
                        Button
                      </AtomButton>
                    </Cell>
                  </Fragment>
                )
              )}
              <Cell style={{...flexCenteredStyle, justifyContent: 'flex-end'}}>
                <Label>{color || '–'}</Label>
              </Cell>
            </Fragment>
          ))}
          <Cell />
          {Array.from(Array(4).keys()).map(key => (
            <Fragment key={key}>
              {['button', 'link'].map((type, index) => (
                <Cell key={index} style={flexCenteredStyle}>
                  <Label>{type}</Label>
                </Cell>
              ))}
            </Fragment>
          ))}
          <Cell />
          <Cell />
          {atomButtonDesignsIterator.map(([{design}], index) => (
            <Fragment key={index}>
              <Cell span={2} style={flexCenteredStyle}>
                <Label>{design}</Label>
              </Cell>
            </Fragment>
          ))}
          <Cell />
        </Grid>
      </Box>
    </Article>
  )
}

const Demo = () => {
  const [state, setState] = useState({content: 'button'})
  const {negative, content, icon, leftIcon, rightIcon} = state
  return (
    <div className="sui-StudioPreview">
      <H1>Button</H1>
      <Paragraph>
        A button means an operation. Clicking a button will trigger
        corresponding business logic.
      </Paragraph>
      <Article className={CLASS_SECTION}>
        <H2>Colors and Designs</H2>
        <div>
          <Paragraph>
            These are the available <Code>color</Code> types of button, which
            are solid by default for each <Code>design</Code>.
          </Paragraph>
          <Article>
            <Grid cols={7} gutter={10}>
              <Cell />
              {atomButtonColorsIterator.map(([{color}], index) => (
                <Cell key={index} style={flexCenteredStyle}>
                  <Label>{color}</Label>
                </Cell>
              ))}
              {atomButtonDesignsIterator.map(([{design}], index) => (
                <>
                  <Cell
                    style={{...flexCenteredStyle, justifyContent: 'flex-start'}}
                  >
                    <Label>{design}</Label>
                  </Cell>
                  {atomButtonColorsIterator.map(([{color}], index) => (
                    <Cell key={index} style={flexCenteredStyle}>
                      <AtomButton design={design} color={color}>
                        Button
                      </AtomButton>
                    </Cell>
                  ))}
                </>
              ))}
            </Grid>
          </Article>
          <br />
          <Paragraph>
            Buttons can also have the <Code>negative</Code> boolean prop for
            dark backgrounds.
          </Paragraph>
          <Article mode="dark">
            <Grid cols={7} gutter={10}>
              <Cell />
              {atomButtonColorsIterator.map(([{color}], index) => (
                <Cell key={index} style={flexCenteredStyle}>
                  <Label>{color}</Label>
                </Cell>
              ))}
              {atomButtonDesignsIterator.map(([{design}], index) => (
                <Fragment key={index}>
                  <Cell
                    style={{...flexCenteredStyle, justifyContent: 'flex-start'}}
                  >
                    <Label>{design}</Label>
                  </Cell>
                  {atomButtonColorsIterator.map(([{color}], index) => (
                    <Cell key={index} style={flexCenteredStyle}>
                      <AtomButton negative design={design} color={color}>
                        Button
                      </AtomButton>
                    </Cell>
                  ))}
                </Fragment>
              ))}
            </Grid>
          </Article>
        </div>
      </Article>
      <br />
      <Article className={CLASS_SECTION}>
        <H2>Social network colors</H2>
        <div>
          <Paragraph>
            These are the available social network color types of button, which
            are solid by default for each <Code>design</Code>.
          </Paragraph>
          <Article>
            <Grid cols={7} gutter={10}>
              <Cell />
              {atomButtonSocialColorsIterator.map(([{color}], index) => (
                <Cell key={index} style={flexCenteredStyle}>
                  <Label>{color}</Label>
                </Cell>
              ))}
              {atomButtonDesignsIterator.map(([{design}], index) => (
                <Fragment key={index}>
                  <Cell
                    style={{...flexCenteredStyle, justifyContent: 'flex-start'}}
                  >
                    <Label>{design}</Label>
                  </Cell>
                  {atomButtonSocialColorsIterator.map(([{color}], index) => (
                    <Cell key={index} style={flexCenteredStyle}>
                      <AtomButton
                        leftIcon={socialIconsMapper[color]}
                        design={design}
                        color={color}
                      >
                        Button
                      </AtomButton>
                    </Cell>
                  ))}
                </Fragment>
              ))}
            </Grid>
          </Article>
          <br />
          <Paragraph>
            Buttons can also have the <Code>negative</Code> boolean prop for
            dark backgrounds.
          </Paragraph>
          <Article mode="dark">
            <Grid cols={7} gutter={10}>
              <Cell />
              {atomButtonSocialColorsIterator.map(([{color}], index) => (
                <Cell key={index} style={flexCenteredStyle}>
                  <Label>{color}</Label>
                </Cell>
              ))}
              {atomButtonDesignsIterator.map(([{design}], index) => (
                <Fragment key={index}>
                  <Cell
                    style={{...flexCenteredStyle, justifyContent: 'flex-start'}}
                  >
                    <Label>{design}</Label>
                  </Cell>
                  {atomButtonSocialColorsIterator.map(([{color}], index) => (
                    <Cell key={index} style={flexCenteredStyle}>
                      <AtomButton
                        negative
                        leftIcon={socialIconsMapper[color]}
                        design={design}
                        color={color}
                      >
                        Button
                      </AtomButton>
                    </Cell>
                  ))}
                </Fragment>
              ))}
            </Grid>
          </Article>
        </div>
      </Article>
      <br />
      <Article className={CLASS_SECTION}>
        <H2>Size</H2>
        <div>
          <Paragraph>
            Size of the button, under the prop <Code>size</Code> exported from{' '}
            <Code>atomButtonSizes</Code>
          </Paragraph>
        </div>
        <Grid cols={3} gutter={10}>
          {atomButtonSizesIterator.map(([{size}], index) => (
            <Fragment key={index}>
              <Cell style={flexCenteredStyle}>
                <Label>{size}</Label>
              </Cell>
            </Fragment>
          ))}
          {atomButtonSizesIterator.map(([{size}], index) => (
            <Cell key={index} style={flexCenteredStyle}>
              <AtomButton size={size} color="primary">
                Button
              </AtomButton>
            </Cell>
          ))}
        </Grid>
      </Article>
      <br />
      <Article className={CLASS_SECTION}>
        <H2>Link Design</H2>
        <div>
          <Paragraph>
            Buttons, can also look like links in some cases under the{' '}
            <Code>design</Code> 'link' prop value
          </Paragraph>
        </div>
        <Article>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea <AtomButton design="link">commodo</AtomButton>{' '}
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non <a href="#">proident</a>, sunt in culpa qui officia
          deserunt mollit anim id est laborum."
        </Article>
      </Article>
      <br />
      <LinkAndDesignLinkArticle />
      <br />
      <Article className={CLASS_SECTION} mode="light">
        <H2>Other extra button boolean props</H2>
        <Paragraph>
          <Code>negative</Code>: proper usage with dark backgrounds.
        </Paragraph>
        <Paragraph>
          <Code>disabled</Code>: button is not trigerable.
        </Paragraph>
        <Paragraph>
          <Code>isLoading</Code> and <Code>loadingText</Code>: button status
          loading and its replacement text displayed.
        </Paragraph>
        <Paragraph>
          <Code>focused</Code>: button status activated.
        </Paragraph>
        <Paragraph>
          <Code>fullWidth</Code>: fits all the available with given.
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
              onChange={value => {
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
              onChange={value => {
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
              value="icon"
              onClick={(_, value) => {
                setState({...state, icon: value ? starIcon : undefined})
              }}
              label={starIcon}
            />
          </Cell>
          <Cell />
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
                  onChange={value => {
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
          <Cell span={2}>
            <Article mode={negative ? 'dark' : 'light'}>
              <Grid cols={7} gutter={10}>
                <Cell />
                {atomButtonColorsIterator.map(([{color}], index) => (
                  <Cell key={index} style={flexCenteredStyle}>
                    <Label>{color}</Label>
                  </Cell>
                ))}
                {atomButtonDesignsIterator.map(([{design}], index) => (
                  <Fragment key={index}>
                    <Cell
                      style={{
                        ...flexCenteredStyle,
                        justifyContent: 'flex-start'
                      }}
                    >
                      <Label>{design}</Label>
                    </Cell>
                    {atomButtonColorsIterator.map(([{color}], index) => (
                      <Cell key={index} style={flexCenteredStyle}>
                        <AtomButton
                          design={design}
                          color={color}
                          {...state}
                          {...{
                            leftIcon: icon && leftIcon,
                            rightIcon: icon && rightIcon
                          }}
                        >
                          {icon && !leftIcon && !rightIcon ? starIcon : content}
                        </AtomButton>
                      </Cell>
                    ))}
                  </Fragment>
                ))}
              </Grid>
            </Article>
          </Cell>
        </Grid>
      </Article>
    </div>
  )
}

export default Demo
