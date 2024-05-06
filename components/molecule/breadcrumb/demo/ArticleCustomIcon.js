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
const getCustomIcon = icon => props => icon && <AntDesignIcon icon={icon} style={{color: 'currentColor'}} {...props} />

const ArticleCustomIcon = ({className, items}) => {
  const [icon, setIcon] = useState(undefined)
  const [text, setText] = useState('/')
  return (
    <Article className={className}>
      <H2>Custom Icon</H2>
      <Paragraph>
        MoleculeBreadcrumb offers the oportunity to customize the separator icon between items through the{' '}
        <Code>icon</Code> prop, which might be a React component.
      </Paragraph>
      <RadioButtonGroup value={icon} onChange={(event, value) => setIcon(value)}>
        {['AiFillCaretRight', 'AiOutlineCaretRight', 'AiOutlineDoubleRight', 'AiOutlineRight'].map((iconValue, key) => (
          <RadioButton key={iconValue} value={iconValue} checked={icon === iconValue} />
        ))}
      </RadioButtonGroup>
      <MoleculeBreadcrumb items={items} icon={getCustomIcon(icon)} />
      <Paragraph>Icon might be even a text (or string) Component node</Paragraph>
      <Input value={text} onChange={event => setText(event.target.value)} />
      <MoleculeBreadcrumb items={items} icon={getCustomTextIcon(text)} />
    </Article>
  )
}

ArticleCustomIcon.displayName = 'ArticleCustomIcon'

ArticleCustomIcon.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({label: PropTypes.string, url: PropTypes.string}))
}

export default ArticleCustomIcon
