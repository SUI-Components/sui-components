import {useState} from 'react'
import PropTypes from 'prop-types'

import {
  H2,
  Article,
  Paragraph,
  Code,
  Input,
  Label,
  Grid,
  Cell,
  UnorderedList,
  ListItem
} from '@s-ui/documentation-library'

import MoleculeDataCounter from '../../src/index.js'
import {propsMessages} from '../settings.js'

const ArticleBounds = ({className}) => {
  const [min, setMin] = useState(-5)
  const [max, setMax] = useState(5)
  const [value, setValue] = useState(min + (max - min) / 2)

  return (
    <Article className={className}>
      <H2>Min and Max</H2>
      <Paragraph>
        The dataCounter component can customize its boundings using the{' '}
        <Code>min</Code> and <Code>max</Code> props:
      </Paragraph>
      <UnorderedList>
        <ListItem>
          <Code>min</Code>: number prop. default 0
        </ListItem>

        <ListItem>
          <Code>max</Code>: number prop. default 100
        </ListItem>
      </UnorderedList>
      <Grid cols={3} gutter={[8, 8]}>
        <Cell>
          <Grid cols={1} gutter={[8, 0]}>
            <Cell>
              <Label>min</Label>
            </Cell>
            <Cell>
              <Input
                value={min}
                placeholder="default"
                type="number"
                onChange={event => {
                  const value = parseInt(event.target.value)
                  setMin(!isNaN(value) ? value : min)
                }}
              />
            </Cell>
          </Grid>
        </Cell>
        <Cell>
          <Grid cols={1} gutter={[8, 0]}>
            <Cell>
              <Label>max</Label>
            </Cell>
            <Cell>
              <Input
                value={max}
                placeholder="default"
                type="number"
                onChange={event => {
                  const value = parseInt(event.target.value)
                  setMax(!isNaN(value) ? value : max)
                }}
              />
            </Cell>
          </Grid>
        </Cell>
        <Cell>
          <Grid cols={1} gutter={[8, 0]}>
            <Cell>
              <Label>value</Label>
            </Cell>
            <Cell>
              <Input
                value={value}
                placeholder="default"
                type="number"
                onChange={event => {
                  const newValue = parseInt(event.target.value)
                  setValue(!isNaN(newValue) ? newValue : value)
                }}
              />
            </Cell>
          </Grid>
        </Cell>
        <Cell>
          <MoleculeDataCounter
            label="label"
            min={min}
            max={max}
            value={value}
            {...propsMessages}
          />
        </Cell>
      </Grid>
      <Paragraph>
        If the value is out of the defined bound it will output the errors
        defined using:
      </Paragraph>
      <Grid cols={2} gutter={[8, 8]}>
        <Cell>
          <UnorderedList>
            <ListItem>
              <Code>minValueHelpText</Code>: value equals the minimum defined
            </ListItem>
            <ListItem>
              <Code>minValueErrorText</Code>: value is less than the minimum
              defined
            </ListItem>
          </UnorderedList>
        </Cell>
        <Cell>
          <UnorderedList>
            <ListItem>
              <Code>maxValueHelpText</Code>: value equals the maximum defined
            </ListItem>
            <ListItem>
              <Code>maxValueErrorText</Code>: value is more than the minimum
              defined
            </ListItem>
          </UnorderedList>
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleBounds.displayName = 'ArticleBounds'

ArticleBounds.propTypes = {
  className: PropTypes.string
}

export default ArticleBounds
