import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Label, ListItem, Paragraph, UnorderedList} from '@s-ui/documentation-library'

import MoleculeInputTags from '../../src/index.js'
import Data from '../Data.js'
import {closeIcon} from '../settings.js'

const ArticleHandlers = ({className}) => {
  const [tags, setTags] = useState(Data.beattles)
  const [value, setValue] = useState('George Martin')
  return (
    <Article className={className}>
      <H2>Handlers and onEnterKey</H2>
      <UnorderedList>
        <ListItem>
          <Code>onChange</Code>: fired every time the input text changes its inner value.
        </ListItem>
        <ListItem>
          <Code>onChangeTags</Code>: fired every time tags are added or removed.
        </ListItem>
      </UnorderedList>
      <MoleculeInputTags
        name="ArticleHandlers1"
        defaultTags={Data.beattles}
        defaultValue="George Martin"
        tagsCloseIcon={closeIcon}
        onChange={(event, {name, tags, value, ...other}) => {
          console.log('onChange', {value, name, tags, ...other}) // eslint-disable-line no-console
          setTags(tags)
          setValue(value)
        }}
        onChangeTags={(event, {tags, name, value, ...other}) => {
          console.log('onChangeTags', {value, name, tags, ...other}) // eslint-disable-line no-console
          setTags(tags)
          setValue(value)
        }}
        onEnterKey={['Tab', 'Enter', ',']}
      />
      <Paragraph>
        Use the <Code>onEnterKey</Code> (string || array of strings) to the define the valid key(s) to set a new tag.
        default: "Enter"
      </Paragraph>
      <Grid cols={1} gutter={[8, 8]}>
        <Cell>
          <Label>tags</Label>: {JSON.stringify(tags)}
        </Cell>
        <Cell>
          <Label>value</Label>: {JSON.stringify(value)}
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleHandlers.displayName = 'ArticleHandlers'
ArticleHandlers.propTypes = {
  className: PropTypes.string
}

export default ArticleHandlers
