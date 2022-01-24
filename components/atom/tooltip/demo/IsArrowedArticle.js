import {
  H2,
  Paragraph,
  Article,
  Grid,
  Cell,
  Label,
  Code
} from '@s-ui/documentation-library'
import PropTypes from 'prop-types'

import AtomTooltip, {AtomTooltipTriggers} from '../src/index.js'

const IsArrowedArticle = ({className, trigger}) => {
  return (
    <Article className={className}>
      <H2>IsArrowed</H2>
      <Paragraph>
        The arrow which points the targetted element can be removed using the{' '}
        <Code>isArrowed</Code> boolean prop (by default is true)
      </Paragraph>
      <br />
      <br />
      <Grid cols={3} gutter={[8, 8]}>
        <Cell>
          <Label>undefined</Label>
          <br />
          <br />
          <br />
          <br />
        </Cell>
        <Cell>
          <Label>false</Label>
          <br />
          <br />
          <br />
          <br />
        </Cell>
        <Cell>
          <Label>true</Label>
          <br />
          <br />
          <br />
          <br />
        </Cell>
        <Cell>
          <AtomTooltip
            content="tooltip content"
            trigger={trigger}
            isVisible
            isArrowed={undefined}
          >
            <Label>tooltip</Label>
          </AtomTooltip>
        </Cell>
        <Cell>
          <AtomTooltip
            content="tooltip content"
            trigger={trigger}
            isVisible
            isArrowed={false}
          >
            <Label>tooltip</Label>
          </AtomTooltip>
        </Cell>
        <Cell>
          <AtomTooltip
            content="tooltip content"
            trigger={trigger}
            isVisible
            isArrowed
          >
            <Label>tooltip</Label>
          </AtomTooltip>
        </Cell>
      </Grid>
    </Article>
  )
}

IsArrowedArticle.propTypes = {
  className: PropTypes.string,
  trigger: PropTypes.oneOf(Object.values(AtomTooltipTriggers))
}

export default IsArrowedArticle
