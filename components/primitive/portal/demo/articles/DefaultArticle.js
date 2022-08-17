import AtomIcon from '@s-ui/react-atom-icon'
import {useState, useRef} from 'react'

import PropTypes from 'prop-types'

import {
  Article,
  H2,
  Paragraph,
  Input,
  Grid,
  Cell,
  Button,
  BootstrapIcon,
  Code
} from '@s-ui/documentation-library'

import PrimitivePortal from '../../src/index.js'

const DefaultArticle = ({className}) => {
  const [data, setData] = useState('portal')
  const targetRef = useRef()
  const portalRef = useRef()
  const baseRef = useRef()
  const handleFocus = element => () => element?.scrollIntoView()
  return (
    <div style={{width: '150%'}}>
      <Grid cols={6} gutter={[16, 16]}>
        <Cell span={3}>
          <Article className={className} ref={baseRef}>
            <H2>Default</H2>
            <Paragraph>
              When an element is given to the <Code>target</Code> (element) prop
              it is triggering it. By default, the element is the document's
              body.
            </Paragraph>
            <Input
              value={data}
              onChange={event => setData(event.target.value)}
            />
            <PrimitivePortal
              className="injected-prop"
              ref={portalRef}
              target={targetRef}
            >
              <div className="container" style={{width: '100%'}}>
                {data}
              </div>
            </PrimitivePortal>
          </Article>
        </Cell>
        <Cell>
          <Grid cols={1} gutter={[8, 0]}>
            <Cell>
              <Button fullWidth onClick={handleFocus(targetRef?.current)}>
                <AtomIcon>
                  <BootstrapIcon
                    icon="BsArrowRight"
                    style={{color: 'currentColor'}}
                  />
                </AtomIcon>
              </Button>
            </Cell>
            <Cell>
              <Button fullWidth onClick={handleFocus(baseRef?.current)}>
                <AtomIcon>
                  <BootstrapIcon
                    icon="BsArrowLeft"
                    style={{color: 'currentColor'}}
                  />
                </AtomIcon>
              </Button>
            </Cell>
          </Grid>
        </Cell>
        <Cell span={2}>
          <Article
            ref={targetRef}
            style={{height: '100%', boxSizing: 'border-box'}}
          />
        </Cell>
      </Grid>
    </div>
  )
}

DefaultArticle.propTypes = {
  className: PropTypes.string
}
DefaultArticle.displayName = 'DefaultArticle'

export default DefaultArticle
