/* eslint-disable no-console */
import React, {Fragment} from 'react'
import {
  H1,
  H2,
  Code,
  Paragraph,
  Article,
  DevIcon,
  Grid,
  Cell,
  Text,
  ButtonGroup,
  Button
} from '@s-ui/documentation-library'

import AtomActionButton, {
  atomActionButtonColors,
  atomActionButtonSizes,
  atomActionButtonStyles
} from '../../../../components/atom/actionButton/src'

import './index.scss'

const BASE_CLASS_DEMO = `DemoAtomActionButton`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

const icon = <DevIcon icon="DiGithubBadge" />

const Demo = () => {
  return (
    <div className="sui-StudioPreview" mode="light">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <H1>ActionButton</H1>
        <Paragraph>Description here</Paragraph>
        <Article className={CLASS_SECTION}>
          <H2>Colours</H2>
          <div>
            <Paragraph>
              These are the available <Code>color</Code> of action buttons,
              which are <Code>"{atomActionButtonColors.PRIMARY}"</Code> by
              default.
            </Paragraph>
            <Grid
              cols={Object.values(atomActionButtonColors).length + 1}
              gutter="10"
            >
              <Cell />
              {Object.values(atomActionButtonColors).map(
                (atomActionButtonColor, key) => (
                  <Cell key={key}>
                    <Text>color="{atomActionButtonColor}"</Text>
                  </Cell>
                )
              )}
              {Object.values(atomActionButtonStyles).map(
                (atomActionButtonStyle, index) => (
                  <Fragment key={index}>
                    <Cell>
                      <Text>style="{atomActionButtonStyle}"</Text>
                    </Cell>
                    {Object.values(atomActionButtonColors).map(
                      (atomActionButtonColor, iterator) => (
                        <Cell key={iterator}>
                          <AtomActionButton
                            style={atomActionButtonStyle}
                            icon={icon}
                          >
                            Button
                          </AtomActionButton>
                        </Cell>
                      )
                    )}
                  </Fragment>
                )
              )}
            </Grid>
          </div>
        </Article>
        <br />
        <Article className={CLASS_SECTION}>
          <H2>Size</H2>
          <Paragraph>Size of the icon</Paragraph>
          <ButtonGroup>
            {Object.values(atomActionButtonSizes).map(
              (atomActionButtonSize, index) => (
                <Button key={index}>{atomActionButtonSize}</Button>
              )
            )}
          </ButtonGroup>
        </Article>
      </div>
    </div>
  )
}

export default Demo
