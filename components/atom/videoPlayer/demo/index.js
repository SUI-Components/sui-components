import {useState} from 'react'

import {H1} from '@s-ui/documentation-library'

import DemoPlayer from './DemoPlayer.js'

export default () => {
  const [selectedFile, setSelectedFile] = useState('')

  return (
    <div className="DemoVideoPlayer">
      <H1>YouTube</H1>
      <DemoPlayer src="https://www.youtube.com/embed/1gI_HGDgG7c" />

      <H1>VIMEO</H1>
      <DemoPlayer src="https://vimeo.com/54289199" />

      <H1>Adaptative streaming</H1>
      <DemoPlayer src="https://media-frontend.yams-pro.mpi-internal.com/api/v1/yams-frontend/statics/vo/surf.mp4/hls.m3u8" />

      <H1>Native from remote url</H1>
      <DemoPlayer src="https://cdn.coverr.co/videos/coverr-boat-in-the-sea-5656/1080p.mp4" />

      <H1>Native from a blob</H1>
      <input
        type="file"
        accept="video/*"
        onChange={event => {
          setSelectedFile(event.target.files[0])
        }}
      />
      <DemoPlayer src={selectedFile} />
    </div>
  )
}
