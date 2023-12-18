import {Fragment} from 'react'

import Injector from 'components/primitive/injector/src/index.js'
import PropTypes from 'prop-types'

import {Article, Box, H2, H3, Paragraph} from '@s-ui/documentation-library'

import Child from '../Child.js'

const ArticleFragment = ({className}) => {
  return (
    <Article className={className}>
      <H2>Fragment</H2>
      <Paragraph>Injector will keep the fragment and add the injected props to its descendant recursively.</Paragraph>
      <H3>using React.Fragment</H3>
      <Box style={{paddingLeft: 0, paddingRight: 0, display: 'flex'}}>
        <Injector prop="prop">
          <Child name="child" />
          <Fragment>
            <Child name="fragment.child1" />
            <Child name="fragment.child2" />
          </Fragment>
          <Child name="child" />
        </Injector>
      </Box>
      <H3>using &lt;&gt;&lt;/&gt;</H3>
      <Box style={{paddingLeft: 0, paddingRight: 0, display: 'flex'}}>
        <Injector prop="prop">
          <Child name="child" />
          <>
            <Child name="<>.child1" />
            <Child name="<>.child2" />
          </>
          <Child name="child" />
        </Injector>
      </Box>
      <H3>3 level recursive injection</H3>
      <Box style={{paddingLeft: 0, paddingRight: 0, display: 'flex'}}>
        <Injector prop="prop">
          <Child name="child" />
          <Fragment>
            <Child name="fragment.child" />
            <Fragment>
              <Child name="fragment.fragment.child" />
              <Fragment>
                <Child name="fragment.fragment.fragment.child" />
              </Fragment>
            </Fragment>
          </Fragment>
        </Injector>
      </Box>
    </Article>
  )
}
ArticleFragment.displayName = 'ArticleFragment'

ArticleFragment.propTypes = {
  className: PropTypes.string
}

export default ArticleFragment
