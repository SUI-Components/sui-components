/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import {createRef} from 'react'
import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

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
      'atomPanelHorizontalAlign',
      'atomPanelVerticalAlign',
      'atomPanelColors',
      'atomPanelAlpha',
      'atomPanelRounded',
      'atomPanelElevation',
      'default'
    ]

    // When
    const {
      atomPanelHorizontalAlign,
      atomPanelVerticalAlign,
      atomPanelColors,
      atomPanelAlpha,
      atomPanelRounded,
      atomPanelElevation,
      default: AtomPanel,
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
        children: <>children</>
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
        children: <>children</>
      }

      // When
      const {container} = setup(props)

      // Then
      expect(container.innerHTML).to.be.a('string')
      expect(container.innerHTML).to.not.have.lengthOf(0)
    })

    it('should extend classNames', () => {
      // Given
      const props = {className: 'extended-classNames'}
      const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

      // When
      const {container} = setup(props)
      const findClassName = findSentence(props.className)

      // Then
      expect(findClassName(container.innerHTML)).to.not.be.null
    })

    describe('forwardRef', () => {
      it('should return forwardRef html DIV element when giving a ref to the component', () => {
        // Given
        const props = {}
        const ref = createRef()

        // When
        const component = <Component {...props} ref={ref} />
        const div = document.createElement('div')
        ReactDOM.render(component, div)

        // Then
        expect(ref.current).to.not.equal(undefined)
        expect(ref.current.nodeName).to.equal('DIV')
      })

      it('should return forwardRef html DIV element when giving a ref to the component', () => {
        // Given
        const props = {
          src: '#'
        }
        const ref = createRef()

        // When
        const component = <Component {...props} ref={ref} />
        const div = document.createElement('div')
        ReactDOM.render(component, div)

        // Then
        expect(ref.current).to.not.equal(undefined)
        expect(ref.current.nodeName).to.equal('DIV')
      })
    })

    describe('ColorPanel', () => {
      it('should render without crashing', () => {
        // Given
        const props = {
          children: <>children</>
        }

        // When
        const component = <Component {...props} />

        // Then
        const div = document.createElement('div')
        ReactDOM.render(component, div)
        ReactDOM.unmountComponentAtNode(div)
      })

      it('should add elevation if its defined in props', () => {
        // Given
        const props = {elevation: pkg.atomPanelElevation.S}
        const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

        // When
        const {container} = setup(props)
        const findClassName = findSentence(`sui-atom-panel--elevation-s`)

        // Then
        expect(findClassName(container.innerHTML)).to.be.not.null
      })

      it('should add rounded if its defined in props', () => {
        // Given
        const props = {rounded: pkg.atomPanelRounded.M}
        const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

        // When
        const {container} = setup(props)
        const findClassName = findSentence(`sui-atom-panel--rounded-m`)

        // Then
        expect(findClassName(container.innerHTML)).to.be.not.null
      })
    })
    describe('ImagePanel', () => {
      it('should render without crashing', () => {
        // Given
        const props = {
          src: '#',
          children: <>children</>
        }

        // When
        const component = <Component {...props} />

        // Then
        const div = document.createElement('div')
        ReactDOM.render(component, div)
        ReactDOM.unmountComponentAtNode(div)
      })

      it('should NOT add overlayAlpha if its defined in props only the overlay', () => {
        // Given
        const props = {src: '#', overlayAlpha: pkg.atomPanelAlpha.OVERLAY_D1}
        const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

        // When
        const {container} = setup(props)
        const findClassName = findSentence(`sui-atom-panel--accent-overlay-${pkg.atomPanelAlpha.OVERLAY_D1}`)

        // Then
        expect(findClassName(container.innerHTML)).to.be.null
      })

      it('should add overlayAlpha if its defined in props the overlay and the color', () => {
        // Given
        const props = {
          src: '#',
          overlayAlpha: pkg.atomPanelAlpha.OVERLAY_D1,
          overlayColor: pkg.atomPanelColors.ACCENT
        }
        const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

        // When
        const {container} = setup(props)
        const findClassName = findSentence(
          `sui-atom-panel--${pkg.atomPanelColors.ACCENT}-overlay-${pkg.atomPanelAlpha.OVERLAY_D1}`
        )

        // Then
        expect(findClassName(container.innerHTML)).to.be.not.null
      })

      it('should add overlayColor if its defined in props', () => {
        // Given
        const props = {src: '#', overlayColor: pkg.atomPanelColors.BASE}
        const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

        // When
        const {container} = setup(props)
        const findClassName = findSentence(`sui-atom-panel--${pkg.atomPanelColors.BASE}-overlay-100`)

        // Then
        expect(`sui-atom-panel--${pkg.atomPanelColors.BASE}-overlay-100`).to.equal(
          `sui-atom-panel--${'base'}-overlay-100`
        )
        expect(findClassName(container.innerHTML)).to.be.not.null
      })

      it('should add elevation if its defined in props', () => {
        // Given
        const props = {src: '#', elevation: pkg.atomPanelElevation.S}
        const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

        // When
        const {container} = setup(props)
        const findClassName = findSentence(`sui-atom-panel--elevation-s`)

        // Then
        expect(findClassName(container.innerHTML)).to.be.not.null
      })

      it('should add rounded if its defined in props', () => {
        // Given
        const props = {src: '#', rounded: pkg.atomPanelRounded.M}
        const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

        // When
        const {container} = setup(props)
        const findClassName = findSentence(`sui-atom-panel--rounded-m`)

        // Then
        expect(findClassName(container.innerHTML)).to.be.not.null
      })

      it('should add resized if its defined in props', () => {
        // Given
        const props = {src: '#', resized: true}
        const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

        // When
        const {container} = setup(props)
        const findClassName = findSentence(`sui-atom-panel-image--resized`)

        // Then
        expect(findClassName(container.innerHTML)).to.be.not.null
      })
    })

    describe('atomPanelHorizontalAlign', () => {
      it('value must be an object enum', () => {
        // Given
        const library = pkg

        // When
        const {atomPanelHorizontalAlign: actual} = library

        // Then
        expect(actual).to.be.an('object')
      })

      it('value must be a defined string-key pair filled', () => {
        // Given
        const library = pkg
        const expected = {
          LEFT: 'left',
          CENTER: 'center',
          RIGHT: 'right'
        }

        // When
        const {atomPanelHorizontalAlign: actual} = library
        const {LEFT, CENTER, RIGHT, ...others} = actual

        // Then
        expect(Object.keys(others).length).to.equal(0)
        expect(Object.keys(actual)).to.have.members(Object.keys(expected))
        Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
          expect(Object.keys(actual).includes(expectedKey)).to.be.true
          expect(actual[expectedKey]).to.equal(expectedValue)
        })
      })
    })

    describe('atomPanelVerticalAlign', () => {
      it('value must be an object enum', () => {
        // Given
        const library = pkg

        // When
        const {atomPanelVerticalAlign: actual} = library

        // Then
        expect(actual).to.be.an('object')
      })

      it('value must be a defined string-key pair filled', () => {
        // Given
        const library = pkg
        const expected = {
          TOP: 'top',
          CENTER: 'center',
          BOTTOM: 'bottom'
        }

        // When
        const {atomPanelVerticalAlign: actual} = library
        const {TOP, CENTER, BOTTOM, ...others} = actual

        // Then
        expect(Object.keys(others).length).to.equal(0)
        expect(Object.keys(actual)).to.have.members(Object.keys(expected))
        Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
          expect(Object.keys(actual).includes(expectedKey)).to.be.true
          expect(actual[expectedKey]).to.equal(expectedValue)
        })
      })
    })

    describe('atomPanelColors', () => {
      it('value must be an object enum', () => {
        // Given
        const library = pkg

        // When
        const {atomPanelColors: actual} = library

        // Then
        expect(actual).to.be.an('object')
      })

      it('value must be a defined string-key pair filled', () => {
        // Given
        const library = pkg
        const expected = {
          CANVAS: 'canvas',
          ACCENT: 'accent',
          BASE: 'base',
          DARK: 'dark',
          CONTRAST: 'contrast',
          CORPORATE: 'corporate',
          DEFAULT: 'default',
          HIGHLIGHT: 'highlight',
          SUCCESS: 'success',
          ALERT: 'alert',
          ERROR: 'error'
        }

        // When
        const {atomPanelColors: actual} = library
        const {CANVAS, ACCENT, BASE, DARK, CONTRAST, CORPORATE, DEFAULT, HIGHLIGHT, SUCCESS, ALERT, ERROR, ...others} =
          actual

        // Then
        expect(Object.keys(others).length).to.equal(0)
        expect(Object.keys(actual)).to.have.members(Object.keys(expected))
        Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
          expect(Object.keys(actual).includes(expectedKey)).to.be.true
          expect(actual[expectedKey]).to.equal(expectedValue)
        })
      })
    })

    describe('atomPanelAlpha', () => {
      it('value must be an object enum', () => {
        // Given
        const library = pkg

        // When
        const {atomPanelAlpha: actual} = library

        // Then
        expect(actual).to.be.an('object')
      })

      it('value must be a defined string-key pair filled', () => {
        // Given
        const library = pkg
        const expected = {
          CONTRAST: '100',
          OVERLAY_D4: '75',
          OVERLAY_D3: '50',
          OVERLAY_D2: '25',
          OVERLAY_D1: '15'
        }

        // When
        const {atomPanelAlpha: actual} = library
        const {CONTRAST, OVERLAY_D4, OVERLAY_D3, OVERLAY_D2, OVERLAY_D1, ...others} = actual

        // Then
        expect(Object.keys(others).length).to.equal(0)
        expect(Object.keys(actual)).to.have.members(Object.keys(expected))
        Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
          expect(Object.keys(actual).includes(expectedKey)).to.be.true
          expect(actual[expectedKey]).to.equal(expectedValue)
        })
      })
    })

    describe('atomPanelRounded', () => {
      it('value must be an object enum', () => {
        // Given
        const library = pkg

        // When
        const {atomPanelRounded: actual} = library

        // Then
        expect(actual).to.be.an('object')
      })

      it('value must be a defined string-key pair filled', () => {
        // Given
        const library = pkg
        const expected = {
          NONE: 'none',
          M: 'm',
          L: 'l',
          XL: 'xl',
          XXL: 'xxl',
          GIANT: 'giant'
        }

        // When
        const {atomPanelRounded: actual} = library
        const {NONE, M, L, XL, XXL, GIANT, ...others} = actual

        // Then
        expect(Object.keys(others).length).to.equal(0)
        expect(Object.keys(actual)).to.have.members(Object.keys(expected))
        Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
          expect(Object.keys(actual).includes(expectedKey)).to.be.true
          expect(actual[expectedKey]).to.equal(expectedValue)
        })
      })
    })

    describe('atomPanelElevation', () => {
      it('value must be an object enum', () => {
        // Given
        const library = pkg

        // When
        const {atomPanelElevation: actual} = library

        // Then
        expect(actual).to.be.an('object')
      })

      it('value must be a defined string-key pair filled', () => {
        // Given
        const library = pkg
        const expected = {
          NONE: 'none',
          S: 's',
          M: 'm',
          L: 'l'
        }

        // When
        const {atomPanelElevation: actual} = library
        const {NONE, S, M, L, ...others} = actual

        // Then
        expect(Object.keys(others).length).to.equal(0)
        expect(Object.keys(actual)).to.have.members(Object.keys(expected))
        Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
          expect(Object.keys(actual).includes(expectedKey)).to.be.true
          expect(actual[expectedKey]).to.equal(expectedValue)
        })
      })
    })

    // atomPanelElevation
  })

  describe('atomPanelHorizontalAlign', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomPanelHorizontalAlign: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        LEFT: 'left',
        CENTER: 'center',
        RIGHT: 'right'
      }

      // When
      const {atomPanelHorizontalAlign: actual} = library
      const {LEFT, CENTER, RIGHT, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('atomPanelVerticalAlign', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomPanelVerticalAlign: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        TOP: 'top',
        CENTER: 'center',
        BOTTOM: 'bottom'
      }

      // When
      const {atomPanelVerticalAlign: actual} = library
      const {TOP, CENTER, BOTTOM, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })
  describe('atomPanelColors', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomPanelColors: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        CANVAS: 'canvas',
        ACCENT: 'accent',
        BASE: 'base',
        DARK: 'dark',
        CONTRAST: 'contrast',
        CORPORATE: 'corporate',
        DEFAULT: 'default',
        HIGHLIGHT: 'highlight',
        SUCCESS: 'success',
        ALERT: 'alert',
        ERROR: 'error'
      }

      // When
      const {atomPanelColors: actual} = library
      const {CANVAS, ACCENT, BASE, DARK, CONTRAST, CORPORATE, DEFAULT, HIGHLIGHT, SUCCESS, ALERT, ERROR, ...others} =
        actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })
  describe('atomPanelAlpha', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomPanelAlpha: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        CONTRAST: '100',
        OVERLAY_D4: '75',
        OVERLAY_D3: '50',
        OVERLAY_D2: '25',
        OVERLAY_D1: '15'
      }

      // When
      const {atomPanelAlpha: actual} = library
      const {CONTRAST, OVERLAY_D4, OVERLAY_D3, OVERLAY_D2, OVERLAY_D1, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })
  describe('atomPanelRounded', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomPanelRounded: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        NONE: 'none',
        M: 'm',
        L: 'l',
        XL: 'xl',
        XXL: 'xxl',
        GIANT: 'giant'
      }

      // When
      const {atomPanelRounded: actual} = library

      const {NONE, M, L, XL, XXL, GIANT, ...others} = actual
      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })
  describe('atomPanelElevation', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomPanelElevation: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        NONE: 'none',
        S: 's',
        M: 'm',
        L: 'l'
      }

      // When
      const {atomPanelElevation: actual} = library
      const {NONE, S, M, L, ...others} = actual

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
