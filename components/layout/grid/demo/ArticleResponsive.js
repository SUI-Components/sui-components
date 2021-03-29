import {useEffect, useState, Fragment} from 'react'
import PropTypes from 'prop-types'
import {
  Label,
  H2,
  Paragraph,
  Article,
  Code,
  UnorderedList,
  ListItem
} from '@s-ui/documentation-library'
import {useWindowSize} from 'react-use'

import LayoutGrid, {LayoutGridItem} from 'components/layout/grid/src'
import DemoWrapper from './demoWrapper'
import DemoBox from './demoBox'

const breakpoints = {
  xxs: 0,
  xs: 480,
  s: 600,
  m: 840,
  l: 960,
  xl: 1280,
  xxl: 1440
}

const breakpointColumns = {
  xxs: 2,
  xs: 12,
  s: 3,
  m: 12,
  l: 4,
  xl: 12,
  xxl: 6
}

const getKey = (object, value) => {
  const result = Object.entries(object).find(([key, iteratorValue]) => {
    if (value === iteratorValue) {
      return key
    }
  })
  return result?.['0']
}

const getSelectedBreakpoints = width => {
  const value = Object.values(breakpoints)
    .sort((a, b) => b - a)
    .find(val => width >= val)
  return getKey(breakpoints, value)
}

const ArticleResponsive = ({classname}) => {
  const {width} = useWindowSize()
  const boundedWidth = getSelectedBreakpoints(width)
  const [selectedBreakpoint, setSelectedBreakpoint] = useState(boundedWidth)
  useEffect(() => {
    setSelectedBreakpoint(boundedWidth)
  }, [boundedWidth, setSelectedBreakpoint])
  const colSpan = Object.fromEntries(
    Object.keys(breakpoints).map((key, index) => [
      key,
      12 / breakpointColumns[key]
    ])
  )
  return (
    <Article className={classname}>
      <H2>Breakpoint responsivity</H2>
      <Paragraph>
        The columns provided to each LayoutGridItem can also be configured for
        each breakpoint style using the following props:
        <UnorderedList>
          <ListItem>
            <Code>colSpan</Code>: It can also have an object with desired
            breakpoints as keys and the number of provided columns as value
            (Integer number between 1 ans 12).
          </ListItem>
          <ListItem>
            <Code>xxs</Code>, <Code>xs</Code>, <Code>s</Code>, <Code>m</Code>,{' '}
            <Code>l</Code>, <Code>xl</Code>, <Code>xxl</Code>: Set the numbers
            of provided columns for each item directly (Integer number between 1
            ans 12).
          </ListItem>
        </UnorderedList>
        <br />
        <br />
        Use for example:
        <UnorderedList>
          <ListItem>
            <Code>colSpan</Code>:{' '}
            {JSON.stringify(
              Object.fromEntries(
                Object.entries(breakpointColumns).map(([key, value]) => [
                  key,
                  12 / value
                ])
              )
            )}
          </ListItem>
          <ListItem>
            {Object.entries(breakpointColumns).map(([key, value], index) => (
              <Fragment key={index}>
                <Code>{key}</Code>: {12 / value}{' '}
              </Fragment>
            ))}
          </ListItem>
        </UnorderedList>
        <DemoWrapper>
          <Label>Selected Breakpoint</Label>: {selectedBreakpoint}:{' '}
          {12 / breakpointColumns[selectedBreakpoint]} (
          {breakpointColumns[selectedBreakpoint]} elements per row)
          <br />
          <LayoutGrid>
            {Array(breakpointColumns[selectedBreakpoint] * 3)
              .fill(0)
              .map((_, index) => (
                <>
                  <LayoutGridItem key={index} {...colSpan}>
                    <DemoBox>
                      <Label style={{color: 'white'}}>
                        {selectedBreakpoint}:
                        {breakpointColumns[selectedBreakpoint]}
                      </Label>{' '}
                      <Label style={{color: 'white'}}>e:{index}</Label>
                    </DemoBox>
                  </LayoutGridItem>
                </>
              ))}
          </LayoutGrid>
          * resize the browser to check the behaviour.
        </DemoWrapper>
      </Paragraph>
    </Article>
  )
}

ArticleResponsive.propTypes = {
  classname: PropTypes.string
}

export default ArticleResponsive
