import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Box, Cell, Code, Grid, H2, H3, Paragraph} from '@s-ui/documentation-library'

import NestedExample from '../NestedExample.js'

const ArticleDefault = ({className}) => {
  const [unchecked, setUnchecked] = useState({
    checked: false,
    indeterminate: false
  })
  const [checked, setChecked] = useState({checked: true, indeterminate: false})
  const [indeterminate, setIndeterminate] = useState({
    checked: false,
    indeterminate: true
  })
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>
        The Nested Checkboxes Organism is a component that returns a checkbox field with a provided children. It also
        controls its inner checkbox elements and checks or unchecks it depending on the parent element. All its
        descendant children checkboxes can also control the its parent state.
      </Paragraph>
      <Paragraph>
        In works controlled or uncontrolled using <Code>checked</Code> or <Code>defaultChecked</Code> (boolean) prop.
      </Paragraph>
      <Paragraph>
        If all its descendant checkboxes has not the same state, the parent state might be <Code>indeterminate</Code>.
        In case it is not, all the descendant checkboxes will take the same state as the parent (default unchecked).
      </Paragraph>
      <Grid cols={3} gutter={[8, 8]}>
        <Cell />
        <Cell>
          <H3>Controlled</H3>
        </Cell>
        <Cell>
          <H3>Uncontrolled</H3>
        </Cell>
        <Cell>
          <H3>Unchecked</H3>
        </Cell>
        <Cell>
          <Box color="#FAFAFA">
            <NestedExample
              name="controlled-unchecked"
              checked={unchecked.checked}
              indeterminate={unchecked.indeterminate}
              defaultValues={[{}, {}, {}]}
              onChange={(ev, ...args) => setUnchecked(...args)}
            />
          </Box>
        </Cell>
        <Cell>
          <Box>
            <NestedExample name="uncontrolled-unchecked" defaultChecked={false} defaultValues={[{}, {}, {}]} />
          </Box>
        </Cell>
        <Cell>
          <H3>Checked</H3>
        </Cell>
        <Cell>
          <Box>
            <NestedExample
              name="controlled-checked"
              checked={checked.checked}
              indeterminate={checked.indeterminate}
              defaultValues={[{checked: true}, {checked: true}, {checked: true}]}
              onChange={(ev, ...args) => setChecked(...args)}
            />
          </Box>
        </Cell>
        <Cell>
          <Box color="#FAFAFA">
            <NestedExample
              name="uncontrolled-checked"
              defaultChecked
              defaultValues={[{checked: true}, {checked: true}, {checked: true}]}
            />
          </Box>
        </Cell>
        <Cell>
          <H3>Indeterminate</H3>
        </Cell>
        <Cell>
          <Box color="#FAFAFA">
            <NestedExample
              name="controlled-indeterminate"
              checked={indeterminate.checked}
              indeterminate={indeterminate.indeterminate}
              defaultValues={[{checked: true}, {}, {checked: true}]}
              onChange={(ev, ...args) => setIndeterminate(...args)}
            />
          </Box>
        </Cell>
        <Cell>
          <Box>
            <NestedExample
              name="uncontrolled-indeterminate"
              defaultIndeterminate
              defaultValues={[{checked: true}, {}, {checked: true}]}
            />
          </Box>
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleDefault.displayName = 'ArticleDefault'

ArticleDefault.propTypes = {
  className: PropTypes.string
}

export default ArticleDefault
