import {useState} from 'react'

import PropTypes from 'prop-types'

import {
  Article,
  Cell,
  Code,
  Grid,
  H2,
  Input,
  Label,
  Paragraph
} from '@s-ui/documentation-library'

import MoleculeDropdownOption from '../src/index.js'
import {CLASS_DEMO_OPTION} from './config.js'

const ArticleDescription = ({className}) => {
  const [description, setDescription] = useState('description')
  return (
    <Article className={className}>
      <H2>Description</H2>
      <Paragraph>
        The <Code>description</Code> (string) prop is used to offer an extra
        information to the given component children content.
      </Paragraph>
      <Grid cell={1} gutter={[8, 8]}>
        <Cell>
          <Label>Description</Label>
        </Cell>
        <Cell>
          <Input
            value={description}
            onChange={event => setDescription(event.target.value)}
          />
        </Cell>
        <Cell>
          <Label>Result</Label>
        </Cell>
        <Cell className={CLASS_DEMO_OPTION}>
          <MoleculeDropdownOption description={description}>
            children
          </MoleculeDropdownOption>
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleDescription.displayName = 'ArticleDescription'

ArticleDescription.propTypes = {
  className: PropTypes.string
}

export default ArticleDescription
