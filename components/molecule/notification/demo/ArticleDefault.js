import {useState} from 'react'

import MoleculeNotification from 'components/molecule/notification/src/index.js'
import PropTypes from 'prop-types'

import {Article, Box, Button, Cell, Grid, H2, Input, Paragraph} from '@s-ui/documentation-library'

const ArticleDefault = ({className}) => {
  const [children, setChildren] = useState('children')
  const [key, setKey] = useState(0)
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>
        The component consists on a box containing an information icon with some content and a self closing icon. It
        will autoclose by default after 3000ms
      </Paragraph>
      <Grid cols={2} gutter={[8, 0]}>
        <Cell>
          <Input value={children} onChange={event => setChildren(event.target.value)} />
        </Cell>
        <Cell>
          <Button onClick={() => setKey(key + 1)}>reload</Button>
        </Cell>
        <Cell span={2}>
          <Box key={key} style={{minHeight: 80, padding: 0}}>
            <MoleculeNotification>{children}</MoleculeNotification>
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
