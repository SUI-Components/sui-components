import PropTypes from 'prop-types'
import {
  Article,
  Bold,
  Cell,
  DevIcon,
  Grid,
  H2,
  H4,
  Label,
  ListItem,
  UnorderedList
} from '@s-ui/documentation-library'

import AtomBadge, {atomBadgeSizes} from '../src'

const icon = <DevIcon icon="DiGithubBadge" />

const ArticleContent = ({className}) => {
  return (
    <Article className={className}>
      <H2>Content</H2>
      <H4>Text</H4>
      <UnorderedList>
        <ListItem>Numbers, text and icons are valid</ListItem>
        <ListItem>The content will never split in two lines</ListItem>
        <ListItem>There's no limit of characters</ListItem>
      </UnorderedList>
      <Grid cols={3} gutter={10} style={{width: 200}}>
        <Cell>
          <Label>Small</Label>
        </Cell>
        <Cell>
          <AtomBadge label="label" size={atomBadgeSizes.SMALL} />
        </Cell>
        <Cell>
          <AtomBadge label="label" transparent size={atomBadgeSizes.SMALL} />
        </Cell>
        <Cell>
          <Label>Medium</Label>
        </Cell>
        <Cell>
          <AtomBadge label="label" size={atomBadgeSizes.MEDIUM} />
        </Cell>
        <Cell>
          <AtomBadge label="label" transparent size={atomBadgeSizes.MEDIUM} />
        </Cell>
        <Cell>
          <Label>Large</Label>
        </Cell>
        <Cell>
          <AtomBadge label="label" size={atomBadgeSizes.LARGE} />
        </Cell>
        <Cell>
          <AtomBadge label="label" transparent size={atomBadgeSizes.LARGE} />
        </Cell>
      </Grid>
      <H4>Icons</H4>
      <UnorderedList>
        <ListItem>
          <Bold>Icons are optional</Bold> and can be placed either on the right
          or the left side, but never on both at the same time.
        </ListItem>
        <ListItem>Small badges with background won't display icons</ListItem>
      </UnorderedList>
      <Grid cols={5} gutter={10} style={{width: 500}}>
        <Cell>
          <Label>Small</Label>
        </Cell>
        <Cell>
          <AtomBadge
            label="label"
            icon={icon}
            iconRight
            size={atomBadgeSizes.SMALL}
          />
        </Cell>
        <Cell>
          <AtomBadge
            label="label"
            icon={icon}
            iconLeft
            size={atomBadgeSizes.SMALL}
          />
        </Cell>
        <Cell>
          <AtomBadge
            label="label"
            icon={icon}
            iconRight
            transparent
            size={atomBadgeSizes.SMALL}
          />
        </Cell>
        <Cell>
          <AtomBadge
            label="label"
            icon={icon}
            iconLeft
            transparent
            size={atomBadgeSizes.SMALL}
          />
        </Cell>
        <Cell>
          <Label>Medium</Label>
        </Cell>
        <Cell>
          <AtomBadge
            label="label"
            icon={icon}
            iconRight
            size={atomBadgeSizes.MEDIUM}
          />
        </Cell>
        <Cell>
          <AtomBadge
            label="label"
            icon={icon}
            iconLeft
            size={atomBadgeSizes.MEDIUM}
          />
        </Cell>
        <Cell>
          <AtomBadge
            label="label"
            icon={icon}
            iconRight
            transparent
            size={atomBadgeSizes.MEDIUM}
          />
        </Cell>
        <Cell>
          <AtomBadge
            label="label"
            icon={icon}
            iconLeft
            transparent
            size={atomBadgeSizes.MEDIUM}
          />
        </Cell>
        <Cell>
          <Label>Large</Label>
        </Cell>
        <Cell>
          <AtomBadge
            label="label"
            icon={icon}
            iconRight
            size={atomBadgeSizes.LARGE}
          />
        </Cell>
        <Cell>
          <AtomBadge
            label="label"
            icon={icon}
            iconLeft
            size={atomBadgeSizes.LARGE}
          />
        </Cell>
        <Cell>
          <AtomBadge
            label="label"
            icon={icon}
            iconRight
            transparent
            size={atomBadgeSizes.LARGE}
          />
        </Cell>
        <Cell>
          <AtomBadge
            label="label"
            icon={icon}
            iconLeft
            transparent
            size={atomBadgeSizes.LARGE}
          />
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleContent.propTypes = {
  className: PropTypes.string
}

export default ArticleContent
