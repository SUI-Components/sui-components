import PropTypes from 'prop-types'

import {Article, Code, H2, ListItem, Paragraph, UnorderedList} from '@s-ui/documentation-library'

import MoleculeQuickAction from '../src/index.js'

const ArticleDefault = ({className, handleOnClick, getLeftIcon, getRightIcon}) => {
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>These are the minimum required props to get the default MoleculeQuickAction:</Paragraph>
      <UnorderedList>
        <ListItem>
          <Code>onClick</Code>: Specifies the onClick function.
        </ListItem>
        <ListItem>
          <Code>leftIcon</Code>: Specifies the left Icon.
        </ListItem>
        <ListItem>
          <Code>rightIcon</Code>: Specifies the right Icon.
        </ListItem>
      </UnorderedList>
      <MoleculeQuickAction onClick={handleOnClick} leftIcon={getLeftIcon()} rightIcon={getRightIcon()}>
        Action
      </MoleculeQuickAction>
    </Article>
  )
}

ArticleDefault.propTypes = {
  className: PropTypes.string,
  handleOnClick: PropTypes.func,
  getLeftIcon: PropTypes.func,
  getRightIcon: PropTypes.func
}

export default ArticleDefault
