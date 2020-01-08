import React from 'react'
import MoleculeSelectPopover from '../../../../components/molecule/selectPopover/src'
import {IconArrowDown} from './Icons'

const Demo = () => {
  return (
    <>
      <MoleculeSelectPopover
        acceptButtonText="Aceptar"
        cancelButtonText="Cancelar"
        defaultText="Todas las operaciones"
        iconArrowDown={IconArrowDown}
      />
      <h1>TEST</h1>
    </>
  )
}

export default Demo
