import {Fragment} from 'react'

import Injector from 'components/primitive/injector/src/index.js'
import PropTypes from 'prop-types'

import {Article, Box, Code, H2, Paragraph} from '@s-ui/documentation-library'

import Child from '../Child.js'
import OtherChild from '../OtherChild.js'

const ArticleProviso = ({className}) => {
  return (
    <Article className={className}>
      <H2>proviso</H2>
      <Paragraph>
        Use the <Code>proviso</Code> prop in order to filter the children
        elements you want to inject the props. By default, it will be injected
        to all of them.
      </Paragraph>
      <Box style={{paddingLeft: 0, paddingRight: 0, display: 'flex'}}>
        <Injector
          provisoProp="provisoProp"
          proviso={children => children.type === Child}
        >
          <Child name="proviso" />
          <OtherChild name="no-proviso" />
          <Fragment>
            <Child name="fragment.proviso" />
          </Fragment>
        </Injector>
      </Box>
      <Paragraph>
        This makes easy the identation of Injectors with different related
        proviso-props for each children.
      </Paragraph>
      <Box style={{paddingLeft: 0, paddingRight: 0, display: 'flex'}}>
        <Injector
          provisoChildProp="provisoChildProp"
          proviso={children => children.type === Child}
        >
          <Injector
            provisoOtherChildProp="provisoOtherChildProp"
            proviso={children => children.type === OtherChild}
          >
            <Injector
              provisoBothProp="provisoBothProp"
              proviso={children =>
                children.type === OtherChild || children.type === Child
              }
            >
              <Child name="child-proviso" />
              <OtherChild name="otherChild-proviso" />
              <Fragment>
                <Child name="fragment.child-proviso" />
                <OtherChild name="fragment.otherChild-proviso" />
              </Fragment>
            </Injector>
          </Injector>
        </Injector>
      </Box>
    </Article>
  )
}
ArticleProviso.displayName = 'ArticleProviso'

ArticleProviso.propTypes = {
  className: PropTypes.string
}

export default ArticleProviso
