import {useState} from 'react'
import {
  H2,
  Paragraph,
  Code,
  Article,
  Grid,
  Cell,
  ListItem,
  UnorderedList,
  Label,
  Box,
  RadioButton
} from '@s-ui/documentation-library'
import PropTypes from 'prop-types'

import AtomTooltip, {AtomTooltipTriggers} from '../src/index.js'

const PlacementArticle = ({className, trigger}) => {
  const [placement, setPlacement] = useState(undefined)
  const handleClick = (event, value) => {
    setPlacement(value)
  }
  return (
    <Article className={className}>
      <H2>Placement</H2>
      <Paragraph>
        User can define the position where the element is located relative to
        its target using the <Code>placement</Code> prop. There are 15 different
        positions defined:
      </Paragraph>
      <Grid cols={5} gutter={[8, 8]}>
        <Cell>
          <UnorderedList>
            <ListItem>
              <Label>top-start</Label>
            </ListItem>
            <ListItem>
              <Label>top</Label>
            </ListItem>
            <ListItem>
              <Label>top-end</Label>
            </ListItem>
          </UnorderedList>
        </Cell>
        <Cell>
          <UnorderedList>
            <ListItem>
              <Label>left-start</Label>
            </ListItem>
            <ListItem>
              <Label>left</Label>
            </ListItem>
            <ListItem>
              <Label>left-end</Label>
            </ListItem>
          </UnorderedList>
        </Cell>
        <Cell>
          <UnorderedList>
            <ListItem>
              <Label>right-start</Label>
            </ListItem>
            <ListItem>
              <Label>right</Label>
            </ListItem>
            <ListItem>
              <Label>right-end</Label>
            </ListItem>
          </UnorderedList>
        </Cell>
        <Cell>
          <UnorderedList>
            <ListItem>
              <Label>bottom-start</Label>
            </ListItem>
            <ListItem>
              <Label>bottom</Label>
            </ListItem>
            <ListItem>
              <Label>bottom-end</Label>
            </ListItem>
          </UnorderedList>
        </Cell>
        <Cell>
          <UnorderedList>
            <ListItem>
              <Label>auto-start</Label>
            </ListItem>
            <ListItem>
              <Label>auto</Label>
            </ListItem>
            <ListItem>
              <Label>auto-end</Label>
            </ListItem>
          </UnorderedList>
        </Cell>
      </Grid>
      <Paragraph>
        the default value is bottom. it will place the tooltip at the bottom of
        the referenced element.
      </Paragraph>
      <Paragraph>
        If value is auto. It will place the tooltip automatically depending on
        the targeted element and its bindings over the middle of the viewport
        location.
      </Paragraph>
      <Grid cols={5} gutter={[8, 8]}>
        <Cell />
        <Cell>
          <RadioButton
            onClick={handleClick}
            value="auto-start"
            checked={placement === 'auto-start'}
            label="auto-start"
            fullWidth
          />
        </Cell>
        <Cell>
          <RadioButton
            onClick={handleClick}
            value="auto"
            checked={placement === 'auto'}
            label="auto"
            fullWidth
          />
        </Cell>
        <Cell>
          <RadioButton
            onClick={handleClick}
            value="auto-end"
            checked={placement === 'auto-end'}
            label="auto-end"
            fullWidth
          />
        </Cell>
        <Cell />
        <Cell />
        <Cell>
          <RadioButton
            onClick={handleClick}
            value="top-start"
            checked={placement === 'top-start'}
            label="top-start"
            fullWidth
          />
        </Cell>
        <Cell>
          <RadioButton
            onClick={handleClick}
            value="top"
            checked={placement === 'top'}
            label="top"
            fullWidth
          />
        </Cell>
        <Cell>
          <RadioButton
            onClick={handleClick}
            value="top-end"
            checked={placement === 'top-end'}
            label="top-end"
            fullWidth
          />
        </Cell>
        <Cell />
        <Cell>
          <RadioButton
            onClick={handleClick}
            value="left-start"
            checked={placement === 'left-start'}
            label="left-start"
            fullWidth
          />
        </Cell>
        <Cell span={3} />
        <Cell>
          <RadioButton
            onClick={handleClick}
            value="right-start"
            checked={placement === 'right-start'}
            label="right-start"
            fullWidth
          />
        </Cell>
        <Cell>
          <RadioButton
            onClick={handleClick}
            value="left"
            checked={placement === 'left'}
            label="left"
            fullWidth
          />
        </Cell>
        <Cell />
        <Cell>
          <AtomTooltip
            isVisible
            content="tooltip content"
            placement={placement}
            trigger={trigger}
          >
            <Box
              outline
              style={{
                padding: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              TARGET
            </Box>
          </AtomTooltip>
        </Cell>
        <Cell />
        <Cell>
          <RadioButton
            onClick={handleClick}
            value="right"
            checked={placement === 'right'}
            label="right"
            fullWidth
          />
        </Cell>
        <Cell>
          <RadioButton
            onClick={handleClick}
            value="left-end"
            checked={placement === 'left-end'}
            label="left-end"
            fullWidth
          />
        </Cell>
        <Cell span={3} />
        <Cell>
          <RadioButton
            onClick={handleClick}
            value="right-end"
            checked={placement === 'right-end'}
            label="right-end"
            fullWidth
          />
        </Cell>
        <Cell />
        <Cell>
          <RadioButton
            onClick={handleClick}
            value="bottom-start"
            checked={placement === 'bottom-start'}
            label="bottom-start"
            fullWidth
          />
        </Cell>
        <Cell>
          <RadioButton
            onClick={handleClick}
            value="bottom"
            checked={placement === 'bottom'}
            label="bottom"
            fullWidth
          />
        </Cell>
        <Cell>
          <RadioButton
            onClick={handleClick}
            value="bottom-end"
            checked={placement === 'bottom-end'}
            label="bottom-end"
            fullWidth
          />
        </Cell>
        <Cell />
      </Grid>
    </Article>
  )
}

PlacementArticle.propTypes = {
  className: PropTypes.string,
  trigger: PropTypes.oneOf(Object.values(AtomTooltipTriggers))
}

export default PlacementArticle
