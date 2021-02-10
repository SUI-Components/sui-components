import {useRef, useState} from 'react'
import useNetwork from 'react-use/lib/useNetwork'
import useIntersection from 'react-use/lib/useIntersection'
import useThrottleFn from 'react-use/lib/useThrottleFn'
import AtomSpinner from '@s-ui/react-atom-spinner'
import AtomIcon, {
  ATOM_ICON_COLORS,
  ATOM_ICON_SIZES
} from '@s-ui/react-atom-icon'

import AtomImage from '../../../../components/atom/image/src'

import {
  BootstrapIcon,
  Anchor,
  Label,
  H1,
  H2,
  Paragraph,
  Article,
  Bold,
  Code,
  Grid,
  Cell,
  UnorderedList,
  ListItem,
  RadioButton,
  Small
} from '@s-ui/documentation-library'

import './index.scss'

const IMAGES = {
  FINAL: 'https://picsum.photos/4000?image=980',
  PLACEHOLDER: 'https://picsum.photos/50?image=980',
  SKELETON:
    'https://cdn1.iconfinder.com/data/icons/online-wireframes/32/Wireframe_Photo_Album_Picture-256.png',
  BAD: 'https://pic__sum.pho__tos/50?image=980',
  RANDOM_IMAGE: (key, index) =>
    `https://source.unsplash.com/collection/190727/4000x3000?${key}=${index}.jpg`
}

const defaultErrorText = 'Image not found'

const BASE_CLASS_DEMO = `DemoAtomImage`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

const flexCenteredStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  wrap: 'nowrap',
  alignItems: 'center',
  alignContent: 'center'
}

const ImageNotFoundIcon = () => {
  return (
    <AtomIcon
      color={ATOM_ICON_COLORS.currentColor}
      size={ATOM_ICON_SIZES.extraLarge}
    >
      <BootstrapIcon icon="BsImageFill" style={{color: 'currentColor'}} />
    </AtomIcon>
  )
}

const ConnectionViewer = () => {
  const {effectiveType, online, downlink, rtt} = useNetwork() || {}
  return (
    <Grid cols={8} gutter={[8, 8]}>
      <Cell style={{...flexCenteredStyle, justifyContent: 'flex-end'}}>
        <Small>effectiveType</Small>:
      </Cell>
      <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
        <Small>{`${effectiveType}`}</Small>
      </Cell>
      <Cell style={{...flexCenteredStyle, justifyContent: 'flex-end'}}>
        <Small>online</Small>:
      </Cell>
      <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
        <Small>{`${online}`}</Small>
      </Cell>
      <Cell style={{...flexCenteredStyle, justifyContent: 'flex-end'}}>
        <Small>downlink</Small>:
      </Cell>
      <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
        <Small>{`${downlink}`} kbps.</Small>
      </Cell>
      <Cell style={{...flexCenteredStyle, justifyContent: 'flex-end'}}>
        <Small>rtt</Small>:
      </Cell>
      <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
        <Small>{`${rtt}}`} ms.</Small>
      </Cell>
    </Grid>
  )
}

const DefaultDemo = () => (
  <Article className={CLASS_SECTION}>
    <H2>Default</H2>
    <Paragraph>
      The minimum required props to get a proper AtomImage are:
    </Paragraph>
    <UnorderedList>
      <ListItem>
        <Code>src</Code>: Specifies the path to the image.
      </ListItem>
      <ListItem>
        <Code>alt</Code>: Specifies an alternate text for the image, if the
        image for some reason cannot be displayed.
      </ListItem>
    </UnorderedList>
    <Paragraph>
      <Bold>Note</Bold>: Also, always specify the width and height of an image.
      If width and height are not specified, the page might flicker while the
      image loads.
    </Paragraph>
    <div style={{height: 300}}>
      <AtomImage src={IMAGES.FINAL} alt="Nice View" />
    </div>
  </Article>
)

