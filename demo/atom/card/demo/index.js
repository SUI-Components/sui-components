/* eslint-disable react/prop-types, no-unused-vars, no-console */
import {useState} from 'react'
import {
  H1,
  H2,
  H3,
  Text,
  Paragraph,
  Article,
  UnorderedList,
  ListItem,
  Code,
  Grid,
  Cell,
  RadioButton,
  Label
} from '@s-ui/documentation-library'

import AtomCard from '../../../../components/atom/card/src'
import PlaceHolder from './PlaceHolder'

const DefaultDemo = () => {
  const [media, setMedia] = useState(true)
  const [content, setContent] = useState(true)
  const [HREF, setHREF] = useState(false)
  const [vertical, setVertical] = useState(false)
  const [highlight, setHighlight] = useState(false)
  return (
    <Article>
      <H2>Default</H2>
      <Paragraph>
        By default, the component encapsulates inner elements on a wrapper.
      </Paragraph>
      <Paragraph>This have 3 different containing areas:</Paragraph>
      <UnorderedList>
        <ListItem>
          <Code>media</Code>: By default it takes 1/3 of its width.
        </ListItem>
        <ListItem>
          <Code>content</Code>: By default it takes 2/3 of its width.
        </ListItem>
      </UnorderedList>
      <Grid cols={5} gutter={[8, 8]}>
        <Cell>
          <Label>Media</Label>
        </Cell>
        <Cell>
          <Label>Content</Label>
        </Cell>
        <Cell>
          <Label>href</Label>
        </Cell>
        <Cell>
          <Label>Highlight</Label>
        </Cell>
        <Cell>
          <Label>Vertical</Label>
        </Cell>
        <Cell>
          <RadioButton
            label={media ? 'setted' : 'unsetted'}
            value="media"
            checked={media}
            fullWidth
            onClick={(target, value) => setMedia(value === 'media')}
          />
        </Cell>
        <Cell>
          <RadioButton
            label={content ? 'setted' : 'unsetted'}
            value="content"
            checked={content}
            fullWidth
            onClick={(target, value) => setContent(value === 'content')}
          />
        </Cell>
        <Cell>
          <RadioButton
            label={HREF ? 'setted' : 'unsetted'}
            value="HREF"
            checked={HREF}
            fullWidth
            onClick={(target, value) => setHREF(value === 'HREF')}
          />
        </Cell>
        <Cell>
          <RadioButton
            label={highlight ? 'true' : 'false'}
            value="highlight"
            checked={highlight}
            fullWidth
            onClick={(target, value) => setHighlight(value === 'highlight')}
          />
        </Cell>
        <Cell>
          <RadioButton
            label={vertical ? 'true' : 'false'}
            value="vertical"
            checked={vertical}
            fullWidth
            onClick={(target, value) => setVertical(value === 'vertical')}
          />
        </Cell>
      </Grid>
      <br />
      <AtomCard
        media={
          media &&
          (() => (
            <PlaceHolder
              width={200}
              text="media area"
              style={{width: '100%'}}
            />
          ))
        }
        content={
          content &&
          (() => (
            <div>
              <H3>content title</H3>
              <Text>content text</Text>
            </div>
          ))
        }
        vertical={vertical}
        href={HREF && 'http://www.google.com'}
        highlight={highlight}
      />
    </Article>
  )
}

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <H1>Card</H1>
        <Paragraph>
          Component that structures two main containers (media & info for
          example), with the purpose of giving information about a
          product/client/article and linking to more detailed information about
          it.
        </Paragraph>
        <DefaultDemo />
        <br />
      </div>
    </div>
  )
}

export default Demo
