import PropTypes from 'prop-types'
import {
  Article,
  Code,
  Grid,
  H1,
  H2,
  H3,
  Paragraph
} from '@s-ui/documentation-library'

import AtomTable, {atomTableCellPadding} from '../src'
import {contentBodyMook, contentHeadMook, contentFootMook} from './settings'

const Demo = ({children}) => {
  return <div style={{width: '100%', padding: 20}}>{children}</div>
}

Demo.propTypes = {
  children: PropTypes.node
}

const DemoWrapper = ({children}) => {
  return <div style={{display: 'flex', flexWrap: 'wrap'}}>{children}</div>
}

DemoWrapper.propTypes = {
  children: PropTypes.node
}

export default () => {
  return (
    <div>
      <Demo>
        <H1>Table</H1>
        <Paragraph>Atom Table to show tabular information</Paragraph>
        <DemoWrapper>
          <Demo>
            <Article>
              <H2>Basic example</H2>
              <AtomTable body={contentBodyMook} />
            </Article>
            <br />
            <Article>
              <H2>Table with thead, tbody and tfoot</H2>
              <Paragraph>
                Basic example with head, body and footer props.
              </Paragraph>
              <AtomTable
                head={contentHeadMook}
                body={contentBodyMook}
                foot={contentFootMook}
              />
            </Article>
            <br />
            <Article>
              <H2>Table with fullWidth</H2>
              <Paragraph>
                The <Code>fullWidth</Code> prop adapt table to the parent width.
              </Paragraph>
              <AtomTable
                head={contentHeadMook}
                body={contentBodyMook}
                fullWidth
              />
            </Article>
            <br />
            <Article>
              <H2>Table with different cellPadding</H2>
              <Paragraph>
                This table has different <Code>cellPadding</Code> sizes:{' '}
                <Code>{Object.keys(atomTableCellPadding).join('|')}</Code>
              </Paragraph>
              <Grid cols={1}>
                {Object.keys(atomTableCellPadding).map((size, idx) => (
                  <>
                    <H3>
                      Size: <Code>{size.toLocaleLowerCase()}</Code>
                    </H3>
                    <AtomTable
                      head={contentHeadMook}
                      body={contentBodyMook}
                      fullWidth
                      cellPadding={size.toLocaleLowerCase()}
                    />
                  </>
                ))}
              </Grid>
            </Article>
            <br />
            <Article>
              <H2>Table with borderBottom</H2>
              <Paragraph>
                The <Code>borderBottom</Code> prop adds a border bottom line on
                each table row.
              </Paragraph>
              <AtomTable
                head={contentHeadMook}
                body={contentBodyMook}
                foot={contentFootMook}
                fullWidth
                borderBottom
              />
            </Article>
            <br />
            <Article>
              <H2>Table with zebraStriped</H2>
              <Paragraph>
                The <Code>zebraStriped</Code> prop adds a background color to
                the even rows.
              </Paragraph>
              <AtomTable
                head={contentHeadMook}
                body={contentBodyMook}
                foot={contentFootMook}
                fullWidth
                zebraStriped
              />
            </Article>
            <br />
            <Article>
              <H2>Table with onRowClick</H2>
              <Paragraph>
                The <Code>onRowClick</Code> prop fires an event when a row is
                clicked. Click in a row and see what happens! ;)
              </Paragraph>
              <AtomTable
                head={contentHeadMook}
                body={contentBodyMook}
                foot={contentFootMook}
                fullWidth
                zebraStriped
                onRowClick={value =>
                  alert(`You have clicked the row: ${value}`)
                }
              />
            </Article>
          </Demo>
        </DemoWrapper>
      </Demo>
    </div>
  )
}
