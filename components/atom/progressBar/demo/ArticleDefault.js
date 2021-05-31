import { Article, H2 } from '@s-ui/documentation-library'
import AtomProgressBar from 'components/atom/progressBar/src'

const ArticlePosition = ({className}) => {
  return (
  <Article className={className}>
    <H2>Default</H2>
    <AtomProgressBar />
  </Article>
  )
}

export default ArticlePosition;