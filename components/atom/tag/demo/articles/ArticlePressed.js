import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Label, Paragraph} from '@s-ui/documentation-library'

import AtomTag, {atomTagColors, atomTagDesigns} from '../../src/index.js'
import {checkIcon, closeIcon} from '../settings'

const ArticlePressed = ({className}) => {
  const [controlledPressed, setControlledPressed] = useState(false)
  const [uncontrolledPressed, setUncontrolledPressed] = useState(false)
  const [matrix, setMatrix] = useState(
    Object.values(atomTagDesigns).reduce((acc, atomTagDesign) => {
      Object.values(atomTagColors).forEach(atomTagColor => {
        acc[`${atomTagDesign}-${atomTagColor}`] = true
      })
      return acc
    }, {})
  )
  return (
    <Article className={className}>
      <H2>Pressed</H2>
      <Paragraph>
        Actionable button Tags can have a pressed state for becoming used as toggle buttons with on/off state. Set the{' '}
        <Code>pressed</Code> or <Code>defaultPressed</Code> boolean prop to define its controlled or uncontrolled
        status.
      </Paragraph>
      <Grid cols={2} gutter={[8, 0]} style={{maxWidth: 600}}>
        <Cell>
          <AtomTag
            label={`controlled ${controlledPressed ? 'pressed' : 'unpressed'}`}
            pressed={controlledPressed}
            onClick={(ev, {pressed}) => {
              setControlledPressed(!pressed)
            }}
          />
        </Cell>
        <Cell>
          <AtomTag
            label={`controlled ${uncontrolledPressed ? 'pressed' : 'unpressed'}`}
            defaultPressed={false}
            onClick={(ev, {pressed}) => {
              setUncontrolledPressed(!pressed)
            }}
          />
        </Cell>
      </Grid>
      <Paragraph>All different variations have its own visible pressed state.</Paragraph>
      <Grid gutter={[8, 0]} rows={3}>
        <Cell>
          <Grid cols={Object.values(atomTagColors).length + 1} gutter={[0, 8]}>
            <Cell />
            {Object.entries(atomTagColors).map(([colorKey, colorValue]) => (
              <Cell key={colorKey}>
                <Label>{colorKey}</Label>
              </Cell>
            ))}
          </Grid>
        </Cell>
        {Object.entries(atomTagDesigns).map(([designKey, designValue]) => (
          <Cell key={designKey}>
            <Grid cols={Object.values(atomTagColors).length + 1} gutter={[0, 8]}>
              <Cell>
                <Label>{designKey}</Label>
              </Cell>
              {Object.entries(atomTagColors).map(([colorKey, colorValue]) => {
                const tagState = matrix[`${designValue}-${colorValue}`]
                return (
                  <Cell
                    key={colorKey}
                    style={{
                      padding: 8,
                      ...(colorValue === atomTagColors.SURFACE && {backgroundColor: 'var(--c-base-inverse)'})
                    }}
                  >
                    <AtomTag
                      icon={tagState === true && checkIcon}
                      label="label"
                      color={colorValue}
                      design={designValue}
                      closeIcon={closeIcon}
                      defaultPressed={tagState}
                      onClick={(event, {pressed, ...rest}) => {
                        console.log({color: colorValue, design: designValue, pressed, ...rest})
                        setMatrix({...matrix, [`${designValue}-${colorValue}`]: !pressed})
                      }}
                    />
                  </Cell>
                )
              })}
            </Grid>
          </Cell>
        ))}
      </Grid>
    </Article>
  )
}

ArticlePressed.displayName = 'ArticlePressed'

ArticlePressed.propTypes = {
  className: PropTypes.string
}

export default ArticlePressed
