import {
  H1,
  H2,
  Code,
  Label,
  Paragraph,
  Article,
  Text,
  DevIcon,
  Grid,
  Cell
} from '@s-ui/documentation-library'
import AtomActionButton, {
  atomActionButtonColors,
  atomActionButtonStyles,
  atomActionButtonSizes
} from '@s-ui/react-atom-action-button'

const icon = <DevIcon icon="DiGithubBadge" />

const flexCenteredStyle = {
  display: 'flex',
  justifyContent: 'center',
  wrap: 'nowrap',
  alignItems: 'center',
  alignContent: 'center'
}

const ActionButtonCatalog = props => {
  return (
    <Grid
      cols={Object.values(atomActionButtonColors).length + 1}
      gutter="10"
      style={{width: 800}}
    >
      <Cell />
      {Object.values(atomActionButtonColors).map(
        (atomActionButtonColor, key) => (
          <Cell key={key}>
            <Text>
              <Label>{atomActionButtonColor}</Label>
            </Text>
          </Cell>
        )
      )}
      {Object.values(atomActionButtonStyles).map(
        (atomActionButtonStyle, index) => (
          <>
            <Cell>
              <Text>
                <Label>{atomActionButtonStyle}</Label>
              </Text>
            </Cell>
            {Object.values(atomActionButtonColors).map(
              (atomActionButtonColor, iterator) => (
                <Cell key={iterator}>
                  <AtomActionButton
                    style={atomActionButtonStyle}
                    color={atomActionButtonColor}
                    icon={icon}
                    {...props}
                  >
                    Button
                  </AtomActionButton>
                </Cell>
              )
            )}
          </>
        )
      )}
    </Grid>
  )
}

const BASE_CLASS_DEMO = `DemoAtomActionButton`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <H1>ActionButton</H1>
        <Paragraph>Icon used as a button which fires an action</Paragraph>
        <Article className={CLASS_SECTION}>
          <H2>Colours</H2>
          <div>
            <Paragraph>
              These are the available <Code>color</Code> of action buttons,
              which are "<Code>{atomActionButtonColors.PRIMARY}</Code>" by
              default.
            </Paragraph>
            <ActionButtonCatalog icon={icon} />
          </div>
        </Article>
        <br />
        <Article className={CLASS_SECTION}>
          <H2>Sizes</H2>
          <Paragraph>Size of the icon</Paragraph>
          <div>
            <Paragraph>
              We define 3 diferent sizes for action button exported as{' '}
              <Code>atomActionButtonSizes</Code>
            </Paragraph>
            <Grid cols={3} gutter="10" style={{width: 600}}>
              <Cell style={flexCenteredStyle}>
                <Label>SMALL</Label>
              </Cell>
              <Cell style={flexCenteredStyle}>
                <Label>MEDIUM</Label>
              </Cell>
              <Cell style={flexCenteredStyle}>
                <Label>LARGE</Label>
              </Cell>
              <Cell style={flexCenteredStyle}>
                <AtomActionButton
                  icon={icon}
                  size={atomActionButtonSizes.SMALL}
                >
                  Button
                </AtomActionButton>
              </Cell>
              <Cell style={flexCenteredStyle}>
                <AtomActionButton
                  icon={icon}
                  size={atomActionButtonSizes.MEDIUM}
                >
                  Button
                </AtomActionButton>
              </Cell>
              <Cell style={flexCenteredStyle}>
                <AtomActionButton
                  icon={icon}
                  size={atomActionButtonSizes.LARGE}
                >
                  Button
                </AtomActionButton>
              </Cell>
            </Grid>
          </div>
        </Article>
        <br />
        <Article className={CLASS_SECTION}>
          <H2>Link buttons</H2>
          <Paragraph>
            Action-Buttons can also be used as anchors to redirect to a
            different url once clicking on them.
          </Paragraph>
          <div>
            <Grid cols={4} gutter="10" style={{width: 600}}>
              <Cell style={flexCenteredStyle}>
                <AtomActionButton
                  link
                  title="button link"
                  target="_blank"
                  href="http://www.google.com"
                  icon={icon}
                >
                  Button link
                </AtomActionButton>
              </Cell>
              <Cell style={flexCenteredStyle}>
                <AtomActionButton
                  link
                  href="http://www.google.com"
                  icon={icon}
                  style="outline"
                  title="button link"
                >
                  Button link
                </AtomActionButton>
              </Cell>
              <Cell style={flexCenteredStyle}>
                <AtomActionButton
                  link
                  href="http://www.google.com"
                  icon={icon}
                  title="button link"
                  style="flat"
                >
                  Button link
                </AtomActionButton>
              </Cell>
              <Cell style={flexCenteredStyle}>
                <AtomActionButton
                  link
                  href="http://www.google.com"
                  icon={icon}
                  title="button link"
                  style="flat"
                  disabled
                >
                  Button link disabled
                </AtomActionButton>
              </Cell>
            </Grid>
          </div>
        </Article>
        <br />
      </div>
    </div>
  )
}
export default Demo
