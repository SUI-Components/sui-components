import PropTypes from 'prop-types'
import {
  Article,
  H2,
  Grid,
  Cell,
  Label,
  Paragraph,
  UnorderedList,
  ListItem,
  Code
} from '@s-ui/documentation-library'

import MoleculeAvatar, {MOLECULE_AVATAR_SIZES} from '../src/index'

const ArticleSize = ({className}) => {
  return (
    <Article className={className}>
      <H2>Size</H2>
      <Paragraph>
        MoleculeAvatar provides {Object.keys(MOLECULE_AVATAR_SIZES).length}{' '}
        different size values:
      </Paragraph>
      <UnorderedList>
        {Object.values(MOLECULE_AVATAR_SIZES)
          .reverse()
          .map(value => (
            <ListItem key={value}>{value}</ListItem>
          ))}
      </UnorderedList>
      <Grid cols={Object.keys(MOLECULE_AVATAR_SIZES).length} gutter={[8, 8]}>
        {Object.values(MOLECULE_AVATAR_SIZES)
          .reverse()
          .map(value => (
            <Cell key={value}>
              <Label>{value}</Label>
            </Cell>
          ))}
        {Object.values(MOLECULE_AVATAR_SIZES)
          .reverse()
          .map(value => (
            <Cell key={value}>
              <MoleculeAvatar size={value} />
            </Cell>
          ))}
      </Grid>
      <Paragraph>
        All those values are accessible in <Code>MOLECULE_AVATAR_SIZES</Code>{' '}
        enum.
      </Paragraph>
    </Article>
  )
}

ArticleSize.propTypes = {
  className: PropTypes.string
}

export default ArticleSize
