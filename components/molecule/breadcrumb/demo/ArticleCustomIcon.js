import {useState} from 'react'

import PropTypes from 'prop-types'

import {
  AntDesignIcon,
  Article,
  Code,
  H2,
  Input,
  Paragraph,
  RadioButton,
  RadioButtonGroup
} from '@s-ui/documentation-library'

import MoleculeBreadcrumb from '../src/index.js'

const getCustomTextIcon = text => props => text && <span {...props}>{`${text}`}&nbsp;</span>
const getCustomIcon = icon =>
  icon !== undefined && (props => <AntDesignIcon icon={icon} style={{color: 'currentColor'}} {...props} />)

const ArticleCustomIcon = ({className, items}) => {
  const [iconID, setIconID] = useState(undefined)
  const [text, setText] = useState('/')
  return (
    <Article className={className}>
      <H2>Custom Icon</H2>
      <Paragraph>
        MoleculeBreadcrumb offers the opportunity to customize the separator icon between items through the{' '}
        <Code>icon</Code> prop, which might be a React component.
      </Paragraph>
      <RadioButtonGroup value={iconID} onChange={(event, value) => setIconID(value)}>
        {['AiFillCaretRight', 'AiOutlineCaretRight', 'AiOutlineDoubleRight', 'AiOutlineRight'].map((iconValue, key) => (
          <RadioButton key={key} value={iconValue} checked={iconID === iconValue} />
        ))}
      </RadioButtonGroup>
      <MoleculeBreadcrumb labelAttr="breadcrumb" items={items} icon={getCustomIcon(iconID)} />
      <Paragraph>Icon might be even a text (or string) Component node</Paragraph>
      <Input value={text} onChange={event => setText(event.target.value)} />
      <MoleculeBreadcrumb labelAttr="breadcrumb" items={items} icon={getCustomTextIcon(text)} />
    </Article>
  )
}

ArticleCustomIcon.displayName = 'ArticleCustomIcon'

ArticleCustomIcon.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({label: PropTypes.string, url: PropTypes.string}))
}

export default ArticleCustomIcon
