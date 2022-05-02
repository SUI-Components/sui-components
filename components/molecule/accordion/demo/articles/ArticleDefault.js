import PropTypes from 'prop-types'

import {Article, H2, H3, Paragraph, Code} from '@s-ui/documentation-library'

import Accordion, {AccordionItem} from '../../src/index.js'

const ArticleDefault = ({className}) => {
  const onChange = (event, {values, value, isExpanded}) => {
    console.log('onChange', event, {values, value, isExpanded})
  }
  const onItemClick =
    item =>
    (event, {value, isExpanded, values}) =>
      console.log('onItemClick', item, event, {value, isExpanded, values})

  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>paragraph</Paragraph>
      <Accordion onChange={onChange}>
        <AccordionItem
          value="value-1"
          label="Header 1"
          onClick={onItemClick('header1')}
        >
          Accordion Item Children 1
        </AccordionItem>
        <AccordionItem
          value="value-3"
          label="Header 2"
          onClick={onItemClick('header1')}
        >
          Accordion Item Children 2
        </AccordionItem>
      </Accordion>
      <H3>Handlers</H3>
      <Code>onChange</Code>
    </Article>
  )
}

ArticleDefault.displayName = 'ArticleDefault'

ArticleDefault.propTypes = {
  className: PropTypes.string
}

export default ArticleDefault
