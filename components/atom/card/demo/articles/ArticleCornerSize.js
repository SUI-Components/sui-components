import PropTypes from 'prop-types'

import {Article, Code, H1, H2, ListItem, Paragraph, UnorderedList} from '@s-ui/documentation-library'

import AtomCard, {atomCardCornerSize, atomCardElevation} from '../../src/index.js'
import dataColors from '../data/colors.js'
import Demo from '../utils/Demo/index.js'

const ArticleCornerSize = ({className}) => {
  return (
    <Article className={className}>
      <H2>Corner Size</H2>
      <Paragraph>
        By default, the card has the default corner size set. There are options configuring other corner sizes by using
        the <Code>cornerSize</Code> enum prop providing one of tose values:
      </Paragraph>
      <UnorderedList>
        {Object.entries(atomCardCornerSize).map(([atomCardCornerSizeKey, atomCardCornerSizeValue]) => (
          <ListItem key={atomCardCornerSizeKey}>
            <Code>atomCardCornerSize.{atomCardCornerSizeKey}</Code>: <Code>'${atomCardCornerSizeValue}'</Code>
          </ListItem>
        ))}
      </UnorderedList>
      <Demo>
        <div
          style={{
            display: 'flex',
            flexFlow: 'row',
            alignItems: 'stretch',
            alignContent: 'stretch',
            gap: 8,
            padding: 16
          }}
        >
          {Object.values(atomCardCornerSize).map((value, index) => {
            return (
              <div key={value} style={{height: '100%', flexGrow: 1, flexShrink: 1, flexBasis: 0}}>
                <div
                  style={{
                    height: `100%`,
                    display: 'flex',
                    flexFlow: 'column',
                    alignItems: 'center',
                    gap: 8
                  }}
                >
                  <AtomCard
                    as="article"
                    cornerSize={value}
                    isInset
                    elevation={atomCardElevation.M}
                    style={{aspectRatio: 0.7}}
                  >
                    <div style={{display: 'flex', flexFlow: 'column', alignItems: 'stretch', justifyContent: 'center'}}>
                      <div
                        style={{
                          width: '100%',
                          aspectRatio: '1/1',
                          backgroundColor: dataColors[index % dataColors.length].color
                        }}
                      />
                      <div style={{padding: 16}}>
                        <H1
                          style={{
                            margin: 0,
                            fontSize: '1.2rem',
                            fontWeight: 800,
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis'
                          }}
                        >
                          {dataColors[index % dataColors.length].name}
                        </H1>
                        <Paragraph style={{fontStyle: 'italic', margin: '4px 0'}}>
                          {dataColors[index % dataColors.length].color}
                        </Paragraph>
                      </div>
                    </div>
                  </AtomCard>
                  <Code>'{value}'</Code>
                </div>
              </div>
            )
          })}
        </div>
      </Demo>
    </Article>
  )
}

ArticleCornerSize.displayName = 'ArticleCornerSize'

ArticleCornerSize.propTypes = {
  className: PropTypes.node
}

export default ArticleCornerSize
