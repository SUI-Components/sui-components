import {
  H2,
  Paragraph,
  Code,
  Article,
  Grid,
  Cell,
  ListItem,
  Bold,
  UnorderedList,
  Label,
  Box
} from '@s-ui/documentation-library'
import PropTypes from 'prop-types'
import NewAtomTooltip, {
  AtomTooltipTriggers,
  AtomTooltipColors
} from '../src/NewAtomTooltip'

const ColorArticle = ({className, trigger}) => {
  return (
    <Article className={className}>
      <H2>Color</H2>
      <Paragraph>color</Paragraph>

      <Grid cols={Object.values(AtomTooltipColors).length}>
        {Object.entries(AtomTooltipColors).map(([key, value]) => (
          <Cell key={key}>
            <NewAtomTooltip
              content={value}
              trigger={trigger}
              isVisible={true}
              color={value}
            >
              <Label>{value}</Label>
            </NewAtomTooltip>
          </Cell>
        ))}
      </Grid>
    </Article>
  )
}

ColorArticle.defaultProps = {
  className: PropTypes.string,
  trigger: PropTypes.oneOf(Object.values(AtomTooltipTriggers))
}

export default ColorArticle
