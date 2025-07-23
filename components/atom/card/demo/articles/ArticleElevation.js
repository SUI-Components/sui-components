import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H1, H2, ListItem, Paragraph, UnorderedList} from '@s-ui/documentation-library'

import AtomCard, {atomCardElevation} from '../../src/index.js'
import dataWords from '../data/words.js'
import Demo from '../utils/Demo/index.js'

const words = dataWords.filter(v => v?.pronunciation !== undefined)

const ArticleElevation = ({className}) => {
  const sz = 8
  return (
    <Article className={className}>
      <H2>Elevation</H2>
      <Paragraph>
        By default, the element gets none elevation effect. There are options for visually elevating and depressing the
        card configuring proper <Code>elevation</Code> prop with the <Code>atomCardElevation</Code> exported enum.
      </Paragraph>
      <UnorderedList>
        {Object.entries(atomCardElevation).map(([atomCardElevationKey, atomCardElevationValue]) => (
          <ListItem key={atomCardElevationKey}>
            <Code>atomCardElevation.{atomCardElevationKey}</Code>: <Code>'${atomCardElevationValue}'</Code>
          </ListItem>
        ))}
      </UnorderedList>
      <Demo>
        <Grid
          cols={
            [atomCardElevation.XL, atomCardElevation.L, atomCardElevation.M, atomCardElevation.S, atomCardElevation.XS]
              .length
          }
          gutter={[8, 8]}
        >
          {[
            atomCardElevation.XL,
            atomCardElevation.L,
            atomCardElevation.M,
            atomCardElevation.S,
            atomCardElevation.XS
          ].map((value, index) => {
            const word = words[index % words.length]
            const wordResult = word?.results?.[0] || {}
            const pronunciation =
              typeof word?.pronunciation === 'string' ? word?.pronunciation : word?.pronunciation?.all
            return (
              <Cell key={value}>
                <div
                  style={{
                    height: `calc(100% - ${8 * sz}px)`,
                    padding: 2 * sz,
                    margin: 2 * sz,
                    display: 'flex',
                    flexFlow: 'column',
                    alignItems: 'center',
                    gap: 16
                  }}
                >
                  <AtomCard as="article" elevation={value}>
                    <div style={{display: 'flex', flexFlow: 'column', alignItems: 'stretch', justifyContent: 'center'}}>
                      <Paragraph
                        style={{
                          display: 'flex',
                          alignItems: 'start',
                          gap: 8,
                          margin: 0,
                          opacity: 0.5,
                          fontSize: '0.8rem',
                          textTransform: 'uppercase'
                        }}
                      >
                        {wordResult?.partOfSpeech}
                      </Paragraph>
                      <H1 style={{display: 'flex', alignItems: 'start', gap: 8, margin: 0}}>
                        {word?.syllables?.list
                          .join('/·/')
                          .split('/')
                          .map((v, i) => (
                            <span key={i} style={{fontSize: '1.2rem', fontWeight: 800}}>
                              {v}
                            </span>
                          ))}
                      </H1>
                      <Paragraph style={{fontStyle: 'italic', margin: '4px 0'}}>{pronunciation}</Paragraph>
                      <Paragraph style={{textTransform: 'capitalize'}}>{wordResult?.definition}.</Paragraph>
                    </div>
                  </AtomCard>
                  <Code>'{value}'</Code>
                </div>
              </Cell>
            )
          })}
          {[atomCardElevation.NONE].map((value, index) => {
            const word = words[(index % words.length) + 5]
            const wordResult = word?.results?.[0] || {}
            const pronunciation =
              typeof word?.pronunciation === 'string' ? word?.pronunciation : word?.pronunciation?.all
            return (
              <Cell span={5} key={value}>
                <div
                  style={{
                    height: `calc(100% - ${8 * sz}px)`,
                    padding: 2 * sz,
                    margin: 2 * sz,
                    display: 'flex',
                    flexFlow: 'column',
                    alignItems: 'center',
                    gap: 16
                  }}
                >
                  <AtomCard as="article" elevation={value}>
                    <div style={{display: 'flex', flexFlow: 'column', alignItems: 'stretch', justifyContent: 'center'}}>
                      <Paragraph
                        style={{
                          display: 'flex',
                          alignItems: 'start',
                          gap: 8,
                          margin: 0,
                          opacity: 0.5,
                          fontSize: '0.8rem',
                          textTransform: 'uppercase'
                        }}
                      >
                        {wordResult?.partOfSpeech}
                      </Paragraph>
                      <H1 style={{display: 'flex', alignItems: 'start', gap: 8, margin: 0}}>
                        {word?.syllables?.list
                          .join('/·/')
                          .split('/')
                          .map((v, i) => (
                            <span key={i} style={{fontSize: '1.2rem', fontWeight: 800}}>
                              {v}
                            </span>
                          ))}
                      </H1>
                      <Paragraph style={{fontStyle: 'italic', margin: '4px 0'}}>{pronunciation}</Paragraph>
                      <Paragraph style={{textTransform: 'capitalize'}}>{wordResult?.definition}.</Paragraph>
                    </div>
                  </AtomCard>
                  <Code>'{value}'</Code>
                </div>
              </Cell>
            )
          })}
          {[
            atomCardElevation['-XL'],
            atomCardElevation['-L'],
            atomCardElevation['-M'],
            atomCardElevation['-S'],
            atomCardElevation['-XS']
          ].map((value, index) => {
            const word = words[(index % words.length) + 6]
            const wordResult = word?.results?.[0] || {}
            const pronunciation =
              typeof word?.pronunciation === 'string' ? word?.pronunciation : word?.pronunciation?.all
            return (
              <Cell key={value}>
                <div
                  style={{
                    height: `calc(100% - ${8 * sz}px)`,
                    padding: 2 * sz,
                    margin: 2 * sz,
                    display: 'flex',
                    flexFlow: 'column',
                    alignItems: 'center',
                    gap: 16
                  }}
                >
                  <AtomCard as="article" elevation={value}>
                    <div style={{display: 'flex', flexFlow: 'column', alignItems: 'stretch', justifyContent: 'center'}}>
                      <Paragraph
                        style={{
                          display: 'flex',
                          alignItems: 'start',
                          gap: 8,
                          margin: 0,
                          opacity: 0.5,
                          fontSize: '0.8rem',
                          textTransform: 'uppercase'
                        }}
                      >
                        {wordResult?.partOfSpeech}
                      </Paragraph>
                      <H1 style={{display: 'flex', alignItems: 'start', gap: 8, margin: 0}}>
                        {word?.syllables?.list
                          .join('/·/')
                          .split('/')
                          .map((v, i) => (
                            <span key={i} style={{fontSize: '1.2rem', fontWeight: 800}}>
                              {v}
                            </span>
                          ))}
                      </H1>
                      <Paragraph style={{fontStyle: 'italic', margin: '4px 0'}}>{pronunciation}</Paragraph>
                      <Paragraph style={{textTransform: 'capitalize'}}>{wordResult?.definition}.</Paragraph>
                    </div>
                  </AtomCard>
                  <Code>'{value}'</Code>
                </div>
              </Cell>
            )
          })}
        </Grid>
      </Demo>
    </Article>
  )
}

ArticleElevation.displayName = 'ArticleElevation'

ArticleElevation.propTypes = {
  className: PropTypes.node
}

export default ArticleElevation
