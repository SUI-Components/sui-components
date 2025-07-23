import {useState} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import {Article, Code, H1, H2, Paragraph} from '@s-ui/documentation-library'
import PrimitiveLinkBox from '@s-ui/react-primitive-link-box'
import PrimitiveVisuallyHidden from '@s-ui/react-primitive-visually-hidden'

import AtomCard, {atomCardColor, atomCardCornerSize, atomCardDesign, atomCardElevation} from '../../src/index.js'
import places from '../data/places.js'
import Demo from '../utils/Demo/index.js'

const ArticleLinkBox = ({className}) => {
  const [active, setActive] = useState('')
  const handleClick = event => {
    const value = event?.currentTarget?.value
    setActive(value === active ? undefined : value)
  }
  return (
    <Article className={className}>
      <H2>Button cards</H2>
      <Paragraph>
        Cards can be used as buttons using the polymorphic props <Code>as</Code>.
      </Paragraph>
      <Demo>
        <div
          style={{
            padding: 32,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 16,
            flexGrow: 1,
            flexShrink: 1,
            flexBasis: 0,
            backgroundColor: 'var(--studio-c-surface)'
          }}
        >
          {places.map(place => (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px 8px'
              }}
              key={place.name}
            >
              <PrimitiveLinkBox>
                <AtomCard
                  as="button"
                  aria-pressed={active === place.name}
                  onClick={handleClick}
                  value={place.name}
                  className={cx('demo-card-button')}
                  elevation={atomCardElevation.S}
                  design={atomCardDesign.FILLED}
                  color={atomCardColor.SURFACE}
                  cornerSize={atomCardCornerSize.XXXL}
                  style={{
                    minWidth: 450,
                    minHeight: 300
                  }}
                  isInset
                >
                  <img
                    src={place.image}
                    aria-hidden="true"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0
                    }}
                  />
                  <div
                    className="cover"
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0
                    }}
                  />
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      alignItems: 'flex-start',
                      gap: 8,
                      padding: 24,
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0
                    }}
                  >
                    <H1
                      style={{
                        fontWeight: '900',
                        textShadow:
                          'var(--studio-c-on-surface) 0 0 4px, var(--studio-c-on-surface) 0 0 2px, var(--studio-c-on-surface) 0 0 1px',
                        color: 'var(--studio-c-surface)'
                      }}
                    >
                      {place.name}
                    </H1>
                    <PrimitiveVisuallyHidden>
                      <Paragraph>{place.description}</Paragraph>
                    </PrimitiveVisuallyHidden>
                  </div>
                </AtomCard>
              </PrimitiveLinkBox>
            </div>
          ))}
        </div>
      </Demo>
    </Article>
  )
}

ArticleLinkBox.displayName = 'ArticleLinkBox'

ArticleLinkBox.propTypes = {
  className: PropTypes.node
}

export default ArticleLinkBox
