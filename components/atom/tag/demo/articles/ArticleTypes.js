import {useState} from 'react'

import AtomTag, {atomTagDesigns} from 'components/atom/tag/src/index.js'
import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Label, Paragraph, RadioButton} from '@s-ui/documentation-library'

const noop = () => null

const ArticleTypes = ({className, icon, closeIcon}) => {
  const [disabled, setDisabled] = useState(false)
  const [outlined, setOutlined] = useState(false)
  const [actionable, setActionable] = useState(false)
  const [showIcon, setShowIcon] = useState(false)
  const [closeable, setCloseable] = useState(false)

  const props = {
    actionable,
    disabled,
    design: outlined ? atomTagDesigns.OUTLINE : atomTagDesigns.SOLID,
    icon: showIcon ? icon : null,
    closeIcon: closeable ? closeIcon : null,
    onClick: actionable ? noop : null
  }

  const availableFeatures = [
    {label: 'Actionable', value: actionable, action: setActionable},
    {label: 'Disabled', value: disabled, action: setDisabled},
    {label: 'Outline', value: outlined, action: setOutlined},
    {label: 'Icon', value: showIcon, action: setShowIcon},
    {label: 'Closeicon', value: closeable, action: setCloseable}
  ]

  return (
    <Article className={className}>
      <H2>Types</H2>
      <Paragraph>
        Use the <Code>type</Code> in order to color it as desired from a high order component.
      </Paragraph>

      <Grid cols={5} gutter={[8, 8]} style={{maxWidth: 500}}>
        {availableFeatures.map(({label, value, action}) => (
          <Cell>
            <Grid cols={2} gutter={[8, 8]}>
              <Cell
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end'
                }}
              >
                <Label>{label}</Label>
              </Cell>
              <Cell>
                <RadioButton value={value} label={String(value)} onClick={() => action(val => !val)} fullWidth />
              </Cell>
            </Grid>
          </Cell>
        ))}
      </Grid>
      <br />
      <br />

      {['Alert', 'Warning', 'Special', 'Date'].map(type => (
        <AtomTag label={type} type={type.toLocaleLowerCase()} {...props} />
      ))}
    </Article>
  )
}

ArticleTypes.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node,
  closeIcon: PropTypes.node
}

export default ArticleTypes
