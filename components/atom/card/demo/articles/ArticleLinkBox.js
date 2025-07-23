import {useState} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import {Anchor, Article, H1, H2, ListItem, Paragraph, UnorderedList} from '@s-ui/documentation-library'
import AtomButton, {atomButtonDesigns, atomButtonShapes} from '@s-ui/react-atom-button'
import PrimitiveLinkBox, {PrimitiveLinkBoxLink, PrimitiveLinkBoxRaised} from '@s-ui/react-primitive-link-box'

import AtomCard, {atomCardColor, atomCardCornerSize, atomCardDesign, atomCardElevation} from '../../src/index.js'
import Demo from '../utils/Demo/index.js'

const ArticleLinkBox = ({className}) => {
  const [hover, setHover] = useState('')
  return (
    <Article className={className}>
      <H2>LinkBox</H2>
      <Paragraph>Combine the card with the Linkbox to create a11y cards.</Paragraph>
      <Demo>
        <div
          style={{
            padding: 32,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 16,
            flexGrow: 1,
            flexShrink: 1,
            flexBasis: 0,
            backgroundColor: 'var(--studio-c-surface)'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <PrimitiveLinkBox>
              <AtomCard
                as="article"
                className={cx('demo-card-link-box', {hovered: hover === 'free'})}
                elevation={hover === 'free' ? atomCardElevation.L : atomCardElevation.S}
                design={atomCardDesign.OUTLINED}
                color={atomCardColor.NEUTRAL}
                cornerSize={atomCardCornerSize.XXXL}
                onMouseEnter={() => setHover('free')}
                onMouseLeave={() => setHover('')}
                style={{
                  width: 300,
                  minHeight: 400
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: 8,
                    padding: 4
                  }}
                >
                  <PrimitiveLinkBoxLink>
                    <Anchor href="#enterprise" style={{color: 'inherit', textDecoration: 'none'}}>
                      <H1 style={{fontWeight: 'bold'}}>Free</H1>
                    </Anchor>
                  </PrimitiveLinkBoxLink>
                  <div style={{width: '60%', minWidth: 150, textAlign: 'center', fontSize: '.75rem'}}>
                    Security, compliance, and flexible deployment
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexFlow: 'nowrap',
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 8
                    }}
                  >
                    <span style={{paddingBlock: 16, color: 'var(--studio-c-on-surface)'}}>
                      <sup style={{fontSize: '1rem'}}>$</sup>
                      <span style={{fontSize: '2rem', fontWeight: 800}}>0</span>
                      <span style={{fontWeight: 800}}>USD</span>
                    </span>
                    <span>per user/month</span>
                  </div>
                  <div style={{width: '100%', display: 'flex', flexWrap: 'nowrap', gap: 8}}>
                    <PrimitiveLinkBoxRaised>
                      <AtomButton
                        shape={atomButtonShapes.CIRCULAR}
                        design={atomButtonDesigns.OUTLINE}
                        style={{flexGrow: 1}}
                      >
                        Create a free organization
                      </AtomButton>
                    </PrimitiveLinkBoxRaised>
                  </div>
                  <br />
                  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flexGrow: 1}}>
                    <Paragraph style={{margin: 0, fontWeight: 800}}>Features included:</Paragraph>
                    <UnorderedList className="card-linkbox-features" style={{marginBlock: 0}}>
                      <ListItem className="check">Unlimited public/private repositories.</ListItem>
                      <ListItem className="check">Dependabot security and version updates.</ListItem>
                      <ListItem className="uncheck">Issues & Projects.</ListItem>
                      <ListItem className="uncheck">Access to GitHub Codespaces.</ListItem>
                      <ListItem className="uncheck">Protected branches.</ListItem>
                      <ListItem className="uncheck">Code owners.</ListItem>
                      <ListItem className="uncheck">Pages and wikis.</ListItem>
                      <ListItem className="uncheck">Data residency.</ListItem>
                      <ListItem className="uncheck">Enterprise managed users.</ListItem>
                      <ListItem className="uncheck">Environment protection rules.</ListItem>
                      <ListItem className="uncheck">Github connect.</ListItem>
                    </UnorderedList>
                  </div>
                </div>
              </AtomCard>
            </PrimitiveLinkBox>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <PrimitiveLinkBox>
              <AtomCard
                as="article"
                className={cx('demo-card-link-box', {hovered: hover === 'team'})}
                elevation={hover === 'team' ? atomCardElevation.L : atomCardElevation.S}
                design={atomCardDesign.OUTLINED}
                color={atomCardColor.NEUTRAL}
                cornerSize={atomCardCornerSize.XXXL}
                onMouseEnter={() => setHover('team')}
                onMouseLeave={() => setHover('')}
                style={{
                  width: 300,
                  minHeight: 400
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: 8,
                    padding: 4
                  }}
                >
                  <PrimitiveLinkBoxLink>
                    <Anchor href="#team" style={{color: 'inherit', textDecoration: 'none'}}>
                      <H1 style={{fontWeight: 'bold'}}>Team</H1>
                    </Anchor>
                  </PrimitiveLinkBoxLink>
                  <div style={{width: '60%', minWidth: 150, textAlign: 'center', fontSize: '.75rem'}}>
                    The basics for individuals and organizations
                  </div>
                  <div
                    style={{display: 'flex', flexFlow: 'nowrap', flexDirection: 'row', alignItems: 'center', gap: 8}}
                  >
                    <span style={{paddingBlock: 16, color: 'var(--studio-c-on-surface)'}}>
                      <sup style={{fontSize: '1rem'}}>$</sup>
                      <span style={{fontSize: '2rem', fontWeight: 800}}>4</span>
                      <span style={{fontWeight: 800}}>USD</span>
                    </span>
                    <span>per user/month</span>
                  </div>
                  <div style={{width: '100%'}}>
                    <PrimitiveLinkBoxRaised>
                      <AtomButton shape={atomButtonShapes.CIRCULAR} fullWidth>
                        Continue with team
                      </AtomButton>
                    </PrimitiveLinkBoxRaised>
                  </div>
                  <br />
                  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flexGrow: 1}}>
                    <Paragraph style={{margin: 0, fontWeight: 800}}>Features included:</Paragraph>
                    <UnorderedList className="card-linkbox-features" style={{marginBlock: 0}}>
                      <ListItem className="check">Unlimited public/private repositories.</ListItem>
                      <ListItem className="check">Dependabot security and version updates.</ListItem>
                      <ListItem className="check">Issues & Projects.</ListItem>
                      <ListItem className="check">Access to GitHub Codespaces.</ListItem>
                      <ListItem className="check">Protected branches.</ListItem>
                      <ListItem className="check">Code owners.</ListItem>
                      <ListItem className="check">Pages and wikis.</ListItem>
                      <ListItem className="uncheck">Data residency.</ListItem>
                      <ListItem className="uncheck">Enterprise managed users.</ListItem>
                      <ListItem className="uncheck">Environment protection rules.</ListItem>
                      <ListItem className="uncheck">Github connect.</ListItem>
                    </UnorderedList>
                  </div>
                </div>
              </AtomCard>
            </PrimitiveLinkBox>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <PrimitiveLinkBox>
              <AtomCard
                as="article"
                className={cx('demo-card-link-box', {hovered: hover === 'enterprise'})}
                elevation={hover === 'enterprise' ? atomCardElevation.L : atomCardElevation.S}
                design={atomCardDesign.OUTLINED}
                color={atomCardColor.NEUTRAL}
                cornerSize={atomCardCornerSize.XXXL}
                onMouseEnter={() => setHover('enterprise')}
                onMouseLeave={() => setHover('')}
                style={{
                  width: 300,
                  minHeight: 400
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: 8,
                    padding: 4
                  }}
                >
                  <PrimitiveLinkBoxLink>
                    <Anchor href="#enterprise" style={{color: 'inherit', textDecoration: 'none'}}>
                      <H1 style={{fontWeight: 'bold'}}>Enterprise</H1>
                    </Anchor>
                  </PrimitiveLinkBoxLink>
                  <div style={{width: '60%', minWidth: 150, textAlign: 'center', fontSize: '.75rem'}}>
                    Security, compliance, and flexible deployment
                  </div>
                  <div
                    style={{display: 'flex', flexFlow: 'nowrap', flexDirection: 'row', alignItems: 'center', gap: 8}}
                  >
                    <span style={{paddingBlock: 16, color: 'var(--studio-c-on-surface)'}}>
                      <sup style={{fontSize: '1rem'}}>$</sup>
                      <span style={{fontSize: '2rem', fontWeight: 800}}>21</span>
                      <span style={{fontWeight: 800}}>USD</span>
                    </span>
                    <span>per user/month</span>
                  </div>
                  <div style={{width: '100%', display: 'flex', flexWrap: 'nowrap', gap: 8}}>
                    <PrimitiveLinkBoxRaised>
                      <AtomButton shape={atomButtonShapes.CIRCULAR} style={{flexGrow: 1}}>
                        Start a free trial
                      </AtomButton>
                    </PrimitiveLinkBoxRaised>
                    <PrimitiveLinkBoxRaised>
                      <AtomButton
                        shape={atomButtonShapes.CIRCULAR}
                        design={atomButtonDesigns.OUTLINE}
                        style={{flexGrow: 1}}
                      >
                        Contact sales
                      </AtomButton>
                    </PrimitiveLinkBoxRaised>
                  </div>
                  <br />
                  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flexGrow: 1}}>
                    <Paragraph style={{margin: 0, fontWeight: 800}}>Features included:</Paragraph>
                    <UnorderedList className="card-linkbox-features" style={{marginBlock: 0}}>
                      <ListItem className="check">Unlimited public/private repositories.</ListItem>
                      <ListItem className="check">Dependabot security and version updates.</ListItem>
                      <ListItem className="check">Issues & Projects.</ListItem>
                      <ListItem className="check">Access to GitHub Codespaces.</ListItem>
                      <ListItem className="check">Protected branches.</ListItem>
                      <ListItem className="check">Code owners.</ListItem>
                      <ListItem className="check">Pages and wikis.</ListItem>
                      <ListItem className="check">Data residency.</ListItem>
                      <ListItem className="check">Enterprise managed users.</ListItem>
                      <ListItem className="check">Environment protection rules.</ListItem>
                      <ListItem className="check">Github connect.</ListItem>
                    </UnorderedList>
                  </div>
                </div>
              </AtomCard>
            </PrimitiveLinkBox>
          </div>
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
