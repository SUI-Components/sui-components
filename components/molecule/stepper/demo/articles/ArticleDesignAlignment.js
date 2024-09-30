import {Fragment, useState} from 'react'

import PropTypes from 'prop-types'

import {
  Article,
  Cell,
  Code,
  Grid,
  H2,
  H3,
  H4,
  Label,
  ListItem,
  Paragraph,
  RadioButton,
  RadioButtonGroup,
  UnorderedList
} from '@s-ui/documentation-library'

import MoleculeStepper, {moleculeStepperAlignment, moleculeStepperDesign} from '../../src/index.js'
import LoremIpsum from '../LoremIpsum.js'

const steps = 5
const initialStep = Math.ceil(steps / 2)
const labels = Array(steps)
  .fill()
  .map((v, index) => <LoremIpsum units="words" count={2} format="plain" />)

const ArticleDesignAlignment = ({className}) => {
  const [design, setDesign] = useState()
  const [alignment, setAlignment] = useState()
  const [step, setStep] = useState(initialStep)
  const onChange = (_, {step}) => setStep(step)

  return (
    <Article className={className}>
      <H2>Design and Alignment</H2>
      <Paragraph>There are {Object.values(moleculeStepperDesign).length} different designs:</Paragraph>
      <UnorderedList>
        {Object.entries(moleculeStepperDesign)
          .map(([moleculeStepperDesignKey, moleculeStepperDesignValue]) => {
            const text = {
              DEFAULT: 'Labeled and connected, commonly used for desktop purposes.',
              COMPRESSED:
                'Focused on the current step and only display a simple connector element for every step. Commonly used in mobile devices and tablets. The main goal is to achieve the minimum space for representing the stepper data.',
              BASIC: 'tbd'
            }
            return [moleculeStepperDesignKey, moleculeStepperDesignValue, text[moleculeStepperDesignKey]]
          })
          .map(([moleculeStepperDesignKey, moleculeStepperDesignValue, text]) => (
            <ListItem key={moleculeStepperDesignKey}>
              <Paragraph>
                <Code>{moleculeStepperDesignKey}</Code> ({moleculeStepperDesignValue}): {text}
              </Paragraph>
            </ListItem>
          ))}
      </UnorderedList>
      <Paragraph>There are {Object.values(moleculeStepperAlignment).length} different alignments:</Paragraph>
      <UnorderedList>
        {Object.entries(moleculeStepperAlignment).map(
          ([moleculeStepperAlignmentKey, moleculeStepperAlignmentValue]) => (
            <ListItem key={moleculeStepperAlignmentKey}>
              <Paragraph>
                <Code>{moleculeStepperAlignmentKey}</Code> ({moleculeStepperAlignmentValue})
              </Paragraph>
            </ListItem>
          )
        )}
      </UnorderedList>

      <Grid cols={Object.values(moleculeStepperDesign).length + steps + 1} gutter={[8, 8]}>
        {Object.entries(moleculeStepperAlignment).map(
          ([moleculeStepperAlignmentKey, moleculeStepperAlignmentValue]) => {
            const child = {
              VERTICAL: (
                <Cell key={moleculeStepperAlignmentKey} span={Object.values(moleculeStepperDesign).length}>
                  <H3>{moleculeStepperAlignmentValue}</H3>
                  <Grid cols={Object.values(moleculeStepperDesign).length} gutter={[0, 8]}>
                    {Object.entries(moleculeStepperDesign).map(([, moleculeStepperDesignValue], i) => (
                      <Cell key={moleculeStepperDesignValue}>
                        <H4>{moleculeStepperDesignValue}</H4>
                      </Cell>
                    ))}
                    {Object.entries(moleculeStepperDesign).map(([, moleculeStepperDesignValue], i) => (
                      <Cell key={moleculeStepperDesignValue}>
                        <MoleculeStepper
                          steps={steps}
                          step={step}
                          labels={labels}
                          design={moleculeStepperDesignValue}
                          alignment={moleculeStepperAlignmentValue}
                          onChange={onChange}
                        />
                      </Cell>
                    ))}
                  </Grid>
                </Cell>
              ),
              HORIZONTAL: (
                <Cell key={moleculeStepperAlignmentKey} span={steps + 1}>
                  <H3>{moleculeStepperAlignmentValue}</H3>
                  <Grid cols={steps + 1} gutter={[0, 8]} style={{height: '100%'}}>
                    {Object.entries(moleculeStepperDesign).map(([, moleculeStepperDesignValue], i) => (
                      <Fragment key={moleculeStepperDesignValue}>
                        <Cell>
                          <H4>{moleculeStepperDesignValue}</H4>
                        </Cell>
                        <Cell span={steps}>
                          <MoleculeStepper
                            steps={steps}
                            step={step}
                            labels={labels}
                            design={moleculeStepperDesignValue}
                            alignment={moleculeStepperAlignmentValue}
                            onChange={onChange}
                          />
                        </Cell>
                      </Fragment>
                    ))}
                  </Grid>
                </Cell>
              )
            }
            return child[moleculeStepperAlignmentKey]
          }
        )}
      </Grid>
      <Paragraph>Use the controls to check your own design-aligment combination</Paragraph>
      <Grid gutter={[8, 8]} cols={2}>
        <Cell>
          <Label>aligment</Label>
        </Cell>
        <Cell>
          <Label>design</Label>
        </Cell>
        <Cell>
          <RadioButtonGroup value={alignment} onChange={(event, value) => setAlignment(value)} fullWidth>
            {[undefined, ...Object.values(moleculeStepperAlignment)].map(moleculeStepperAlignmentValue => (
              <RadioButton
                key={`${moleculeStepperAlignmentValue}`}
                label={`${moleculeStepperAlignmentValue}`}
                checked={moleculeStepperAlignmentValue === alignment}
                value={moleculeStepperAlignmentValue}
              />
            ))}
          </RadioButtonGroup>
        </Cell>
        <Cell>
          <RadioButtonGroup value={design} onChange={(event, value) => setDesign(value)} fullWidth>
            {[undefined, ...Object.values(moleculeStepperDesign)].map(moleculeStepperDesignValue => (
              <RadioButton
                key={`${moleculeStepperDesignValue}`}
                label={`${moleculeStepperDesignValue}`}
                checked={moleculeStepperDesignValue === design}
                value={moleculeStepperDesignValue}
              />
            ))}
          </RadioButtonGroup>
        </Cell>
        <Cell
          span={2}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center'
          }}
        >
          <MoleculeStepper
            steps={steps}
            step={step}
            labels={labels}
            design={design}
            alignment={alignment}
            onChange={onChange}
          />
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleDesignAlignment.displayName = 'ArticleDesignAlignment'

ArticleDesignAlignment.propTypes = {
  className: PropTypes.string
}

export default ArticleDesignAlignment
