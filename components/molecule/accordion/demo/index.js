import {useState} from 'react'

import {H1, Paragraph} from '@s-ui/documentation-library'

import {text, icon, customTitle} from './settings.js'
import MoleculeAccordion from '../src/index.js'
import Demo from './Demo.js'
import DemoWrapper from './DemoWrapper.js'

export default () => {
  const [openedTabs, setOpenedTabs] = useState([1])
  return (
    <div className="sui-StudioPreview">
      <H1>Accordion</H1>
      <Paragraph>
        An accordion is a vertically stacked set of interactive headings that
        each contain a title, content snippet, or thumbnail representing a
        section of content. The headings function as controls that enable users
        to reveal or hide their associated sections of content. Accordions are
        commonly used to reduce the need to scroll when presenting multiple
        sections of content on a single page.
      </Paragraph>
      <DemoWrapper>
        <Demo>
          <h2>Accordion with opened tabs state managed via prop</h2>
          <p>
            Opened tabs: {openedTabs?.length ? openedTabs.join(',') : 'none'}
          </p>
          <div
            style={{
              backgroundColor: '#fff',
              fontSize: 14,
              padding: 16,
              textAlign: 'left'
            }}
          >
            <button onClick={() => setOpenedTabs([])}>Close Tabs</button>
            <MoleculeAccordion
              maxHeight={100}
              openedTabs={openedTabs}
              withAutoClose={false}
              withTransition
              icon={icon}
              onToggleTab={(e, {index, openedTabs}) => {
                setOpenedTabs(openedTabs)
                console.log('tab toggled:', {index, openedTabs}) // eslint-disable-line no-console
              }}
            >
              <div label="Title 1">
                <p style={{margin: 0}}>{text}</p>
              </div>
              <div label="Title 2">
                <p style={{margin: 0}}>{text}</p>
                <p style={{margin: 0}}>{text}</p>
                <p style={{margin: 0}}>{text}</p>
              </div>
              <div label="Title 3">
                <p style={{margin: 0}}>{text}</p>
                <p style={{margin: 0}}>{text}</p>
                <p style={{margin: 0}}>{text}</p>
              </div>
              <div label="Title 4">
                <p style={{margin: 0}}>{text}</p>
                <p style={{margin: 0}}>{text}</p>
                <p style={{margin: 0}}>{text}</p>
              </div>
            </MoleculeAccordion>
          </div>
          <h2>
            Accordion with transition, autoclose, max height and onToggleTab
            handler
          </h2>
          <div
            style={{
              backgroundColor: '#fff',
              fontSize: 14,
              padding: 16,
              textAlign: 'left'
            }}
          >
            <MoleculeAccordion
              maxHeight={100}
              withAutoClose
              withTransition
              icon={icon}
              onToggleTab={(e, {index}) => {
                console.log('tab toggled:', index) // eslint-disable-line no-console
              }}
            >
              <div label="Title">
                <p style={{margin: 0}}>{text}</p>
              </div>
              <div label="Title 2">
                <p style={{margin: 0}}>{text}</p>
                <p style={{margin: 0}}>{text}</p>
                <p style={{margin: 0}}>{text}</p>
              </div>
            </MoleculeAccordion>
          </div>
          <div
            style={{
              backgroundColor: '#fff',
              fontSize: 14,
              padding: 16,
              textAlign: 'left'
            }}
          >
            <MoleculeAccordion
              maxHeight={100}
              withAutoClose
              withTransition
              icon={icon}
            >
              <div label="Title">
                <p style={{margin: 0}}>{text}</p>
              </div>
              <div label="Title 2">
                <p style={{margin: 0}}>{text}</p>
                <p style={{margin: 0}}>{text}</p>
                <p style={{margin: 0}}>{text}</p>
              </div>
            </MoleculeAccordion>
          </div>
        </Demo>
        <Demo>
          <h2>Accordion without transition and no autoclose</h2>
          <div
            style={{
              backgroundColor: '#fff',
              fontSize: 14,
              padding: 16,
              textAlign: 'left'
            }}
          >
            <MoleculeAccordion
              maxHeight={300}
              withAutoClose={false}
              withTransition={false}
              icon={icon}
            >
              <div label="Title">
                <p style={{margin: 0}}>{text}</p>
              </div>
              <div label="Title 2">
                <p style={{margin: 0}}>{text}</p>
              </div>
            </MoleculeAccordion>
          </div>
        </Demo>
        <Demo>
          <h2>Accordion with auto height</h2>
          <div
            style={{
              backgroundColor: '#fff',
              fontSize: 14,
              padding: 16,
              textAlign: 'left'
            }}
          >
            <MoleculeAccordion
              autoHeight
              withAutoClose
              withTransition
              icon={icon}
            >
              <div label="Title">
                <p style={{margin: 0}}>{text}</p>
                <p style={{margin: 0}}>{text}</p>
                <p style={{margin: 0}}>{text}</p>
              </div>
              <div label="Title 2">
                <p style={{margin: 0}}>{text}</p>
              </div>
            </MoleculeAccordion>
          </div>
        </Demo>
        <Demo>
          <h2>Accordion with spacing between tabs</h2>
          <div
            style={{
              backgroundColor: '#fff',
              fontSize: 14,
              padding: 16,
              textAlign: 'left'
            }}
          >
            <MoleculeAccordion
              withGap
              maxHeight={100}
              withAutoClose
              withTransition
              icon={icon}
            >
              <div label="Title">
                <p style={{margin: 0}}>{text}</p>
              </div>
              <div label="Title 2">
                <p style={{margin: 0}}>{text}</p>
              </div>
            </MoleculeAccordion>
          </div>
        </Demo>
        <Demo>
          <h2>Accordion with multiline label</h2>
          <div
            style={{
              backgroundColor: '#fff',
              fontSize: 14,
              padding: 16,
              textAlign: 'left'
            }}
          >
            <MoleculeAccordion
              withGap
              maxHeight={100}
              withAutoClose
              withTransition
              icon={icon}
              withMultilineLabel
            >
              <div label="This title contains enough words to cause a line break">
                <p style={{margin: 0}}>{text}</p>
              </div>
              <div label="Title 2">
                <p style={{margin: 0}}>{text}</p>
              </div>
            </MoleculeAccordion>
          </div>
        </Demo>
        <Demo>
          <h2>Accordion with default opened tabs</h2>
          <div
            style={{
              backgroundColor: '#fff',
              fontSize: 14,
              padding: 16,
              textAlign: 'left'
            }}
          >
            <MoleculeAccordion icon={icon} defaultOpenedTabs={[0, 2]}>
              <div label="Title 1">
                <p style={{margin: 0}}>{text}</p>
              </div>
              <div label="Title 2">
                <p style={{margin: 0}}>{text}</p>
              </div>
              <div label="Title 3">
                <p style={{margin: 0}}>{text}</p>
              </div>
              <div label="Title 4">
                <p style={{margin: 0}}>{text}</p>
              </div>
            </MoleculeAccordion>
          </div>
        </Demo>
        <Demo>
          <h2>Accordion with react-node as titles</h2>
          <div
            style={{
              backgroundColor: '#fff',
              fontSize: 14,
              padding: 16,
              textAlign: 'left'
            }}
          >
            <MoleculeAccordion
              withGap
              maxHeight={100}
              withAutoClose
              withTransition
              icon={icon}
              withMultilineLabel
            >
              <div label={<h3 style={{margin: 0}}>H3 Title</h3>}>
                <p style={{margin: 0}}>{text}</p>
              </div>
              <div label={<h4 style={{margin: 0}}>H4 Title</h4>}>
                <p style={{margin: 0}}>{text}</p>
              </div>
              <div
                label={
                  <>
                    {customTitle}
                    <span style={{marginLeft: '8px'}}>
                      Title with Icon and Button
                    </span>
                    <button style={{marginLeft: '8px'}}>Button</button>
                  </>
                }
              >
                <p style={{margin: 0}}>{text}</p>
              </div>
            </MoleculeAccordion>
          </div>
        </Demo>
      </DemoWrapper>
    </div>
  )
}
