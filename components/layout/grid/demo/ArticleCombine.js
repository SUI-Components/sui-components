import {useState} from 'react'
import PropTypes from 'prop-types'
import {
  H2,
  H4,
  Paragraph,
  Article,
  Grid,
  Cell,
  RadioButton
} from '@s-ui/documentation-library'

import LayoutGrid, {LayoutGridItem} from 'components/layout/grid/src/index.js'
import DemoWrapper from './demoWrapper.js'
import DemoBox from './demoBox.js'

const Sites = {
  BarSite: ({left, right}) => {
    let midColSpan = 12
    if (right && left) {
      midColSpan = 8
    } else if (right || left) {
      midColSpan = 10
    }
    return (
      <DemoWrapper>
        <LayoutGrid gutter={1}>
          <LayoutGridItem colSpan={12}>
            <DemoBox color="#07F" style={{minHeight: 0}}>
              s:12
            </DemoBox>
          </LayoutGridItem>
          {left && (
            <LayoutGridItem colSpan={2}>
              <DemoBox style={{padding: 0, minHeight: 0}} color="#07F">
                <LayoutGrid gutter={1}>
                  {Array(3)
                    .fill(0)
                    .map((_, index) => (
                      <LayoutGridItem key={index} colSpan={12}>
                        <DemoBox style={{minHeight: 0}}>s:12</DemoBox>
                      </LayoutGridItem>
                    ))}
                </LayoutGrid>
              </DemoBox>
            </LayoutGridItem>
          )}
          <LayoutGridItem colSpan={midColSpan}>
            <DemoBox style={{padding: 0, minHeight: 0}} color="#07F">
              <LayoutGrid gutter={1}>
                {Array(3 * 12)
                  .fill(0)
                  .map((_, index) => (
                    <LayoutGridItem key={index} colSpan={1}>
                      <DemoBox style={{minHeight: 0}}>s:1</DemoBox>
                    </LayoutGridItem>
                  ))}
              </LayoutGrid>
            </DemoBox>
          </LayoutGridItem>
          {right && (
            <LayoutGridItem colSpan={2}>
              <DemoBox style={{padding: 0, minHeight: 0}} color="#07F">
                <LayoutGrid gutter={1}>
                  {Array(3)
                    .fill(0)
                    .map((_, index) => (
                      <LayoutGridItem key={index} colSpan={12}>
                        <DemoBox style={{minHeight: 0}}>s:12</DemoBox>
                      </LayoutGridItem>
                    ))}
                </LayoutGrid>
              </DemoBox>
            </LayoutGridItem>
          )}
          <LayoutGridItem colSpan={12}>
            <DemoBox color="#07F" style={{minHeight: 0}}>
              s:12
            </DemoBox>
          </LayoutGridItem>
        </LayoutGrid>
      </DemoWrapper>
    )
  },
  Nesting8: () => (
    <DemoWrapper>
      <LayoutGrid gutter={1}>
        <LayoutGridItem colSpan={6}>
          <DemoBox color="#07F" style={{minHeight: 0, padding: 0}}>
            s:6
            <LayoutGrid gutter={1}>
              <LayoutGridItem colSpan={3}>
                <DemoBox style={{minHeight: 0}}>s:3</DemoBox>
              </LayoutGridItem>
              <LayoutGridItem colSpan={3}>
                <DemoBox style={{minHeight: 0}}>s:3</DemoBox>
              </LayoutGridItem>
              <LayoutGridItem colSpan={3}>
                <DemoBox style={{minHeight: 0}}>s:3</DemoBox>
              </LayoutGridItem>
              <LayoutGridItem colSpan={3}>
                <DemoBox style={{minHeight: 0}}>s:3</DemoBox>
              </LayoutGridItem>
            </LayoutGrid>
          </DemoBox>
        </LayoutGridItem>
        <LayoutGridItem colSpan={6}>
          <DemoBox color="#07F" style={{minHeight: 0, padding: 0}}>
            s:6
            <LayoutGrid gutter={1}>
              <LayoutGridItem colSpan={3}>
                <DemoBox style={{minHeight: 0}}>s:3</DemoBox>
              </LayoutGridItem>
              <LayoutGridItem colSpan={3}>
                <DemoBox style={{minHeight: 0}}>s:3</DemoBox>
              </LayoutGridItem>
              <LayoutGridItem colSpan={3}>
                <DemoBox style={{minHeight: 0}}>s:3</DemoBox>
              </LayoutGridItem>
              <LayoutGridItem colSpan={3}>
                <DemoBox style={{minHeight: 0}}>s:3</DemoBox>
              </LayoutGridItem>
            </LayoutGrid>
          </DemoBox>
        </LayoutGridItem>
      </LayoutGrid>
    </DemoWrapper>
  ),
  Nesting9: () => (
    <DemoWrapper>
      <LayoutGrid gutter={1}>
        <LayoutGridItem colSpan={4}>
          <DemoBox color="#07F" style={{minHeight: 0, padding: 0}}>
            s:4
            <LayoutGrid gutter={1}>
              <LayoutGridItem colSpan={4}>
                <DemoBox style={{minHeight: 0}}>s:4</DemoBox>
              </LayoutGridItem>
              <LayoutGridItem colSpan={4}>
                <DemoBox style={{minHeight: 0}}>s:4</DemoBox>
              </LayoutGridItem>
              <LayoutGridItem colSpan={4}>
                <DemoBox style={{minHeight: 0}}>s:4</DemoBox>
              </LayoutGridItem>
            </LayoutGrid>
          </DemoBox>
        </LayoutGridItem>
        <LayoutGridItem colSpan={4}>
          <DemoBox color="#07F" style={{minHeight: 0, padding: 0}}>
            s:4
            <LayoutGrid gutter={1}>
              <LayoutGridItem colSpan={4}>
                <DemoBox style={{minHeight: 0}}>s:4</DemoBox>
              </LayoutGridItem>
              <LayoutGridItem colSpan={4}>
                <DemoBox style={{minHeight: 0}}>s:4</DemoBox>
              </LayoutGridItem>
              <LayoutGridItem colSpan={4}>
                <DemoBox style={{minHeight: 0}}>s:4</DemoBox>
              </LayoutGridItem>
            </LayoutGrid>
          </DemoBox>
        </LayoutGridItem>
        <LayoutGridItem colSpan={4}>
          <DemoBox color="#07F" style={{minHeight: 0, padding: 0}}>
            s:4
            <LayoutGrid gutter={1}>
              <LayoutGridItem colSpan={4}>
                <DemoBox style={{minHeight: 0}}>s:4</DemoBox>
              </LayoutGridItem>
              <LayoutGridItem colSpan={4}>
                <DemoBox style={{minHeight: 0}}>s:4</DemoBox>
              </LayoutGridItem>
              <LayoutGridItem colSpan={4}>
                <DemoBox style={{minHeight: 0}}>s:4</DemoBox>
              </LayoutGridItem>
            </LayoutGrid>
          </DemoBox>
        </LayoutGridItem>
      </LayoutGrid>
    </DemoWrapper>
  ),
  Nesting16: () => (
    <DemoWrapper>
      <LayoutGrid gutter={1}>
        <LayoutGridItem colSpan={3}>
          <DemoBox color="#07F" style={{minHeight: 0, padding: 0}}>
            s:3
            <LayoutGrid gutter={1}>
              <LayoutGridItem colSpan={3}>
                <DemoBox style={{minHeight: 0}}>s:3</DemoBox>
              </LayoutGridItem>
              <LayoutGridItem colSpan={3}>
                <DemoBox style={{minHeight: 0}}>s:3</DemoBox>
              </LayoutGridItem>
              <LayoutGridItem colSpan={3}>
                <DemoBox style={{minHeight: 0}}>s:3</DemoBox>
              </LayoutGridItem>
              <LayoutGridItem colSpan={3}>
                <DemoBox style={{minHeight: 0}}>s:3</DemoBox>
              </LayoutGridItem>
            </LayoutGrid>
          </DemoBox>
        </LayoutGridItem>
        <LayoutGridItem colSpan={3}>
          <DemoBox color="#07F" style={{minHeight: 0, padding: 0}}>
            s:3
            <LayoutGrid gutter={1}>
              <LayoutGridItem colSpan={3}>
                <DemoBox style={{minHeight: 0}}>s:3</DemoBox>
              </LayoutGridItem>
              <LayoutGridItem colSpan={3}>
                <DemoBox style={{minHeight: 0}}>s:3</DemoBox>
              </LayoutGridItem>
              <LayoutGridItem colSpan={3}>
                <DemoBox style={{minHeight: 0}}>s:3</DemoBox>
              </LayoutGridItem>
              <LayoutGridItem colSpan={3}>
                <DemoBox style={{minHeight: 0}}>s:3</DemoBox>
              </LayoutGridItem>
            </LayoutGrid>
          </DemoBox>
        </LayoutGridItem>
        <LayoutGridItem colSpan={3}>
          <DemoBox color="#07F" style={{minHeight: 0, padding: 0}}>
            s:3
            <LayoutGrid gutter={1}>
              <LayoutGridItem colSpan={3}>
                <DemoBox style={{minHeight: 0}}>s:3</DemoBox>
              </LayoutGridItem>
              <LayoutGridItem colSpan={3}>
                <DemoBox style={{minHeight: 0}}>s:3</DemoBox>
              </LayoutGridItem>
              <LayoutGridItem colSpan={3}>
                <DemoBox style={{minHeight: 0}}>s:3</DemoBox>
              </LayoutGridItem>
              <LayoutGridItem colSpan={3}>
                <DemoBox style={{minHeight: 0}}>s:3</DemoBox>
              </LayoutGridItem>
            </LayoutGrid>
          </DemoBox>
        </LayoutGridItem>
        <LayoutGridItem colSpan={3}>
          <DemoBox color="#07F" style={{minHeight: 0, padding: 0}}>
            s:3
            <LayoutGrid gutter={1}>
              <LayoutGridItem colSpan={3}>
                <DemoBox style={{minHeight: 0}}>s:3</DemoBox>
              </LayoutGridItem>
              <LayoutGridItem colSpan={3}>
                <DemoBox style={{minHeight: 0}}>s:3</DemoBox>
              </LayoutGridItem>
              <LayoutGridItem colSpan={3}>
                <DemoBox style={{minHeight: 0}}>s:3</DemoBox>
              </LayoutGridItem>
              <LayoutGridItem colSpan={3}>
                <DemoBox style={{minHeight: 0}}>s:3</DemoBox>
              </LayoutGridItem>
            </LayoutGrid>
          </DemoBox>
        </LayoutGridItem>
      </LayoutGrid>
    </DemoWrapper>
  )
}

