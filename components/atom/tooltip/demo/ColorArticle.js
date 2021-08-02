import {
  H2,
  Paragraph,
  Code,
  Article,
  Grid,
  Cell,
  Label
} from '@s-ui/documentation-library'
import PropTypes from 'prop-types'
import AtomTooltip, {AtomTooltipTriggers, AtomTooltipColors} from '../src'

const ColorArticle = ({className, trigger}) => {
  return (
    <Article className={className}>
      <H2>Color</H2>
      <Paragraph>
        All defined brand and semantic colors are available using the{' '}
        <Code>color</Code> enum prop.
      </Paragraph>
      <Paragraph>
        Available values can be obtained using the{' '}
        <Code>AtomTooltipColors</Code> enum.
      </Paragraph>
      <br />
      <br />
      <br />
      <Grid cols={Object.values(AtomTooltipColors).length}>
        {Object.entries(AtomTooltipColors).map(([key, value]) => (
          <Cell key={key}>
            <AtomTooltip
              content={value}
              trigger={trigger}
              isVisible
              color={value}
            >
              <Label>{value}</Label>
            </AtomTooltip>
          </Cell>
        ))}
      </Grid>
    </Article>
  )
}

ColorArticle.propTypes = {
  className: PropTypes.string,
  trigger: PropTypes.oneOf(Object.values(AtomTooltipTriggers))
}

export default ColorArticle
