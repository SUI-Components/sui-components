import {Fragment} from 'react'
import AtomTag, {
  atomTagDesigns,
  atomTagSizes
} from '../../../../components/atom/tag/src'
import AtomIcon, {ATOM_ICON_SIZES} from '@s-ui/react-atom-icon'
import {
  AntDesignIcon,
  Label,
  H1,
  H2,
  Paragraph,
  Article,
  Small,
  Code,
  Grid,
  Cell,
  Bold,
  UnorderedList,
  ListItem
} from '@s-ui/documentation-library'

import './index.scss'

const icon = (
  <AtomIcon size={ATOM_ICON_SIZES.small}>
    <AntDesignIcon icon="AiOutlineCoffee" style={{color: 'currentColor'}} />
  </AtomIcon>
)

const closeIcon = (
  <AtomIcon size={ATOM_ICON_SIZES.small}>
    <AntDesignIcon icon="AiOutlineClose" style={{color: 'currentColor'}} />
  </AtomIcon>
)

const BASE_CLASS_DEMO = `DemoAtomTag`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

const flexCenteredStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  wrap: 'nowrap',
  alignItems: 'center',
  alignContent: 'center'
}

export default () => (
  <div className="sui-StudioPreview">
    <H1>Tag</H1>
    <Paragraph>
      We use tags to visually emphasise features of the UI and make recognition
      and interaction easier.
    </Paragraph>
    <Article className={CLASS_SECTION}>
      <H2>Size</H2>
      <Paragraph>
        Tags structure can have 3 main sizes: small, medium{' '}
        <Small>(default)</Small> and large. You can use this prop{' '}
        <Code>size</Code> to modify it.
      </Paragraph>
      <Grid cols={6} gutter={10}>
        {[
          '',
          'normal',
          'outline',
          'close icon',
          'icon',
          'icon & closeIcon'
        ].map((value, index) => (
          <Cell key={index} style={flexCenteredStyle}>
            <Label>{value}</Label>
          </Cell>
        ))}
        {Object.values(atomTagSizes)
          .reverse()
          .map((size, index) => (
            <Fragment key={index}>
              <Cell
                style={{...flexCenteredStyle, justifyContent: 'flex-start'}}
              >
                <Label>{size}</Label>
              </Cell>
              <Cell style={flexCenteredStyle}>
                <AtomTag label="Tag Structure" size={size} />
              </Cell>
              <Cell style={flexCenteredStyle}>
                <AtomTag
                  design={atomTagDesigns.OUTLINE}
                  label="Tag Outline"
                  size={size}
                />
              </Cell>
              <Cell style={flexCenteredStyle}>
                <AtomTag closeIcon={closeIcon} label="Close Tag" size={size} />
              </Cell>
              <Cell style={flexCenteredStyle}>
                <AtomTag icon={icon} label="Icon Tag" size={size} />
              </Cell>
              <Cell style={flexCenteredStyle}>
                <AtomTag
                  closeIcon={closeIcon}
                  icon={icon}
                  label="Icon & Close Tag"
                  size={size}
                />
              </Cell>
            </Fragment>
          ))}
      </Grid>
    </Article>
    <br />
    <Article className={CLASS_SECTION}>
      <H2>Design</H2>
      <Paragraph>
        Tags structure can have 2 designs: Solid <Small>(default)</Small> and
        outline. You can use this prop <Code>design</Code> to modify it.
      </Paragraph>
      <Grid cols={5} gutter={10}>
        {['', 'normal', 'close icon', 'icon', 'icon & closeIcon'].map(
          (value, index) => (
            <Cell key={index} style={flexCenteredStyle}>
              <Label>{value}</Label>
            </Cell>
          )
        )}
        {Object.values(atomTagDesigns)
          .reverse()
          .map((size, index) => (
            <Fragment key={index}>
              <Cell
                style={{...flexCenteredStyle, justifyContent: 'flex-start'}}
              >
                <Label>{size}</Label>
              </Cell>
              <Cell style={flexCenteredStyle}>
                <AtomTag label="Tag Structure" size={size} />
              </Cell>
              <Cell style={flexCenteredStyle}>
                <AtomTag closeIcon={closeIcon} label="Close Tag" size={size} />
              </Cell>
              <Cell style={flexCenteredStyle}>
                <AtomTag icon={icon} label="Icon Tag" size={size} />
              </Cell>
              <Cell style={flexCenteredStyle}>
                <AtomTag
                  closeIcon={closeIcon}
                  icon={icon}
                  label="Icon & Close Tag"
                  size={size}
                />
              </Cell>
            </Fragment>
          ))}
      </Grid>
    </Article>
    <br />
    <Article className={CLASS_SECTION}>
      <H2>Actionable</H2>
      <Paragraph>
        Actionable tags can be used as an anchor. Same as <Code>{'<a>'}</Code>{' '}
        to define an interactivity with the component.
      </Paragraph>
      <AtomTag label="Navigation Tag" onClick={() => window.alert('click!')} />
      <AtomTag
        href="https://sui-components.now.sh/"
        label="Anchor Tag"
        target="_blank"
      />
      <AtomTag
        href="https://sui-components.now.sh/"
        icon={icon}
        iconPlacement="right"
        label="Icon placement right"
        target="_blank"
      />
      <AtomTag
        href="https://sui-components.now.sh/"
        icon={icon}
        iconPlacement="left"
        label="Icon placement left"
        target="_blank"
      />
      <Paragraph>–––––</Paragraph>
      <Paragraph>
        With <Code>outline</Code> design.
      </Paragraph>
      <AtomTag
        design={atomTagDesigns.OUTLINE}
        label="Navigation Tag"
        onClick={() => window.alert('click!')}
      />
      <AtomTag
        design={atomTagDesigns.OUTLINE}
        href="https://sui-components.now.sh/"
        label="Anchor Tag"
        target="_blank"
      />
      <AtomTag
        design={atomTagDesigns.OUTLINE}
        href="https://sui-components.now.sh/"
        icon={icon}
        iconPlacement="right"
        label="Icon placement right"
        target="_blank"
      />
      <AtomTag
        design={atomTagDesigns.OUTLINE}
        href="https://sui-components.now.sh/"
        icon={icon}
        iconPlacement="left"
        label="Icon placement left"
        target="_blank"
      />
      <Paragraph>–––––</Paragraph>
      <H2>With Value prop</H2>
      <Paragraph>
        Use the <Code>Value</Code> prop if the tag represents a value and want
        it to be returned on the onClick handler
      </Paragraph>
      <div>
        <AtomTag
          label="With Value"
          value="test"
          onClick={(_, {value}) => {
            console.log('This is my value', value)
          }}
        />
      </div>
    </Article>
    <br />
    <Article className={CLASS_SECTION}>
      <H2>Icons</H2>
      <Paragraph>
        Tags can include an action icon (generally a close icon). This icon will
        always be located to the right of content. You can add use the{' '}
        <Code>icon</Code> and <Code>closeIcon</Code> to added a icon.
      </Paragraph>
      <div>
        <AtomTag icon={icon} iconPlacement="left" label="Icon placement left" />
        <AtomTag closeIcon={closeIcon} icon={icon} label="Icon & Close Tag" />
        <AtomTag
          href="https://sui-components.now.sh/"
          icon={icon}
          iconPlacement="right"
          label="Icon placement right"
          target="_blank"
        />
      </div>
      <UnorderedList>
        <ListItem>
          <Bold>Icons are optional</Bold> and can be placed either on the right
          or the left side, but never on both at the same time.
        </ListItem>
        <ListItem>
          Only actionable tags can have <Code>iconPlacement="right"</Code>.
        </ListItem>
      </UnorderedList>
      <Paragraph>–––––</Paragraph>
      <Paragraph>
        You can use a handler through the property with prop{' '}
        <Code>onClose</Code> to add event handler.
      </Paragraph>
      <AtomTag
        closeIcon={closeIcon}
        label="Close Tag"
        onClose={() => window.alert('close!')}
        responsive
      />
    </Article>
    <br />
    <Article className={CLASS_SECTION}>
      <H2>Responsive</H2>
      <Paragraph>
        Use the <Code>responsive</Code> true for make responsive layout. keep
        large size in mobile.
      </Paragraph>
      <div>
        <AtomTag
          closeIcon={closeIcon}
          icon={icon}
          label="Icon & Close Tag"
          onClose={() => window.alert('close!')}
          responsive
          size={atomTagSizes.SMALL}
        />
        <AtomTag
          href="https://sui-components.now.sh/"
          icon={icon}
          iconPlacement="right"
          label="Icon placement right"
          responsive
          target="_blank"
        />
        <AtomTag
          closeIcon={closeIcon}
          icon={icon}
          label="Icon & Close Tag"
          onClose={() => window.alert('close!')}
          responsive
        />
        <AtomTag
          closeIcon={closeIcon}
          icon={icon}
          label="Icon & Close Tag"
          onClose={() => window.alert('close!')}
          responsive
          size={atomTagSizes.LARGE}
        />
      </div>
    </Article>
    <br />
    <Article className={CLASS_SECTION}>
      <H2>Types</H2>
      <Paragraph>
        Use the <Code>type</Code> in order to color it as desired from a high
        order component.
      </Paragraph>
      <div>
        <AtomTag label="Sale" type="warning" />
        <AtomTag label="Special" type="special" />
        <AtomTag label="5 min ago" type="date" />
      </div>
    </Article>
  </div>
)
