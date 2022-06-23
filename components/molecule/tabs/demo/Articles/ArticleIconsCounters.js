import MoleculeTabs, {MoleculeTab} from 'components/molecule/tabs/src/index.js'
import PropTypes from 'prop-types'

import {
  AntDesignIcon,
  Article,
  Code,
  H2,
  Paragraph
} from '@s-ui/documentation-library'
import AtomIcon from '@s-ui/react-atom-icon'

import Content from '../components/Content.js'
import {CLASS_DEMO_CONTENT_TAB} from '../config.js'

const icons = [
  'AiFillWindows',
  'AiFillApple',
  'AiFillHeart',
  'AiFillChrome',
  'AiFillIeCircle'
]

const ArticleType = ({className}) => {
  return (
    <Article className={className}>
      <H2>Icons and Counters</H2>
      <Paragraph>The tabs can handle an both features</Paragraph>
      <Paragraph>
        Use the <Code>icon</Code> (node) as a MoleculeTab item prop.
      </Paragraph>
      <Paragraph>
        Use the <Code>count</Code> (number) as a MoleculeTab item prop.
      </Paragraph>
      <MoleculeTabs>
        {Array(icons.length)
          .fill(true)
          .map((v, index) => (
            <MoleculeTab
              key={index + 1}
              label={<span style={{padding: '0 8px'}}>Label {index + 1}</span>}
              numTab={index + 1}
              active={index + 1 === 1}
              count={index + 1}
              icon={
                <AtomIcon>
                  <AntDesignIcon
                    style={{color: 'currentColor'}}
                    icon={icons[index]}
                  />
                </AtomIcon>
              }
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
