import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, H2, Input, Paragraph} from '@s-ui/documentation-library'

import MoleculeValidationCode from '../../src/index.js'

const ArticleDefault = ({className}) => {
  const [code, setCode] = useState(['6', '5', '4'])

  const onChangeHandler = (event, args) => {
    setCode(args.innerValue)
  }

  return (
    <Article className={className}>
      <H2>Only Input</H2>
      <Paragraph>
        You can use only the input part of the component, by unsetting labelText, deleteButtonTextLabel and footer
        props.
      </Paragraph>
      <div
        style={{
          backgroundColor: 'plum',
          marginBottom: '4px',
          padding: '8px'
        }}
      >
        <MoleculeValidationCode onChange={onChangeHandler} footer={null} value={code} />
      </div>
      <Input style={{textAlign: 'center'}} value={code.filter(Boolean).join('')} disabled fullWidth />
    </Article>
  )
}

ArticleDefault.propTypes = {
  className: PropTypes.string
}

export default ArticleDefault
