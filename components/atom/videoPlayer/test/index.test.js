/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

import {
  HLS_DEFAULT_TITLE,
  NATIVE_DEFAULT_TITLE,
  VIMEO_DEFAULT_TITLE,
  YOUTUBE_DEFAULT_TITLE
} from '../src/settings/index.js'

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
    it('should display "Not supported media type" when a unknown video provier is received', async () => {
      // Given
      const props = {
        src: 'https://random.and.invalid.video.com/hello-world-video'
      }

      // When
      const component = setup(props)

      // Then
      await component.findByText('Not supported media type')
    })
  })

  describe('YouTube Videos', () => {
    it('should embed the youtube video player if src is a youtube video', async () => {
      // Given
      const props = {
        src: 'https://www.youtube.com/embed/1gI_HGDgG7c'
      }

      // When
      const component = setup(props)

      // Then
      await component.findByTitle(YOUTUBE_DEFAULT_TITLE)
    })

    it('should embed the youtube video player even if embeddable url does not have protocol or www', async () => {
      // Given
      const props = {
        src: 'youtube.com/embed/1gI_HGDgG7c'
      }

      // When
      const component = setup(props)

      // Then
      const iframeNode = await component.findByTitle(YOUTUBE_DEFAULT_TITLE)
      // check that the iframe src is the embedable url
      expect(iframeNode.src).to.include(
        'https://www.youtube.com/embed/1gI_HGDgG7c'
      )
    })

    it('should convert standard youtube urls to embedable urls', async () => {
      // Given
      const props = {
        src: 'https://www.youtube.com/watch?v=1gI_HGDgG7c'
      }

      // When
      const component = setup(props)

      // Then
      const iframeNode = await component.findByTitle(YOUTUBE_DEFAULT_TITLE)
      // check that the iframe src is the embedable url
      expect(iframeNode.src).to.include(
        'https://www.youtube.com/embed/1gI_HGDgG7c'
      )
    })

    it('should convert shared videos urls to embedable urls', async () => {
      // Given
      const props = {
        src: 'https://youtu.be/1gI_HGDgG7c'
      }

      // When
      const component = setup(props)

      // Then
      const iframeNode = await component.findByTitle(YOUTUBE_DEFAULT_TITLE)
      // check that the iframe src is the embedable url
      expect(iframeNode.src).to.include(
        'https://www.youtube.com/embed/1gI_HGDgG7c'
      )
    })

    it('should convert readable-kind youtube urls to embeddable urls', async () => {
      // Given
      const props = {
        src: 'http://www.youtube.com/v/1gI_HGDgG7c'
      }

      // When
      const component = setup(props)

      // Then
      const iframeNode = await component.findByTitle(YOUTUBE_DEFAULT_TITLE)
      // check that the iframe src is the embedable url
      expect(iframeNode.src).to.include(
        'https://www.youtube.com/embed/1gI_HGDgG7c'
      )
    })

    it('should avoid displaying controls if controls prop is set to false', async () => {
      // Given
      const props = {
        controls: false,
        src: 'https://www.youtube.com/embed/1gI_HGDgG7c'
      }

      // When
      const component = setup(props)

      // Then
      const iframeNode = await component.findByTitle(YOUTUBE_DEFAULT_TITLE)
      // check that the iframe src is the embedable url
      expect(iframeNode.src).to.include('controls=0')
    })

    it('should autoplay the video if the autoPlay prop is set to true', async () => {
      // Given
      const props = {
        autoPlay: true,
        src: 'https://www.youtube.com/embed/1gI_HGDgG7c'
      }

      // When
      const component = setup(props)

      // Then
      const iframeNode = await component.findByTitle(YOUTUBE_DEFAULT_TITLE)
      // check that the iframe src is the embedable url
      expect(iframeNode.src).to.include('autoplay=1')
    })

    it('should start the video at the expected time if offset param is passed', async () => {
      // Given
      const props = {
        timeOffset: 10,
        src: 'https://www.youtube.com/embed/1gI_HGDgG7c'
      }

      // When
      const component = setup(props)

      // Then
      const iframeNode = await component.findByTitle(YOUTUBE_DEFAULT_TITLE)
      // check that the iframe src is the embedable url
      expect(iframeNode.src).to.include('start=10')
    })

    it('should end the video at the expected time if limit param is passed', async () => {
      // Given
      const props = {
        timeLimit: 15,
        src: 'https://www.youtube.com/embed/1gI_HGDgG7c'
      }

      // When
      const component = setup(props)

      // Then
      const iframeNode = await component.findByTitle(YOUTUBE_DEFAULT_TITLE)
      // check that the iframe src is the embedable url
      expect(iframeNode.src).to.include('end=15')
    })

    it('should mute the video when the muted prop is set to true', async () => {
      // Given
      const props = {
        muted: true,
        src: 'https://www.youtube.com/embed/1gI_HGDgG7c'
      }

      // When
      const component = setup(props)

      // Then
      const iframeNode = await component.findByTitle(YOUTUBE_DEFAULT_TITLE)
      // check that the iframe src is the embedable url
      expect(iframeNode.src).to.include('mute=1')
    })
  })

  describe('VIMEO Videos', () => {
    it('should embed the vimeo video player if src is a vimeo video', async () => {
      // Given
      const props = {
        src: 'https://vimeo.com/54289199'
      }

      // When
      const component = setup(props)

      // Then
      await component.findByTitle(VIMEO_DEFAULT_TITLE)
    })

    it('should convert standard vimeo url to an embeddable url', async () => {
      // Given
      const props = {
        src: 'https://vimeo.com/54289199'
      }

      // When
      const component = setup(props)

      // Then
      const iframeNode = await component.findByTitle(VIMEO_DEFAULT_TITLE)
      // check that the iframe src is the embedable url
      expect(iframeNode.src).to.include(
        'https://player.vimeo.com/video/54289199'
      )
    })

    it('should avoid displaying controls if controls prop is set to false', async () => {
      // Given
      const props = {
        controls: false,
        src: 'https://vimeo.com/54289199'
      }

      // When
      const component = setup(props)

      // Then
      const iframeNode = await component.findByTitle(VIMEO_DEFAULT_TITLE)
      expect(iframeNode.src).to.include('controls=0')
    })

    it('should autoplay the video if the prop autoPlay is set to true', async () => {
      // Given
      const props = {
        autoPlay: true,
        src: 'https://vimeo.com/54289199'
      }

      // When
      const component = setup(props)

      // Then
      const iframeNode = await component.findByTitle(VIMEO_DEFAULT_TITLE)
      expect(iframeNode.src).to.include('autoplay=1')
    })

    it('should start the video at the expected time if offset param is passed', async () => {
      // Given
      const props = {
        timeOffset: '25',
        src: 'https://vimeo.com/54289199'
      }

      // When
      const component = setup(props)

      // Then
      const iframeNode = await component.findByTitle(VIMEO_DEFAULT_TITLE)
      expect(iframeNode.src).to.include('#t=25')
    })

    it('should mute the video when the muted prop is set to true', async () => {
      // Given
      const props = {
        muted: true,
        src: 'https://vimeo.com/54289199'
      }

      // When
      const component = setup(props)

      // Then
      const iframeNode = await component.findByTitle(VIMEO_DEFAULT_TITLE)
      // check that the iframe src is the embedable url
      expect(iframeNode.src).to.include('muted=1')
    })
  })

  describe('Adaptative streaming player', () => {
    it('should open adaptative streaming videos by using hls.js', async () => {
      // Given
      const props = {
        src: 'https://media-frontend.yams-pro.mpi-internal.com/api/v1/yams-frontend/statics/vo/surf.mp4/hls.m3u8'
      }

      // When
      const component = setup(props)

      // Then
      await component.findByTitle(HLS_DEFAULT_TITLE)
    })

    it('should display controls by default', async () => {
      // Given
      const props = {
        src: 'https://media-frontend.yams-pro.mpi-internal.com/api/v1/yams-frontend/statics/vo/surf.mp4/hls.m3u8'
      }

      // When
      const component = setup(props)

      // Then
      const player = await component.findByTitle(HLS_DEFAULT_TITLE)
      expect(player.controls).to.eql(true)
    })

    it('should avoid displaying controls if controls prop is set to false', async () => {
      // Given
      const props = {
        controls: false,
        src: 'https://media-frontend.yams-pro.mpi-internal.com/api/v1/yams-frontend/statics/vo/surf.mp4/hls.m3u8'
      }

      // When
      const component = setup(props)

      // Then
      const player = await component.findByTitle(HLS_DEFAULT_TITLE)
      expect(player.controls).to.eql(false)
    })

    it('should mute the video when muted prop is set to true', async () => {
      // Given
      const props = {
        muted: true,
        src: 'https://media-frontend.yams-pro.mpi-internal.com/api/v1/yams-frontend/statics/vo/surf.mp4/hls.m3u8'
      }

      // When
      const component = setup(props)

      // Then
      const player = await component.findByTitle(HLS_DEFAULT_TITLE)
      expect(player.muted).to.eql(true)
    })
  })

  describe('Native video player', () => {
    it('should try to play the video using the native player if it is a remote file with a known extension', async () => {
      // Given
      const props = {
        src: 'https://cdn.coverr.co/videos/coverr-boat-in-the-sea-5656/1080p.mp4'
      }

      // When
      const component = setup(props)

      // Then
      await component.findByTitle(NATIVE_DEFAULT_TITLE)
    })

    it('should try to play the video using the native player when receiving a blob object as src', async () => {
      // Given
      const props = {
        src: new File(['fakeVideo'], 'hello.mp4', {type: 'video/mp4'})
      }

      // When
      const component = setup(props)

      // Then
      const {src} = await component.findByTestId('videosrc')
      expect(src).to.include('blob:')
    })

    it('should display controls by default', async () => {
      // Given
      const props = {
        src: 'https://cdn.coverr.co/videos/coverr-boat-in-the-sea-5656/1080p.mp4'
      }

      // When
      const component = setup(props)

      // Then
      const player = await component.findByTitle(NATIVE_DEFAULT_TITLE)
      expect(player.controls).to.eql(true)
    })

    it('should avoid displaying controls if controls prop is set to false', async () => {
      // Given
      const props = {
        controls: false,
        src: 'https://cdn.coverr.co/videos/coverr-boat-in-the-sea-5656/1080p.mp4'
      }

      // When
      const component = setup(props)

      // Then
      const player = await component.findByTitle(NATIVE_DEFAULT_TITLE)
      expect(player.controls).to.eql(false)
    })

    it('should autoplay the video if autoPlay prop is set to true', async () => {
      // Given
      const props = {
        autoPlay: true,
        src: 'https://cdn.coverr.co/videos/coverr-boat-in-the-sea-5656/1080p.mp4'
      }

      // When
      const component = setup(props)

      // Then
      const player = await component.findByTitle(NATIVE_DEFAULT_TITLE)
      expect(player.autoplay).to.eql(true)
    })

    it('should start the video at the expected time if offset param is passed', async () => {
      // Given
      const props = {
        timeOffset: '15',
        src: 'https://cdn.coverr.co/videos/coverr-boat-in-the-sea-5656/1080p.mp4'
      }

      // When
      const component = setup(props)

      // Then
      const {src} = await component.findByTestId('videosrc')
      expect(src).to.include('#t=15')
    })

    it('should end the video at the expected time if limit param is passed', async () => {
      // Given
      const props = {
        timeLimit: '20',
        src: 'https://cdn.coverr.co/videos/coverr-boat-in-the-sea-5656/1080p.mp4'
      }

      // When
      const component = setup(props)

      // Then
      const {src} = await component.findByTestId('videosrc')
      expect(src).to.include('#t=0,20')
    })

    it('should mute the video when muted prop is set to true', async () => {
      // Given
      const props = {
        muted: true,
        src: 'https://cdn.coverr.co/videos/coverr-boat-in-the-sea-5656/1080p.mp4'
      }

      // When
      const component = setup(props)

      // Then
      const player = await component.findByTitle(NATIVE_DEFAULT_TITLE)
      expect(player.muted).to.eql(true)
    })
  })
})
