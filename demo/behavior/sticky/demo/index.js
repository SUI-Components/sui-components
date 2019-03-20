/* eslint-disable no-console */

import React from 'react'
import './index.scss'

import {
  BehaviorStickyProvider,
  BehaviorSticky
} from '../../../../components/behavior/sticky/src'

const BASE_CLASS_DEMO = 'DemoBehaviorSticky'
const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`

const Demo = () => (
  <div className={BASE_CLASS_DEMO}>
    <h1>
      <code>MoleculeInputTags</code>
    </h1>
    <div className={CLASS_DEMO_SECTION}>
      <h4>Basic</h4>
      <BehaviorStickyProvider>
        <div className="App sui-BehaviourSticky-fixed-parent">
          {/* @begin STICKY FIXED HEADER TOP */}
          <HeaderFixedTop className="Demo-header" style={{background: 'black'}}>
            <h1>Header Fixed Top</h1>
          </HeaderFixedTop>
          {/* @begin STICKY FIXED HEADER TOP */}

          <p className="Demo-placeholder">
            This content should scroll normally
          </p>

          {/* @begin STICKY  */}
          <BehaviorSticky defaultOffsetTop={85}>
            <Header className="Demo-header" style={{background: 'blue'}}>
              <h1>Header!</h1>
            </Header>
          </BehaviorSticky>
          {/* @end STICKY  */}

          <div className="Demo-title">React sticky header</div>
          <p className="Demo-placeholder">
            This content should scroll normally
          </p>

          {/* @begin STICKY IN CONTAINER */}

          {/*
        <LazyHeaderSticky container={this.containerGreen} />
        */}

          {/* @end STICKY IN CONTAINER  */}

          <p className="Demo-placeholder">
            This content should scroll normally
          </p>

          {/* @begin STICKY IN CONTAINER */}
          <div ref={this.containerRed} style={{height: '500px'}}>
            <StickyBehaviorSticky
              container={this.containerRed}
              defaultOffsetTop={170}
              style={{zIndex: 50}}
            >
              {({isSticky}) => (
                <Header
                  className={cx('Demo-header', {isSticky})}
                  style={{background: 'red'}}
                >
                  <h1>Header!</h1>
                </Header>
              )}
            </StickyBehaviorSticky>
          </div>
          {/* @end STICKY IN CONTAINER  */}

          <p className="Demo-placeholder">
            This content should scroll normally
          </p>

          {/* @begin STICKY IN CONTAINER */}
          <div ref={this.containerBrown} style={{height: '500px'}}>
            <StickyBehaviorSticky
              container={this.containerBrown}
              defaultOffsetTop={170}
              style={{zIndex: 50}}
            >
              {({isSticky}) => (
                <Header
                  className={cx('Demo-header', {isSticky})}
                  style={{background: 'brown'}}
                >
                  <h1>Header!</h1>
                </Header>
              )}
            </StickyBehaviorSticky>
          </div>
          {/* @end STICKY IN CONTAINER  */}

          <p className="Demo-placeholder">
            This content should scroll normally
          </p>

          {/* @end STICKY FIXED FOOTER BOTTOM */}
          <FooterFixedBottom
            className="Demo-header"
            style={{background: 'black'}}
          >
            <h1>Footer Fixed Botttom</h1>
          </FooterFixedBottom>
          {/* @end STICKY FIXED FOOTER BOTTOM */}
        </div>
      </BehaviorStickyProvider>
    </div>
  </div>
)

export default Demo
