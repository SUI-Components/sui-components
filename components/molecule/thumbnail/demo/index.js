/* eslint-disable react/prop-types, no-unused-vars, no-console */
import PropTypes from 'prop-types'

import {Article, Cell, Grid, H1, H2, H3} from '@s-ui/documentation-library'
import Spinner from '@s-ui/react-atom-spinner'

import MoleculeThumbnail, {moleculeThumbnailRatio, moleculeThumbnailShape, moleculeThumbnailSize} from '../src/index.js'

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

const IMAGES = {
  FINAL: 'https://picsum.photos/4000?image=980',
  PLACEHOLDER: 'https://picsum.photos/50?image=980',
  SKELETON: 'https://cdn1.iconfinder.com/data/icons/online-wireframes/32/Wireframe_Photo_Album_Picture-256.png',
  BAD: 'https://pic__sum.pho__tos/50?image=980'
}

const ImageNotFoundIcon = () => {
  return (
    <svg width="40" height="40">
      <path d="M6.458 33.333c-1.72 0-3.125-1.382-3.125-3.077v-16.41c0-1.694 1.404-3.077 3.125-3.077h5.209l-.88.477 2.357-3.661a2.073 2.073 0 0 1 1.752-.918h9.791c.636 0 1.245.3 1.667.82l2.813 3.692-.834-.41h5.209c1.72 0 3.125 1.383 3.125 3.077v16.41c0 1.695-1.404 3.077-3.125 3.077H6.458zm0-2.05h27.084a1.04 1.04 0 0 0 1.041-1.027v-16.41a1.04 1.04 0 0 0-1.041-1.025h-5.209c-.328 0-.636-.152-.833-.41l-2.793-3.668c-.014-.017-.03-.025-.02-.025h-9.791c-.027 0-.01-.009-.006-.015l-2.344 3.64a1.046 1.046 0 0 1-.88.478H6.459a1.04 1.04 0 0 0-1.041 1.025v16.41a1.04 1.04 0 0 0 1.041 1.026zM20 29.23c-4.602 0-8.333-3.674-8.333-8.205 0-4.532 3.73-8.205 8.333-8.205 4.602 0 8.333 3.673 8.333 8.205 0 4.531-3.73 8.205-8.333 8.205zm0-2.052c3.452 0 6.25-2.755 6.25-6.153 0-3.399-2.798-6.154-6.25-6.154s-6.25 2.755-6.25 6.154c0 3.398 2.798 6.153 6.25 6.153zm-3.939-4.812a4.049 4.049 0 0 1 .751-3.984L3.66 5.23A1.111 1.111 0 0 1 5.23 3.66L18.7 17.127c.409-.132.847-.204 1.301-.204.454 0 .892.072 1.301.204L34.77 3.66A1.111 1.111 0 1 1 36.34 5.23L23.188 18.384a4.049 4.049 0 0 1 .75 3.983L36.342 34.77a1.111 1.111 0 0 1-1.571 1.571L22.634 24.205a4.19 4.19 0 0 1-2.634.923 4.19 4.19 0 0 1-2.634-.923L5.23 36.34A1.111 1.111 0 0 1 3.66 34.77L16.06 22.367zm14.356-5.444c-.576 0-1.042-.46-1.042-1.026 0-.566.466-1.025 1.042-1.025h1.041c.576 0 1.042.459 1.042 1.025 0 .567-.466 1.026-1.042 1.026h-1.041z" />
    </svg>
  )
}

const defaultErrorText = 'Image not found'

export default () => {
  const renderSizes = (ratio = moleculeThumbnailRatio['1:1'], shape = moleculeThumbnailShape.SQUARED) => (
    <Grid cols={4}>
      {Object.keys(moleculeThumbnailSize).map((label, idx) => (
        <Cell key={`render-sizes-${ratio}-${idx}`}>
          <H3>{label.toLocaleLowerCase()}</H3>
        </Cell>
      ))}
      {Object.keys(moleculeThumbnailSize).map((label, idx) => (
        <Cell key={`render-sizes-${ratio}-${idx}`}>
          <MoleculeThumbnail
            src={IMAGES.FINAL}
            alt="Some alt"
            href="https://someLink"
            target="_blank"
            captionText="Show!"
            spinner={<Spinner noBackground />}
            placeholder={IMAGES.PLACEHOLDER}
            size={label.toLocaleLowerCase()}
            ratio={moleculeThumbnailRatio[ratio]}
            shape={shape}
          />
        </Cell>
      ))}
    </Grid>
  )

  return (
    <div>
      <H1>Thumbnail</H1>
      <DemoWrapper>
        <Demo>
          <Article>
            <H2>Basic examples</H2>
            <Grid cols={4}>
              <Cell>
                <H3>Link</H3>
              </Cell>
              <Cell>
                <H3>No link</H3>
              </Cell>
              <Cell>
                <H3>Caption</H3>
              </Cell>
              <Cell>
                <H3>Circled</H3>
              </Cell>
              <Cell>
                <MoleculeThumbnail
                  src={IMAGES.FINAL}
                  alt="Some alt"
                  href="https://someLink"
                  target="_blank"
                  spinner={<Spinner noBackground />}
                  placeholder={IMAGES.PLACEHOLDER}
                  size={moleculeThumbnailSize.MEDIUM}
                />
              </Cell>
              <Cell>
                <MoleculeThumbnail
                  src={IMAGES.FINAL}
                  alt="Some alt"
                  target="_blank"
                  spinner={<Spinner noBackground />}
                  placeholder={IMAGES.PLACEHOLDER}
                  size={moleculeThumbnailSize.MEDIUM}
                />
              </Cell>
              <Cell>
                <MoleculeThumbnail
                  src={IMAGES.FINAL}
                  alt="Some alt"
                  captionText="Show!"
                  spinner={<Spinner noBackground />}
                  placeholder={IMAGES.PLACEHOLDER}
                  size={moleculeThumbnailSize.MEDIUM}
                />
              </Cell>
              <Cell>
                <MoleculeThumbnail
                  src={IMAGES.FINAL}
                  alt="Some alt"
                  href="https://someLink"
                  target="_blank"
                  captionText="Show!"
                  spinner={<Spinner noBackground />}
                  placeholder={IMAGES.PLACEHOLDER}
                  shape={moleculeThumbnailShape.CIRCLED}
                  size={moleculeThumbnailSize.MEDIUM}
                />
              </Cell>
            </Grid>
          </Article>
          <br />
          <Article>
            <H2>Squared & Ratio 1:1</H2>
            {renderSizes()}
          </Article>
          <br />
          <Article>
            <H2>Squared & Ratio 4:3</H2>
            {renderSizes(moleculeThumbnailRatio['4:3'])}
          </Article>
          <br />
          <Article>
            <H2>Squared & Ratio 16:9</H2>
            {renderSizes(moleculeThumbnailRatio['16:9'])}
          </Article>

          <br />
          <Article>
            <H2>Circled & ratio 1:1</H2>
            {renderSizes(moleculeThumbnailRatio['1:1'], moleculeThumbnailShape.CIRCLED)}
          </Article>
          <br />
          <Article>
            <H2>Fallback example</H2>
            <MoleculeThumbnail
              src={IMAGES.BAD}
              alt="Some alt"
              captionText="Show!"
              spinner={<Spinner noBackground />}
              placeholder={IMAGES.PLACEHOLDER}
              errorIcon={<ImageNotFoundIcon />}
              errorText={defaultErrorText}
              size={moleculeThumbnailSize.LARGE}
            />
          </Article>
        </Demo>
      </DemoWrapper>
    </div>
  )
}
