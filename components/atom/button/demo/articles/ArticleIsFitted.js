import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Box, Code, H2, ListItem, Paragraph, RadioButton, UnorderedList} from '@s-ui/documentation-library'

import AtomButton, {atomButtonGroupPositions} from '../../src/index.js'

const ArticleIsFitted = ({className}) => {
  const [isFitted, setIsFitted] = useState()
  return (
    <Article className={className}>
      <H2>isFitted</H2>
      <div>
        <Paragraph>
          <Code>isFitted</Code> Boolean prop for make buttons have no:
        </Paragraph>
        <UnorderedList>
          <ListItem>Border</ListItem>
          <ListItem>Padding</ListItem>
          <ListItem>Margin</ListItem>
        </UnorderedList>
        <Paragraph>
          Default <Code>undefined</Code> value.
        </Paragraph>
        <RadioButton
          onClick={() => {
            setIsFitted(!isFitted)
          }}
          value={isFitted}
          label={`isFitted ${isFitted}`}
        />
        <Box style={{padding: '8px 0'}}>
          <AtomButton isFitted={isFitted}>button 1</AtomButton>
          <AtomButton isFitted={isFitted}>button 2</AtomButton>
          <AtomButton isFitted={isFitted}>button 3</AtomButton>
          <AtomButton isFitted={isFitted}>button 4</AtomButton>
          <AtomButton isFitted={isFitted}>button 5</AtomButton>
        </Box>
        <Paragraph>It works even with group not affecting its spacings</Paragraph>
        <Box style={{padding: '8px 0'}}>
          <AtomButton groupPosition={atomButtonGroupPositions.FIRST} isFitted={isFitted}>
            button 1
          </AtomButton>
          <AtomButton groupPosition={atomButtonGroupPositions.MIDDLE} isFitted={isFitted}>
            button 2
          </AtomButton>
          <AtomButton groupPosition={atomButtonGroupPositions.MIDDLE} isFitted={isFitted}>
            button 3
          </AtomButton>
          <AtomButton groupPosition={atomButtonGroupPositions.MIDDLE} isFitted={isFitted}>
            button 4
          </AtomButton>
          <AtomButton groupPosition={atomButtonGroupPositions.LAST} isFitted={isFitted}>
            button 5
          </AtomButton>
        </Box>
      </div>
    </Article>
  )
}

ArticleIsFitted.displayName = 'ArticleIsFitted'

ArticleIsFitted.propTypes = {
  className: PropTypes.string
}

export default ArticleIsFitted
