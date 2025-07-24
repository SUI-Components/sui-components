import {useState} from 'react'

import PropTypes from 'prop-types'

import {
  Article,
  Bold,
  Cell,
  Grid,
  H1,
  H2,
  H3,
  H4,
  Label,
  Paragraph,
  RadioButton,
  Small
} from '@s-ui/documentation-library'

import AtomSkeleton from '../src/index.js'

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet ...'

const Content = ({placeholder}) => (
  <div>
    <H2>{placeholder ? <AtomSkeleton /> : 'Title H2'}</H2>
    <Grid cols={10} gutter={[8, 8]}>
      <Cell span={3}>
        <img style={{width: '100%', borderRadius: '50%'}} src="https://placehold.co/150" />
      </Cell>
      <Cell span={7}>
        <Paragraph>{placeholder ? <AtomSkeleton count={3} /> : loremIpsum}</Paragraph>
      </Cell>
    </Grid>
  </div>
)

Content.propTypes = {
  placeholder: PropTypes.bool
}

const ArticleDefault = ({className}) => {
  const [placeHolder, setPlaceholder] = useState(true)
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>By default, the component adds a full width span. </Paragraph>
      <AtomSkeleton />
      <br />
      <br />
      <br />
      <Paragraph>–––</Paragraph>
      <Paragraph>It can also be used as placeholder of existent text content tags:</Paragraph>
      <Grid cols={2} gutter={[8, 8]}>
        <Cell>
          <H1>
            <AtomSkeleton />
          </H1>
          <H2>
            <AtomSkeleton />
          </H2>
          <H3>
            <AtomSkeleton />
          </H3>
          <H4>
            <AtomSkeleton />
          </H4>
          <Paragraph>
            <AtomSkeleton />
          </Paragraph>
          <Bold>
            <AtomSkeleton />
          </Bold>
          <br />
          <Small>
            <AtomSkeleton />
          </Small>
        </Cell>
        <Cell>
          <H1>Title H1</H1>
          <H2>Title H2</H2>
          <H3>Title H3</H3>
          <H4>Title H4</H4>
          <Paragraph>Paragraph</Paragraph>
          <Bold>Bold</Bold>
          <br />
          <Small>Small</Small>
        </Cell>
      </Grid>
      <Paragraph>–––</Paragraph>
      <Paragraph>...or for other extra complex mockups:</Paragraph>
      <Grid cols={3} gutter={[8, 8]}>
        <Cell>
          <Content placeholder />
        </Cell>
        <Cell>
          <Content placeholder={placeHolder} />
          <br />
        </Cell>
        <Cell>
          <Content placeholder={false} />
        </Cell>
        <Cell>
          <Label>skeleton enabled</Label>
        </Cell>
        <Cell>
          <RadioButton label="toogle" checked={placeHolder} onClick={() => setPlaceholder(!placeHolder)} />
        </Cell>
        <Cell>
          <Label>skeleton disabled</Label>
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleDefault.propTypes = {
  className: PropTypes.string
}

export default ArticleDefault
