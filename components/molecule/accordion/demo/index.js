import PropTypes from 'prop-types'

import MoleculeAccordion from '../src/index.js'

const Demo = ({children}) => {
  return <div style={{width: '100%', padding: 20}}>{children}</div>
}

Demo.propTypes = {
  children: PropTypes.node
}

const DemoWrapper = ({children}) => {
  return <div style={{display: 'flex', flexWrap: 'wrap'}}>{children}</div>
}

DemoWrapper.propTypes = {
  children: PropTypes.node
}

export default () => {
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum magna non diam euismod blandit et eu ex. Vivamus pulvinar sodales tincidunt. Proin venenatis tristique quam, quis vehicula eros volutpat sed. Etiam sed tristique ante. Aenean commodo erat quis pulvinar luctus. Pellentesque ultricies lorem vitae ante euismod, at imperdiet est euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In dignissim porttitor sem, a varius nisl ullamcorper ut. Vivamus lacinia, quam eu placerat tempus, velit massa vulputate turpis, sit amet bibendum risus massa sit amet urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent finibus lobortis blandit. Vivamus scelerisque blandit purus a suscipit. Nunc mi elit, condimentum eget pulvinar eu, lacinia vitae ligula. Sed sit amet eros auctor ipsum tincidunt hendrerit ac mollis justo. Ut ac sagittis ipsum.'

  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="16px"
      height="16px"
      viewBox="0 0 32 32"
    >
      <path d="M30,9l1,1c1,1,1,2,0,2L17,25c-1,1-2,1-2,0 L2,12c-1-1-1-2,0-2l1-1c1-1,2-1,2,0L16,20L28,9 C28,8,29,8,30,9z" />
    </svg>
  )
  const customTitle = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 8 8"
    >
      <path d="M4 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-1.5 1.78l1.5 1.5 1.5-1.5.72.72-1.5 1.5 1.5 1.5-.72.72-1.5-1.5-1.5 1.5-.72-.72 1.5-1.5-1.5-1.5.72-.72z" />
    </svg>
  )

  return (
    <div>
      <h1>Accordion</h1>
      <DemoWrapper>
        <Demo>
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
