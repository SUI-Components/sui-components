/* eslint-disable no-console */

import React from 'react'
// import cx from 'classnames'
import './index.scss'

import BehaviorSticky, {
  BehaviorStickyProvider
} from '../../../../components/behavior/sticky/src'

import {
  Content,
  HeaderFixed,
  FooterFixed,
  HeaderWithButtons
} from './components'

const BASE_CLASS_DEMO = 'DemoBehaviorSticky'
const CLASS_DEMO_FIXED_HEADER = `${BASE_CLASS_DEMO}-fixed-header`
const CLASS_DEMO_FIXED_FOOTER = `${BASE_CLASS_DEMO}-fixed-footer`
const CLASS_DEMO_FIXED_BUTTONS = `${BASE_CLASS_DEMO}-fixed-header-buttons`
const CLASS_DEMO_CONTENT = `${BASE_CLASS_DEMO}-content`
// const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`

const container1 = React.createRef()
const container2 = React.createRef()

const Demo = () => (
  <BehaviorStickyProvider>
    {/* @begin STICKY  */}
    <BehaviorSticky>
      <HeaderFixed className={CLASS_DEMO_FIXED_HEADER} />
    </BehaviorSticky>
    {/* @end STICKY  */}

    <Content className={CLASS_DEMO_CONTENT} />

    {/* @begin STICKY IN CONTAINER */}
    <div ref={container1}>
      <BehaviorSticky container={container1} defaultOffsetTop={45} animate>
        <HeaderWithButtons className={CLASS_DEMO_FIXED_BUTTONS} />
      </BehaviorSticky>
      <Content className={CLASS_DEMO_CONTENT} />
    </div>
    {/* @end STICKY IN CONTAINER  */}

    {/* @begin STICKY IN CONTAINER */}
    <div ref={container2}>
      <BehaviorSticky container={container2} defaultOffsetTop={45} animate>
        <HeaderWithButtons className={CLASS_DEMO_FIXED_BUTTONS} />
      </BehaviorSticky>
      <Content className={CLASS_DEMO_CONTENT} />
    </div>
    {/* @end STICKY IN CONTAINER  */}

    <FooterFixed className={CLASS_DEMO_FIXED_FOOTER} />
  </BehaviorStickyProvider>
)

export default Demo
