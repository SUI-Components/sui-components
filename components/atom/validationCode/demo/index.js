import {useState} from 'react'
import AtomValidationCode from 'components/atom/validationCode/src'

export default () => {
  const [code, setCode] = useState()

  return (
    <div style={{maxWidth: '400px', padding: '16px'}}>
      <h1>Component</h1>
      <AtomValidationCode onChange={(_, {value}) => setCode(value)} />
      <h1>Code</h1>
      <p>{code}</p>
    </div>
  )
}
