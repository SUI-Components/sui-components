/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React from 'react'

import AtomImage from '@s-ui/react-atom-image'
import AtomCard from '../../../../components/atom/card/src'
import LayoutMediaQuery from '@s-ui/react-layout-media-query'

import './index.scss'

const srcImageCar =
  'http://media.astropublications.com.my/media/cars/assets/news/2016/10/week%204/mercedes-benz%20suv/mercedes-benz-glc-coupe-1.jpg'
const urlTarget = 'https://www.google.com/'
const urlTarget2 = 'https://www.twitter.com/'

const CarImage = () => <AtomImage src={srcImageCar} alt="" />
const CarInfo = () => (
  <div>
    <h2 style={{marginTop: 0}}>Mercedes Benz</h2>
    <p>A super cool car</p>
  </div>
)

const CarInfoLinks = () => (
  <div>
    <h2 style={{marginTop: 0}}>
      <a href={urlTarget2}>Mercedes Benz</a>
    </h2>
    <p>A super cool car</p>
  </div>
)

const Demo = () => {
  return (
    <div>
      <h1>AtomCard</h1>
      <div className="DemoAtomCard-section">
        <h2>
          Basic with <code>href</code>
        </h2>
        <AtomCard
          tabIndex="1"
          media={CarImage}
          content={CarInfo}
          href={urlTarget}
        />
      </div>
      <div className="DemoAtomCard-section">
        <h2>
          Basic without <code>href</code>
        </h2>
        <AtomCard tabIndex="2" media={CarImage} content={CarInfoLinks} />
      </div>
      <div className="DemoAtomCard-section">
        <h2>
          Basic with <code>href</code> and secondary actions
        </h2>
        <AtomCard
          tabIndex="2"
          media={CarImage}
          href={urlTarget}
          content={CarInfoLinks}
        />
      </div>
      <div className="DemoAtomCard-section">
        <h2>
          Basic with <code>highlight</code>
        </h2>
        <AtomCard
          tabIndex="3"
          media={CarImage}
          content={CarInfo}
          href={urlTarget}
          highlight
        />
      </div>
      <div className="DemoAtomCard-section DemoAtomCard-section--vertical">
        <h2>Vertical</h2>
        <AtomCard
          tabIndex="4"
          media={CarImage}
          content={CarInfo}
          href={urlTarget}
          vertical
        />
      </div>
      <h2>
        Responsive using <code>@s-ui/react-layout-media-query</code>
      </h2>
      <div className="DemoAtomCard-section DemoAtomCard-section--responsive">
        <h2>From Horizontal to Vertical Responsive</h2>
        <LayoutMediaQuery>
          {({S}) => {
            if (S)
              return (
                <AtomCard
                  tabIndex="5"
                  media={CarImage}
                  content={CarInfo}
                  href={urlTarget}
                />
              )
            return (
              <AtomCard
                tabIndex="5"
                media={CarImage}
                content={CarInfo}
                href={urlTarget}
                vertical
              />
            )
          }}
        </LayoutMediaQuery>
      </div>
      <div className="DemoAtomCard-section DemoAtomCard-section--responsive-vertical">
        <h2>From Vertical to Horizontal Responsive</h2>
        <LayoutMediaQuery>
          {({S}) => {
            if (S)
              return (
                <AtomCard
                  tabIndex="5"
                  media={CarImage}
                  content={CarInfo}
                  href={urlTarget}
                />
              )
            return (
              <AtomCard
                tabIndex="5"
                media={CarImage}
                content={CarInfo}
                href={urlTarget}
                vertical
              />
            )
          }}
        </LayoutMediaQuery>
      </div>
      <h2>Responsive using MediaQueries</h2>
      <div className="DemoAtomCard-section DemoAtomCard-section--big">
        <h2>From Vertical (mobile) to Horizontal (desktop)</h2>
        <AtomCard
          tabIndex="6"
          media={CarImage}
          content={CarInfo}
          href={urlTarget}
          responsive
        />
      </div>
    </div>
  )
}

export default Demo
