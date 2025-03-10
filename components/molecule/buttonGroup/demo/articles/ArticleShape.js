import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Code, H2, Label, Paragraph} from '@s-ui/documentation-library'
import AtomButton, {atomButtonColors, atomButtonDesigns} from '@s-ui/react-atom-button'
import {atomButtonShapesIterator} from '@s-ui/react-atom-button-demo/settings.js'

import MoleculeButtonGroup, {moleculeButtonGroupShapes, moleculeButtonGroupSpaced} from '../../src/index.js'

const ArticleShape = ({className}) => {
  const [selected, setSelected] = useState()

  const _onClick = buttonId => {
    console.log(buttonId) // eslint-disable-line no-console
    setSelected(buttonId)
  }

  return (
    <Article className={className}>
      <H2>Shape</H2>
      <Paragraph>
        There are {atomButtonShapesIterator.length} different shapes available for grouping atomButtons. They are
        provided by exported <Code>moleculeButtonGroupShapes</Code> enum.
      </Paragraph>
      <Paragraph>
        The result will be different when you apply the shape to the group as a whole or individually to the buttons.
      </Paragraph>
      <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 8
          }}
        >
          {atomButtonShapesIterator.map(([{key, shape}]) => {
            return (
              <div key={key} style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                <Label>{`${shape} button group`}</Label>
                <MoleculeButtonGroup shape={shape} spaced={moleculeButtonGroupSpaced.XSMALL}>
                  <AtomButton design={selected !== 'A' ? 'outline' : 'solid'} onClick={() => _onClick('A')}>
                    A
                  </AtomButton>
                  <AtomButton design={selected !== 'B' ? 'outline' : 'solid'} onClick={() => _onClick('B')}>
                    B
                  </AtomButton>
                  <AtomButton design={selected !== 'C' ? 'outline' : 'solid'} onClick={() => _onClick('C')}>
                    C
                  </AtomButton>
                </MoleculeButtonGroup>
                <Label>{`Group of ${shape} buttons`}</Label>
                <MoleculeButtonGroup spaced={moleculeButtonGroupSpaced.XSMALL}>
                  <AtomButton
                    shape={shape}
                    design={selected !== 'A' ? 'outline' : 'solid'}
                    onClick={() => _onClick('A')}
                  >
                    A
                  </AtomButton>
                  <AtomButton
                    shape={shape}
                    design={selected !== 'B' ? 'outline' : 'solid'}
                    onClick={() => _onClick('B')}
                  >
                    B
                  </AtomButton>
                  <AtomButton
                    shape={shape}
                    design={selected !== 'C' ? 'outline' : 'solid'}
                    onClick={() => _onClick('C')}
                  >
                    C
                  </AtomButton>
                </MoleculeButtonGroup>
              </div>
            )
          })}
        </div>
        <Label>Circular button group with long and short buttons</Label>
        <MoleculeButtonGroup shape={moleculeButtonGroupShapes.CIRCULAR} spaced="xsmall">
          <AtomButton design={atomButtonDesigns.SOLID}>Long button</AtomButton>
          <AtomButton
            design={atomButtonDesigns.SOLID}
            color={selected !== 'S' ? atomButtonColors.PRIMARY : atomButtonColors.NEUTRAL}
            onClick={() => setSelected(prev => (prev === 'S' ? undefined : 'S'))}
          >
            B
          </AtomButton>
        </MoleculeButtonGroup>
      </div>
    </Article>
  )
}

ArticleShape.displayName = 'ArticleShape'

ArticleShape.propTypes = {
  className: PropTypes.string
}

export default ArticleShape
