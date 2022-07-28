import {useRef, useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Code, H2, H3, Paragraph} from '@s-ui/documentation-library'

import MoleculeInputTags from '../../src/index.js'
import Data from '../Data.js'
import {closeIcon} from '../settings.js'

const ArticleDefault = ({className}) => {
  const innerRef = useRef()
  const ref = useRef()
  const [tags, setTags] = useState(Data.beattles)
  const [value, setValue] = useState('George Martin')
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>The element can work controlled and uncontrolled</Paragraph>
      <H3>Uncontrolled</H3>
      <Paragraph>
        For uncontrolled behavior use the <Code>defaultValue</Code> (string) and{' '}
        <Code>defaultTags</Code> (array) props.
      </Paragraph>
      <MoleculeInputTags
        ref={ref}
        name="ArticleDefault1"
        defaultTags={Data.beattles}
        defaultValue="George Martin"
        tagsCloseIcon={closeIcon}
        onChange={(event, {name, tags, value, ...other}) => {
          console.log('onChange', {value, name, tags, ...other}) // eslint-disable-line no-console
        }}
        onChangeTags={(event, {tags, name, value, ...other}) => {
          console.log('onChangeTags', {value, name, tags, ...other}) // eslint-disable-line no-console
        }}
        innerRefInput={innerRef}
      />
      <H3>Controlled</H3>
      <Paragraph>
        For controlled behavior use the <Code>value</Code> (string) and{' '}
        <Code>tags</Code> (array) props.
      </Paragraph>
      <MoleculeInputTags
        name="ArticleDefault2"
        value={value}
        tags={tags}
        tagsCloseIcon={closeIcon}
        onChange={(event, {name, tags, value, ...other}) => {
          setTags(tags)
          setValue(value)
          console.log('onChange', {value, name, tags, ...other}) // eslint-disable-line no-console
        }}
        onChangeTags={(event, {tags, name, value, ...other}) => {
          setTags(tags)
          setValue(value)
          console.log('onChangeTags', {value, name, tags, ...other}) // eslint-disable-line no-console
        }}
      />
    </Article>
  )
}

ArticleDefault.displayName = 'ArticleDefault'
ArticleDefault.propTypes = {
  className: PropTypes.string
}

export default ArticleDefault
