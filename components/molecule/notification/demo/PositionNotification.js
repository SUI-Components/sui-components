/* eslint-disable react/prop-types */
import React, {useState} from 'react'

import MoleculeNotification from 'components/molecule/notification/src/index.js'

import {getButtons} from './utils.js'

const text =
  'Lorem fistrum tiene musho peligro quis no puedor se calle ustée aute. Ut se calle ustée a wan exercitation aute quis me cago en tus muelas de la pradera ut al ataquerl. No te digo trigo por no llamarte Rodrigor diodeno sit amet laboris ahorarr. Consectetur me cago en tus muelas te voy a borrar el cerito irure caballo blanco caballo negroorl laboris pupita officia laboris. A peich aute elit exercitation eiusmod elit ullamco laboris benemeritaar. Qué dise usteer irure consequat a peich nostrud irure ex sit amet. Ex veniam ad laboris no puedor aliquip eiusmod ut dolore de la pradera. Exercitation torpedo irure ex eiusmod cillum a wan hasta luego Lucas apetecan incididunt.'

const PositionNotification = ({position}) => {
  const [show, setShow] = useState(false)

  const toggleShow = () => {
    setShow(prev => !prev)
  }

  const handleClose = () => {
    setShow(false)
  }

  return (
    <div>
      <button
        className="sui-AtomButton sui-AtomButton--secondary"
        onClick={toggleShow}
        style={{width: '100px'}}
      >
        {show ? 'Hide' : 'Show'}
      </button>
      <MoleculeNotification
        buttons={getButtons()}
        position={position}
        show={show}
        onClose={handleClose}
      >
        {text}
      </MoleculeNotification>
    </div>
  )
}
export default PositionNotification
