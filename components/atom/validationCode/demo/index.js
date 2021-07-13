import {useState} from 'react'
import AtomValidationCode from 'components/atom/validationCode/src'

export default () => {
  const [code, setCode] = useState()

  return (
    <>
      <h1>Component</h1>
      <AtomValidationCode
        label="Tu código de verificación"
        onChange={setCode}
      />
      <h1>Code</h1>
      <p>{code}</p>
    </>
  )
}
