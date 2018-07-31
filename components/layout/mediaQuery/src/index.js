import React from 'react'
import {ContainerQuery} from 'react-container-query'

import BREAKPOINTS from './breakpoints.json'

const getQueryObject = BREAKPOINTS =>
  Object.entries(BREAKPOINTS).reduce((query, [size, breakpoint]) => {
    query[size.toUpperCase()] = {
      minWidth: breakpoint
    }
    return query
  }, {})

const LayoutMediaQueryFactory = BREAKPOINTS => props => {
  const query = getQueryObject(BREAKPOINTS)
  return <ContainerQuery query={query}>{props.children}</ContainerQuery> // eslint-disable-line react/prop-types
}

const LayoutMediaQuery = LayoutMediaQueryFactory(BREAKPOINTS)
LayoutMediaQuery.displayName = 'LayoutMediaQuery'

export default LayoutMediaQuery
export {LayoutMediaQueryFactory}
