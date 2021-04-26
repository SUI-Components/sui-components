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
  const [actionable, setActionable] = useState(false)
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
          <Code>media</Code>: (React element) – An area specially defined for
          including a media.
        </ListItem>
        <ListItem>
          <Code>content</Code>: (React element) An area defined for including
          some other content.
        </ListItem>
      </UnorderedList>
      <Paragraph>–––</Paragraph>
      <Paragraph>
        The component can become clickable adding an url to it <Code>href</Code>{' '}
        prop.
      </Paragraph>
      <Paragraph>
        Card can highlight its content with a <Code>highlight</Code> boolean
        prop.
      </Paragraph>
      <Paragraph>
        Card can give a vertical orientation of elements under the{' '}
        <Code>vertical</Code> boolean prop.
      </Paragraph>
      <Paragraph>
        Card can be actionable and trigger an event clicking on it under{' '}
        <Code>onClick</Code> prop.
      </Paragraph>
      <Grid cols={6} gutter={[8, 8]}>
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
          <Label>Actionable</Label>
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

        <Cell>
          <RadioButton
            label={actionable ? 'true' : 'false'}
            value="actionable"
            checked={actionable}
            fullWidth
            onClick={(target, value) => setActionable(value === 'actionable')}
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
        onClick={actionable ? () => alert('Hello!') : undefined}
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
