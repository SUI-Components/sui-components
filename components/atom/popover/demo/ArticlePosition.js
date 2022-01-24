import {useState} from 'react'
import PropTypes from 'prop-types'

import {
  Article,
  H2,
  Paragraph,
  RadioButton,
  Grid,
  Cell,
  Box,
  Code,
  UnorderedList,
  ListItem,
  Label
} from '@s-ui/documentation-library'

import AtomPopover from 'components/atom/popover/src/index.js'

const ArticlePosition = ({className, content: Content}) => {
  const [position, setPosition] = useState(undefined)
  const handleClick = (event, value) => {
    setPosition(value)
  }
  return (
    <Article className={className}>
      <H2>Position</H2>
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
        the default value is bottom. it will place the popover at the bottom of
        the referenced element.
      </Paragraph>
      <Paragraph>
        If value is auto. It will place the popover automatically depending on
        the targeted element and its bindings over the middle of the viewport
        location.
      </Paragraph>
      <Grid cols={5} gutter={[8, 8]}>
        <Cell />
        <Cell>
          <RadioButton
            onClick={handleClick}
            value="auto-start"
            checked={position === 'auto-start'}
            label="auto-start"
            fullWidth
          />
        </Cell>
        <Cell>
          <RadioButton
            onClick={handleClick}
            value="auto"
            checked={position === 'auto'}
            label="auto"
            fullWidth
          />
        </Cell>
        <Cell>
          <RadioButton
            onClick={handleClick}
            value="auto-end"
            checked={position === 'auto-end'}
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
            checked={position === 'top-start'}
            label="top-start"
            fullWidth
          />
        </Cell>
        <Cell>
          <RadioButton
            onClick={handleClick}
            value="top"
            checked={position === 'top'}
            label="top"
            fullWidth
          />
        </Cell>
        <Cell>
          <RadioButton
            onClick={handleClick}
            value="top-end"
            checked={position === 'top-end'}
            label="top-end"
            fullWidth
          />
        </Cell>
        <Cell />
        <Cell>
          <RadioButton
            onClick={handleClick}
            value="left-start"
            checked={position === 'left-start'}
            label="left-start"
            fullWidth
          />
        </Cell>
        <Cell span={3} />
        <Cell>
          <RadioButton
            onClick={handleClick}
            value="right-start"
            checked={position === 'right-start'}
            label="right-start"
            fullWidth
          />
        </Cell>
        <Cell>
          <RadioButton
            onClick={handleClick}
            value="left"
            checked={position === 'left'}
            label="left"
            fullWidth
          />
        </Cell>
        <Cell />
        <Cell>
          <AtomPopover isVisible content={<Content />} placement={position}>
            <Box
              fullWidth
              outline
              style={{
                padding: 0,
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              TARGET
            </Box>
          </AtomPopover>
        </Cell>
        <Cell />
        <Cell>
          <RadioButton
            onClick={handleClick}
            value="right"
            checked={position === 'right'}
            label="right"
            fullWidth
          />
        </Cell>
        <Cell>
          <RadioButton
            onClick={handleClick}
            value="left-end"
            checked={position === 'left-end'}
            label="left-end"
            fullWidth
          />
        </Cell>
        <Cell span={3} />
        <Cell>
          <RadioButton
            onClick={handleClick}
            value="right-end"
            checked={position === 'right-end'}
            label="right-end"
            fullWidth
          />
        </Cell>
        <Cell />
        <Cell>
          <RadioButton
            onClick={handleClick}
            value="bottom-start"
            checked={position === 'bottom-start'}
            label="bottom-start"
            fullWidth
          />
        </Cell>
        <Cell>
          <RadioButton
            onClick={handleClick}
            value="bottom"
            checked={position === 'bottom'}
            label="bottom"
            fullWidth
          />
        </Cell>
        <Cell>
          <RadioButton
            onClick={handleClick}
            value="bottom-end"
            checked={position === 'bottom-end'}
            label="bottom-end"
            fullWidth
          />
        </Cell>
        <Cell />
      </Grid>
    </Article>
  )
}

ArticlePosition.propTypes = {
  className: PropTypes.string,
  content: PropTypes.elementType
}

export default ArticlePosition
