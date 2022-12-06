import PropTypes from 'prop-types'

import {
  Article,
  H2,
  Paragraph,
  RadioButton,
  RadioButtonGroup
} from '@s-ui/documentation-library'

import {themeMode, useMode} from '../../src/index.js'

const ArticleMode = ({className}) => {
  const [mode, setMode] = useMode()
  return (
    <Article className={className}>
      <H2>Mode</H2>
      <Paragraph>
        User can switch mode using the hook `useMode` or directly indicating it
        to the `Theme` component as a prop.
      </Paragraph>
      <RadioButtonGroup
        value={mode}
        onChange={(event, value) => {
          setMode(value)
        }}
      >
        {[undefined, ...Object.values(themeMode)].map(value => (
          <RadioButton
            key={`${value}`}
            value={value}
            checked={mode === value}
            label={`${value}`}
          />
        ))}
      </RadioButtonGroup>
    </Article>
  )
}

ArticleMode.propTypes = {
  className: PropTypes.string
}

export default ArticleMode
