/* eslint-env jest */
import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import OptimizelyX from '../src/optimizely-x'
import AbTestOptimizelyXExperiment from '../src/index'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

describe('<AbTestOptimizelyXExperiment />', () => {
  let activationHandler, component
  beforeAll(() => {
    jest
      .spyOn(OptimizelyX, 'addActivationListener')
      .mockImplementation((experimentId, handler) => {
        activationHandler = handler
      })

    component = (
      <AbTestOptimizelyXExperiment experimentId={40000}>
        <button variationId={400000} defaultVariation>
          Original
        </button>
        <button variationId={400001}>Variation #1</button>
        <button variationId={400002}>Variation #2</button>
        <button variationId={400003}>Variation #3</button>
      </AbTestOptimizelyXExperiment>
    )
  })

  afterAll(() => {
    OptimizelyX.addActivationListener.mockRestore()
  })

  it('should render nothing when OptimizelyX is not available', () => {
    expect(shallow(component).html()).toEqual('<button>Original</button>')
  })

  describe('When OptimizelyX API is present', () => {
    it('should render AbTestToggle with corresponding variations', () => {
      const mounted = shallow(component)
      expect(mounted.html()).toEqual('<button>Original</button>')
      activationHandler(400002)
      mounted.update()
      expect(mounted.html()).toEqual('<button>Variation #2</button>')
    })
  })
})
