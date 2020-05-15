/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */

import React from 'react'
import ReactDOM from 'react-dom'
import {render} from '@testing-library/react'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

import BehaviorDevice, {
  setUA,
  useDeviceType
} from '../../../components/behavior/device/src/index'

chai.use(chaiDOM)

const setupBuilder = Component => props => {
  const container = document.createElement('div')
  container.setAttribute('id', 'test-container')
  const utils = render(<Component {...props} />, {
    container: document.body.appendChild(container)
  })
  return utils
}

describe('behavior/BehaviorDevice', () => {
  const setup = setupBuilder(BehaviorDevice)
  it('should render without crashing', () => {
    // Given
    const props = {
      children: 'hello world'
    }

    // When
    const component = <BehaviorDevice {...props} />

    // Then
    const div = document.createElement('div')
    ReactDOM.render(component, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('should NOT render hmtl', () => {
    // Given
    const props = {
      children: 'hello world'
    }

    // When
    const {container} = setup(props)

    // Then
    expect(container.innerHTML).to.be.a('string')
    expect(container.innerHTML).to.have.lengthOf(props.children.length)
  })

  it('should receive the deviceType forced behavior', () => {
    // Given
    const DeviceTypeTenderer = ({deviceType}) => `${deviceType}`
    const props = {
      children: <DeviceTypeTenderer />,
      deviceType: 'console'
    }

    // When
    const {container} = setup(props)

    // Then
    expect(container.innerHTML).to.be.a('string')
    expect(container.innerHTML).to.have.lengthOf(props.deviceType.length)
  })

  describe('Hook useDeviceType', () => {
    describe('use attribute UseAgent', () => {
      it('should receive the deviceType mobile giving a forced iphone userAgentString', () => {
        // Given
        const userAgentString =
          'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1'
        const UserAgent = setUA(userAgentString)
        const expected = {
          deviceType: 'mobile',
          is: {
            isConsole: false,
            isDesktop: false,
            isMobile: true,
            isTablet: false,
            isSmartTv: false,
            isWearable: false
          }
        }

        // when
        const [device, is] = useDeviceType(null, UserAgent)

        // Then
        expect(device).to.equal(expected.deviceType)
        expect(is).to.include(expected.is)
      })
      it('should receive the deviceType desktop giving a forced Mozilla Browser userAgentString', () => {
        // Given
        const userAgentString =
          'Mozilla/5.0 CK={} (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko'
        const UserAgent = setUA(userAgentString)
        const expected = {
          deviceType: 'desktop',
          is: {
            isConsole: false,
            isDesktop: true,
            isMobile: false,
            isTablet: false,
            isSmartTv: false,
            isWearable: false
          }
        }

        // when
        const [device, is] = useDeviceType(null, UserAgent)

        // Then
        expect(device).to.equal(expected.deviceType)
        expect(is).to.include(expected.is)
      })
      it('should receive the deviceType tablet giving a forced galaxy Tab userAgentString', () => {
        // Given
        const userAgentString =
          'Mozilla/5.0 (Linux; Android 4.4.4; SM-T560 Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.111 Safari/537.36'
        const UserAgent = setUA(userAgentString)
        const expected = {
          deviceType: 'tablet',
          is: {
            isConsole: false,
            isDesktop: false,
            isMobile: false,
            isTablet: true,
            isSmartTv: false,
            isWearable: false
          }
        }

        // when
        const [device, is] = useDeviceType(null, UserAgent)

        // Then
        expect(device).to.equal(expected.deviceType)
        expect(is).to.include(expected.is)
      })
      it('should receive the deviceType console giving a forced PlayStation 4 Web Browser userAgentString', () => {
        // Given
        const userAgentString =
          'Mozilla/5.0 (PlayStation 4 5.55) AppleWebKit/601.2 (KHTML, like Gecko)'
        const UserAgent = setUA(userAgentString)
        const expected = {
          deviceType: 'console',
          is: {
            isConsole: true,
            isDesktop: false,
            isMobile: false,
            isTablet: false,
            isSmartTv: false,
            isWearable: false
          }
        }

        // when
        const [device, is] = useDeviceType(null, UserAgent)

        // Then
        expect(device).to.equal(expected.deviceType)
        expect(is).to.include(expected.is)
      })
    })
    describe('use attribute deviceType', () => {
      it('should receive the deviceType mobile giving a forced mobile deviceType', () => {
        // Given
        const deviceType = 'mobile'
        const expected = {
          deviceType: 'mobile',
          is: {
            isConsole: false,
            isDesktop: false,
            isMobile: true,
            isTablet: false,
            isSmartTv: false,
            isWearable: false
          }
        }

        // when
        const [device, is] = useDeviceType(deviceType)

        // Then
        expect(device).to.equal(expected.deviceType)
        expect(is).to.include(expected.is)
      })
      it('should receive the deviceType desktop giving a forced desktop deviceType', () => {
        // Given
        const deviceType = 'desktop'
        const expected = {
          deviceType: 'desktop',
          is: {
            isConsole: false,
            isDesktop: true,
            isMobile: false,
            isTablet: false,
            isSmartTv: false,
            isWearable: false
          }
        }

        // when
        const [device, is] = useDeviceType(deviceType)

        // Then
        expect(device).to.equal(expected.deviceType)
        expect(is).to.include(expected.is)
      })
      it('should receive the deviceType tablet giving a forced tablet deviceType', () => {
        // Given
        const deviceType = 'tablet'
        const expected = {
          deviceType: 'tablet',
          is: {
            isConsole: false,
            isDesktop: false,
            isMobile: false,
            isTablet: true,
            isSmartTv: false,
            isWearable: false
          }
        }

        // when
        const [device, is] = useDeviceType(deviceType)

        // Then
        expect(device).to.equal(expected.deviceType)
        expect(is).to.include(expected.is)
      })
      it('should receive the deviceType console giving a forced console deviceType', () => {
        // Given
        const deviceType = 'console'
        const expected = {
          deviceType: 'console',
          is: {
            isConsole: true,
            isDesktop: false,
            isMobile: false,
            isTablet: false,
            isSmartTv: false,
            isWearable: false
          }
        }

        // when
        const [device, is] = useDeviceType(deviceType)

        // Then
        expect(device).to.equal(expected.deviceType)
        expect(is).to.include(expected.is)
      })
    })

    describe('use both attributes', () => {
      it('should priorize forced deviceType over UserAgent', () => {
        // Given
        const userAgentString =
          'Mozilla/5.0 (PlayStation 4 5.55) AppleWebKit/601.2 (KHTML, like Gecko)'
        const UserAgent = setUA(userAgentString)
        const deviceType = 'mobile'
        const expected = {
          deviceType: 'mobile',
          is: {
            isConsole: false,
            isDesktop: false,
            isMobile: true,
            isTablet: false,
            isSmartTv: false,
            isWearable: false
          }
        }

        // when
        const [device, is] = useDeviceType(deviceType, UserAgent)

        // Then
        expect(device).to.equal(expected.deviceType)
        expect(is).to.include(expected.is)
      })
    })
  })
  describe('View Components', () => {
    describe('BehaviorDevice.CustomView', () => {
      const setup = setupBuilder(BehaviorDevice.CustomView)
      it('should render without crashing', () => {
        // Given
        const props = {
          children: 'hello world'
        }

        // When
        const component = <BehaviorDevice.CustomView {...props} />

        // Then
        const div = document.createElement('div')
        ReactDOM.render(component, div)
        ReactDOM.unmountComponentAtNode(div)
      })

      it('should NOT render inner hmtl', () => {
        // Given
        const props = {
          children: 'hello world'
        }

        // When
        const {container} = setup(props)

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.have.lengthOf(0)
      })

      it('should render inner hmtl for true condition prop', () => {
        // Given
        const props = {
          children: 'hello world',
          condition: true
        }

        // When
        const {container} = setup(props)

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.have.lengthOf(props.children.length)
      })

      it('should render inner hmtl for callback true condition prop', () => {
        // Given
        const props = {
          children: 'hello world',
          deviceType: 'mobile',
          condition: ([, {isMobile}]) => isMobile
        }

        // When
        const {container} = setup(props)

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.have.lengthOf(props.children.length)
      })
    })
    describe('BehaviorDevice.ConsoleView', () => {
      const setup = setupBuilder(BehaviorDevice.ConsoleView)
      it('should render without crashing', () => {
        // Given
        const props = {
          children: 'hello world'
        }

        // When
        const component = <BehaviorDevice.ConsoleView {...props} />

        // Then
        const div = document.createElement('div')
        ReactDOM.render(component, div)
        ReactDOM.unmountComponentAtNode(div)
      })

      it('should NOT render inner hmtl if device does NOT match', () => {
        // Given
        const props = {
          children: 'hello world',
          deviceType: 'desktop'
        }

        // When
        const {container} = setup(props)

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.have.lengthOf(0)
      })

      it('should render inner hmtl if device matches', () => {
        // Given
        const props = {
          children: 'hello world',
          deviceType: 'console'
        }

        // When
        const {container} = setup(props)

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.have.lengthOf(props.children.length)
      })
    })
    describe('BehaviorDevice.DesktopView', () => {
      const setup = setupBuilder(BehaviorDevice.DesktopView)
      it('should render without crashing', () => {
        // Given
        const props = {
          children: 'hello world'
        }

        // When
        const component = <BehaviorDevice.DesktopView {...props} />

        // Then
        const div = document.createElement('div')
        ReactDOM.render(component, div)
        ReactDOM.unmountComponentAtNode(div)
      })

      it('should NOT render inner hmtl if device does NOT match', () => {
        // Given
        const props = {
          children: 'hello world',
          deviceType: 'mobile'
        }

        // When
        const {container} = setup(props)

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.have.lengthOf(0)
      })

      it('should render inner hmtl if device matches', () => {
        // Given
        const props = {
          children: 'hello world',
          deviceType: 'desktop'
        }

        // When
        const {container} = setup(props)

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.have.lengthOf(props.children.length)
      })
    })
    describe('BehaviorDevice.MobileView', () => {
      const setup = setupBuilder(BehaviorDevice.MobileView)
      it('should render without crashing', () => {
        // Given
        const props = {
          children: 'hello world'
        }

        // When
        const component = <BehaviorDevice.MobileView {...props} />

        // Then
        const div = document.createElement('div')
        ReactDOM.render(component, div)
        ReactDOM.unmountComponentAtNode(div)
      })

      it('should NOT render inner hmtl if device does NOT match', () => {
        // Given
        const props = {
          children: 'hello world',
          deviceType: 'console'
        }

        // When
        const {container} = setup(props)

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.have.lengthOf(0)
      })

      it('should render inner hmtl if device matches', () => {
        // Given
        const props = {
          children: 'hello world',
          deviceType: 'mobile'
        }

        // When
        const {container} = setup(props)

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.have.lengthOf(props.children.length)
      })
    })
    describe('BehaviorDevice.SmartTvView', () => {
      const setup = setupBuilder(BehaviorDevice.SmartTvView)
      it('should render without crashing', () => {
        // Given
        const props = {
          children: 'hello world'
        }

        // When
        const component = <BehaviorDevice.SmartTvView {...props} />

        // Then
        const div = document.createElement('div')
        ReactDOM.render(component, div)
        ReactDOM.unmountComponentAtNode(div)
      })

      it('should NOT render inner hmtl if device does NOT match', () => {
        // Given
        const props = {
          children: 'hello world',
          deviceType: 'console'
        }

        // When
        const {container} = setup(props)

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.have.lengthOf(0)
      })

      it('should render inner hmtl if device matches', () => {
        // Given
        const props = {
          children: 'hello world',
          deviceType: 'smarttv'
        }

        // When
        const {container} = setup(props)

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.have.lengthOf(props.children.length)
      })
    })
    describe('BehaviorDevice.TabletView', () => {
      const setup = setupBuilder(BehaviorDevice.TabletView)
      it('should render without crashing', () => {
        // Given
        const props = {
          children: 'hello world'
        }

        // When
        const component = <BehaviorDevice.TabletView {...props} />

        // Then
        const div = document.createElement('div')
        ReactDOM.render(component, div)
        ReactDOM.unmountComponentAtNode(div)
      })

      it('should NOT render inner hmtl if device does NOT match', () => {
        // Given
        const props = {
          children: 'hello world',
          deviceType: 'console'
        }

        // When
        const {container} = setup(props)

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.have.lengthOf(0)
      })

      it('should render inner hmtl if device matches', () => {
        // Given
        const props = {
          children: 'hello world',
          deviceType: 'tablet'
        }

        // When
        const {container} = setup(props)

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.have.lengthOf(props.children.length)
      })
    })
    describe('BehaviorDevice.WearableView', () => {
      const setup = setupBuilder(BehaviorDevice.WearableView)
      it('should render without crashing', () => {
        // Given
        const props = {
          children: 'hello world'
        }

        // When
        const component = <BehaviorDevice.WearableView {...props} />

        // Then
        const div = document.createElement('div')
        ReactDOM.render(component, div)
        ReactDOM.unmountComponentAtNode(div)
      })

      it('should NOT render inner hmtl if device does NOT match', () => {
        // Given
        const props = {
          children: 'hello world',
          deviceType: 'console'
        }

        // When
        const {container} = setup(props)

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.have.lengthOf(0)
      })

      it('should render inner hmtl if device matches', () => {
        // Given
        const props = {
          children: 'hello world',
          deviceType: 'wearable'
        }

        // When
        const {container} = setup(props)

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.have.lengthOf(props.children.length)
      })
    })
  })
})
