import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H1, H2, Paragraph} from '@s-ui/documentation-library'

import AtomCard from '../../src/index.js'
import Demo from '../utils/Demo/index.js'

const ArticleDefault = ({className}) => {
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>By default, the element gets the following look and feel.</Paragraph>
      <Paragraph>
        The component encapsulates inner <Code>children</Code> (React.node) elements on a wrapper.
      </Paragraph>
      <Demo>
        <div
          style={{
            display: 'flex',
            flexFlow: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
            padding: 32,
            height: 500,
            background: 'transparent'
          }}
        >
          <div style={{aspectRatio: '3 / 1', maxHeight: '100%'}}>
            <AtomCard as="article">
              <Grid cols={3} gutter={[0, 8]}>
                <Cell>
                  <img
                    style={{width: '100%', height: '100%', objectFit: 'cover'}}
                    src="https://i.postimg.cc/RVT33szw/barcelona.png"
                    alt="Barcelona"
                  />
                </Cell>
                <Cell span={2}>
                  <H1>Barcelona</H1>
                  <Paragraph>
                    Barcelona is a vibrant city on Spain’s northeastern coast, known for its unique mix of history,
                    culture, and modern life. Famous for Antoni Gaudí’s architecture, including the Sagrada Família and
                    Park Güell, the city offers stunning sights. The Gothic Quarter, with its narrow streets and
                    historic buildings, reflects Barcelona’s medieval charm. Visitors enjoy beautiful Mediterranean
                    beaches, lively markets like La Boqueria, and delicious Catalan cuisine. Barcelona is also home to
                    the world-famous football club FC Barcelona and the iconic Camp Nou stadium. With its rich culture
                    and energetic atmosphere, Barcelona is a must-visit destination.
                  </Paragraph>
                </Cell>
              </Grid>
            </AtomCard>
          </div>
        </div>
      </Demo>
    </Article>
  )
}

ArticleDefault.displayName = 'ArticleDefault'

ArticleDefault.propTypes = {
  className: PropTypes.node
}

export default ArticleDefault
