/* eslint-disable react/prop-types, no-unused-vars, no-console */
import {useState} from 'react'
import {
  H1,
  Article,
  Button,
  RadioButton,
  RadioButtonGroup,
  Paragraph,
  BoxIcon
} from '@s-ui/documentation-library'

import AtomBackToTop, {backToTopStyles} from '../src/index'

import './index.scss'

const BASE_CLASS_DEMO = `DemoAtomBackToTop`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

const IconTop = () => <BoxIcon icon="BiUpArrow" />

const LoremIpsum = () => (
  <Paragraph>
    Lorem ipsum dolor sit amet consectetur adipiscing, elit dignissim etiam
    congue ultricies. Commodo sociis massa a potenti dictumst turpis laoreet
    elementum, pulvinar hendrerit risus vivamus rhoncus etiam sapien congue sem,
    luctus tristique sagittis mollis ac convallis cubilia. Conubia dictum
    maecenas eleifend tincidunt nibh nam turpis fringilla vulputate, volutpat
    pretium neque platea phasellus tempus interdum habitant, sociis convallis
    taciti viverra aliquam nec metus auctor.
  </Paragraph>
)

const Demo = () => {
  const [text, setText] = useState(false)
  const [icon, setIcon] = useState(true)
  const [paragraphsNumber, setParagraphsNumber] = useState(20)
  const [darkMode, setDarkMode] = useState('light')
  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <H1>Back To Top</H1>
        <Paragraph>
          AtomBackToTop is a component that handles the scroll of a container
          and that it will be displayed only when needed.
        </Paragraph>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px 0'
          }}
        >
          <Button
            onClick={() => {
              setParagraphsNumber(paragraphsNumber + 10)
            }}
          >
            Add 10 paragraphs
          </Button>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px 0'
          }}
        >
          <RadioButtonGroup
            onChange={(event, value) => {
              if (value) {
                setDarkMode(value)
              }
            }}
            value={darkMode}
          >
            <RadioButton
              label="Light Mode"
              value="light"
              checked={darkMode === 'light'}
            />
            <RadioButton
              label="Dark Mode"
              value="dark"
              checked={darkMode === 'dark'}
            />
          </RadioButtonGroup>
          <RadioButtonGroup
            onChange={(event, value) => {
              const values = value.split('|')
              setText(values.includes('text'))
              setIcon(values.includes('icon'))
            }}
            defaultValue="icon"
          >
            <RadioButton label="Icon only" value="icon" />
            <RadioButton label="Icon & Text" value="icon|text" />
            <RadioButton label="Text Only" value="text" />
          </RadioButtonGroup>
        </div>
        <Article className={CLASS_SECTION} mode={darkMode}>
          {new Array(paragraphsNumber).fill(0).map((elem, index) => (
            <LoremIpsum key={index} />
          ))}
        </Article>
        <AtomBackToTop
          refContainer={document}
          {...{
            style: darkMode ? backToTopStyles.LIGHT : backToTopStyles.DARK,
            ...(text && {textTop: 'TOP'}),
            ...(icon && {iconTop: IconTop})
          }}
        />
        <br />
      </div>
    </div>
  )
}

export default Demo
