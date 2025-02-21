import {useRef, useState} from 'react'

import AtomTag, {atomTagColors, atomTagDesigns} from 'components/atom/tag/src/index.js'
import PropTypes from 'prop-types'

import {
  Article,
  Box,
  Cell,
  Grid,
  H1,
  H2,
  H3,
  H4,
  Label,
  ListItem,
  Paragraph,
  Separator,
  Strong,
  UnorderedList
} from '@s-ui/documentation-library'
import AtomInput from '@s-ui/react-atom-input'
import MoleculeInputTags from '@s-ui/react-molecule-input-tags'
import PrimitiveVisuallyHidden from '@s-ui/react-primitive-visually-hidden'

import {calendarIcon, checkIcon, closeIcon, eyeIcon} from '../settings.js'

const ArticleKind = ({className}) => {
  const [pressed, setPressed] = useState(true)
  const [singleSelectionFilter, setSingleSelectionFilter] = useState(undefined)
  const [multipleUnionSelectionFilter, setMultipleUnionSelectionFilter] = useState([])
  const [multipleIntersectionSelectionFilter, setMultipleIntersectionSelectionFilter] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [inputFocus, setInputFocus] = useState(false)
  const inputRef = useRef()
  return (
    <Article className={className}>
      <H2>Kind</H2>
      <Paragraph>Those are the tags available for each usage:</Paragraph>
      <Grid gutter={[8, 0]} cols={4}>
        <Cell>
          <AtomTag
            label="Assist"
            design={atomTagDesigns.OUTLINE}
            href="#assist"
            icon={calendarIcon}
            color={atomTagColors.NEUTRAL}
          />
        </Cell>
        <Cell>
          <AtomTag
            label="Filter"
            aria-pressed={pressed}
            design={atomTagDesigns.OUTLINE}
            icon={pressed ? checkIcon : null}
            onClick={() => setPressed(!pressed)}
            color={atomTagColors.NEUTRAL}
          />
        </Cell>
        <Cell>
          <AtomTag
            label="Input"
            design={atomTagDesigns.OUTLINE}
            closeIcon={closeIcon}
            color={atomTagColors.NEUTRAL}
            onClose={() => {
              console.log('clear')
            }}
            closeLabel="clear"
          />
        </Cell>
        <Cell>
          <AtomTag
            label="Suggestion"
            design={atomTagDesigns.DASHED}
            closeIcon={closeIcon}
            color={atomTagColors.NEUTRAL}
            onClick={() => {}}
          />
        </Cell>
      </Grid>
      <Article as="section">
        <H3 id="assist">
          <Strong>Assist</Strong>
        </H3>
        <Paragraph>
          Assist tags represent smart or automated actions that can span multiple apps, such as opening a calendar event
          from the home screen.
        </Paragraph>
        <Paragraph>
          Assist tags function as though the user asked an assistant to complete the action. They should appear
          dynamically and contextually in a UI.
        </Paragraph>
        <Paragraph>
          An alternative to Assist Tags are buttons, which should appear persistently and consistently.
        </Paragraph>
        <Box
          style={{
            border: '1px solid var(--c-base)',
            width: 300,
            backgroundImage: 'linear-gradient(40deg, var(--c-primary) 0%, var(--c-accent) 130%)',
            color: 'var(--c-base)',
            boxShadow: '0px 4px 8px 0px color-mix(in srgb, var(--c-gray) 70%, transparent)'
          }}
        >
          <H4 style={{color: 'var(--c-base)'}}>Passed Event</H4>
          <H1 style={{color: 'var(--c-base)'}}>WWDC</H1>
          <H2 style={{color: 'var(--c-base)'}}>Worldwide Developers Conference</H2>
          <Separator />
          <H3 style={{color: 'var(--c-base)'}}>June 6, 2023</H3>
          <div style={{display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 16}}>
            <AtomTag
              label="Add to iCal"
              icon={calendarIcon}
              design={atomTagDesigns.OUTLINE}
              color={atomTagColors.SURFACE}
              href="#assist"
            />
            <AtomTag
              label="Join the meet"
              icon={eyeIcon}
              design={atomTagDesigns.OUTLINE}
              color={atomTagColors.SURFACE}
              href="#assist"
            />
          </div>
        </Box>
      </Article>
      <Article as="section">
        <H3 id="#filter">
          <Strong>Filter</Strong>
        </H3>
        <Paragraph>
          Filter Tags represent filters for a collection. They use tags or descriptive words to filter content. They can
          be a good alternative to toggle buttons or checkboxes.
        </Paragraph>
        <Paragraph>
          Tapping on a filter chip activates it and appends a leading checkmark icon to the starting edge of the tag
          label.
        </Paragraph>
        <H4>Single Selection</H4>
        <br />
        <Article as="Section" style={{border: '1px solid var(--c-base-inverse)', padding: 24, maxWidth: 600}}>
          <Grid gutter={[24, 0]}>
            <Cell style={{display: 'flex', gap: 8}}>
              <AtomTag
                label="fruit"
                pressed={singleSelectionFilter === 'fruit'}
                icon={singleSelectionFilter === 'fruit' && checkIcon}
                design={atomTagDesigns.OUTLINE}
                color={atomTagColors.NEUTRAL}
                onClick={(ev, {pressed}) => setSingleSelectionFilter(pressed === true ? undefined : 'fruit')}
              />
              <AtomTag
                label="vegetable"
                pressed={singleSelectionFilter === 'vegetable'}
                icon={singleSelectionFilter === 'vegetable' && checkIcon}
                design={atomTagDesigns.OUTLINE}
                color={atomTagColors.NEUTRAL}
                onClick={(ev, {pressed}) => setSingleSelectionFilter(pressed === true ? undefined : 'vegetable')}
              />
            </Cell>
            <Cell style={{display: 'flex', gap: 8}}>
              {Object.entries({
                '🥑': 'fruit',
                '🍇': 'fruit',
                '🍆': 'vegetable',
                '🍓': 'fruit',
                '🍏': 'fruit',
                '🥦': 'vegetable',
                '🍌': 'fruit',
                '🥒': 'vegetable',
                '🍍': 'fruit',
                '🥕': 'vegetable',
                '🍉': 'fruit',
                '🌽': 'vegetable',
                '🍊': 'fruit'
              })
                .filter(([, kind]) => {
                  if (singleSelectionFilter === undefined) {
                    return true
                  }
                  return kind === singleSelectionFilter
                })
                .map(([emoji, kind]) => {
                  return <span>{emoji}</span>
                })}
            </Cell>
          </Grid>
        </Article>
        <Paragraph>When there is no element selected (no filter applied) all the results are shown.</Paragraph>
        <H4>Multiple Selection</H4>
        <Paragraph>
          Multi Selection Filters can represent unions or intersections between multiple categories.
        </Paragraph>
        <h5>Union</h5>
        <Paragraph>
          The results shown on a union filter are all the elements that satisfy at least 1 of the selected filters.
        </Paragraph>
        <Article as="Section" style={{border: '1px solid var(--c-base-inverse)', padding: 24, maxWidth: 600}}>
          <Grid gutter={[24, 0]}>
            <Cell style={{display: 'flex', gap: 8}}>
              <AtomTag
                label="Animal"
                pressed={multipleUnionSelectionFilter.includes('animal')}
                icon={multipleUnionSelectionFilter.includes('animal') && checkIcon}
                design={atomTagDesigns.OUTLINE}
                color={atomTagColors.NEUTRAL}
                onClick={(ev, {pressed}) => {
                  setMultipleUnionSelectionFilter(
                    pressed === true
                      ? multipleUnionSelectionFilter.filter(v => v !== 'animal')
                      : [...multipleUnionSelectionFilter, 'animal']
                  )
                }}
              />
              <AtomTag
                label="Tree"
                pressed={multipleUnionSelectionFilter.includes('tree')}
                icon={multipleUnionSelectionFilter.includes('tree') && checkIcon}
                design={atomTagDesigns.OUTLINE}
                color={atomTagColors.NEUTRAL}
                onClick={(ev, {pressed}) => {
                  setMultipleUnionSelectionFilter(
                    pressed === true
                      ? multipleUnionSelectionFilter.filter(v => v !== 'tree')
                      : [...multipleUnionSelectionFilter, 'tree']
                  )
                }}
              />
              <AtomTag
                label="Flower"
                pressed={multipleUnionSelectionFilter.includes('flower')}
                icon={multipleUnionSelectionFilter.includes('flower') && checkIcon}
                design={atomTagDesigns.OUTLINE}
                color={atomTagColors.NEUTRAL}
                onClick={(ev, {pressed}) => {
                  setMultipleUnionSelectionFilter(
                    pressed === true
                      ? multipleUnionSelectionFilter.filter(v => v !== 'flower')
                      : [...multipleUnionSelectionFilter, 'flower']
                  )
                }}
              />
            </Cell>
            <Cell style={{display: 'flex', gap: 8}}>
              {Object.entries({
                '🦍': 'animal',
                '🦒': 'animal',
                '🦌': 'animal',
                '🌳': 'tree',
                '🌺': 'flower',
                '🐄': 'animal',
                '🌴': 'tree',
                '🪷': 'flower',
                '🐬': 'animal',
                '🌻': 'flower',
                '🌲': 'tree',
                '🌼': 'flower',
                '🐕': 'animal'
              })
                .filter(([, kind]) => {
                  if (multipleUnionSelectionFilter.length === 0) {
                    return true
                  }
                  return multipleUnionSelectionFilter.includes(kind)
                })
                .map(([emoji, kind]) => {
                  return <span>{emoji}</span>
                })}
            </Cell>
          </Grid>
        </Article>
        <UnorderedList>
          <ListItem>When there is no element selected (no filter applied) all the results are shown.</ListItem>
          <ListItem>When all the elements are selected all the results are shown.</ListItem>
        </UnorderedList>
        <h5>Intersection</h5>
        <Paragraph>
          The results shown on a union filter are all the elements that satisfy all the selected filters.
        </Paragraph>
        <Article as="Section" style={{border: '1px solid var(--c-base-inverse)', padding: 24, maxWidth: 600}}>
          <Grid gutter={[24, 0]}>
            <Cell style={{display: 'flex', gap: 8}}>
              <AtomTag
                label="Land"
                pressed={multipleIntersectionSelectionFilter.includes('land')}
                icon={multipleIntersectionSelectionFilter.includes('land') && checkIcon}
                design={atomTagDesigns.OUTLINE}
                color={atomTagColors.NEUTRAL}
                onClick={(ev, {pressed}) => {
                  setMultipleIntersectionSelectionFilter(
                    pressed === true
                      ? multipleIntersectionSelectionFilter.filter(v => v !== 'land')
                      : [...multipleIntersectionSelectionFilter, 'land']
                  )
                }}
              />
              <AtomTag
                label="Sea"
                pressed={multipleIntersectionSelectionFilter.includes('sea')}
                icon={multipleIntersectionSelectionFilter.includes('sea') && checkIcon}
                design={atomTagDesigns.OUTLINE}
                color={atomTagColors.NEUTRAL}
                onClick={(ev, {pressed}) => {
                  setMultipleIntersectionSelectionFilter(
                    pressed === true
                      ? multipleIntersectionSelectionFilter.filter(v => v !== 'sea')
                      : [...multipleIntersectionSelectionFilter, 'sea']
                  )
                }}
              />
              <AtomTag
                label="Air"
                pressed={multipleIntersectionSelectionFilter.includes('air')}
                icon={multipleIntersectionSelectionFilter.includes('air') && checkIcon}
                design={atomTagDesigns.OUTLINE}
                color={atomTagColors.NEUTRAL}
                onClick={(ev, {pressed}) => {
                  setMultipleIntersectionSelectionFilter(
                    pressed === true
                      ? multipleIntersectionSelectionFilter.filter(v => v !== 'air')
                      : [...multipleIntersectionSelectionFilter, 'air']
                  )
                }}
              />
              <AtomTag
                label="Domestic"
                pressed={multipleIntersectionSelectionFilter.includes('domestic')}
                icon={multipleIntersectionSelectionFilter.includes('domestic') && checkIcon}
                design={atomTagDesigns.OUTLINE}
                color={atomTagColors.NEUTRAL}
                onClick={(ev, {pressed}) => {
                  setMultipleIntersectionSelectionFilter(
                    pressed === true
                      ? multipleIntersectionSelectionFilter.filter(v => v !== 'domestic')
                      : [...multipleIntersectionSelectionFilter, 'domestic']
                  )
                }}
              />
              <AtomTag
                label="Wild"
                pressed={multipleIntersectionSelectionFilter.includes('wild')}
                icon={multipleIntersectionSelectionFilter.includes('wild') && checkIcon}
                design={atomTagDesigns.OUTLINE}
                color={atomTagColors.NEUTRAL}
                onClick={(ev, {pressed}) => {
                  setMultipleIntersectionSelectionFilter(
                    pressed === true
                      ? multipleIntersectionSelectionFilter.filter(v => v !== 'wild')
                      : [...multipleIntersectionSelectionFilter, 'wild']
                  )
                }}
              />
            </Cell>
            <Cell style={{display: 'flex', gap: 8}}>
              {Object.entries({
                '🦍': ['land', 'wild'],
                '🦒': ['land', 'wild'],
                '🦌': ['land', 'wild'],
                '🐄': ['land', 'domestic'],
                '🐕': ['land', 'domestic'],
                '🐬': ['sea', 'wild'],
                '🐓': ['land', 'domestic'],
                '🐿': ['land', 'wild'],
                '🦧': ['land', 'wild'],
                '🐳': ['sea', 'wild'],
                '🦈': ['sea', 'wild'],
                '🦭': ['land', 'sea', 'wild'],
                '🦆': ['land', 'sea', 'air', 'wild'],
                '🐡': ['sea', 'wild'],
                '🐟': ['sea', 'wild'],
                '🐞': ['land', 'air', 'wild'],
                '🐢': ['land', 'sea', 'wild', 'domestic'],
                '🦜': ['land', 'air', 'wild', 'domestic']
              })
                .filter(([, kind]) => {
                  if (multipleIntersectionSelectionFilter.length === 0) {
                    return true
                  }
                  return multipleIntersectionSelectionFilter.every(filter => kind.includes(filter))
                })
                .map(([emoji, kind]) => {
                  return <span>{emoji}</span>
                })}
            </Cell>
          </Grid>
        </Article>
        <UnorderedList>
          <ListItem>When there is no element selected (no filter applied), all the results are shown.</ListItem>
          <ListItem>
            When all the elements are selected only shows the results that satisfy all the filters (normally none of
            them).
          </ListItem>
        </UnorderedList>
      </Article>
      <Article as="section">
        <H3 id="#input">Input</H3>
        <Paragraph>
          Input tags represent discrete pieces of information entered by a user, such as Gmail contacts or filter
          options within a search field.
        </Paragraph>
        <Paragraph>They enable user input and verify that input by converting text into chips.</Paragraph>
        <PrimitiveVisuallyHidden>
          <Label htmlFor="moleculeInputTags">moleculeInputTags</Label>
        </PrimitiveVisuallyHidden>
        <MoleculeInputTags
          id="moleculeInputTags"
          defaultTags={['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr']}
          defaultValue="George Martin"
          onChange={(event, {name, tags, value, ...other}) => {
            console.log('onChange', {value, name, tags, ...other}) // eslint-disable-line no-console
          }}
          onChangeTags={(event, {tags, name, value, ...other}) => {
            console.log('onChangeTags', {value, name, tags, ...other}) // eslint-disable-line no-console
          }}
          tagDesign={atomTagDesigns.DASHED}
          tagsCloseIcon={closeIcon}
          tagCloseLabel="clear"
        />
      </Article>
      <Article as="section">
        <H3 id="#suggestion">Suggestion</H3>
        <Paragraph>
          Suggestion tags help narrow a user’s intent by presenting dynamically generated suggestions, such as possible
          responses or search filters.
        </Paragraph>
        <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
          <PrimitiveVisuallyHidden>
            <Label htmlFor="atomInput">input</Label>
          </PrimitiveVisuallyHidden>
          <AtomInput
            id="atomInput"
            ref={inputRef}
            value={inputValue}
            onChange={(_, {value}) => setInputValue(value)}
            onFocus={() =>
              setTimeout(() => {
                setInputFocus(true)
              }, 100)
            }
            onBlur={() =>
              setTimeout(() => {
                setInputFocus(false)
              }, 100)
            }
          />
          <div style={{display: 'flex', gap: 16, visibility: inputFocus ? 'visible' : 'hidden'}}>
            <AtomTag
              design={atomTagDesigns.DASHED}
              label="johnDoe@fakemail.com"
              color={atomTagColors.NEUTRAL}
              onClick={() => {
                setInputValue('johnDoe@fakemail.com')
                inputRef?.current.focus()
              }}
            />
            <AtomTag
              design={atomTagDesigns.DASHED}
              label="janeDoe@fakemail.com"
              color={atomTagColors.NEUTRAL}
              onClick={() => {
                setInputValue('janeDoe@fakemail.com')
                inputRef?.current.focus()
              }}
            />
          </div>
        </div>
      </Article>
    </Article>
  )
}

ArticleKind.displayName = 'ArticleKind'

ArticleKind.propTypes = {
  className: PropTypes.string
}

export default ArticleKind
