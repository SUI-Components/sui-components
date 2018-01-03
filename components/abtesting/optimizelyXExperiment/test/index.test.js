/* eslint-env jest */
import React from 'react'
import { render, mount } from 'enzyme'
import AbTestOptimizelyXExperiment from '../src/index'

jest.mock('../src/optimizely-x')
import {createExperimentUseCase} from '../src/optimizely-x' // eslint-disable-line import/first

describe('<AbTestOptimizelyXExperiment />', () => {
  const component = (<AbTestOptimizelyXExperiment experimentId={40000}>
    <button variationId={400000} defaultVariation>Original</button>
    <button variationId={400001}>Variation #1</button>
    <button variationId={400002}>Variation #2</button>
    <button variationId={400003}>Variation #3</button>
  </AbTestOptimizelyXExperiment>)

  it('should render nothing when OptimizelyX is not available', () => {
    expect(render(component).text()).toEqual('Original')
  })

  describe('When OptimizelyX API is present', () => {
    it('should render AbTestToggle with corresponding variations', () => {
      const variationPromise = Promise.resolve(400002)
      const UseCaseMock = { execute () { return variationPromise } }
      createExperimentUseCase.mockImplementation(() => UseCaseMock)

      const mounted = mount(component).update()

      return variationPromise.then(function () {
        expect(mounted.html()).toEqual('<button>Variation #2</button>')
      })
    })
  })
})
