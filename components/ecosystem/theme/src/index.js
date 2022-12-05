// import './index.scss'
import Head, {HeadProvider} from '@s-ui/react-head'

import ThemeContext, {useTheme} from './context/index.js'
import setTokens from './utils/setTokens.js'
import {serialize} from './utils/tokenize.js'

// eslint-disable-next-line
const EcosystemTheme = ({tokens = {}, components, id, children, mode}) => {
  const [resultingTokens, dictionary] = setTokens(tokens)
  return (
    <HeadProvider>
      <Head>
        <style>{`:root {${serialize(resultingTokens)};`}</style>
      </Head>
      <ThemeContext {...dictionary}>{children}</ThemeContext>
    </HeadProvider>
  )
}

export {useTheme}

export default EcosystemTheme
