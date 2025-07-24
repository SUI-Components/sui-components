import {Fragment} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Paragraph} from '@s-ui/documentation-library'
import MoleculeAvatar from '@s-ui/react-molecule-avatar'

import AtomCard, {atomCardColor, atomCardDesign} from '../../src/index.js'
import users from '../data/users.js'
import Bauhaus from '../utils/Bauhaus/index.js'
import Demo from '../utils/Demo/index.js'

const ArticleColorDesign = ({className}) => {
  return (
    <Article className={className}>
      <H2>Color and Design</H2>
      <Paragraph>
        There are 6 different designs options for the card: 2 options with solid background, 2 options with outlined
        borders and 2 translucent options.
      </Paragraph>
      <Demo>
        <Bauhaus style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}} />
        <Grid cols={3} gutter={[24, 24]} style={{padding: 16, minHeight: 300, color: 'var(--studio-c-surface)'}}>
          <Cell style={{color: 'inherit', zIndex: 1}}>
            <H2 style={{color: 'inherit'}}>solid</H2>
          </Cell>
          <Cell style={{color: 'inherit', zIndex: 1}}>
            <H2 style={{color: 'inherit'}}>bordered</H2>
          </Cell>
          <Cell style={{color: 'inherit', zIndex: 1}}>
            <H2 style={{color: 'inherit'}}>translucent</H2>
          </Cell>
          <Cell style={{color: 'inherit', zIndex: 1}}>
            <div style={{color: 'var(--studio-c-surface)'}}>
              <AtomCard design={atomCardDesign.FILLED}>
                <div
                  style={{display: 'flex', flexFlow: 'column nowrap', justifyContent: 'stretch', alignItems: 'center'}}
                >
                  <MoleculeAvatar
                    src={users[0]?.picture?.thumbnail}
                    name={`${users[0]?.name.first} ${users[0]?.name.last}`}
                    style={{filter: 'grayscale(1)'}}
                  />
                  <H2 style={{color: 'inherit'}}>
                    {users[0]?.name.first} {users[0]?.name.last}
                  </H2>
                  <hr style={{width: '100%', color: 'inherit'}} />
                  <div style={{width: '100%', display: 'flex', gap: 8, flexDirection: 'column'}}>
                    <div>✉️: {users[0].email}</div>
                    <div>📞: {users[0].phone}</div>
                  </div>
                </div>
              </AtomCard>
              <br />
              <Code>atomCardDesign.FILLED</Code>
            </div>
          </Cell>
          <Cell style={{color: 'inherit', zIndex: 1}}>
            <div style={{color: 'var(--studio-c-surface)'}}>
              <AtomCard design={atomCardDesign.OUTLINED}>
                <div
                  style={{display: 'flex', flexFlow: 'column nowrap', justifyContent: 'stretch', alignItems: 'center'}}
                >
                  <MoleculeAvatar
                    src={users[1]?.picture?.thumbnail}
                    name={`${users[1]?.name.first} ${users[1]?.name.last}`}
                    style={{filter: 'grayscale(1)'}}
                  />
                  <H2 style={{color: 'inherit'}}>
                    {users[1]?.name.first} {users[1]?.name.last}
                  </H2>
                  <hr style={{width: '100%', color: 'inherit'}} />
                  <div style={{width: '100%', display: 'flex', gap: 8, flexDirection: 'column'}}>
                    <div>✉️: {users[1].email}</div>
                    <div>📞: {users[1].phone}</div>
                  </div>
                </div>
              </AtomCard>
              <br />
              <Code>atomCardDesign.OUTLINED</Code>
            </div>
          </Cell>
          <Cell style={{color: 'inherit', zIndex: 1}}>
            <div style={{color: 'var(--studio-c-surface)'}}>
              <AtomCard design={atomCardDesign.GHOSTED}>
                <div
                  style={{display: 'flex', flexFlow: 'column nowrap', justifyContent: 'stretch', alignItems: 'center'}}
                >
                  <MoleculeAvatar
                    src={users[2]?.picture?.thumbnail}
                    name={`${users[2]?.name.first} ${users[2]?.name.last}`}
                    style={{filter: 'grayscale(1)'}}
                  />
                  <H2 style={{color: 'inherit'}}>
                    {users[2]?.name.first} {users[2]?.name.last}
                  </H2>
                  <hr style={{width: '100%', color: 'inherit'}} />
                  <div style={{width: '100%', display: 'flex', gap: 8, flexDirection: 'column'}}>
                    <div>✉️: {users[2].email}</div>
                    <div>📞: {users[2].phone}</div>
                  </div>
                </div>
              </AtomCard>
              <br />
              <Code>atomCardDesign.GHOSTED</Code>
            </div>
          </Cell>
          <Cell style={{color: 'inherit', zIndex: 1}}>
            <div style={{color: 'var(--studio-c-surface)'}}>
              <AtomCard design={atomCardDesign.TINTED}>
                <div
                  style={{display: 'flex', flexFlow: 'column nowrap', justifyContent: 'stretch', alignItems: 'center'}}
                >
                  <MoleculeAvatar
                    src={users[3]?.picture?.thumbnail}
                    name={`${users[3]?.name.first} ${users[3]?.name.last}`}
                    style={{filter: 'grayscale(1)'}}
                  />
                  <H2 style={{color: 'inherit'}}>
                    {users[3]?.name.first} {users[3]?.name.last}
                  </H2>
                  <hr style={{width: '100%', color: 'inherit'}} />
                  <div style={{width: '100%', display: 'flex', gap: 8, flexDirection: 'column'}}>
                    <div>✉️: {users[3].email}</div>
                    <div>📞: {users[3].phone}</div>
                  </div>
                </div>
              </AtomCard>
              <br />
              <Code>atomCardDesign.TINTED</Code>
            </div>
          </Cell>
          <Cell style={{color: 'inherit', zIndex: 1}}>
            <div style={{color: 'var(--studio-c-surface)'}}>
              <AtomCard design={atomCardDesign.DASHED}>
                <div
                  style={{display: 'flex', flexFlow: 'column nowrap', justifyContent: 'stretch', alignItems: 'center'}}
                >
                  <MoleculeAvatar
                    src={users[4]?.picture?.thumbnail}
                    name={`${users[4]?.name.first} ${users[4]?.name.last}`}
                    style={{filter: 'grayscale(1)'}}
                  />
                  <H2 style={{color: 'inherit'}}>
                    {users[4]?.name.first} {users[4]?.name.last}
                  </H2>
                  <hr style={{width: '100%', color: 'inherit'}} />
                  <div style={{width: '100%', display: 'flex', gap: 8, flexDirection: 'column'}}>
                    <div>✉️: {users[4].email}</div>
                    <div>📞: {users[4].phone}</div>
                  </div>
                </div>
              </AtomCard>
              <br />
              <Code>atomCardDesign.DASHED</Code>
            </div>
          </Cell>
          <Cell style={{color: 'inherit', zIndex: 1}}>
            <div style={{color: 'var(--studio-c-surface)'}}>
              <AtomCard design={atomCardDesign.GLASSED}>
                <div
                  style={{display: 'flex', flexFlow: 'column nowrap', justifyContent: 'stretch', alignItems: 'center'}}
                >
                  <MoleculeAvatar
                    src={users[5]?.picture?.thumbnail}
                    name={`${users[5]?.name.first} ${users[5]?.name.last}`}
                    style={{filter: 'grayscale(1)'}}
                  />
                  <H2 style={{color: 'inherit'}}>
                    {users[5]?.name.first} {users[5]?.name.last}
                  </H2>
                  <hr style={{width: '100%', color: 'inherit'}} />
                  <div style={{width: '100%', display: 'flex', gap: 8, flexDirection: 'column'}}>
                    <div>✉️: {users[5].email}</div>
                    <div>📞: {users[5].phone}</div>
                  </div>
                </div>
              </AtomCard>
              <br />
              <Code>atomCardDesign.GLASSED</Code>
            </div>
          </Cell>
        </Grid>
      </Demo>
      <Paragraph>
        The card can be used with different colors, which can be applied to the background or the border depending on
        the design.
      </Paragraph>
      <Demo>
        <Grid cols={1} gutter={[48, 8]}>
          {Object.entries(atomCardColor).map(([colorKey, colorValue], i) => {
            return (
              <Cell key={colorKey}>
                <Grid cols={Object.values(atomCardDesign).length / 2 + 2} gutter={[8, 8]}>
                  {new Array(3).fill(1).map((_, j) => {
                    if ([0, 2].includes(j)) {
                      return Object.entries(atomCardDesign)
                        .slice(0, Object.values(atomCardDesign).length / 2)
                        .map(([atomCardDesignKey, atomCardDesignValue], index) => {
                          const atomCardDesignArray = Object.entries(atomCardDesign)
                          const [design0, design1] = [
                            atomCardDesignArray[index * 2],
                            atomCardDesignArray[index * 2 + 1]
                          ]
                          const [designKey] = j === 0 ? design0 : design1
                          if (index === 0) {
                            return (
                              <Fragment key={`${atomCardDesignKey}-${index}`}>
                                <Cell />
                                <Cell>
                                  <div
                                    style={{
                                      display: 'flex',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      height: '100%'
                                    }}
                                  >
                                    <Code>atomCardDesign.{designKey}</Code>
                                  </div>
                                </Cell>
                              </Fragment>
                            )
                          } else if (index === Object.values(atomCardDesign).length / 2 - 1) {
                            return (
                              <Fragment key={`${atomCardDesignKey}-${index}`}>
                                <Cell>
                                  <div
                                    style={{
                                      display: 'flex',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      height: '100%'
                                    }}
                                  >
                                    <Code>atomCardDesign.{designKey}</Code>
                                  </div>
                                </Cell>
                                <Cell />
                              </Fragment>
                            )
                          } else {
                            return (
                              <Cell key={`${atomCardDesignKey}-${index}`}>
                                <div
                                  style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '100%'
                                  }}
                                >
                                  <Code>atomCardDesign.{designKey}</Code>
                                </div>
                              </Cell>
                            )
                          }
                        })
                    } else if (j === 1) {
                      return Object.entries(atomCardDesign)
                        .slice(0, Object.values(atomCardDesign).length / 2)
                        .map(([atomCardDesignKey, atomCardDesignValue], k) => {
                          const index = i * Object.entries(atomCardDesign).length + k * 2
                          const [user0, user1] = [users[index % users.length], users[(index % users.length) + 1]]
                          const atomCardDesignArray = Object.values(atomCardDesign)
                          const [design0, design1] = [atomCardDesignArray[k * 2], atomCardDesignArray[k * 2 + 1]]
                          if (k === 0) {
                            return (
                              <Fragment key={`${atomCardDesignKey}-${k}`}>
                                <Cell>
                                  <div
                                    style={{
                                      display: 'flex',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      height: '100%'
                                    }}
                                  >
                                    <Code>atomCardColor.{colorKey}</Code>
                                  </div>
                                </Cell>
                                <Cell>
                                  <Grid cols={1} gutter={[8, 0]}>
                                    <Cell>
                                      <div
                                        style={{
                                          display: 'flex',
                                          justifyContent: 'center',
                                          alignItems: 'center'
                                        }}
                                        className={cx(
                                          'ColorDesignDemo',
                                          `ColorDesignDemo-design-${design0}`,
                                          `ColorDesignDemo-color-${colorValue}`
                                        )}
                                      >
                                        <div style={{padding: 12, color: 'inherit', width: '100%', height: '100%'}}>
                                          <AtomCard design={design0} color={colorValue}>
                                            <div style={{color: 'inherit', display: 'flex', gap: 8}}>
                                              <div style={{flexGrow: 0}}>
                                                <MoleculeAvatar
                                                  src={user0?.picture?.thumbnail}
                                                  name={`avatar-${'surface'}-${design0}`}
                                                  style={{filter: 'grayscale(1)'}}
                                                />
                                              </div>
                                              <div style={{flexGrow: 1}}>
                                                <Grid gutter={[2, 0]} style={{color: 'inherit'}}>
                                                  <Cell
                                                    style={{
                                                      color: 'inherit',
                                                      overflow: 'hidden',
                                                      whiteSpace: 'nowrap',
                                                      textOverflow: 'ellipsis',
                                                      fontWeight: 800,
                                                      fontSize: '1.1rem'
                                                    }}
                                                  >
                                                    @{user0?.login?.username}
                                                  </Cell>
                                                  <Cell
                                                    style={{
                                                      color: 'inherit',
                                                      overflow: 'hidden',
                                                      whiteSpace: 'nowrap',
                                                      textOverflow: 'ellipsis',
                                                      fontSize: '0.8rem'
                                                    }}
                                                  >
                                                    {user0?.name?.first} {user0?.name?.last}
                                                  </Cell>
                                                </Grid>
                                              </div>
                                            </div>
                                          </AtomCard>
                                        </div>
                                      </div>
                                    </Cell>
                                    <Cell>
                                      <div
                                        style={{
                                          display: 'flex',
                                          justifyContent: 'center',
                                          alignItems: 'center'
                                        }}
                                        className={cx(
                                          'ColorDesignDemo',
                                          `ColorDesignDemo-design-${design0}`,
                                          `ColorDesignDemo-color-${colorValue}`
                                        )}
                                      >
                                        <div style={{padding: 12, color: 'inherit', width: '100%', height: '100%'}}>
                                          <AtomCard design={design1} color={colorValue}>
                                            <div style={{color: 'inherit', display: 'flex', gap: 8}}>
                                              <div style={{flexGrow: 0}}>
                                                <MoleculeAvatar
                                                  src={user1?.picture?.thumbnail}
                                                  name={`avatar-${'surface'}-${design1}`}
                                                  style={{filter: 'grayscale(1)'}}
                                                />
                                              </div>
                                              <div style={{flexGrow: 1}}>
                                                <Grid gutter={[2, 0]} style={{color: 'inherit'}}>
                                                  <Cell
                                                    style={{
                                                      color: 'inherit',
                                                      overflow: 'hidden',
                                                      whiteSpace: 'nowrap',
                                                      textOverflow: 'ellipsis',
                                                      fontWeight: 800,
                                                      fontSize: '1.1rem'
                                                    }}
                                                  >
                                                    @{user1?.login?.username}
                                                  </Cell>
                                                  <Cell
                                                    style={{
                                                      color: 'inherit',
                                                      overflow: 'hidden',
                                                      whiteSpace: 'nowrap',
                                                      textOverflow: 'ellipsis',
                                                      fontSize: '0.8rem'
                                                    }}
                                                  >
                                                    {user1?.name?.first} {user1?.name?.last}
                                                  </Cell>
                                                </Grid>
                                              </div>
                                            </div>
                                          </AtomCard>
                                        </div>
                                      </div>
                                    </Cell>
                                  </Grid>
                                </Cell>
                              </Fragment>
                            )
                          } else if (k === Object.values(atomCardDesign).length / 2 - 1) {
                            return (
                              <Fragment key={`${'filled'}-${k}`}>
                                <Cell>
                                  <Grid cols={1} gutter={[8, 0]}>
                                    <Cell>
                                      <div
                                        style={{
                                          display: 'flex',
                                          justifyContent: 'center',
                                          alignItems: 'center'
                                        }}
                                        className={cx(
                                          'ColorDesignDemo',
                                          `ColorDesignDemo-design-${design0}`,
                                          `ColorDesignDemo-color-${colorValue}`
                                        )}
                                      >
                                        <div style={{padding: 12, color: 'inherit', width: '100%', height: '100%'}}>
                                          <AtomCard design={design0} color={colorValue}>
                                            <div style={{color: 'inherit', display: 'flex', gap: 8}}>
                                              <div style={{flexGrow: 0}}>
                                                <MoleculeAvatar
                                                  src={user0?.picture?.thumbnail}
                                                  name={`avatar-${'surface'}-${design0}`}
                                                  style={{filter: 'grayscale(1)'}}
                                                />
                                              </div>
                                              <div style={{flexGrow: 1}}>
                                                <Grid gutter={[2, 0]} style={{color: 'inherit'}}>
                                                  <Cell
                                                    style={{
                                                      color: 'inherit',
                                                      overflow: 'hidden',
                                                      whiteSpace: 'nowrap',
                                                      textOverflow: 'ellipsis',
                                                      fontWeight: 800,
                                                      fontSize: '1.1rem'
                                                    }}
                                                  >
                                                    @{user0?.login?.username}
                                                  </Cell>
                                                  <Cell
                                                    style={{
                                                      color: 'inherit',
                                                      overflow: 'hidden',
                                                      whiteSpace: 'nowrap',
                                                      textOverflow: 'ellipsis',
                                                      fontSize: '0.8rem'
                                                    }}
                                                  >
                                                    {user0?.name?.first} {user0?.name?.last}
                                                  </Cell>
                                                </Grid>
                                              </div>
                                            </div>
                                          </AtomCard>
                                        </div>
                                      </div>
                                    </Cell>
                                    <Cell>
                                      <div
                                        style={{
                                          display: 'flex',
                                          justifyContent: 'center',
                                          alignItems: 'center'
                                        }}
                                        className={cx(
                                          'ColorDesignDemo',
                                          `ColorDesignDemo-design-${design0}`,
                                          `ColorDesignDemo-color-${colorValue}`
                                        )}
                                      >
                                        <div style={{padding: 12, color: 'inherit', width: '100%', height: '100%'}}>
                                          <AtomCard design={design1} color={colorValue}>
                                            <div style={{color: 'inherit', display: 'flex', gap: 8}}>
                                              <div style={{flexGrow: 0}}>
                                                <MoleculeAvatar
                                                  src={user1?.picture?.thumbnail}
                                                  name={`avatar-${'surface'}-${design1}`}
                                                  style={{filter: 'grayscale(1)'}}
                                                />
                                              </div>
                                              <div style={{flexGrow: 1}}>
                                                <Grid gutter={[2, 0]} style={{color: 'inherit'}}>
                                                  <Cell
                                                    style={{
                                                      color: 'inherit',
                                                      overflow: 'hidden',
                                                      whiteSpace: 'nowrap',
                                                      textOverflow: 'ellipsis',
                                                      fontWeight: 800,
                                                      fontSize: '1.1rem'
                                                    }}
                                                  >
                                                    @{user1?.login?.username}
                                                  </Cell>
                                                  <Cell
                                                    style={{
                                                      color: 'inherit',
                                                      overflow: 'hidden',
                                                      whiteSpace: 'nowrap',
                                                      textOverflow: 'ellipsis',
                                                      fontSize: '0.8rem'
                                                    }}
                                                  >
                                                    {user1?.name?.first} {user1?.name?.last}
                                                  </Cell>
                                                </Grid>
                                              </div>
                                            </div>
                                          </AtomCard>
                                        </div>
                                      </div>
                                    </Cell>
                                  </Grid>
                                </Cell>
                                <Cell>
                                  <div
                                    style={{
                                      display: 'flex',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      height: '100%'
                                    }}
                                  >
                                    <Code>atomCardColor.{colorKey}</Code>
                                  </div>
                                </Cell>
                              </Fragment>
                            )
                          } else {
                            return (
                              <Cell key={`${atomCardDesignKey}-${k}`}>
                                <Grid cols={1} gutter={[8, 0]}>
                                  <Cell>
                                    <div
                                      style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                      }}
                                      className={cx(
                                        'ColorDesignDemo',
                                        `ColorDesignDemo-design-${design0}`,
                                        `ColorDesignDemo-color-${colorValue}`
                                      )}
                                    >
                                      <div style={{padding: 12, color: 'inherit', width: '100%', height: '100%'}}>
                                        <AtomCard design={design0} color={colorValue}>
                                          <div style={{color: 'inherit', display: 'flex', gap: 8}}>
                                            <div style={{flexGrow: 0}}>
                                              <MoleculeAvatar
                                                src={user0?.picture?.thumbnail}
                                                name={`avatar-${'surface'}-${design0}`}
                                                style={{filter: 'grayscale(1)'}}
                                              />
                                            </div>
                                            <div style={{flexGrow: 1}}>
                                              <Grid gutter={[2, 0]} style={{color: 'inherit'}}>
                                                <Cell
                                                  style={{
                                                    color: 'inherit',
                                                    overflow: 'hidden',
                                                    whiteSpace: 'nowrap',
                                                    textOverflow: 'ellipsis',
                                                    fontWeight: 800,
                                                    fontSize: '1.1rem'
                                                  }}
                                                >
                                                  @{user0?.login?.username}
                                                </Cell>
                                                <Cell
                                                  style={{
                                                    color: 'inherit',
                                                    overflow: 'hidden',
                                                    whiteSpace: 'nowrap',
                                                    textOverflow: 'ellipsis',
                                                    fontSize: '0.8rem'
                                                  }}
                                                >
                                                  {user0?.name?.first} {user0?.name?.last}
                                                </Cell>
                                              </Grid>
                                            </div>
                                          </div>
                                        </AtomCard>
                                      </div>
                                    </div>
                                  </Cell>
                                  <Cell>
                                    <div
                                      style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                      }}
                                      className={cx(
                                        'ColorDesignDemo',
                                        `ColorDesignDemo-design-${design0}`,
                                        `ColorDesignDemo-color-${colorValue}`
                                      )}
                                    >
                                      <div style={{padding: 12, color: 'inherit', width: '100%', height: '100%'}}>
                                        <AtomCard design={design1} color={colorValue}>
                                          <div style={{color: 'inherit', display: 'flex', gap: 8}}>
                                            <div style={{flexGrow: 0}}>
                                              <MoleculeAvatar
                                                src={user1?.picture?.thumbnail}
                                                name={`avatar-${'surface'}-${design1}`}
                                                style={{filter: 'grayscale(1)'}}
                                              />
                                            </div>
                                            <div style={{flexGrow: 1}}>
                                              <Grid gutter={[2, 0]} style={{color: 'inherit'}}>
                                                <Cell
                                                  style={{
                                                    color: 'inherit',
                                                    overflow: 'hidden',
                                                    whiteSpace: 'nowrap',
                                                    textOverflow: 'ellipsis',
                                                    fontWeight: 800,
                                                    fontSize: '1.1rem'
                                                  }}
                                                >
                                                  @{user1?.login?.username}
                                                </Cell>
                                                <Cell
                                                  style={{
                                                    color: 'inherit',
                                                    overflow: 'hidden',
                                                    whiteSpace: 'nowrap',
                                                    textOverflow: 'ellipsis',
                                                    fontSize: '0.8rem'
                                                  }}
                                                >
                                                  {user1?.name?.first} {user1?.name?.last}
                                                </Cell>
                                              </Grid>
                                            </div>
                                          </div>
                                        </AtomCard>
                                      </div>
                                    </div>
                                  </Cell>
                                </Grid>
                              </Cell>
                            )
                          }
                        })
                    }
                  })}
                </Grid>
              </Cell>
            )
          })}
        </Grid>
      </Demo>
    </Article>
  )
}

ArticleColorDesign.displayName = 'ArticleColorDesign'

ArticleColorDesign.propTypes = {
  className: PropTypes.node
}

export default ArticleColorDesign
