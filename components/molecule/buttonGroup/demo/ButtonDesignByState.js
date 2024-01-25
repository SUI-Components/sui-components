import {useState} from 'react'

import AtomButton from '@s-ui/react-atom-button'

import MoleculeButtonGroup from '../src/index.js'

const ButtonDesignByState = () => {
  const [selected, setSelected] = useState()

  const _onClick = buttonId => {
    console.log(buttonId) // eslint-disable-line no-console
    setSelected(buttonId)
  }

  return (
    <MoleculeButtonGroup>
      <AtomButton design={selected !== 'A' ? 'outline' : 'solid'} onClick={() => _onClick('A')}>
        A
      </AtomButton>
      <AtomButton design={selected !== 'B' ? 'outline' : 'solid'} onClick={() => _onClick('B')}>
        B
      </AtomButton>
      <AtomButton design={selected !== 'C' ? 'outline' : 'solid'} onClick={() => _onClick('C')}>
        C
      </AtomButton>
    </MoleculeButtonGroup>
  )
}

ButtonDesignByState.displayName = 'ButtonDesignByState'
ButtonDesignByState.propTypes = {}

export default ButtonDesignByState
