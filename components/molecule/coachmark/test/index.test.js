/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
import sinon from 'sinon'

import {fireEvent, screen} from '@testing-library/react'

import CloseIcon from '../demo/CloseIcon.js'
import {examlpeHeadImage, exampleActionButtons, exampleBadge, exampleImage} from '../demo/config.js'
import json from '../package.json'
import * as pkg from '../src/index.js'

chai.use(chaiDOM)

const getProps = spy => ({
  ...(spy && {callback: spy}),
  steps: [
    {target: '#one', title: 'Coachmark title', content: 'Coachmark content', disableBeacon: true},
    {target: '#two', content: 'Coachmark content second'}
  ],
  runTour: true,
  tooltipOptions: {
    image: exampleImage,
    badge: exampleBadge,
    closeIcon: CloseIcon,
    actionButtons: exampleActionButtons,
    headImage: examlpeHeadImage
  }
})

describe(json.name, () => {
  const {default: Component} = pkg
  const WrappedComponent = props => (
    <div>
      <p id="one">1</p>
      <p id="two">2</p>
      <Component {...props} />
    </div>
  )
  const setup = setupEnvironment(WrappedComponent)

  it('library should include defined exported elements', () => {
    const library = pkg
    const libraryExportedMembers = [
      'moleculeCoachmarkActions',
      'moleculeCoachmarkEvents',
      'moleculeCoachmarkStatus',
      'moleculeCoachmarkLifeCycle',
      'moleculeCoachmarkActionButtonIds',
      'default'
    ]

    expect(Object.keys(library).length).to.equal(libraryExportedMembers.length)
    expect(Object.keys(library)).to.have.members(libraryExportedMembers)
  })

  describe(Component.displayName, () => {
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
      const props = {}

      // When
      const {container} = setup(props)

      // Then
      expect(container.innerHTML).to.be.a('string')
      expect(container.innerHTML).to.not.have.lengthOf(0)
    })

    it('should react to the click to the last step button', () => {
      // Given
      const spy = sinon.spy()
      const props = getProps(spy)

      // When
      setup(props)

      // Is renderer in a react portal, we can only test it in that way
      const nextButton = document.querySelector('[role="button"][title="Next"]')
      let lastButton = document.querySelector('[role="button"][title="Last"]') || null

      expect(lastButton).to.be.null

      fireEvent.click(nextButton)

      // Then
      sinon.assert.called(spy)

      lastButton = document.querySelector('[role="button"][title="Last"]')
      const backButton = document.querySelector('[role="button"][title="Back"]')

      expect(lastButton).to.exist
      expect(backButton).to.exist
    })

    it('should contain the set up text', () => {
      // Given

      const props = getProps()

      // When
      setup({
        ...props,
        steps: [{target: '#one', title: 'Coachmark title', content: 'Coachmark content', disableBeacon: true}]
      })

      // Is renderer in a react portal, we can only test it in that way
      const badgeText = screen.getByText('NEW')
      const closeButton = document.querySelector('[role="button"][title="Skip"]')
      const lastButton = document.querySelector('[role="button"][title="Last"]')
      const image = document.querySelector('[alt="announcement"]')
      const content = document.querySelector('.sui-MoleculeCoachmark-tooltipBodyText')
      const title = document.querySelector('.sui-MoleculeCoachmark-tooltipHeadingText')

      expect(closeButton).to.exist
      expect(lastButton).to.exist
      expect(image).to.exist
      expect(content.innerHTML).to.eql('Coachmark content')
      expect(title.innerHTML).to.eql('Coachmark title')
      expect(badgeText.innerHTML).to.eql('NEW')
    })
  })
})
