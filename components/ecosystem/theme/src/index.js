import PropTypes from 'prop-types'

import Head, {HeadProvider} from '@s-ui/react-head'
import useCallbackRef from '@s-ui/react-hooks/lib/useCallbackRef'
import useControlledState from '@s-ui/react-hooks/lib/useControlledState/index.js'

import ThemeContext from './context/index.js'
import {useMode, useTheme} from './hook/index.js'
import getTokens from './utils/getTokens.js'
import {serialize} from './utils/tokenize.js'
import {MODE} from './settings.js'

// eslint-disable-next-line
const EcosystemTheme = ({
  tokens = {},
  components,
  selector = ':root',
  children,
  mode,
  defaultMode,
  onModeChange
}) => {
  const [modeState, setModeState] = useControlledState(mode, defaultMode)
  const [resultingTokens, dictionary] = getTokens(tokens, {mode: modeState})
  const modeChangeHandler = useCallbackRef(mode => {
    setModeState(mode)
    typeof onModeChange === 'function' && onModeChange(mode)
  })
  return (
    <>
      <HeadProvider>
        <Head>
          <style>{`${selector} {${serialize(resultingTokens)};`}</style>
        </Head>
      </HeadProvider>
      <ThemeContext
        mode={modeState}
        onModeChange={modeChangeHandler}
        tokens={dictionary}
        components={components}
      >
        {children}
      </ThemeContext>
    </>
  )
}

EcosystemTheme.propTypes = {
  tokens: PropTypes.shape({}), // Todo: define the tokens shape
  mode: PropTypes.oneOf(Object.values(MODE)),
  defaultMode: PropTypes.oneOf(Object.values(MODE)),
  selector: PropTypes.string,
  components: PropTypes.shape({}), // Todo: define the components shape
  onModeChange: PropTypes.func,
  children: PropTypes.node
}

EcosystemTheme.displayName = 'EcosystemTheme'

export {useTheme, useMode, MODE as themeMode}

export default EcosystemTheme