const PlaceHolderDemo = () => {
  const articleRef = useRef()
  const intersection = useIntersection(articleRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1
  })
  const isIntersecting = intersection?.isIntersecting

  const [counter, setCounter] = useState(0)
  const increaseCounter = (value = counter) => setCounter(value + 1)
  useThrottleFn(
    () => {
      if (isIntersecting) {
        increaseCounter()
      }
    },
    300,
    [isIntersecting]
  )
  return (
    <Article className={CLASS_SECTION}>
      <H2>Placeholder</H2>
      <Paragraph>
        The prop <Code>placeholder</Code> admits the url (string) of an image.
        this image is blur fully covering the area dedicated to the image until
        this is already loaded. Normally, the value should be a low resolution
        clone (with same aspect-ratio) of the <Code>src</Code> prop to get the
        focus effect and avoid the flickering effect.
      </Paragraph>
      <div ref={articleRef} style={{height: 300}} className="placeholder-demo">
        {isIntersecting && (
          <AtomImage
            src={IMAGES.RANDOM_IMAGE('placeholder', counter)}
            alt="Nice View"
            placeholder={IMAGES.PLACEHOLDER}
          />
        )}
      </div>
      <Paragraph>Hover the image to see the placeholder image.</Paragraph>
      <Paragraph>–––</Paragraph>
      <Paragraph>
        <Bold>Tip</Bold>: to better understand the behavior change the
        connection to a lower one (For example 2g). if you are using chrome you
        can find out how to configure it{' '}
        <Anchor href="https://developers.google.com/web/tools/chrome-devtools/network#throttle">
          here
        </Anchor>
        .
        <ConnectionViewer />
      </Paragraph>
    </Article>
  )
}

const SkeletonDemo = () => {
  const articleRef = useRef()
  const intersection = useIntersection(articleRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1
  })
  const isIntersecting = intersection?.isIntersecting
  const [counter, setCounter] = useState(0)
  const [isPlaceholder, setPlaceHolder] = useState(false)
  const increaseCounter = (value = counter) => setCounter(value + 1)
  useThrottleFn(
    () => {
      if (isIntersecting) {
        increaseCounter()
      }
    },
    300,
    [isIntersecting]
  )
  return (
    <Article className={CLASS_SECTION}>
      <H2>Skeleton</H2>
      <Paragraph>
        The prop <Code>skeleton</Code> admits the url (string) of an image. this
        image is <Label>NOT</Label> blur but fully contained in the area
        dedicated to the image until this is already loaded.
      </Paragraph>
      <div ref={articleRef} style={{height: 300}} className="skeleton-demo">
        {isIntersecting && (
          <AtomImage
            src={IMAGES.RANDOM_IMAGE('skeleton', counter)}
            alt="Nice View"
            skeleton={IMAGES.SKELETON}
            {...(isPlaceholder && {placeholder: IMAGES.PLACEHOLDER})}
          />
        )}
      </div>
      <Paragraph>Hover the image to see the skeleton image.</Paragraph>
      <Paragraph>–––</Paragraph>
      <Paragraph>
        <Bold>Tip</Bold>: to better understand the behavior change the
        connection to a lower one (For example 2g). if you are using chrome you
        can find out how to configure it{' '}
        <Anchor href="https://developers.google.com/web/tools/chrome-devtools/network#throttle">
          here
        </Anchor>
        .
        <ConnectionViewer />
      </Paragraph>
      <Paragraph>–––</Paragraph>
      <Paragraph>
        <Bold>Disclaimer</Bold>: In case of combining <Code>skeleton</Code> and{' '}
        <Code>placeholder</Code> props it will collide becoming placeholder the
        most relevant.
      </Paragraph>
      <Paragraph>Check the behavior by pressing:</Paragraph>
      <Label>Placeholder</Label>:{' '}
      <RadioButton
        value={isPlaceholder}
        label={isPlaceholder ? 'enabled' : 'disabled'}
        onClick={() => setPlaceHolder(!isPlaceholder)}
      />
    </Article>
  )
}

