import PropTypes from 'prop-types'
import {
  Article,
  H2,
  Paragraph,
  Box,
  Input,
  Code
} from '@s-ui/documentation-library'
import PinInput from '../src/PinInput'
import PinInputField from '../src/PinInputField'
import {useState} from 'react'
import LayoutGrid, {LayoutGridItem} from '@s-ui/react-layout-grid'

const ArticleChildren = ({className}) => {
  const [code, setCode] = useState('725412')

  const onChangeHandler = (event, args) => {
    setCode(args.value)
  }

  return (
    <Article className={className}>
      <H2>Children</H2>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cum earum
        nobis, deserunt voluptate labore illo, temporibus ex iure aliquam
        tempore accusamus, aliquid velit magni eius! A at molestias sunt!
      </Paragraph>
      <Box
        outline
        style={{
          maxWidth: 480,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <PinInput onChangeHandler={onChangeHandler} defaultValue={code} />
      </Box>

      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cum earum
        nobis, deserunt voluptate labore illo, temporibus ex iure aliquam
        tempore accusamus, aliquid velit magni eius! A at molestias sunt!
      </Paragraph>
      <Box
        outline
        style={{
          maxWidth: 480,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <PinInput
          status="undefined"
          onChange={onChangeHandler}
          defaultValue={code}
        >
          <LayoutGrid gutter={1}>
            {Array(6)
              .fill(null)
              .map((_, index) => (
                <LayoutGridItem key={index} colSpan={2}>
                  <PinInputField isFullWidth />
                </LayoutGridItem>
              ))}
            <LayoutGridItem colSpan={12}>
              <Input style={{textAlign: 'center'}} value={code} disabled />
            </LayoutGridItem>
          </LayoutGrid>
        </PinInput>
      </Box>
      <br />
      <Paragraph>
        By default, it sets autocomplete="on-time-code" to its inner input
        fields by the default true bolean prop <Code>isOneTimeCode</Code>.
      </Paragraph>
    </Article>
  )
}

ArticleChildren.propTypes = {
  className: PropTypes.string
}

export default ArticleChildren
