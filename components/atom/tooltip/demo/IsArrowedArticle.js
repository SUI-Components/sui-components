import {useState} from 'react'
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
  Box,
  RadioButtonGroup,
  RadioButton
} from '@s-ui/documentation-library'
import PropTypes from 'prop-types'
import NewAtomTooltip, {
  AtomTooltipTriggers,
  AtomTooltipColors
} from '../src/NewAtomTooltip'

const IsArrowedArticle = ({className, trigger}) => {
  const [isArrowed, setIsArrowed] = useState(undefined)
  return (
    <Article className={className}>
      <H2>IsArrowed</H2>
      <Paragraph>isArrowed</Paragraph>

      <Grid cols={2} gutter={[8, 8]}>
        <Cell>
          <Label>isArrowed</Label>{' '}
          <RadioButtonGroup
            value={isArrowed}
            onChange={(ev, value) => {
              setIsArrowed(value === "undefined" ? undefined : value)
            }}
          >
            <RadioButton
              value={'undefined'}
              label="undefined"
              checked={isArrowed === undefined}
            />
            <RadioButton
              value={true}
              label="true"
              checked={isArrowed === true}
            />
            <RadioButton
              value={false}
              label="false"
              checked={isArrowed === false}
            />
          </RadioButtonGroup>
          <br />
          <br />
          <NewAtomTooltip
            content="tooltip content"
            trigger={trigger}
            isVisible={true}
            isArrowed={isArrowed}
          >
            <Label>tooltip</Label>
          </NewAtomTooltip>
        </Cell>
      </Grid>
    </Article>
  )
}

IsArrowedArticle.defaultProps = {
  className: PropTypes.string,
  trigger: PropTypes.oneOf(Object.values(AtomTooltipTriggers))
}

export default IsArrowedArticle
