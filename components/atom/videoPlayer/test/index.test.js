/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

chai.use(chaiDOM)

describe('AtomVideoPlayer', () => {
  const setup = setupEnvironment(AtomVideoPlayer)

  it('should render without crashing', () => {
    // Given
    const props = {}

    // When
    const component = <AtomVideoPlayer {...props} />

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

  describe('Error cases', () => {
    it('should display "Not supported media type" when a unknown video provier is received', () => {
      // Given
      const props = {
        src: 'https://random.and.invalid.video.com/hello-world-video'
      }

      // When
      const component = setup(props)

      // Then
      component.getByText('Not supported media type')
    })
  })

  describe('YouTube Videos', () => {
    it('should embed the youtube video player if src is a youtube video', () => {
      // Given
      const props = {
        src: 'https://www.youtube.com/embed/1gI_HGDgG7c'
      }

      // When
      const component = setup(props)

      // Then
      component.getByTitle('YouTube video player')
    })

    it('should convert standard youtube urls to embedable urls', () => {
      // Given
      const props = {
        src: 'https://www.youtube.com/watch?v=1gI_HGDgG7c'
      }

      // When
      const component = setup(props)

      // Then
      const iframeNode = component.getByTitle('YouTube video player')
      // check that the iframe src is the embedable url
      expect(iframeNode.src).to.equal(
        'https://www.youtube.com/embed/1gI_HGDgG7c'
      )
    })
  })
})
