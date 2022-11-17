import './index.scss'
import Head from '@s-ui/react-head'
// eslint-disable-next-line
function Theme({children, theme}) {
  return (
    <>
      <Head>
        <style>{`
      .sui-AtomButton {
        --color-inverted: var(--c-primary-900);
      }`}</style>
      </Head>
      {children}
    </>
  )
}

export default Theme
