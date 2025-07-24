import {H3, Text} from '@s-ui/documentation-library'

import PlaceHolder from './PlaceHolder.js'

export const BASE_CLASS_DEMO = `DemoAtomCard`
export const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

export const getPlaceholder =
  ({width, height, text, style}) =>
  ({...props}) =>
    <PlaceHolder height={height} width={width} text={text} style={style} {...props} />

export const getContent =
  (...props) =>
  () =>
    (
      <div {...props}>
        <H3 style={{margin: 0}}>content title</H3>
        <Text>content text</Text>
      </div>
    )