Sites.BarSite.propTypes = {
  left: PropTypes.bool,
  right: PropTypes.bool
}

const ArticleCombine = ({classname}) => {
  const [sideBars, setSideBars] = useState({right: true, left: true})
  return (
    <Article className={classname}>
      <H2>Combining Grids</H2>
      <Paragraph>
        Grids can be combined and nested in order to generate other extra
        mutations of it.
      </Paragraph>
      <DemoWrapper>
        <LayoutGrid justifyContent="space-between">
          <LayoutGridItem colSpan={6}>
            <DemoBox color="#07F" style={{minHeight: 0}}>
              g:1 – s:6
            </DemoBox>
          </LayoutGridItem>
          <LayoutGridItem colSpan={6}>
            <DemoBox color="#07F" style={{minHeight: 0}}>
              g:1 – s:6
            </DemoBox>
          </LayoutGridItem>
          <LayoutGridItem colSpan={6}>
            <DemoBox color="#07F" style={{padding: 0}}>
              <LayoutGrid>
                <LayoutGridItem colSpan={12}>
                  <DemoBox>g:2 – s:12</DemoBox>
                </LayoutGridItem>
                <LayoutGridItem colSpan={6}>
                  <DemoBox>g:2 – s:6</DemoBox>
                </LayoutGridItem>
                <LayoutGridItem colSpan={6}>
                  <DemoBox>g:2 – s:6</DemoBox>
                </LayoutGridItem>
                <LayoutGridItem colSpan={3}>
                  <DemoBox>g:2 – s:3</DemoBox>
                </LayoutGridItem>
                <LayoutGridItem colSpan={3}>
                  <DemoBox>g:2 – s:3</DemoBox>
                </LayoutGridItem>
                <LayoutGridItem colSpan={3}>
                  <DemoBox>g:2 – s:3</DemoBox>
                </LayoutGridItem>
                <LayoutGridItem colSpan={3}>
                  <DemoBox>g:2 – s:3</DemoBox>
                </LayoutGridItem>
              </LayoutGrid>
            </DemoBox>
          </LayoutGridItem>
          <LayoutGridItem colSpan={6}>
            <DemoBox color="#07F" style={{padding: 0}}>
              <LayoutGrid>
                <LayoutGridItem colSpan={3}>
                  <DemoBox>g:2 – s:3</DemoBox>
                </LayoutGridItem>
                <LayoutGridItem colSpan={3}>
                  <DemoBox>g:2 – s:3</DemoBox>
                </LayoutGridItem>
                <LayoutGridItem colSpan={3}>
                  <DemoBox>g:2 – s:3</DemoBox>
                </LayoutGridItem>
                <LayoutGridItem colSpan={3}>
                  <DemoBox>g:2 – s:3</DemoBox>
                </LayoutGridItem>
                <LayoutGridItem colSpan={6}>
                  <DemoBox>g:2 – s:6</DemoBox>
                </LayoutGridItem>
                <LayoutGridItem colSpan={6}>
                  <DemoBox>g:2 – s:6</DemoBox>
                </LayoutGridItem>
                <LayoutGridItem colSpan={12}>
                  <DemoBox>g:2 – s:12</DemoBox>
                </LayoutGridItem>
              </LayoutGrid>
            </DemoBox>
          </LayoutGridItem>
        </LayoutGrid>
      </DemoWrapper>
      <br />
      <H4>Side Bar</H4>
      <Paragraph>
        The grid can be used for create multiple layouts in web pages and it can
        be nested as much as needed.
      </Paragraph>
      <Grid cols={2} gutter={[8, 8]}>
        <Cell>
          <RadioButton
            fullWidth
            checked={sideBars.left}
            label="Left bar"
            onClick={() => setSideBars({...sideBars, left: !sideBars.left})}
          />
        </Cell>
        <Cell>
          <RadioButton
            fullWidth
            checked={sideBars.right}
            label="Right bar"
            onClick={() => setSideBars({...sideBars, right: !sideBars.right})}
          />
        </Cell>
      </Grid>
      <br />
      <Sites.BarSite {...sideBars} />
      <Paragraph>
        All possible multiples of 2 and 3 can become possible for columnation
        combining nested grids.
      </Paragraph>
      <H4>Nesting for 8 columns</H4>
      <Sites.Nesting8 />
      <H4>Nesting for 9 columns</H4>
      <Sites.Nesting9 />
      <H4>Nesting for 16 columns</H4>
      <Sites.Nesting16 />
    </Article>
  )
}

ArticleCombine.propTypes = {
  classname: PropTypes.string
}

export default ArticleCombine
