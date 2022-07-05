import {useState} from 'react'

import PropTypes from 'prop-types'

import {
  Article,
  Cell,
  Code,
  Grid,
  H2,
  Input,
  Label,
  Paragraph
} from '@s-ui/documentation-library'
import AtomButton from '@s-ui/react-atom-button'

import MoleculeBadgeCounter, {moleculeBadgeCounterSizes} from '../src/index.js'
import {infoIcon} from './config.js'

const ArticleDefault = ({className}) => {
  const [label, setLabel] = useState('0')
  const [children, setChildren] = useState('children')
  const handleChange = setter => event => {
    setter(event.target.value)
  }
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>
        By default, Bullet becomes a wrapper of what might be bulleted
        (children). Its inner value is setted by <Code>label</Code> number prop.
      </Paragraph>
      <Grid cols={2} gutter={[8, 8]}>
        <Cell>
          <Label fullWidth>label</Label>
        </Cell>
        <Cell>
          <Label fullWidth>children</Label>
        </Cell>
        <Cell>
          <Input onChange={handleChange(setLabel)} value={label} />
        </Cell>
        <Cell>
          <Input onChange={handleChange(setChildren)} value={children} />
        </Cell>
        <Cell span={2}>
          <MoleculeBadgeCounter label={label}>{children}</MoleculeBadgeCounter>
        </Cell>
        <Cell span={2}>
          <AtomButton
            leftIcon={
              <MoleculeBadgeCounter
                size={moleculeBadgeCounterSizes.MEDIUM}
                label={label}
              >
                {infoIcon}
              </MoleculeBadgeCounter>
            }
          >
            {children}
          </AtomButton>
        </Cell>
      </Grid>
      <Paragraph>
        If the number of the bullet exceeds the maximum defined (99) it will
        show the maximum.
      </Paragraph>
    </Article>
  )
}

ArticleDefault.propTypes = {
  className: PropTypes.string
}

export default ArticleDefault
