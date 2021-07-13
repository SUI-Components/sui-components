import PropTypes from 'prop-types'
import {
  Article,
  H2,
  Grid,
  Cell,
  Label,
  Paragraph,
  Code,
  UnorderedList,
  ListItem
} from '@s-ui/documentation-library'

import MoleculeAvatar, {
  MOLECULE_AVATAR_BADGE_STATUSES,
  MOLECULE_AVATAR_BADGE_PLACEMENTS,
  MOLECULE_AVATAR_BADGE_SIZES
} from '../src/index'

const ArticleBadge = ({className}) => {
  return (
    <>
      <Article className={className}>
        <H2>Badge status</H2>
        <Paragraph>
          Status is customizable using the <Code>status</Code> (enum) prop:
        </Paragraph>
        <UnorderedList>
          {Object.values(MOLECULE_AVATAR_BADGE_STATUSES).map(value => (
            <ListItem key={value}>{value}</ListItem>
          ))}
        </UnorderedList>
        <Grid
          cols={Object.values(MOLECULE_AVATAR_BADGE_STATUSES).length + 1}
          gutter={[8, 8]}
        >
          {[undefined, ...Object.values(MOLECULE_AVATAR_BADGE_STATUSES)].map(
            value => (
              <Cell key={`${value}`}>
                <Label>{`${value}`}</Label>
              </Cell>
            )
          )}
          {[undefined, ...Object.values(MOLECULE_AVATAR_BADGE_STATUSES)].map(
            value => (
              <Cell key={`${value}`}>
                <MoleculeAvatar>
                  <MoleculeAvatar.Badge status={value} />
                </MoleculeAvatar>
              </Cell>
            )
          )}
        </Grid>
        <Paragraph>
          The default status is 'error' and all badge status are accessible
          using the <Code>MOLECULE_AVATAR_BADGE_STATUSES</Code> enum.
        </Paragraph>
      </Article>
      <br />
      <Article className={className}>
        <H2>Badge placement</H2>
        <Paragraph>
          Placement is customizable using the <Code>placement</Code> (enum)
          prop:
        </Paragraph>
        <UnorderedList>
          {Object.values(MOLECULE_AVATAR_BADGE_PLACEMENTS).map(value => (
            <ListItem key={value}>{value}</ListItem>
          ))}
        </UnorderedList>
        <Grid
          cols={Object.values(MOLECULE_AVATAR_BADGE_PLACEMENTS).length + 1}
          gutter={[8, 8]}
        >
          {[undefined, ...Object.values(MOLECULE_AVATAR_BADGE_PLACEMENTS)].map(
            value => (
              <Cell key={`${value}`}>
                <Label>{`${value}`}</Label>
              </Cell>
            )
          )}
          {[undefined, ...Object.values(MOLECULE_AVATAR_BADGE_PLACEMENTS)].map(
            value => (
              <Cell key={`${value}`}>
                <MoleculeAvatar>
                  <MoleculeAvatar.Badge placement={value} />
                </MoleculeAvatar>
              </Cell>
            )
          )}
        </Grid>
        <Paragraph>
          The default placement is 'bottom' and all badge placements are
          accessible using the <Code>MOLECULE_AVATAR_BADGE_PLACEMENTS</Code>{' '}
          enum.
        </Paragraph>
      </Article>
      <br />
      <Article className={className}>
        <H2>Badge size</H2>
        <Paragraph>
          The badge size is customizable using the <Code>size</Code> (enum)
          prop:
        </Paragraph>
        <UnorderedList>
          {Object.values(MOLECULE_AVATAR_BADGE_SIZES)
            .reverse()
            .map(value => (
              <ListItem key={value}>{value}</ListItem>
            ))}
        </UnorderedList>
        <Grid
          cols={Object.values(MOLECULE_AVATAR_BADGE_SIZES).length + 1}
          gutter={[8, 8]}
        >
          {[
            undefined,
            ...Object.values(MOLECULE_AVATAR_BADGE_SIZES).reverse()
          ].map(value => (
            <Cell key={`${value}`}>
              <Label>{`${value}`}</Label>
            </Cell>
          ))}
          {[
            undefined,
            ...Object.values(MOLECULE_AVATAR_BADGE_SIZES).reverse()
          ].map(value => (
            <Cell key={`${value}`}>
              <MoleculeAvatar size={value}>
                <MoleculeAvatar.Badge />
              </MoleculeAvatar>
            </Cell>
          ))}
        </Grid>
        <Paragraph>
          The default size is 'medium' and all badge sizes are accessible using
          the <Code>MOLECULE_AVATAR_BADGE_SIZES</Code> enum.
        </Paragraph>
      </Article>
    </>
  )
}

ArticleBadge.propTypes = {
  className: PropTypes.string
}

export default ArticleBadge