const FallbackImageDemo = () => {
  const articleRef = useRef()
  const intersection = useIntersection(articleRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1
  })
  const isIntersecting = intersection?.isIntersecting

  const [counter, setCounter] = useState(0)
  const [errorIcon, setErrorIcon] = useState(true)
  const [errorText, setErrorText] = useState(true)
  const [errorCounter, setErrorCounter] = useState(0)
  const increaseCounter = (value = counter) => setCounter(value + 1)
  useThrottleFn(
    () => {
      if (isIntersecting) {
        increaseCounter()
      }
    },
    300,
    [isIntersecting]
  )
  return (
    <Article className={CLASS_SECTION}>
      <H2>FallBack Image</H2>
      <Paragraph>
        The AtomImage provides a service to customize a fallback response in
        order to indicate the URL provided as <Code>src</Code> gets an error
        combining the props:
      </Paragraph>
      <UnorderedList>
        <ListItem>
          <Code>errorIcon</Code>(React.node): Icon (component) to be displayed
          in an Error Box when the image cannot be loaded.
        </ListItem>
        <ListItem>
          <Code>errorText</Code>(string): Text to be displayed in an Error Box
          when the image cannot be loaded.
        </ListItem>
      </UnorderedList>
      <Paragraph>
        Both props can be used together: If the component only have one of them
        defined, it will be vertically centered.
      </Paragraph>
      <RadioButton
        checked={errorIcon}
        label={`errorIcon ${errorIcon ? 'enabled' : 'disabled'}`}
        onClick={() => setErrorIcon(!errorIcon)}
      />{' '}
      <RadioButton
        checked={errorIcon}
        label={`errorText ${errorText ? 'enabled' : 'disabled'}`}
        onClick={() => setErrorText(!errorText)}
      />
      <br />
      <br />
      <div ref={articleRef} style={{height: 300}}>
        {isIntersecting && (
          <AtomImage
            src={IMAGES.BAD}
            alt="Nice View"
            errorIcon={errorIcon && <ImageNotFoundIcon />}
            errorText={errorText && defaultErrorText}
            onError={() => setErrorCounter(errorCounter + 1)}
          />
        )}
      </div>
      <Paragraph>
        The AtomImage component also fires an event customizable under the{' '}
        <Code>onError</Code>(function) handler prop.
      </Paragraph>
      <Paragraph>
        <Label>onError handler counter</Label>: {errorCounter}
      </Paragraph>
    </Article>
  )
}

const SpinnerDemo = () => {
  const articleRef = useRef()
  const intersection = useIntersection(articleRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1
  })
  const isIntersecting = intersection?.isIntersecting

  const [counter, setCounter] = useState(0)
  const increaseCounter = (value = counter) => {
    setCounter(value + 1)
  }
  useThrottleFn(
    () => {
      if (isIntersecting) {
        increaseCounter()
      }
    },
    300,
    [isIntersecting, increaseCounter]
  )

  return (
    <Article className={CLASS_SECTION}>
      <H2>Spinner Loader</H2>
      <Paragraph>
        AtomImage can show an spinner loader while the image is loading using
        the <Code>spinner</Code> (React.node) prop
      </Paragraph>
      <div ref={articleRef} style={{height: 300}} className="spinner-demo">
        {isIntersecting && (
          <AtomImage
            spinner={<AtomSpinner />}
            src={IMAGES.RANDOM_IMAGE(
              'placeholder',
              isIntersecting ? counter : counter - 1
            )}
            alt="Nice View"
          />
        )}
      </div>
    </Article>
  )
}

const ViewportDemo = () => {
  const sizes = [
    360,
    540,
    480,
    640,
    720,
    960,
    1280,
    1600,
    1920,
    2048,
    2160,
    2560,
    3200
  ]
  return (
    <Article className={CLASS_SECTION}>
      <H2>Responsive Images</H2>
      <Paragraph>
        AtomImage also provides a simple way of displaying an image in its best
        depending on the device it is being viewed from. Use the prop{' '}
        <Code>sources</Code> (array) to configure it.
      </Paragraph>
      <Paragraph>
        For the proper responsive behavior, the array of breakpoint values given
        to the <Code>source</Code> prop should be ordered descendant.
      </Paragraph>
      <div style={{height: 300}} className="viewport-demo">
        <AtomImage
          src="https://via.placeholder.com/50"
          alt=""
          sources={sizes
            .sort((a, b) => a - b)
            .reverse()
            .map(value => ({
              srcSet: `https://via.placeholder.com/${value}x300`,
              media: `(min-width: ${value}px)`
            }))}
        />
      </div>
    </Article>
  )
}

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <H1>Image</H1>
      <Paragraph>
        AtomImage is a component that loads an image inside, maintaining all the
        accesibility attributes. This component can be set to show a placeholder
        image, a skeleton and/or a spinner while the final image is being
        loaded. This component will also show an Error Box if the image could't
        be loaded
      </Paragraph>
      <DefaultDemo />
      <br />
      <PlaceHolderDemo />
      <br />
      <SkeletonDemo />
      <br />
      <FallbackImageDemo />
      <br />
      <SpinnerDemo />
      <br />
      <ViewportDemo />
      <br />
    </div>
  )
}

export default Demo
