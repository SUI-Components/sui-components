/* eslint-disable react/prop-types, no-unused-vars, no-console */
import {useState, useEffect} from 'react'
import {
  H1,
  Article,
  Button,
  RadioButton,
  RadioButtonGroup,
  Paragraph,
  BoxIcon
} from '@s-ui/documentation-library'
import useMountedState from '@s-ui/react-hooks/lib/useMountedState'

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
  const isMounted = useMountedState()
  const [text, setText] = useState(false)
  const [icon, setIcon] = useState(true)
  const [element, setElement] = useState('document')
  const [paragraphsNumber, setParagraphsNumber] = useState(20)
  const [darkMode, setDarkMode] = useState('light')

  const [articleElement, setArticleElement] = useState()
  const [bounding, setBounding] = useState()

  useEffect(() => {
    if (isMounted()) {
      const selecedElement = document.querySelector(`.${CLASS_SECTION}`)
      setArticleElement(selecedElement)
      setBounding(selecedElement.getBoundingClientRect())
    }
  }, [setArticleElement, isMounted, setBounding, element])
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
            onChange={(event, value) =>
              setElement(value === 'document' ? 'document' : 'articleElement')
            }
            value={element}
          >
            <RadioButton
              label="document"
              value="document"
              checked={'document' === element}
            />
            <RadioButton
              label="article"
              value="articleElement"
              checked={'articleElement' === element}
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
        <Article
          className={CLASS_SECTION}
          mode={darkMode}
          {...(element === 'articleElement' && {
            style: {
              height: window.innerHeight - bounding.top - 40,
              overflow: 'scroll'
            }
          })}
        >
          {new Array(paragraphsNumber).fill(0).map((elem, index) => (
            <LoremIpsum key={index} />
          ))}
          <AtomBackToTop
            refContainer={
              element === 'articleElement' ? articleElement : document
            }
            {...{
              style:
                darkMode === 'light'
                  ? backToTopStyles.LIGHT
                  : backToTopStyles.DARK,
              ...(text && {textTop: 'TOP'}),
              ...(icon && {iconTop: IconTop})
            }}
            onScroll={
              (event, properties) => console.log('onScroll', properties) // eslint-disable-line no-console
            }
            onIsVisibleToggle={
              (event, properties) =>
                console.log('onIsVisibleToggle', properties) // eslint-disable-line no-console
            }
          />
        </Article>
        <br />
      </div>
    </div>
  )
}

export default Demo
