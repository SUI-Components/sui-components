import PropTypes from 'prop-types'

import {AntDesignIcon, Article, Cell, Code, Grid, H2, Paragraph, Strong} from '@s-ui/documentation-library'

import AtomIcon from '../../src/index.js'
import {ICONS} from '../settings.js'

const ArticleLazy = ({className}) => (
  <Article className={className}>
    <H2>Lazy Icons</H2>
    <Paragraph>
      By default, icons will be rendered <Strong>eagerly</Strong>. That means that they will be rendered on the server
      and, on the client, they will be hydrated asap. You could use the prop <Code>render</Code> and use the{' '}
      <Code>lazy</Code> value so the icons are rendered only when near the viewport. That could be useful when icons are
      used on a footer or on large lists.
    </Paragraph>
    <Grid cols={Object.values(ICONS).length} gutter={[8, 8]}>
      {Object.values(ICONS).map((iconName, index) => (
        <Cell key={index}>
          <AtomIcon render="lazy">
            <AntDesignIcon icon={iconName} style={{color: 'currentColor'}} />
          </AtomIcon>
        </Cell>
      ))}
    </Grid>
  </Article>
)

ArticleLazy.propTypes = {
  className: PropTypes.node
}

export default ArticleLazy
