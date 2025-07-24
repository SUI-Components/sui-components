import PropTypes from 'prop-types'

import {Article, Bold, Code, H1, H2, Paragraph} from '@s-ui/documentation-library'

import AtomCard, {atomCardCornerSize, atomCardDesign, atomCardElevation} from '../../src/index.js'
import Demo from '../utils/Demo/index.js'

const ArticleDefault = ({className}) => {
  return (
    <Article className={className}>
      <H2>Inset</H2>
      <Paragraph>
        User can place any card without padding to properly manage the space within onn it own by using the{' '}
        <Code>isInset</Code> boolean flag.
      </Paragraph>
      <Demo>
        <div
          style={{
            display: 'flex',
            flexFlow: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
            padding: 8,
            height: 500,
            background: 'transparent'
          }}
        >
          <div style={{aspectRatio: '3 / 2', maxHeight: '100%', padding: 32}}>
            <AtomCard as="article" isInset cornerSize={atomCardCornerSize.XXXL} elevation={atomCardElevation.XL}>
              <img
                src="https://i.ibb.co/DfPDWbZ5/pexels-markusspiske-113338.jpg"
                aria-hidden="true"
                style={{width: '100%', height: '100%', objectFit: 'cover'}}
              />
              <div style={{bottom: '2em', right: '2em', position: 'absolute', height: 240, width: '40%'}}>
                <AtomCard
                  design={atomCardDesign.GLASSED}
                  elevation={atomCardElevation['-M']}
                  cornerSize={atomCardCornerSize.XXL}
                >
                  <H1 style={{color: 'inherit'}}>Schwarzwald</H1>
                  <Paragraph style={{color: 'inherit', margin: 0, fontSize: '.8em', fontWeight: 'bold'}}>
                    6,009 km²
                  </Paragraph>
                  <Paragraph style={{color: 'inherit', margin: 0, fontSize: '.7em', fontWeight: 'bold'}}>
                    1,493 m
                  </Paragraph>
                  <Paragraph style={{color: 'inherit', margin: 0, fontSize: '.7em', fontWeight: 'bold'}}>
                    47°52′43″N 8°0′40″E / 47.87861°N 8.01111°E
                  </Paragraph>
                  <Paragraph
                    style={{
                      color: 'inherit',
                      marginBlock: 16,
                      marginInline: 0,
                      fontSize: '.8em',
                      textAlign: 'justify',
                      fontWeight: 'thin'
                    }}
                  >
                    The Black Forest is a mountainous region in southwest Germany, bordering France. Known for its
                    dense, evergreen forests and picturesque villages, it is often associated with the Brothers Grimm
                    fairy tales. It's renowned for its spas and the cuckoo clocks produced in the region since the
                    1700s. The region’s largest town, Freiburg, is filled with Gothic buildings and surrounded by
                    vineyards.
                  </Paragraph>
                </AtomCard>
              </div>
            </AtomCard>
          </div>
        </div>
      </Demo>
      <Paragraph>
        Cards can also be <Bold>nested</Bold> combining its cornerSizes and elevations properly.
      </Paragraph>
    </Article>
  )
}

ArticleDefault.displayName = 'ArticleDefault'

ArticleDefault.propTypes = {
  className: PropTypes.node
}

export default ArticleDefault
