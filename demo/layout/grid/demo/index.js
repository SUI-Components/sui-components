import React from 'react'
import LayoutGrid, {
  LayoutGridItem,
  ALIGN_ITEMS,
  JUSTIFY_CONTENT
} from '../../../../components/layout/grid/src'
import Box from './box'
import Wrapper from './wrapper'

const test = `<LayoutGrid>
  <LayoutGridItem s={6} />
  <LayoutGridItem s={6} />
</LayoutGrid>`

export default () => (
  <div className="sui-StudioPreview">
    <div className="sui-StudioPreview-content sui-StudioDemo-preview">
      <h1 className="sui-Studio-h1">Grid</h1>
      <p className="sui-Studio-h4">One layout to dominate them all...</p>
      <div className="sui-Studio-wrapper--light">
        <h2 className="sui-Studio-h2">How to use</h2>
        <p className="sui-Studio-p">
          To implement the grid, you need to use the two components it provides
          <code className="sui-Studio-code">{'<LayoutGrid />'}</code> is used as
          a container, while each{' '}
          <code className="sui-Studio-code">{'<LayoutGridItem />'}</code> will
          as a cell to define your grid with the size you specify for each one
          of them.
        </p>
        <p className="sui-Studio-p">
          <strong>Example of use:</strong>
        </p>
        <pre>
          <code className="sui-Studio-code">{test}</code>
        </pre>
        <Wrapper>
          <LayoutGrid>
            <LayoutGridItem xxs={6} xxsOffset={3} lOffset={6}>
              <Box>s:12</Box>
            </LayoutGridItem>
            <LayoutGridItem s={6}>
              <Box>s:6</Box>
            </LayoutGridItem>
            <LayoutGridItem s={6}>
              <Box>s:6</Box>
            </LayoutGridItem>
            <LayoutGridItem s={3}>
              <Box>s:3</Box>
            </LayoutGridItem>
            <LayoutGridItem s={3}>
              <Box>s:3</Box>
            </LayoutGridItem>
            <LayoutGridItem s={3}>
              <Box>s:3</Box>
            </LayoutGridItem>
            <LayoutGridItem s={3}>
              <Box>s:3</Box>
            </LayoutGridItem>
          </LayoutGrid>
        </Wrapper>
      </div>

      <div className="sui-Studio-wrapper--light">
        <h2 className="sui-Studio-h2">Multiples grids</h2>
        <p className="sui-Studio-p">
          Tags structure can have 3 main sizes: Small, medium{' '}
          <small>(default)</small> and large. You can use this prop{' '}
          <code className="sui-Studio-code">size</code> to modify it.
        </p>
        <Wrapper>
          <LayoutGrid justifyContent="space-between">
            <LayoutGridItem s={3}>
              <LayoutGrid>
                <LayoutGridItem s={12}>
                  <Box>s:12</Box>
                </LayoutGridItem>
                <LayoutGridItem s={6}>
                  <Box>s:6</Box>
                </LayoutGridItem>
                <LayoutGridItem s={6}>
                  <Box>s:6</Box>
                </LayoutGridItem>
                <LayoutGridItem s={3}>
                  <Box>s:3</Box>
                </LayoutGridItem>
                <LayoutGridItem s={3}>
                  <Box>s:3</Box>
                </LayoutGridItem>
                <LayoutGridItem s={3}>
                  <Box>s:3</Box>
                </LayoutGridItem>
                <LayoutGridItem s={3}>
                  <Box>s:3</Box>
                </LayoutGridItem>
              </LayoutGrid>
            </LayoutGridItem>
            <LayoutGridItem s={3}>
              <LayoutGrid>
                <LayoutGridItem s={3}>
                  <Box>s:3</Box>
                </LayoutGridItem>
                <LayoutGridItem s={3}>
                  <Box>s:3</Box>
                </LayoutGridItem>
                <LayoutGridItem s={3}>
                  <Box>s:3</Box>
                </LayoutGridItem>
                <LayoutGridItem s={3}>
                  <Box>s:3</Box>
                </LayoutGridItem>
                <LayoutGridItem s={6}>
                  <Box>s:6</Box>
                </LayoutGridItem>
                <LayoutGridItem s={6}>
                  <Box>s:6</Box>
                </LayoutGridItem>
                <LayoutGridItem s={12}>
                  <Box>s:12</Box>
                </LayoutGridItem>
              </LayoutGrid>
            </LayoutGridItem>
          </LayoutGrid>
        </Wrapper>
      </div>

      <div className="sui-Studio-wrapper--light">
        <h2 className="sui-Studio-h2">Justify content</h2>
        <p className="sui-Studio-p">
          Use the <code className="sui-Studio-code">justifyContent</code> prop
          to distributes space between and around content items. Valid values:
          <code className="sui-Studio-code">center</code>{' '}
          <code className="sui-Studio-code">flex-end</code>{' '}
          <code className="sui-Studio-code">flex-start</code>{' '}
          <code className="sui-Studio-code">space-around</code>{' '}
          <code className="sui-Studio-code">space-between</code>
        </p>
        <p className="sui-Studio-p">___</p>
        {JUSTIFY_CONTENT.map(justifyContent => (
          <div key={justifyContent}>
            <p className="sui-Studio-p">
              <code className="sui-Studio-code">{justifyContent}</code>
            </p>
            <Wrapper>
              <LayoutGrid justifyContent={justifyContent}>
                <LayoutGridItem s={3}>
                  <Box>s:2</Box>
                </LayoutGridItem>
                <LayoutGridItem s={3}>
                  <Box>s:3</Box>
                </LayoutGridItem>
              </LayoutGrid>
            </Wrapper>
          </div>
        ))}
      </div>

      <div className="sui-Studio-wrapper--light">
        <h2 className="sui-Studio-h2">Align items</h2>
        <p className="sui-Studio-p">
          Use the <code className="sui-Studio-code">justifyContent</code> prop
          to distributes space between and around content items. Valid values:
          <code className="sui-Studio-code">center</code>{' '}
          <code className="sui-Studio-code">flex-end</code>{' '}
          <code className="sui-Studio-code">flex-start</code>{' '}
          <code className="sui-Studio-code">space-around</code>{' '}
          <code className="sui-Studio-code">space-between</code>
        </p>
        <p className="sui-Studio-p">___</p>
        {ALIGN_ITEMS.map(alignItems => (
          <div key={alignItems}>
            <p className="sui-Studio-p">
              <code className="sui-Studio-code">{alignItems}</code>
            </p>
            <Wrapper>
              <LayoutGrid alignItems={alignItems}>
                <LayoutGridItem s={3}>
                  <Box>s:2</Box>
                </LayoutGridItem>
                <LayoutGridItem s={3}>
                  <Box>
                    s:3
                    <br />
                    s:3 s:3
                    <br />
                    s:3 s:3
                    <br />
                    s:3 s:3
                    <br />
                    s:3 s:3
                    <br />
                    s:3 s:3
                    <br />
                    s:3 s:3
                    <br />
                    s:3 s:3
                    <br />
                    s:3 s:3
                    <br />
                    s:3 s:3
                    <br />
                    s:3 s:3
                    <br />
                    s:3 s:3
                    <br />
                    s:3 s:3
                    <br />
                    s:3 s:3
                    <br />
                    s:3 s:3
                    <br />
                    s:3 s:3
                    <br />
                    s:3 s:3
                    <br />
                    s:3 s:3
                    <br />
                    s:3 s:3
                    <br />
                    s:3 s:3
                    <br />
                    s:3 s:3
                    <br />
                    s:3 s:3
                    <br />
                    s:3 s:3
                    <br />
                    s:3 s:3
                    <br />
                    s:3 s:3
                    <br />
                    s:3 s:3
                    <br />
                    s:3 s:3
                    <br />
                    s:3 s:3
                    <br />
                    s:3 s:3
                    <br />
                    s:3 s:3
                    <br />
                    s:3
                  </Box>
                </LayoutGridItem>
              </LayoutGrid>
            </Wrapper>
          </div>
        ))}
      </div>
    </div>
  </div>
)
