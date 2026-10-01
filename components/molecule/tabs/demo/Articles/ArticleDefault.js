import MoleculeTabs, {MoleculeTab} from 'components/molecule/tabs/src/index.js'
import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'

import Content from '../components/Content.js'
import {CLASS_DEMO_CONTENT_TAB} from '../config.js'

const ArticleType = ({className}) => {
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>
        By default it is presented as an horizontal basic mode. The <Code>MoleculeTabs</Code> element act as a wrapper
        of other different <Code>MoleculeTab</Code> child elements. You can define wich one will be the desired{' '}
        <Code>active</Code> (boolean) prop will be the predefined. in case of defining more than 1, the active set tab
        will be the last active defined. You can also use <Code>disable</Code> (boolean) prop to make unreachable any of
        that tabs.
      </Paragraph>
      <MoleculeTabs>
        {Array(5)
          .fill(true)
          .map((v, index) => (
            <MoleculeTab
              key={index + 1}
              label={<span style={{padding: '0 8px'}}>Label {index + 1}</span>}
              numTab={index + 1}
              active={index + 1 === 1}
              disabled={index + 1 === 4}
            >
              <Content
                title="Title"
                number={index + 1}
                className={CLASS_DEMO_CONTENT_TAB}
                style={{
                  borderTop: 0,
                  borderLeft: '1px solid #e6e6e6',
                  borderRight: '1px solid #e6e6e6',
                  borderBottom: '1px solid #e6e6e6'
                }}
              />
            </MoleculeTab>
          ))}
      </MoleculeTabs>
    </Article>
  )
}

ArticleType.displayName = 'ArticleType'

ArticleType.propTypes = {
  className: PropTypes.string
}

export default ArticleType
