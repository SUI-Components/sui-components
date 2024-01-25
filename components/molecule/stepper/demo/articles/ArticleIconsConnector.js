import {useState} from 'react'

import PropTypes from 'prop-types'

import {
  Article,
  Box,
  Cell,
  Code,
  Grid,
  H2,
  Label,
  ListItem,
  Paragraph,
  RadioButton,
  RadioButtonGroup,
  UnorderedList
} from '@s-ui/documentation-library'

import MoleculeStepper from '../../src/index.js'
import LoremIpsum from '../LoremIpsum.js'
import {currentIcon as iconCurrent, defaultIcon as iconDefault, visitedIcon as iconVisited} from '../settings.js'

const steps = 5
const step = Math.ceil(steps / 2)
const labels = Array(steps)
  .fill()
  .map((v, index) => <LoremIpsum units="words" count={2} format="plain" />)

const ArticleIconsConnector = ({className}) => {
  const [hasConnector, setHasConnector] = useState(true)
  const [icon, setIcon] = useState(true)
  const [visitedIcon, setVisitedIcon] = useState(true)
  const [currentIcon, setCurrentIcon] = useState(true)
  return (
    <Article className={className}>
      <H2>Connector and Icons</H2>
      <Paragraph>
        The stepper can be customized adding/removing the connectors between each steps using the{' '}
        <Code>hasConnector</Code> (boolean default true) prop.
      </Paragraph>
      <Grid cols={1}>
        <Cell>
          <Label>hasConnector</Label>
        </Cell>
        <Cell>
          <RadioButtonGroup value={hasConnector} onChange={(event, value) => setHasConnector(value)}>
            {[undefined, false, true].map(hasConnectorValue => (
              <RadioButton
                key={`${hasConnectorValue}`}
                label={`${hasConnectorValue}`}
                checked={hasConnectorValue === hasConnector}
                value={hasConnectorValue}
              />
            ))}
          </RadioButtonGroup>
        </Cell>
      </Grid>
      <Box>
        <MoleculeStepper
          steps={steps}
          step={step}
          labels={labels}
          hasConnector={hasConnector}
          icon={icon && iconDefault}
          visitedIcon={visitedIcon && iconVisited}
          currentIcon={currentIcon && iconCurrent}
        />
      </Box>
      <Grid cols={3} gutter={[8, 8]}>
        <Cell>
          <Label>icon</Label>
        </Cell>
        <Cell>
          <Label>visitedIcon</Label>
        </Cell>
        <Cell>
          <Label>currentIcon</Label>
        </Cell>
        <Cell>
          <RadioButtonGroup value={icon} onChange={(event, value) => setIcon(value)} fullWidth>
            {[undefined, false, true].map(iconValue => (
              <RadioButton key={`${iconValue}`} label={`${iconValue}`} checked={iconValue === icon} value={iconValue} />
            ))}
          </RadioButtonGroup>
        </Cell>
        <Cell>
          <RadioButtonGroup value={visitedIcon} onChange={(event, value) => setVisitedIcon(value)} fullWidth>
            {[undefined, false, true].map(iconValue => (
              <RadioButton
                key={`${iconValue}`}
                label={`${iconValue}`}
                checked={iconValue === visitedIcon}
                value={iconValue}
              />
            ))}
          </RadioButtonGroup>
        </Cell>
        <Cell>
          <RadioButtonGroup value={currentIcon} onChange={(event, value) => setCurrentIcon(value)} fullWidth>
            {[undefined, false, true].map(iconValue => (
              <RadioButton
                key={`${iconValue}`}
                label={`${iconValue}`}
                checked={iconValue === currentIcon}
                value={iconValue}
              />
            ))}
          </RadioButtonGroup>
        </Cell>
      </Grid>
      <Paragraph>The icon steps can be customized using:</Paragraph>
      <UnorderedList>
        <ListItem>
          <Paragraph>
            <Code>icon</Code>: the default icon for each step
          </Paragraph>
        </ListItem>
        <ListItem>
          <Paragraph>
            <Code>currentIcon</Code>: the rendered icon if the step becomes the current step even if an icon is
            provided.
          </Paragraph>
        </ListItem>
        <ListItem>
          <Paragraph>
            <Code>visitedIcon</Code>: the rendered icon for every previous step to the current one even if an icon is
            provided.
          </Paragraph>
        </ListItem>
      </UnorderedList>
    </Article>
  )
}

ArticleIconsConnector.displayName = 'ArticleIconsConnector'

ArticleIconsConnector.propTypes = {
  className: PropTypes.string
}

export default ArticleIconsConnector
