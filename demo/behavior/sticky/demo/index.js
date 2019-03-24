/* eslint-disable no-console */

import React from 'react'
// import cx from 'classnames'
import './index.scss'

import BehaviorSticky, {
  BehaviorStickyProvider
} from '../../../../components/behavior/sticky/src'

import {Content, HeaderFixed, HeaderWithButtons} from './components'

const BASE_CLASS_DEMO = 'DemoBehaviorSticky'
const CLASS_DEMO_FIXED_HEADER = `${BASE_CLASS_DEMO}-fixed-header`
const CLASS_DEMO_FIXED_BUTTONS = `${BASE_CLASS_DEMO}-fixed-header-buttons`
const CLASS_DEMO_CONTENT = `${BASE_CLASS_DEMO}-content`
// const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`

const containerRed = React.createRef()
// const containerBrown = React.createRef()

const Demo = () => (
  <BehaviorStickyProvider>
    {/* @begin STICKY  */}
    <BehaviorSticky>
      <HeaderFixed className={CLASS_DEMO_FIXED_HEADER} />
    </BehaviorSticky>
    {/* @end STICKY  */}

    <Content className={CLASS_DEMO_CONTENT} />

    {/* @begin STICKY IN CONTAINER */}
    <div ref={containerRed} style={{height: '500px'}}>
      <BehaviorSticky container={containerRed} defaultOffsetTop={45} animate>
        <HeaderWithButtons className={CLASS_DEMO_FIXED_BUTTONS} />
      </BehaviorSticky>
      <div style={{padding: '10px', height: '1000px', background: 'green'}}>
        Lorem ipsum dolor sit amet consectetur adipiscing elit porttitor, per
        diam cras cum convallis massa nostra, condimentum pretium congue mi dis
        non erat. Euismod dui hendrerit enim nostra eros nibh vulputate, vitae
        gravida sem pretium sociosqu luctus eget placerat, justo porta senectus
        mauris ante porttitor. Vitae tempus sem felis enim natoque purus nam at
        augue nascetur, urna semper dictum egestas leo habitasse aliquet
        consequat dis fermentum, ornare feugiat pretium nisi venenatis hac cras
        interdum nostra.
      </div>
    </div>
    {/* @end STICKY IN CONTAINER  */}
  </BehaviorStickyProvider>
)

export default Demo
