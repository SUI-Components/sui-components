/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */
import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

import {screen} from '@testing-library/react'

import json from '../package.json'
import * as pkg from '../src/index.js'

chai.use(chaiDOM)

describe(json.name, () => {
  const {default: Component} = pkg
  const setup = setupEnvironment(Component)

  it('library should include defined exported elements', () => {
    // Given
    const library = pkg
    const libraryExportedMembers = [
      'Modal',
      'Root',
      'OpenTrigger',
      'CloseTrigger',
      'Portal',
      'Content',
      'Header',
      'Title',
      'Description',
      'Body',
      'ScrollArea',
      'Footer',
      'Overlay',
      'CloseIconButton',
      'moleculeModalSizes',
      'moleculeModalAnimations',
      'default'
    ]

    // When
    const {
      Modal,
      Root,
      OpenTrigger,
      CloseTrigger,
      Portal,
      Content,
      Header,
      Title,
      Body,
      ScrollArea,
      Description,
      Footer,
      Overlay,
      CloseIconButton,
      moleculeModalSizes,
      moleculeModalAnimations,
      default: MoleculeModalDefault,
      ...others
    } = library

    // Then
    expect(Object.keys(library).length).to.equal(libraryExportedMembers.length)
    expect(Object.keys(library)).to.have.members(libraryExportedMembers)
    expect(Object.keys(others).length).to.equal(0)
  })

  describe(Component.displayName, () => {
    it('should render without crashing', () => {
      // Given
      const props = {
        children: (
          <>
            <Component.OpenTrigger>
              <button>open the dialog</button>
            </Component.OpenTrigger>
            <Component.Portal>
              <Component.Overlay />
              <Component.Content>
                <Component.Header>
                  <Component.Title>header</Component.Title>
                </Component.Header>
                <Component.Body>
                  <Component.Description>body</Component.Description>
                </Component.Body>
                <Component.Footer>
                  <Component.CloseTrigger>
                    <button>Close by Url</button>
                  </Component.CloseTrigger>
                </Component.Footer>
              </Component.Content>
            </Component.Portal>
          </>
        )
      }

      // When
      const component = <Component {...props} />

      // Then
      const div = document.createElement('div')
      ReactDOM.render(component, div)
      ReactDOM.unmountComponentAtNode(div)
    })

    it('should NOT render null', () => {
      // Given
      const props = {
        children: (
          <>
            <Component.OpenTrigger>
              <button>open the dialog</button>
            </Component.OpenTrigger>
            <Component.Portal>
              <Component.Overlay />
              <Component.Content>
                <Component.Header>
                  <Component.Title>header</Component.Title>
                </Component.Header>
                <Component.Body>
                  <Component.Description>body</Component.Description>
                </Component.Body>
                <Component.Footer>
                  <Component.CloseTrigger>
                    <button>Close by Url</button>
                  </Component.CloseTrigger>
                </Component.Footer>
              </Component.Content>
            </Component.Portal>
          </>
        )
      }

      // When
      const {container} = setup(props)

      // Then
      expect(container.innerHTML).to.be.a('string')
      expect(container.innerHTML).to.not.have.lengthOf(0)
    })

    it('should NOT extend classNames', () => {
      // Given
      const props = {
        className: 'extended-classNames',
        children: (
          <>
            <Component.OpenTrigger>
              <button>open the dialog</button>
            </Component.OpenTrigger>
            <Component.Portal>
              <Component.Overlay />
              <Component.Content>
                <Component.Header>
                  <Component.Title>header</Component.Title>
                </Component.Header>
                <Component.Body>
                  <Component.Description>body</Component.Description>
                </Component.Body>
                <Component.Footer>
                  <Component.CloseTrigger>
                    <button>Close by Url</button>
                  </Component.CloseTrigger>
                </Component.Footer>
              </Component.Content>
            </Component.Portal>
          </>
        )
      }
      const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

      // When
      const {container} = setup(props)
      const findClassName = findSentence(props.className)

      // Then
      expect(findClassName(container.innerHTML)).to.be.null
    })

    it('displayName', () => {
      // Given
      const library = pkg

      // When
      const {default: actual} = library

      // Then
      expect(actual.displayName).to.equal('MoleculeModal.Root')
    })

    describe('default.OpenTrigger', () => {
      const {Modal, OpenTrigger} = pkg
      const Component = ({...props}) => (
        <Modal>
          <OpenTrigger {...props} />
        </Modal>
      )
      const setup = setupEnvironment(Component)

      it('should render without crashing', () => {
        // Given
        const props = {
          children: <button>open the dialog</button>
        }

        // When
        const component = <Component {...props} />

        // Then
        const div = document.createElement('div')
        ReactDOM.render(component, div)
        ReactDOM.unmountComponentAtNode(div)
      })

      it('should NOT render null', () => {
        // Given
        const props = {
          children: <button>open the dialog</button>
        }

        // When
        const {container} = setup(props)

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.not.have.lengthOf(0)
      })

      it('should extend classNames', () => {
        // Given
        const props = {
          children: <button>open the dialog</button>,
          className: 'extended-classNames'
        }
        const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

        // When
        const {container} = setup(props)
        const findClassName = findSentence(props.className)

        // Then
        expect(findClassName(container.innerHTML)).to.not.be.null
      })

      it('displayName', () => {
        // Given
        const {displayName} = OpenTrigger

        // When

        // Then
        expect(displayName).to.equal('MoleculeModal.OpenTrigger')
      })
    })

    describe('default.CloseTrigger', () => {
      const {Modal, CloseTrigger} = pkg
      const Component = ({...props}) => (
        <Modal>
          <CloseTrigger {...props} />
        </Modal>
      )
      const setup = setupEnvironment(Component)

      it('should render without crashing', () => {
        // Given
        const props = {
          children: <button>close the dialog</button>
        }

        // When
        const component = <Component {...props} />

        // Then
        const div = document.createElement('div')
        ReactDOM.render(component, div)
        ReactDOM.unmountComponentAtNode(div)
      })

      it('should NOT render null', () => {
        // Given
        const props = {
          children: <button>close the dialog</button>
        }

        // When
        const {container} = setup(props)

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.not.have.lengthOf(0)
      })

      it('should extend classNames', () => {
        // Given
        const props = {
          children: <button>close the dialog</button>,
          className: 'extended-classNames'
        }
        const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

        // When
        const {container} = setup(props)
        const findClassName = findSentence(props.className)

        // Then
        expect(findClassName(container.innerHTML)).to.not.be.null
      })

      it('displayName', () => {
        // Given
        const {displayName} = CloseTrigger

        // When

        // Then
        expect(displayName).to.equal('MoleculeModal.CloseTrigger')
      })
    })

    describe('default.Portal', () => {
      const {Modal, Portal} = pkg
      const Component = ({...props}) => (
        <Modal>
          <Portal {...props} />
        </Modal>
      )
      const setup = setupEnvironment(Component)

      it('should render without crashing', () => {
        // Given
        const props = {
          children: 'content'
        }

        // When
        const component = <Component {...props} />

        // Then
        const div = document.createElement('div')
        ReactDOM.render(component, div)
        ReactDOM.unmountComponentAtNode(div)
      })

      it('should render null', () => {
        // Given
        const props = {
          children: 'content'
        }

        // When
        const {container} = setup(props)

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.have.lengthOf(0)
      })

      it('should NOT extend classNames', () => {
        // Given
        const props = {
          children: 'content',
          className: 'extended-classNames'
        }
        const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

        // When
        const {container} = setup(props)
        const findClassName = findSentence(props.className)

        // Then
        expect(findClassName(container.innerHTML)).to.be.null
      })

      it('displayName', () => {
        // Given
        const {displayName} = Portal

        // When

        // Then
        expect(displayName).to.equal('MoleculeModal.Portal')
      })
    })

    describe('default.Content', () => {
      const {Modal, Content, Portal, Header, Title, Body, Description, Overlay} = pkg
      const Component = ({...props}) => (
        <Modal isOpen>
          <Portal>
            <Content {...props} />
            <Overlay />
          </Portal>
        </Modal>
      )
      const setup = setupEnvironment(Component)

      it('should render without crashing', () => {
        // Given
        const props = {
          children: 'content'
        }

        // When
        const component = <Component {...props} />

        // Then
        const div = document.createElement('div')
        ReactDOM.render(component, div)
        ReactDOM.unmountComponentAtNode(div)
      })

      it('should NOT render null', () => {
        // Given
        const props = {
          children: 'content'
        }

        // When
        const {container} = setup(props)
        const dialog = screen.getByRole('dialog')

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.have.lengthOf(0)
        expect(dialog.innerHTML).to.be.a('string')
        expect(dialog.innerHTML).to.not.have.lengthOf(0)
      })

      it('should extend classNames', () => {
        // Given
        const props = {
          children: 'content',
          className: 'extended-classNames'
        }
        const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

        // When
        const {container} = setup(props)
        const dialog = screen.getByRole('dialog')
        const findClassName = findSentence(props.className)

        // Then
        expect(findClassName(container.innerHTML)).to.be.null
        expect(findClassName(dialog.outerHTML)).to.not.be.null
      })

      it('displayName', () => {
        // Given
        const {displayName} = Content

        // When

        // Then
        expect(displayName).to.equal('MoleculeModal.Content')
      })

      it('should NOT add Content when Portal forceMount is set to false', () => {
        // Given
        const setup = setupEnvironment(() => (
          <Modal isOpen>
            <Portal>
              <Content {...props} />
              <Overlay />
            </Portal>
          </Modal>
        ))
        const props = {
          'data-testid': 'content',
          forceMount: false,
          children: (
            <>
              <Header>
                <Title>title</Title>
              </Header>
              <Body>
                <Description>description</Description>
              </Body>
            </>
          )
        }

        // When
        const {container} = setup(props)

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.have.lengthOf(0)
        expect(function () {
          screen.getByTestId(props['data-testid'])
        }).to.throw()
      })

      it('should NOT add Content when Portal forceMount is set to true and Content forceMount prop is set to false', () => {
        // Given
        const setup = setupEnvironment(({...props}) => (
          <Modal>
            <Portal forceMount>
              <Content {...props} />
              <Overlay />
            </Portal>
          </Modal>
        ))
        const props = {
          'data-testid': 'content',
          forceMount: false,
          children: (
            <>
              <Header>
                <Title>title</Title>
              </Header>
              <Body>
                <Description>description</Description>
              </Body>
            </>
          )
        }

        // When
        const {container} = setup(props)

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.have.lengthOf(0)
        expect(function () {
          screen.getByTestId(props['data-testid'])
        }).to.throw()
      })
    })

    describe('default.Header', () => {
      const {Modal, Portal, Content, Header, Body, Description, Title} = pkg
      const Component = ({...props}) => (
        <Modal isOpen>
          <Portal>
            <Content>
              <Header {...props} />
              <Body>
                <Description>description</Description>
              </Body>
            </Content>
          </Portal>
        </Modal>
      )
      const setup = setupEnvironment(Component)

      it('should render without crashing', () => {
        // Given
        const props = {
          children: <Title>header</Title>
        }

        // When
        const component = <Component {...props} />

        // Then
        const div = document.createElement('div')
        ReactDOM.render(component, div)
        ReactDOM.unmountComponentAtNode(div)
      })

      it('should NOT render null', () => {
        // Given
        const props = {
          children: <Title>header</Title>
        }

        // When
        const {container} = setup(props)
        const dialog = screen.getByRole('dialog')

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.have.lengthOf(0)
        expect(dialog.innerHTML).to.be.a('string')
        expect(dialog.innerHTML).to.not.have.lengthOf(0)
      })

      it('should extend classNames', () => {
        // Given
        const props = {
          children: <Title>header</Title>,
          className: 'extended-classNames'
        }
        const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

        // When
        const {container} = setup(props)
        const dialog = screen.getByRole('dialog')
        const findClassName = findSentence(props.className)

        // Then
        expect(findClassName(container.innerHTML)).to.be.null
        expect(findClassName(dialog.innerHTML)).to.not.be.null
      })

      it('displayName', () => {
        // Given
        const {displayName} = Header

        // When

        // Then
        expect(displayName).to.equal('MoleculeModal.Header')
      })
    })

    describe('default.Title', () => {
      const {Modal, Portal, Content, Header, Body, Description, Title} = pkg
      const Component = ({...props}) => (
        <Modal isOpen>
          <Portal>
            <Content>
              <Header>
                <Title {...props}>title</Title>
              </Header>
              <Body>
                <Description>description</Description>
              </Body>
            </Content>
          </Portal>
        </Modal>
      )
      const setup = setupEnvironment(Component)

      it('should render without crashing', () => {
        // Given
        const props = {
          children: 'header'
        }

        // When
        const component = <Component {...props} />

        // Then
        const div = document.createElement('div')
        ReactDOM.render(component, div)
        ReactDOM.unmountComponentAtNode(div)
      })

      it('should NOT render null', () => {
        // Given
        const props = {
          children: 'header'
        }

        // When
        const {container} = setup(props)
        const dialog = screen.getByRole('dialog')

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.have.lengthOf(0)
        expect(dialog.innerHTML).to.be.a('string')
        expect(dialog.innerHTML).to.not.have.lengthOf(0)
      })

      it('should extend classNames', () => {
        // Given
        const props = {
          children: 'header',
          className: 'extended-classNames'
        }
        const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

        // When
        const {container} = setup(props)
        const dialog = screen.getByRole('dialog')
        const findClassName = findSentence(props.className)

        // Then
        expect(findClassName(container.innerHTML)).to.be.null
        expect(findClassName(dialog.innerHTML)).to.not.be.null
      })

      it('displayName', () => {
        // Given
        const {displayName} = Title

        // When

        // Then
        expect(displayName).to.equal('MoleculeModal.Title')
      })
    })

    describe('default.Body', () => {
      const {Modal, Portal, Content, Header, Body, Description, Title} = pkg
      const Component = ({...props}) => (
        <Modal isOpen>
          <Portal>
            <Content>
              <Header>
                <Title>title</Title>
              </Header>
              <Body {...props} />
            </Content>
          </Portal>
        </Modal>
      )
      const setup = setupEnvironment(Component)

      it('should render without crashing', () => {
        // Given
        const props = {
          children: <Description>body</Description>
        }

        // When
        const component = <Component {...props} />

        // Then
        const div = document.createElement('div')
        ReactDOM.render(component, div)
        ReactDOM.unmountComponentAtNode(div)
      })

      it('should NOT render null', () => {
        // Given
        const props = {
          children: <Description>body</Description>
        }

        // When
        const {container} = setup(props)
        const dialog = screen.getByRole('dialog')

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.have.lengthOf(0)
        expect(dialog.innerHTML).to.be.a('string')
        expect(dialog.innerHTML).to.not.have.lengthOf(0)
      })

      it('should extend classNames', () => {
        // Given
        const props = {
          children: <Description>body</Description>,
          className: 'extended-classNames'
        }
        const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

        // When
        const {container} = setup(props)
        const dialog = screen.getByRole('dialog')
        const findClassName = findSentence(props.className)

        // Then
        expect(findClassName(container.innerHTML)).to.be.null
        expect(findClassName(dialog.innerHTML)).to.not.be.null
      })

      it('displayName', () => {
        // Given
        const {displayName} = Body

        // When

        // Then
        expect(displayName).to.equal('MoleculeModal.Body')
      })
    })

    describe('default.ScrollArea', () => {
      const {Modal, Portal, Content, Header, Body, ScrollArea, Description, Title} = pkg
      const Component = ({...props}) => (
        <Modal isOpen>
          <Portal>
            <Content>
              <Header>
                <Title>title</Title>
              </Header>
              <Body>
                <ScrollArea {...props} />
              </Body>
            </Content>
          </Portal>
        </Modal>
      )
      const setup = setupEnvironment(Component)

      it('should render without crashing', () => {
        // Given
        const props = {
          children: <Description>'scroll-area'</Description>
        }

        // When
        const component = <Component {...props} />

        // Then
        const div = document.createElement('div')
        ReactDOM.render(component, div)
        ReactDOM.unmountComponentAtNode(div)
      })

      it('should NOT render null', () => {
        // Given
        const props = {
          children: <Description>'scroll-area'</Description>
        }

        // When
        const {container} = setup(props)
        const dialog = screen.getByRole('dialog')

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.have.lengthOf(0)
        expect(dialog.innerHTML).to.be.a('string')
        expect(dialog.innerHTML).to.not.have.lengthOf(0)
      })

      it('should extend classNames', () => {
        // Given
        const props = {
          children: <Description>'scroll-area'</Description>,
          className: 'extended-classNames'
        }
        const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

        // When
        const {container} = setup(props)
        const dialog = screen.getByRole('dialog')
        const findClassName = findSentence(props.className)

        // Then
        expect(findClassName(container.innerHTML)).to.be.null
        expect(findClassName(dialog.innerHTML)).to.not.be.null
      })

      it('displayName', () => {
        // Given
        const {displayName} = ScrollArea

        // When

        // Then
        expect(displayName).to.equal('MoleculeModal.ScrollArea')
      })
    })

    describe('default.Description', () => {
      const {Modal, Portal, Content, Header, Body, Description, Title} = pkg
      const Component = ({...props}) => (
        <Modal isOpen>
          <Portal>
            <Content>
              <Header>
                <Title>title</Title>
              </Header>
              <Body>
                <Description {...props} />
              </Body>
            </Content>
          </Portal>
        </Modal>
      )
      const setup = setupEnvironment(Component)

      it('should render without crashing', () => {
        // Given
        const props = {
          children: 'description'
        }

        // When
        const component = <Component {...props} />

        // Then
        const div = document.createElement('div')
        ReactDOM.render(component, div)
        ReactDOM.unmountComponentAtNode(div)
      })

      it('should NOT render null', () => {
        // Given
        const props = {
          children: 'description'
        }

        // When
        const {container} = setup(props)
        const dialog = screen.getByRole('dialog')

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.have.lengthOf(0)
        expect(dialog.innerHTML).to.be.a('string')
        expect(dialog.innerHTML).to.not.have.lengthOf(0)
      })

      it('should extend classNames', () => {
        // Given
        const props = {
          children: 'description',
          className: 'extended-classNames'
        }
        const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

        // When
        const {container} = setup(props)
        const dialog = screen.getByRole('dialog')
        const findClassName = findSentence(props.className)

        // Then
        expect(findClassName(container.innerHTML)).to.be.null
        expect(findClassName(dialog.innerHTML)).to.not.be.null
      })

      it('displayName', () => {
        // Given
        const {displayName} = Description

        // When

        // Then
        expect(displayName).to.equal('MoleculeModal.Description')
      })
    })

    describe('default.Footer', () => {
      const {Modal, Portal, Content, Header, Body, Description, Title, Footer} = pkg
      const Component = ({...props}) => (
        <Modal isOpen>
          <Portal>
            <Content>
              <Header>
                <Title>title</Title>
              </Header>
              <Body>
                <Description>description</Description>
              </Body>
              <Footer {...props} />
            </Content>
          </Portal>
        </Modal>
      )
      const setup = setupEnvironment(Component)

      it('should render without crashing', () => {
        // Given
        const props = {
          children: 'footer'
        }

        // When
        const component = <Component {...props} />

        // Then
        const div = document.createElement('div')
        ReactDOM.render(component, div)
        ReactDOM.unmountComponentAtNode(div)
      })

      it('should NOT render null', () => {
        // Given
        const props = {
          children: 'footer'
        }

        // When
        const {container} = setup(props)
        const dialog = screen.getByRole('dialog')

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.have.lengthOf(0)
        expect(dialog.innerHTML).to.be.a('string')
        expect(dialog.innerHTML).to.not.have.lengthOf(0)
      })

      it('should extend classNames', () => {
        // Given
        const props = {
          children: 'footer',
          className: 'extended-classNames'
        }
        const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

        // When
        const {container} = setup(props)
        const dialog = screen.getByRole('dialog')
        const findClassName = findSentence(props.className)

        // Then
        expect(findClassName(container.innerHTML)).to.be.null
        expect(findClassName(dialog.innerHTML)).to.not.be.null
      })

      it('displayName', () => {
        // Given
        const {displayName} = Footer

        // When

        // Then
        expect(displayName).to.equal('MoleculeModal.Footer')
      })
    })

    describe('default.Overlay', () => {
      const {Modal, Portal, Content, Header, Body, Description, Title, Overlay} = pkg
      const Component = ({...props}) => (
        <Modal isOpen>
          <Portal>
            <Content>
              <Header>
                <Title>title</Title>
              </Header>
              <Body>
                <Description>description</Description>
              </Body>
            </Content>
            <Overlay {...props} />
          </Portal>
        </Modal>
      )
      const setup = setupEnvironment(Component)

      it('should render without crashing', () => {
        // Given
        const props = {
          'data-testid': 'overlay'
        }

        // When
        const component = <Component {...props} />

        // Then
        const div = document.createElement('div')
        ReactDOM.render(component, div)
        ReactDOM.unmountComponentAtNode(div)
      })

      it('should NOT render null', () => {
        // Given
        const props = {
          'data-testid': 'overlay'
        }

        // When
        const {container} = setup(props)
        const overlay = screen.getByTestId(props['data-testid'])

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.have.lengthOf(0)
        expect(overlay.innerHTML).to.be.a('string')
        expect(overlay.outerHTML).to.not.have.lengthOf(0)
      })

      it('should extend classNames', () => {
        // Given
        const props = {
          'data-testid': 'overlay',
          className: 'extended-classNames'
        }
        const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

        // When
        const {container} = setup(props)
        const overlay = screen.getByTestId(props['data-testid'])
        const findClassName = findSentence(props.className)

        // Then
        expect(findClassName(container.innerHTML)).to.be.null
        expect(findClassName(overlay.outerHTML)).to.not.be.null
      })

      it('displayName', () => {
        // Given
        const {displayName} = Overlay

        // When

        // Then
        expect(displayName).to.equal('MoleculeModal.Overlay')
      })

      it('should add Overlay when Portal forceMount is set to true', () => {
        // Given
        const setup = setupEnvironment(() => (
          <Modal>
            <Portal forceMount>
              <Content>
                <Header>
                  <Title>title</Title>
                </Header>
                <Body>
                  <Description>description</Description>
                </Body>
              </Content>
              <Overlay {...props} />
            </Portal>
          </Modal>
        ))
        const props = {
          'data-testid': 'overlay'
        }

        // When
        const {container} = setup(props)
        const overlay = screen.getByTestId(props['data-testid'])

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.have.lengthOf(0)
        expect(overlay.innerHTML).to.be.a('string')
        expect(overlay.outerHTML).to.not.have.lengthOf(0)
      })

      it('should NOT add Overlay when Portal forceMount is set to true and Overlay forceMount prop is set to false', () => {
        // Given
        const setup = setupEnvironment(({...props}) => (
          <Modal>
            <Portal forceMount>
              <Content>
                <Header>
                  <Title>title</Title>
                </Header>
                <Body>
                  <Description>description</Description>
                </Body>
              </Content>
              <Overlay {...props} />
            </Portal>
          </Modal>
        ))
        const props = {
          'data-testid': 'overlay',
          forceMount: false
        }

        // When
        const {container} = setup(props)

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.have.lengthOf(0)
        expect(function () {
          screen.getByTestId(props['data-testid'])
        }).to.throw()
      })
    })

    describe('default.CloseIconButton', () => {
      const {Modal, Portal, Content, Header, Body, Description, Title, Overlay, CloseIconButton} = pkg
      const Component = ({...props}) => (
        <Modal isOpen>
          <Portal>
            <Content>
              <Header>
                <Title>title</Title>
              </Header>
              <Body>
                <Description>description</Description>
              </Body>
              <CloseIconButton {...props} />
            </Content>
          </Portal>
        </Modal>
      )
      const setup = setupEnvironment(Component)

      it('should render without crashing', () => {
        // Given
        const props = {}

        // When
        const component = <Component {...props} />

        // Then
        const div = document.createElement('div')
        ReactDOM.render(component, div)
        ReactDOM.unmountComponentAtNode(div)
      })

      it('should NOT render null', () => {
        // Given
        const props = {
          'data-testid': 'close-icon-button'
        }

        // When
        const {container} = setup(props)
        const closeIconButton = screen.getByTestId(props['data-testid'])

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.have.lengthOf(0)
        expect(closeIconButton.innerHTML).to.be.a('string')
        expect(closeIconButton.innerHTML).to.not.have.lengthOf(0)
      })

      it('should extend classNames', () => {
        // Given
        const props = {
          'data-testid': 'overlay',
          className: 'extended-classNames'
        }
        const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

        // When
        const {container} = setup(props)
        const overlay = screen.getByTestId(props['data-testid'])
        const findClassName = findSentence(props.className)

        // Then
        expect(findClassName(container.innerHTML)).to.be.null
        expect(findClassName(overlay.outerHTML)).to.not.be.null
      })

      it('displayName', () => {
        // Given
        const {displayName} = Overlay

        // When

        // Then
        expect(displayName).to.equal('MoleculeModal.Overlay')
      })
    })

    describe('interactions', () => {
      const {Modal, OpenTrigger, Portal, Content, Header, Body, Description, Title, Footer, CloseTrigger} = pkg
      const Component = ({...props}) => (
        <Modal>
          <OpenTrigger>
            <button>open</button>
          </OpenTrigger>
          <Portal>
            <Content>
              <Header>
                <Title>title</Title>
              </Header>
              <Body>
                <Description {...props} />
              </Body>
              <Footer>
                <CloseTrigger>
                  <button>close modal</button>
                </CloseTrigger>
              </Footer>
            </Content>
          </Portal>
        </Modal>
      )
      const setup = setupEnvironment(Component)

      it('should open when clicking on OpenTrigger', () => {
        // Given
        const props = {
          children: 'description'
        }

        // When
        const {getByRole} = setup(props)

        // Then
        expect(getByRole('button')).to.not.be.null
        expect(function () {
          screen.getByRole('dialog')
        }).to.throw()

        // And

        // When
        const openTrigger = getByRole('button')
        openTrigger.click()

        // Then
        expect(function () {
          screen.getByRole('dialog')
        }).to.not.throw()
      })

      it('should open when clicking on OpenTrigger and Close when clicking on CloseTrigger', () => {
        // Given
        const props = {
          children: 'description'
        }

        // When
        const {getByRole} = setup(props)

        // Then
        expect(getByRole('button')).to.not.be.null
        expect(function () {
          screen.getByRole('dialog')
        }).to.throw()

        // And

        // When
        const openTrigger = getByRole('button', {
          name: /open/i
        })
        openTrigger.click()

        // Then
        expect(function () {
          screen.getByRole('dialog')
        }).to.not.throw()

        // And

        // Given
        const closeTrigger = screen.getByRole('button', {
          name: /close modal/i
        })

        // When
        closeTrigger.click()

        // Then
        expect(function () {
          screen.getByRole('dialog')
        }).to.throw()
      })
    })
  })

  describe('moleculeModalSizes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {moleculeModalSizes: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        XSMALL: 'xsmall',
        SMALL: 'small',
        MEDIUM: 'medium',
        LARGE: 'large',
        FULL: 'full'
      }

      // When
      const {moleculeModalSizes: actual} = library
      const {XSMALL, SMALL, MEDIUM, LARGE, FULL, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('moleculeModalAnimations', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {moleculeModalAnimations: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        FADE: 'fade',
        SLIDE: 'slide',
        BLOOM: 'bloom',
        NONE: 'none'
      }

      // When
      const {moleculeModalAnimations: actual} = library
      const {FADE, SLIDE, BLOOM, NONE, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })
})
