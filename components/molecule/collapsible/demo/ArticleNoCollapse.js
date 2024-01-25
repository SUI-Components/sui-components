import PropTypes from 'prop-types'

import {Article, H2, Paragraph} from '@s-ui/documentation-library'

import MoleculeCollapsible from '../src/index.js'
import {DemoWrapper} from './config/index.js'

const ArticleNoCollapse = ({className, icon, showText, hideText, height}) => {
  return (
    <Article className={className}>
      <H2>No need to collapse</H2>
      <Paragraph>The text is not long enough to need to collapse</Paragraph>
      <br />
      <br />
      <DemoWrapper>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <span>No need to collapse</span>
          <div
            style={{
              backgroundColor: '#fff',
              fontSize: 14,
              padding: 16,
              textAlign: 'left',
              maxWidth: 400
            }}
          >
            <MoleculeCollapsible icon={icon} showText={showText} hideText={hideText}>
              <p style={{margin: 0}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </MoleculeCollapsible>
          </div>
        </div>
      </DemoWrapper>
      <Paragraph>The component is set to not collapse once expanded, regardless of contents' height</Paragraph>
      <br />
      <br />
      <DemoWrapper>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <span>Contents can not be collapsed, once expanded</span>
          <div
            style={{
              backgroundColor: '#fff',
              fontSize: 14,
              padding: 16,
              textAlign: 'left',
              maxWidth: 400
            }}
          >
            <MoleculeCollapsible icon={icon} isCollapsible={false} showText={showText} hideText={hideText}>
              <p style={{margin: 0}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum magna non diam euismod blandit et
                eu ex. Vivamus pulvinar sodales tincidunt. Proin venenatis tristique quam, quis vehicula eros volutpat
                sed. Etiam sed tristique ante. Aenean commodo erat quis pulvinar luctus. Pellentesque ultricies lorem
                vitae ante euismod, at imperdiet est euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In dignissim
                porttitor sem, a varius nisl ullamcorper ut. Vivamus lacinia, quam eu placerat tempus, velit massa
                vulputate turpis, sit amet bibendum risus massa sit amet urna. Vestibulum ante ipsum primis in faucibus
                orci luctus et ultrices posuere cubilia Curae; Praesent finibus lobortis blandit. Vivamus scelerisque
                blandit purus a suscipit. Nunc mi elit, condimentum eget pulvinar eu, lacinia vitae ligula. Sed sit amet
                eros auctor ipsum tincidunt hendrerit ac mollis justo. Ut ac sagittis ipsum.
              </p>
            </MoleculeCollapsible>
          </div>
        </div>
      </DemoWrapper>
    </Article>
  )
}

ArticleNoCollapse.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node,
  showText: PropTypes.string,
  hideText: PropTypes.string,
  height: PropTypes.number
}

export default ArticleNoCollapse
