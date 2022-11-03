import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Code, H2, Input, Paragraph} from '@s-ui/documentation-library'

import MoleculeAvatar from '../../src/index.js'

const ArticleName = ({className}) => {
  const [name, setName] = useState('John Doe')
  return (
    <Article className={className}>
      <H2>Name</H2>
      <Paragraph>
        Avatars containing simple characters can be created by passing a string
        to the <Code>name</Code> prop. It will add the first characters of the 2
        first words in capital letters.
      </Paragraph>
      <Input
        value={name}
        onChange={event => {
          setName(event.target.value)
        }}
        placeholder="name"
        fullWidth
      />
      <br />
      <br />
      <MoleculeAvatar name={name} />
    </Article>
  )
}

ArticleName.propTypes = {
  className: PropTypes.string
}

export default ArticleName
