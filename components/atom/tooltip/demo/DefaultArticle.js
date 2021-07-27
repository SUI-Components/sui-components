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
import NewAtomTooltip, {AtomTooltipTriggers} from '../src/NewAtomTooltip'

const cssStyles = {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center'
}

const DefaultArticle = ({className, trigger}) => {
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>
        The default <Code>AtomTooltip</Code> component can be targetting text
        and also complex HTML and React elements. Is works wrapping the tackled
        element.
      </Paragraph>

      <Grid cols={2} gutter={[8, 8]} style={{height: 340}}>
        <Cell style={cssStyles}>
          <Paragraph>
            <NewAtomTooltip
              content="Tooltip content"
              trigger={trigger}
              isVisible={true}
            >
              Simple text with simple text content
            </NewAtomTooltip>
          </Paragraph>
        </Cell>
        <Cell style={cssStyles}>
          <Paragraph>
            <NewAtomTooltip
              content={
                <Box outline>
                  <Label>react element content</Label>
                </Box>
              }
              trigger={trigger}
              isVisible={true}
            >
              Simple text with React Element content
            </NewAtomTooltip>
          </Paragraph>
        </Cell>
        <Cell style={cssStyles}>
          <NewAtomTooltip
            content="Tooltip content"
            trigger={trigger}
            isVisible={true}
          >
            <Box outline>
              <Label>React Element</Label>
            </Box>
          </NewAtomTooltip>
        </Cell>
        <Cell style={cssStyles}>
          <NewAtomTooltip
            content={
              <Box outline>
                <Label>react element content</Label>
              </Box>
            }
            trigger={trigger}
            isVisible={true}
          >
            <Box outline>
              <Label>React Element</Label>
            </Box>
          </NewAtomTooltip>
        </Cell>
      </Grid>
      <Paragraph>
        The placement where the Tooltip is displayed is automatically located
        depending on the referenced element viewport position.
      </Paragraph>
    </Article>
  )
}

DefaultArticle.defaultProps = {
  className: PropTypes.string,
  trigger: PropTypes.oneOf(Object.values(AtomTooltipTriggers))
}

export default DefaultArticle
