import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, ListItem, Paragraph, UnorderedList} from '@s-ui/documentation-library'
import AtomButton from '@s-ui/react-atom-button'

import Modal, {moleculeModalAnimations} from '../../src/index.js'
import {LoremIpsum} from '../utils/index.js'

const ArticleEffect = ({className}) => {
  const [paragraphs, setParagraphs] = useState(8)
  return (
    <Article className={className}>
      <H2>Effects</H2>
      <Paragraph>
        Modal have some predefined effects for when its opened and closed. Values available are listed in the{' '}
        <Code></Code> enum:
      </Paragraph>
      <UnorderedList>
        {Object.entries(moleculeModalAnimations).map(([moleculeModalAnimationKey, moleculeModalAnimationValue]) => (
          <ListItem key={moleculeModalAnimationKey}>
            <Code>
              moleculeModalAnimations.{moleculeModalAnimationKey}: "{moleculeModalAnimationValue}"
            </Code>
          </ListItem>
        ))}
      </UnorderedList>
      <Grid gutter={[8, 0]} cols={Object.values(moleculeModalAnimations).length}>
        {Object.entries(moleculeModalAnimations).map(([moleculeModalAnimationKey, moleculeModalAnimationValue]) => (
          <Cell key={moleculeModalAnimationKey}>
            <Modal>
              <Modal.OpenTrigger>
                <AtomButton>Open {moleculeModalAnimationValue} modal effect</AtomButton>
              </Modal.OpenTrigger>
              <Modal.Overlay />
              <Modal.Content animation={moleculeModalAnimationValue}>
                <Modal.Header>
                  <Modal.Title>Modal {moleculeModalAnimationValue} title</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{gap: 16}}>
                  <Modal.ScrollArea>
                    <Modal.Description as="div" style={{display: 'grid', flexFlow: 'column nowrap', gap: 16}}>
                      <LoremIpsum count={paragraphs} />
                    </Modal.Description>
                  </Modal.ScrollArea>
                  <div style={{display: 'flex', gap: 8}}>
                    <AtomButton
                      onClick={() => {
                        setParagraphs(paragraphs + 1)
                      }}
                      style={{flexGrow: 1}}
                    >
                      Add paragraph
                    </AtomButton>
                    <AtomButton
                      style={{flexGrow: 1}}
                      onClick={() => {
                        setParagraphs(paragraphs - 1)
                      }}
                      disabled={paragraphs <= 1}
                    >
                      Remove paragraph
                    </AtomButton>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Modal.CloseTrigger>
                    <AtomButton>Close the Modal</AtomButton>
                  </Modal.CloseTrigger>
                </Modal.Footer>
                <Modal.CloseTrigger>
                  <Modal.CloseIconButton ariaLabel="close the modal" />
                </Modal.CloseTrigger>
              </Modal.Content>
            </Modal>
          </Cell>
        ))}
      </Grid>
    </Article>
  )
}

ArticleEffect.propTypes = {
  className: PropTypes.string
}

export default ArticleEffect
