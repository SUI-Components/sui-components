import {useRef} from 'react'

import {
  H1,
  Paragraph,
  Grid,
  Cell,
  Article,
  BootstrapIcon,
  Button
} from '@s-ui/documentation-library'
import AtomIcon from '@s-ui/react-atom-icon'

import DefaultArticle from './articles/DefaultArticle.js'
import {CLASS_SECTION} from './config'

const Demo = () => {
  const ref = useRef()
  const handleFocus = element => () => element?.scrollIntoView()
  return (
    <div className="sui-StudioPreview">
      <H1>PrimitivePortal</H1>
      <Paragraph>paragraph</Paragraph>
      <div style={{width: '150%'}}>
        <Grid cols={6} gutter={[8, 8]}>
          <Cell span={3}>
            <DefaultArticle className={CLASS_SECTION} container={ref.current} />
          </Cell>
          <Cell>
            <Button fullWidth onClick={handleFocus(ref?.current)}>
              <AtomIcon>
                <BootstrapIcon
                  icon="BsArrowRight"
                  style={{color: 'currentColor'}}
                />
              </AtomIcon>
            </Button>
          </Cell>
          <Cell span={2}>
            <Article ref={ref} />
          </Cell>
        </Grid>
      </div>
    </div>
  )
}

export default Demo
