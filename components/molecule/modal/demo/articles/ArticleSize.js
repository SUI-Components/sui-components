import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, ListItem, Paragraph, UnorderedList} from '@s-ui/documentation-library'
import AtomButton from '@s-ui/react-atom-button'

import Modal, {moleculeModalSizes} from '../../src/index.js'
import LoremIpsum from '../utils/LoremIpsum.js'

const ArticleSize = ({className}) => {
  const [size, setSize] = useState(undefined)
  return (
    <Article className={className}>
      <H2>Size</H2>
      <Paragraph>
        The modal provides a <Code>size</Code> prop to set the size of the modal.
      </Paragraph>
      <Paragraph>The available sizes are:</Paragraph>
      <UnorderedList>
        {Object.entries(moleculeModalSizes).map(([moleculeModalSizeKey, moleculeModalSizeValue]) => {
          return (
            <ListItem key={moleculeModalSizeKey}>
              <Code>moleculeModalSizes.{moleculeModalSizeKey}</Code>: <Code>{moleculeModalSizeValue}</Code>
            </ListItem>
          )
        })}
      </UnorderedList>
      <Modal>
        <Grid cols={2} gutter={[8, 0]}>
          <Cell>
            <Modal.OpenTrigger>
              <AtomButton onClick={() => setSize(undefined)}>Default Modal</AtomButton>
            </Modal.OpenTrigger>
          </Cell>
          {Object.entries(moleculeModalSizes).map(([moleculeModalSizeKey, moleculeModalSizeValue]) => {
            return (
              <Cell key={moleculeModalSizeKey}>
                <Modal.OpenTrigger>
                  <AtomButton onClick={() => setSize(moleculeModalSizeValue)}>
                    {moleculeModalSizeValue} Modal
                  </AtomButton>
                </Modal.OpenTrigger>
              </Cell>
            )
          })}
        </Grid>

        <Modal.Overlay />
        <Modal.Content size={size}>
          <Modal.Header>
            <Modal.Title>Modal {size} size</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Modal.Description>
              <LoremIpsum count={10} />
            </Modal.Description>
          </Modal.Body>
          <Modal.Footer>
            <Grid cols={Object.values(moleculeModalSizes).length} gutter={[0, 8]}>
              {Object.entries(moleculeModalSizes).map(([moleculeModalSizeKey, moleculeModalSizeValue]) => {
                return (
                  <Cell key={moleculeModalSizeKey}>
                    <AtomButton fullWidth onClick={() => setSize(moleculeModalSizeValue)}>
                      {moleculeModalSizeValue}
                    </AtomButton>
                  </Cell>
                )
              })}
            </Grid>
          </Modal.Footer>
          <Modal.CloseTrigger>
            <Modal.CloseIconButton />
          </Modal.CloseTrigger>
        </Modal.Content>
      </Modal>
    </Article>
  )
}

ArticleSize.propTypes = {
  className: PropTypes.string
}

export default ArticleSize
