import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'

import MoleculeQuickAction from '../src/index.js'

const ArticleSize = ({className, handleOnClick, getLeftIcon, getRightIcon}) => {
  return (
    <Article className={className}>
      <H2>Size</H2>
      <Paragraph>
        {' '}
        These are the options for the prop <Code>size</Code>{' '}
      </Paragraph>
      <span>MEDIUM</span>
      <MoleculeQuickAction onClick={handleOnClick} leftIcon={getLeftIcon()} rightIcon={getRightIcon()} size="medium">
        Action
      </MoleculeQuickAction>
      <br />
      <br />
      <span>LARGE</span>
      <MoleculeQuickAction onClick={handleOnClick} leftIcon={getLeftIcon()} rightIcon={getRightIcon()} size="large">
        Action
      </MoleculeQuickAction>
    </Article>
  )
}

ArticleSize.propTypes = {
  className: PropTypes.string,
  handleOnClick: PropTypes.func,
  getLeftIcon: PropTypes.func,
  getRightIcon: PropTypes.func
}

export default ArticleSize
