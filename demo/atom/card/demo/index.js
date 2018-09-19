/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React from 'react'

import AtomImage from '@s-ui/react-atom-image'
import AtomCard from '../../../../components/atom/card/src'

import './index.scss'

const srcImageCar =
  'http://media.astropublications.com.my/media/cars/assets/news/2016/10/week%204/mercedes-benz%20suv/mercedes-benz-glc-coupe-1.jpg'
const urlTarget = 'https://www.coches.net/'

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
      <a href={urlTarget}>Mercedes Benz</a>
    </h2>
    <p>A super cool car</p>
  </div>
)

const handleResize = e => console.log('resize!')

const Demo = () => {
  return (
    <div>
      <h1>AtomCard</h1>
      <div className="DemoAtomCard-section">
        <h2>Basic</h2>
        <AtomCard media={CarImage} content={CarInfo} href={urlTarget} />
      </div>
      <div className="DemoAtomCard-section">
        <h2>
          Basic without <code>href</code>
        </h2>
        <AtomCard media={CarImage} content={CarInfoLinks} />
      </div>
      <div className="DemoAtomCard-section">
        <h2>
          Basic with <code>highlight</code>
        </h2>
        <AtomCard
          media={CarImage}
          content={CarInfo}
          href={urlTarget}
          highlight
        />
      </div>
      <div className="DemoAtomCard-section">
        <h2>Vertical</h2>
        <AtomCard
          media={CarImage}
          content={CarInfo}
          href={urlTarget}
          vertical
        />
      </div>
      <div className="DemoAtomCard-section--responsive">
        <h2>Vertical</h2>
        <AtomCard media={CarImage} content={CarInfo} href={urlTarget} />
      </div>
    </div>
  )
}

export default Demo
