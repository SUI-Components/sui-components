// import './index.scss'
import Head, {HeadProvider} from '@s-ui/react-head'

import setTokens from './utils/setTokens.js'

// eslint-disable-next-line
const EcosystemTheme = ({tokens = {}, components, id, children, mode}) => {
  return (
    <HeadProvider>
      <Head>
        <style>{`:root {${setTokens(tokens)}`}</style>
      </Head>
      {children}
    </HeadProvider>
  )
}

export default EcosystemTheme
