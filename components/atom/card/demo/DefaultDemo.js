import {useState} from 'react'

import {
  Article,
  Cell,
  Code,
  Grid,
  H2,
  Label,
  ListItem,
  Paragraph,
  RadioButton,
  UnorderedList
} from '@s-ui/documentation-library'

import AtomCard, {atomCardElevation, atomCardRounded} from '../src/index.js'
import {getContent, getPlaceholder} from './config.js'

const DefaultDemo = () => {
  const [media, setMedia] = useState(true)
  const [content, setContent] = useState(true)
  const [HREF, setHREF] = useState(false)
  const [vertical, setVertical] = useState(false)
  const [actionable, setActionable] = useState(false)
  const [highlight, setHighlight] = useState(false)
  return (
    <>
      <Article>
        <H2>Default</H2>
        <Paragraph>By default, the component encapsulates inner elements on a wrapper.</Paragraph>
        <Paragraph>This have 2 different containing areas:</Paragraph>
        <UnorderedList>
          <ListItem>
            <Code>media</Code>: (React element) – An area specially defined for including a media.
          </ListItem>
          <ListItem>
            <Code>content</Code>: (React element) An area defined for including some other content.
          </ListItem>
        </UnorderedList>
        <Paragraph>–––</Paragraph>
        <Paragraph>
          Card can give a vertical orientation of elements under the <Code>vertical</Code> boolean prop.
        </Paragraph>
        <Paragraph>
          Card can be actionable and trigger an event clicking on it under <Code>onClick</Code> prop.
        </Paragraph>
        <Paragraph>
          The component can become clickable adding an url to it <Code>href</Code> prop.
        </Paragraph>
        <Paragraph>
          Card can highlight its content with a <Code>highlight</Code> boolean prop. It is only possible if has an
          onClick action or a href declared.
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
          media={media && getPlaceholder({width: 200, text: 'media area', style: {width: '100%', display: 'block'}})}
          content={content && getContent()}
          vertical={vertical}
          href={HREF && 'http://www.google.com'}
          blank={HREF}
          highlight={highlight}
          onClick={actionable ? () => alert('Hello!') : undefined}
        />
      </Article>

      <h3>Rounded</h3>
      <Article style={{padding: '0'}}>
        <div
          style={{
            backgroundColor: 'lightgray',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            borderRadius: '4px'
          }}
        >
          {Object.keys(atomCardRounded).map((rounded, idx) => (
            <div key={idx} style={{flex: '0 0 auto', textAlign: 'center', margin: '15px'}}>
              <AtomCard
                rounded={atomCardRounded[rounded]}
                media={media && getPlaceholder({width: 100, height: 100, style: {width: '100%', display: 'block'}})}
                content={content && getContent()}
              />
              <span style={{color: 'grey'}}>{atomCardRounded[rounded]}</span>
            </div>
          ))}
        </div>
      </Article>

      <h3>Elevated</h3>
      <Article>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          {Object.keys(atomCardElevation).map((elevation, idx) => (
            <div key={idx} style={{flex: '0 0 auto', textAlign: 'center', margin: '15px'}}>
              <AtomCard
                elevation={atomCardElevation[elevation]}
                media={
                  media &&
                  getPlaceholder({width: 100, height: 100, style: {width: '100%', display: 'block', text: 'media'}})
                }
                content={content && getContent({style: {textAlign: 'left'}})}
              />
              <span style={{color: 'grey'}}>{atomCardElevation[elevation]}</span>
            </div>
          ))}
        </div>
      </Article>
    </>
  )
}

export default DefaultDemo
