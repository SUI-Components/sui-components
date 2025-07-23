import {useState} from 'react'

import PropTypes from 'prop-types'

import {
  Anchor,
  Article,
  Bold,
  Code,
  H1,
  H2,
  H3,
  Label,
  ListItem,
  OrderedList,
  Paragraph,
  UnorderedList
} from '@s-ui/documentation-library'
import AtomButton from '@s-ui/react-atom-button'
import AtomInput from '@s-ui/react-atom-input'
import AtomKbd from '@s-ui/react-atom-kbd'
import AtomTag, {atomTagColors, atomTagDesigns, atomTagSizes} from '@s-ui/react-atom-tag'
import PrimitiveLinkBox, {PrimitiveLinkBoxLink, PrimitiveLinkBoxRaised} from '@s-ui/react-primitive-link-box'
import PrimitiveVisuallyHidden from '@s-ui/react-primitive-visually-hidden'

import AtomCard, {atomCardCornerSize, atomCardElevation} from '../../src/index.js'
import events from '../data/events.js'
import techForbes from '../data/techForbes.js'
import Demo from '../utils/Demo/index.js'

const ArticleKeyboardNavigation = ({className}) => {
  const [selected, setSelected] = useState([])
  const [selectedCompany, setSelectedCompany] = useState(undefined)
  const handleSelect = event => {
    const value = event.currentTarget.value
    const isSelected = selected.includes(value)
    setSelected(isSelected ? selected.filter(item => item !== value) : [...selected, value])
  }
  return (
    <Article className={className}>
      <H2>Keyboard Navigation</H2>
      <Paragraph>
        Cards can become interactive adding interactive items inside them, like buttons or links, forms, etc of by using
        its polymorphic feature using the <Code>as</Code> prop.
      </Paragraph>
      <Paragraph>There are 4 possible cards from the interaction perspective:</Paragraph>
      <OrderedList>
        <ListItem>
          <Bold>NON-Interactive</Bold> Cards with <Bold>NON-Interactive</Bold> items inside.
        </ListItem>
        <ListItem>
          <Bold>Interactive</Bold> Cards with <Bold>NON-Interactive</Bold> items inside.
        </ListItem>
        <ListItem>
          <Bold>NON-Interactive</Bold> Cards Cards with <Bold>Interactive</Bold> items inside.
        </ListItem>
        <ListItem>
          <Bold>Interactive</Bold> Cards Cards with <Bold>Interactive</Bold> items inside.
        </ListItem>
      </OrderedList>
      <H3>
        <Bold>1.- NON-Interactive</Bold> Cards with <Bold>NON-Interactive</Bold> items inside.
      </H3>
      <Paragraph>
        This is the default behavior of the component. It does not have any interactive items inside, so it does not
        have any keyboard interaction.
      </Paragraph>
      <Paragraph>
        Take care on the card content. If its media is relevant add the proper <Code>alt</Code> or <Code>label</Code>{' '}
        description. If it is not, leave the <Code>alt</Code> with an empty string value.
      </Paragraph>
      <Paragraph>
        Sometimes you may need to add some invisible but readable text for a11y or SEO purposes. In that case, you can
        use the <Code>VisuallyHidden</Code> component wrapping that text enforcing the content.
      </Paragraph>
      <Demo>
        <div style={{margin: '8px 24px', display: 'flex', justifyContent: 'center'}}>
          <Anchor href="https://www.forbes.com/richest-in-tech/list/#tab:overall" style={{textDecoration: 'none'}}>
            <H1 style={{margin: '0 16px', fontWeight: 900, textAlign: 'center', display: 'flex'}}>
              The Forbes
              <br />
              Richest People in Tech List
            </H1>
          </Anchor>
        </div>
        <div
          style={{
            display: 'flex',
            flexFlow: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
            padding: '0 32px',
            background: 'transparent'
          }}
        >
          <ul style={{display: 'flex', flexFlow: 'row', gap: 32, flexWrap: 'wrap', justifyContent: 'center'}}>
            {techForbes.slice(0, 3).map((person, index) => (
              <li key={index} style={{aspectRatio: '1 / 1', width: 300, maxHeight: '100%', display: 'block'}}>
                <AtomCard
                  as="article"
                  isInset
                  style={{position: 'relative', overflow: 'hidden'}}
                  elevation={atomCardElevation.XL}
                >
                  <img
                    style={{aspectRatio: '1 / 1', width: '100%', height: '100%', objectFit: 'cover'}}
                    src={person.image}
                    alt=""
                  />
                  <div
                    style={{
                      position: 'absolute',
                      right: 16,
                      bottom: 0,
                      textShadow:
                        'var(--studio-c-on-surface) 0 0 4px, var(--studio-c-on-surface) 0 0 2px, var(--studio-c-on-surface) 0 0 1px',
                      textAlign: 'right'
                    }}
                  >
                    <Paragraph style={{color: 'var(--studio-c-surface)', marginBottom: -8, fontSize: '.8em'}}>
                      {person.netWorth} | {person.age} y.o.
                    </Paragraph>
                    <H1 style={{color: 'var(--studio-c-surface)', margin: 0}}>{person.name}</H1>
                    <Paragraph style={{color: 'var(--studio-c-surface)', marginTop: -8, fontSize: '.8em'}}>
                      {person.description}
                    </Paragraph>
                  </div>
                </AtomCard>
              </li>
            ))}
          </ul>
        </div>
      </Demo>
      <H3>
        <Bold>2.- NON-Interactive</Bold> Cards with <Bold>Interactive</Bold> items inside.
      </H3>
      <Paragraph>
        A NON-Interactive card can contain interactive items inside, like buttons, links, form fields, etc. In this
        case, the card itself does not have any interaction, but the items inside it does.
      </Paragraph>
      <Paragraph>The card will not have any keyboard interaction, but the items inside will.</Paragraph>
      <Demo>
        <div style={{margin: '8px 24px', display: 'flex', justifyContent: 'center'}}>
          <H1 style={{margin: '0 16px', fontWeight: 900, textAlign: 'center', display: 'flex'}}>Tech event List</H1>
        </div>
        <div
          style={{
            display: 'flex',
            flexFlow: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
            padding: '0 32px',
            background: 'transparent'
          }}
        >
          {events.map((event, index) => (
            <ul
              key={index}
              style={{display: 'flex', flexFlow: 'row', gap: 32, flexWrap: 'wrap', justifyContent: 'center'}}
            >
              <li style={{aspectRatio: '1 / 1', width: 300, maxHeight: '100%', display: 'block'}}>
                <AtomCard
                  as="article"
                  isInset
                  style={{position: 'relative', overflow: 'hidden'}}
                  elevation={atomCardElevation.XL}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      background: `radial-gradient(color-mix(in srgb, var(--studio-c-on-surface) 90%, ${event.color}), ${event.color} 200%)`
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 16,
                      right: 16,
                      top: 16,
                      left: 16,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <img style={{maxHeight: 80, maxWidth: 150}} src={event.image} alt="" />
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      right: 16,
                      top: 0,
                      textAlign: 'right'
                    }}
                  >
                    <Paragraph
                      style={{
                        color: 'var(--studio-c-surface)',
                        marginBottom: -4,
                        fontSize: '.8em',
                        width: '100%',
                        textAlign: 'right'
                      }}
                    >
                      {event.city} | <Bold style={{color: 'inherit'}}>{event.country}</Bold>
                    </Paragraph>
                    <PrimitiveVisuallyHidden>
                      <H1 style={{color: 'var(--studio-c-surface)', margin: 0, fontSize: '1.7em'}}>{event.name}</H1>
                    </PrimitiveVisuallyHidden>
                    <Paragraph style={{color: 'var(--studio-c-surface)', marginTop: -4, fontSize: '1.2em'}}>
                      {event.date}
                    </Paragraph>
                  </div>
                  <div style={{position: 'absolute', bottom: 16, left: 16, right: 16, display: 'flex', gap: 8}}>
                    <AtomTag
                      label="website"
                      design={atomTagDesigns.OUTLINE}
                      color={atomTagColors.SURFACE}
                      size={atomTagSizes.SMALL}
                      onClick={() => window.open(event.url, '_blank')}
                    />
                    {event.playlist && (
                      <AtomTag
                        label="playlist"
                        design={atomTagDesigns.OUTLINE}
                        color={atomTagColors.SURFACE}
                        size={atomTagSizes.SMALL}
                        onClick={() => window.open(event.playlist, '_blank')}
                      />
                    )}
                  </div>
                </AtomCard>
              </li>
            </ul>
          ))}
          <ul style={{display: 'flex', flexFlow: 'row', gap: 32, flexWrap: 'wrap', justifyContent: 'center'}}>
            <li style={{aspectRatio: '1 / 1', width: 300, maxHeight: '100%', display: 'block'}}>
              <AtomCard
                as="form"
                isInset
                style={{position: 'relative', overflow: 'hidden'}}
                elevation={atomCardElevation.XL}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    background: `radial-gradient(color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--c-primary)), var(--c-primary) 200%)`
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: 24,
                    left: 24,
                    bottom: 24,
                    right: 24,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    gap: 16,
                    color: 'var(--studio-c-surface)'
                  }}
                >
                  <H2 style={{color: 'inherit', fontSize: '1.6em', textAlign: 'right', width: '100%'}}>
                    Get latest tech
                    <br />
                    event news
                    <br />
                    in your inbox
                  </H2>
                  <div style={{display: 'flex', flexFlow: 'row nowrap', gap: 8, width: '100%'}}>
                    <PrimitiveVisuallyHidden>
                      <Label htmlFor="kbd-nav-subscribe">leave your email</Label>
                    </PrimitiveVisuallyHidden>
                    <span style={{flexGrow: 0}}>
                      <AtomInput id="kbd-nav-subscribe" type="email" />
                    </span>
                    <span style={{flexGrow: 1}}>
                      <AtomButton type="submit">Subscribe!</AtomButton>
                    </span>
                  </div>
                </div>
              </AtomCard>
            </li>
          </ul>
        </div>
      </Demo>
      <H3>
        <Bold>3.- Interactive</Bold> Cards with <Bold>NON-Interactive</Bold> items inside.
      </H3>
      <Paragraph>Cards can become interactive as links or buttons.</Paragraph>
      <Paragraph>
        In this case, the card itself is interactive, but the items inside it are not. The card will have keyboard
        interaction.
      </Paragraph>
      <UnorderedList>
        <ListItem>
          <AtomKbd>Space</AtomKbd>: Activates the card as a button or link.
        </ListItem>
        <ListItem>
          <AtomKbd>Enter</AtomKbd>: Activates the card as a button or link.
        </ListItem>
        <ListItem>
          <AtomKbd>Tag</AtomKbd>: Go to next interactive element.
        </ListItem>
        <ListItem>
          <AtomKbd>Shift</AtomKbd> + <AtomKbd>Tag</AtomKbd>: Go to previous interactive element.
        </ListItem>
      </UnorderedList>
      <Demo style={{minHeight: 0}}>
        <div style={{margin: '8px 24px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8}}>
          {['land', 'sea', 'sky'].map((value, index) => {
            const isSelected = selected.includes(value)
            return (
              <AtomCard
                key={index}
                as="button"
                value={value}
                aria-pressed={isSelected}
                cornerSize={atomCardCornerSize.XL}
                elevation={isSelected ? atomCardElevation.L : atomCardElevation['-L']}
                onClick={handleSelect}
              >
                <H2>{value}</H2>
              </AtomCard>
            )
          })}
        </div>
        <div
          style={{
            margin: '8px 24px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 16
          }}
        >
          {Object.entries({
            '🦍': ['land'],
            '🦒': ['land'],
            '🦌': ['land'],
            '🐄': ['land'],
            '🐕': ['land'],
            '🐬': ['sea'],
            '🐓': ['land'],
            '🐿️': ['land'],
            '🦧': ['land'],
            '🐳': ['sea'],
            '🦈': ['sea'],
            '🦭': ['land', 'sea'],
            '🦆': ['land', 'sky', 'sea'],
            '🐡': ['sea'],
            '🐟': ['sea'],
            '🐞': ['land', 'sky'],
            '🐢': ['land', 'sea'],
            '🦜': ['land', 'sky']
          })
            .filter(
              ([_, tags]) =>
                selected.length === 0 ||
                selected.every(s => {
                  return tags.includes(s)
                })
            )
            .map(([animalKey, value], index) => (
              <span style={{fontSize: '3em'}} key={index}>
                {animalKey}
              </span>
            ))}
        </div>
        <Paragraph>
          The most common use case for this kind of interaction is to use the card as a link, so it can be used to
          navigate to another page or section of the application. A good example is card banners that link to a specific
          product or service between other cards inside a grid listing.
        </Paragraph>
      </Demo>
      <H3>
        <Bold>4.- Interactive</Bold> Cards with <Bold>Interactive</Bold> items inside.
      </H3>
      <Paragraph>
        There is no way to place links or button inside other links or buttons, so the right way to get that effect is
        by using the LinkBox (LinkBoxLink + LinkBoxRaised) Component. Using that element, the card will have a right
        HTML structure but visually will keep the proper effect.
      </Paragraph>
      <Demo>
        <div
          style={{
            display: 'flex',
            flexFlow: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
            padding: '0 32px',
            background: 'transparent'
          }}
        >
          <ul style={{display: 'flex', flexFlow: 'row', gap: 32, flexWrap: 'wrap', justifyContent: 'center'}}>
            {techForbes
              .filter(person => selectedCompany === undefined || person.companies.includes(selectedCompany))
              .map((person, index) => (
                <li key={index} style={{aspectRatio: '1 / 1', width: 300, maxHeight: '100%', display: 'block'}}>
                  <PrimitiveLinkBox>
                    <AtomCard
                      as="article"
                      isInset
                      style={{position: 'relative', overflow: 'hidden'}}
                      elevation={atomCardElevation.XL}
                    >
                      <img
                        style={{aspectRatio: '1 / 1', width: '100%', height: '100%', objectFit: 'cover'}}
                        src={person.image}
                        alt=""
                      />
                      <div
                        style={{
                          position: 'absolute',
                          right: 0,
                          bottom: 0,
                          left: 0,
                          top: 0
                        }}
                      >
                        <div
                          style={{
                            margin: 16,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'flex-end',
                            textShadow:
                              'var(--studio-c-on-surface) 0 0 4px, var(--studio-c-on-surface) 0 0 2px, var(--studio-c-on-surface) 0 0 1px',
                            textAlign: 'right',
                            width: 'calc(100% - 32px)',
                            height: 'calc(100% - 32px)'
                          }}
                        >
                          <div>
                            <Paragraph style={{color: 'var(--studio-c-surface)', marginBottom: -8, fontSize: '.8em'}}>
                              {person.netWorth} | {person.age} y.o.
                            </Paragraph>
                            <PrimitiveLinkBoxLink>
                              <Anchor href={person.url} style={{textDecoration: 'none'}}>
                                <H1 style={{color: 'var(--studio-c-surface)', margin: 0}}>{person.name}</H1>
                              </Anchor>
                            </PrimitiveLinkBoxLink>
                          </div>
                          <div style={{display: 'flex', flexFlow: 'row wrap', gap: 4}}>
                            {person.companies.map((company, index) => (
                              <PrimitiveLinkBoxRaised key={index}>
                                <AtomTag
                                  label={company}
                                  size={atomTagSizes.SMALL}
                                  color={selectedCompany === company ? atomTagColors.PRIMARY : atomTagColors.SURFACE}
                                  design={atomTagDesigns.OUTLINE}
                                  value={company}
                                  onClick={() => {
                                    setSelectedCompany(selectedCompany === company ? undefined : company)
                                  }}
                                />
                              </PrimitiveLinkBoxRaised>
                            ))}
                          </div>
                        </div>
                      </div>
                    </AtomCard>
                  </PrimitiveLinkBox>
                </li>
              ))}
          </ul>
        </div>
      </Demo>
    </Article>
  )
}

ArticleKeyboardNavigation.propTypes = {
  className: PropTypes.string
}

export default ArticleKeyboardNavigation
