import LayoutGrid, {
  LayoutGridItem,
  LayoutGridAlignItems,
  LayoutGridJustifyContent
} from '../../../../components/layout/grid/src'
import DemoBox from './demoBox'
import DemoWrapper from './demoWrapper'

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
          <code className="sui-Studio-code">{'<LayoutGridItem s={3} />'}</code>{' '}
          will as a cell to define your grid with the size you specify for each
          one of them.
        </p>
        <DemoWrapper>
          <LayoutGrid>
            <LayoutGridItem s={6}>
              <DemoBox>s:6</DemoBox>
            </LayoutGridItem>
            <LayoutGridItem s={6}>
              <DemoBox>s:6</DemoBox>
            </LayoutGridItem>
          </LayoutGrid>
          <LayoutGrid>
            <LayoutGridItem s={4}>
              <DemoBox>s:4</DemoBox>
            </LayoutGridItem>
            <LayoutGridItem s={4}>
              <DemoBox>s:4</DemoBox>
            </LayoutGridItem>
            <LayoutGridItem s={4}>
              <DemoBox>s:4</DemoBox>
            </LayoutGridItem>
          </LayoutGrid>
          <LayoutGrid>
            <LayoutGridItem s={3}>
              <DemoBox>s:3</DemoBox>
            </LayoutGridItem>
            <LayoutGridItem s={3}>
              <DemoBox>s:3</DemoBox>
            </LayoutGridItem>
            <LayoutGridItem s={3}>
              <DemoBox>s:3</DemoBox>
            </LayoutGridItem>
            <LayoutGridItem s={3}>
              <DemoBox>s:3</DemoBox>
            </LayoutGridItem>
          </LayoutGrid>
          <LayoutGrid>
            <LayoutGridItem s={2}>
              <DemoBox>s:2</DemoBox>
            </LayoutGridItem>
            <LayoutGridItem s={2}>
              <DemoBox>s:2</DemoBox>
            </LayoutGridItem>
            <LayoutGridItem s={2}>
              <DemoBox>s:2</DemoBox>
            </LayoutGridItem>
            <LayoutGridItem s={2}>
              <DemoBox>s:2</DemoBox>
            </LayoutGridItem>
            <LayoutGridItem s={2}>
              <DemoBox>s:2</DemoBox>
            </LayoutGridItem>
            <LayoutGridItem s={2}>
              <DemoBox>s:2</DemoBox>
            </LayoutGridItem>
          </LayoutGrid>
        </DemoWrapper>
        <p className="sui-Studio-p">With offset</p>
        <DemoWrapper>
          <LayoutGrid>
            <LayoutGridItem xxs={6} xxsOffset={3} lOffset={6}>
              <DemoBox>
                xxs:6 | xxsOffset:3
                <br />
                lOffset:6
              </DemoBox>
            </LayoutGridItem>
          </LayoutGrid>
          <LayoutGrid>
            <LayoutGridItem s={6} sOffset={6} lOffset={3}>
              <DemoBox>
                s:6 | sOffset: 6<br />
                lOffset:3
              </DemoBox>
            </LayoutGridItem>
          </LayoutGrid>
          <LayoutGrid>
            <LayoutGridItem s={6}>
              <DemoBox>s:6</DemoBox>
            </LayoutGridItem>
            <LayoutGridItem s={3}>
              <DemoBox>s:3</DemoBox>
            </LayoutGridItem>
            <LayoutGridItem s={3}>
              <DemoBox>s:3</DemoBox>
            </LayoutGridItem>
          </LayoutGrid>
        </DemoWrapper>
        <p className="sui-Studio-p">With gapless</p>
        <DemoWrapper>
          <LayoutGrid isGapless>
            <LayoutGridItem s={6}>
              <DemoBox>s:6</DemoBox>
            </LayoutGridItem>
            <LayoutGridItem s={6}>
              <DemoBox>s:6</DemoBox>
            </LayoutGridItem>
          </LayoutGrid>
          <LayoutGrid isGapless>
            <LayoutGridItem s={3}>
              <DemoBox>s:3</DemoBox>
            </LayoutGridItem>
            <LayoutGridItem s={3}>
              <DemoBox>s:3</DemoBox>
            </LayoutGridItem>
            <LayoutGridItem s={3}>
              <DemoBox>s:3</DemoBox>
            </LayoutGridItem>
            <LayoutGridItem s={3}>
              <DemoBox>s:3</DemoBox>
            </LayoutGridItem>
          </LayoutGrid>
        </DemoWrapper>
      </div>

      <div className="sui-Studio-wrapper--light">
        <h2 className="sui-Studio-h2">Multiples grids</h2>
        <p className="sui-Studio-p">Include nested grids in your layout.</p>
        <DemoWrapper>
          <LayoutGrid justifyContent="space-between">
            <LayoutGridItem s={6}>
              <LayoutGrid>
                <LayoutGridItem s={12}>
                  <DemoBox>s:12</DemoBox>
                </LayoutGridItem>
              </LayoutGrid>
              <LayoutGrid>
                <LayoutGridItem s={6}>
                  <DemoBox>s:6</DemoBox>
                </LayoutGridItem>
                <LayoutGridItem s={6}>
                  <DemoBox>s:6</DemoBox>
                </LayoutGridItem>
              </LayoutGrid>
              <LayoutGrid>
                <LayoutGridItem s={3}>
                  <DemoBox>s:3</DemoBox>
                </LayoutGridItem>
                <LayoutGridItem s={3}>
                  <DemoBox>s:3</DemoBox>
                </LayoutGridItem>
                <LayoutGridItem s={3}>
                  <DemoBox>s:3</DemoBox>
                </LayoutGridItem>
                <LayoutGridItem s={3}>
                  <DemoBox>s:3</DemoBox>
                </LayoutGridItem>
              </LayoutGrid>
            </LayoutGridItem>
            <LayoutGridItem s={6}>
              <LayoutGrid>
                <LayoutGridItem s={3}>
                  <DemoBox>s:3</DemoBox>
                </LayoutGridItem>
                <LayoutGridItem s={3}>
                  <DemoBox>s:3</DemoBox>
                </LayoutGridItem>
                <LayoutGridItem s={3}>
                  <DemoBox>s:3</DemoBox>
                </LayoutGridItem>
                <LayoutGridItem s={3}>
                  <DemoBox>s:3</DemoBox>
                </LayoutGridItem>
              </LayoutGrid>
              <LayoutGrid>
                <LayoutGridItem s={6}>
                  <DemoBox>s:6</DemoBox>
                </LayoutGridItem>
                <LayoutGridItem s={6}>
                  <DemoBox>s:6</DemoBox>
                </LayoutGridItem>
              </LayoutGrid>
              <LayoutGrid>
                <LayoutGridItem s={12}>
                  <DemoBox>s:12</DemoBox>
                </LayoutGridItem>
              </LayoutGrid>
            </LayoutGridItem>
          </LayoutGrid>
        </DemoWrapper>
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
        {Object.values(LayoutGridJustifyContent).map(justifyContent => (
          <div key={justifyContent}>
            <p className="sui-Studio-p">
              <code className="sui-Studio-code">{justifyContent}</code>
            </p>
            <DemoWrapper>
              <LayoutGrid justifyContent={justifyContent}>
                <LayoutGridItem s={3}>
                  <DemoBox>s:2</DemoBox>
                </LayoutGridItem>
                <LayoutGridItem s={3}>
                  <DemoBox>s:3</DemoBox>
                </LayoutGridItem>
              </LayoutGrid>
            </DemoWrapper>
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
        {Object.values(LayoutGridAlignItems).map(alignItems => (
          <div key={alignItems}>
            <p className="sui-Studio-p">
              <code className="sui-Studio-code">{alignItems}</code>
            </p>
            <DemoWrapper>
              <LayoutGrid alignItems={alignItems}>
                <LayoutGridItem s={4}>
                  <DemoBox>s:4</DemoBox>
                </LayoutGridItem>
                <LayoutGridItem s={4}>
                  <DemoBox tiny>s:4</DemoBox>
                </LayoutGridItem>
              </LayoutGrid>
            </DemoWrapper>
          </div>
        ))}
      </div>
    </div>
  </div>
)
