import {useState} from 'react'
import PropTypes from 'prop-types'
import {
  Article,
  H2,
  Paragraph,
  Grid,
  Cell,
  RadioButton,
  Label,
  Code
} from '@s-ui/documentation-library'
import AtomTag, {atomTagDesigns} from 'components/atom/tag/src'

const noop = () => null

const ArticleTypes = ({className, icon: iconProp}) => {
  const [disabled, setDisabled] = useState(false)
  const [outlined, setOutlined] = useState(false)
  const [actionable, setActionable] = useState(false)
  const [icon, setIcon] = useState(null)
  return (
    <Article className={className}>
      <H2>Types</H2>
      <Paragraph>
        Use the <Code>type</Code> in order to color it as desired from a high
        order component.
      </Paragraph>
      <Grid cols={4} gutter={[8, 8]} style={{maxWidth: 500}}>
        <Cell>
          <Grid cols={2} gutter={[8, 8]}>
            <Cell
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end'
              }}
            >
              <Label>Actionable</Label>
            </Cell>
            <Cell>
              <RadioButton
                value={actionable}
                label={`${actionable}`}
                onClick={() => setActionable(!actionable)}
                fullWidth
              />
            </Cell>
          </Grid>
        </Cell>
        <Cell>
          <Grid cols={2} gutter={[8, 8]}>
            <Cell
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end'
              }}
            >
              <Label>Disabled</Label>
            </Cell>
            <Cell>
              <RadioButton
                value={disabled}
                label={`${disabled}`}
                onClick={() => setDisabled(!disabled)}
                fullWidth
              />
            </Cell>
          </Grid>
        </Cell>
        <Cell>
          <Grid cols={2} gutter={[8, 8]}>
            <Cell
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end'
              }}
            >
              <Label>Outline</Label>
            </Cell>
            <Cell>
              <RadioButton
                value={outlined}
                label={`${outlined}`}
                onClick={() => setOutlined(!outlined)}
                fullWidth
              />
            </Cell>
          </Grid>
        </Cell>
        <Cell>
          <Grid cols={2} gutter={[8, 8]}>
            <Cell
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end'
              }}
            >
              <Label>Icon</Label>
            </Cell>
            <Cell>
              <RadioButton
                value={!!icon}
                label={`${!!icon}`}
                onClick={() => setIcon(icon ? null : iconProp)}
                fullWidth
              />
            </Cell>
          </Grid>
        </Cell>
      </Grid>
      <br />
      <br />

      <AtomTag
        label="Alert"
        type="alert"
        disabled={disabled}
        design={outlined ? atomTagDesigns.OUTLINE : atomTagDesigns.SOLID}
        icon={icon}
        {...{...(actionable && {onClick: noop})}}
      />

      <AtomTag
        label="Warning"
        type="warning"
        disabled={disabled}
        design={outlined ? atomTagDesigns.OUTLINE : atomTagDesigns.SOLID}
        icon={icon}
        {...{...(actionable && {onClick: noop})}}
      />

      <AtomTag
        label="Special"
        type="special"
        disabled={disabled}
        design={outlined ? atomTagDesigns.OUTLINE : atomTagDesigns.SOLID}
        icon={icon}
        {...{...(actionable && {onClick: noop})}}
      />

      <AtomTag
        label="5 min ago"
        type="date"
        disabled={disabled}
        design={outlined ? atomTagDesigns.OUTLINE : atomTagDesigns.SOLID}
        icon={icon}
        {...{...(actionable && {onClick: noop})}}
      />
    </Article>
  )
}

ArticleTypes.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node
}

export default ArticleTypes
