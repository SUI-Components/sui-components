import {useState} from 'react'

import PropTypes from 'prop-types'

import {
  AntDesignIcon,
  Article,
  Cell,
  Code,
  Grid,
  H2,
  Label,
  Paragraph,
  RadioButton,
  RadioButtonGroup
} from '@s-ui/documentation-library'
import AtomIcon, {atomIconSizes} from '@s-ui/react-atom-icon'

import Accordion, {
  moleculeAccordionHeaderIconPosition,
  MoleculeAccordionItem as AccordionItem
} from '../../src/index.js'
import LoremIpsum from '../LoremIpsum.js'

const availableIcons = {
  undefined: {expanded: undefined, collapsed: undefined},
  fillCaret: {expanded: 'AiFillCaretDown', collapsed: 'AiFillCaretUp'},
  outline: {expanded: 'AiOutlineDown', collapsed: 'AiOutlineUp'},
  eye: {expanded: 'AiOutlineEye', collapsed: 'AiOutlineEyeInvisible'},
  editing: {expanded: 'AiOutlineEdit', collapsed: 'AiOutlineEllipsis'},
  sign: {expanded: 'AiOutlinePlus', collapsed: 'AiOutlineMinus'}
}

const ArticleIcon = ({className}) => {
  const [icon, setIcon] = useState('undefined')
  const [position, setPosition] = useState()
  return (
    <Article className={className}>
      <H2>Icon</H2>
      <Paragraph>
        You can customize your collapsed/expanded icons under the{' '}
        <Code>headerIconCollapsed</Code> and <Code>headerIconExpanded</Code>{' '}
        (node) props. This configuration will be setted and a context and in
        case of not declaring a <Code>headerIcon</Code> prop to the{' '}
        <Code>AccordionItem</Code> or an <Code>icon</Code> to the{' '}
        <Code>AccordionItemHeader</Code> this will be the given value for each
        state.
      </Paragraph>
      <Grid cols={1} gutter={[8, 8]}>
        <Cell>
          <Label>headerIcon</Label>
        </Cell>
        <Cell>
          <RadioButtonGroup
            value={icon}
            onChange={(event, value) => setIcon(value)}
          >
            {Object.keys(availableIcons).map(availableIcon => (
              <RadioButton
                key={`${availableIcon}`}
                value={availableIcon}
                checked={availableIcon === `${icon}`}
                label={
                  availableIcon !== `${undefined}` ? (
                    <AtomIcon>
                      <AntDesignIcon
                        icon={availableIcons[availableIcon].expanded}
                      />
                    </AtomIcon>
                  ) : (
                    `${availableIcon}`
                  )
                }
              />
            ))}
          </RadioButtonGroup>
        </Cell>
        <Cell>
          <Label>headerIconPosition</Label>
        </Cell>
        <Cell>
          <RadioButtonGroup
            value={icon}
            onChange={(event, value) => setPosition(value)}
          >
            {[
              undefined,
              ...Object.values(moleculeAccordionHeaderIconPosition)
            ].map(iconPosition => (
              <RadioButton
                key={`${iconPosition}`}
                value={iconPosition}
                checked={iconPosition === position}
                label={`${iconPosition}`}
              />
            ))}
          </RadioButtonGroup>
        </Cell>
        <Cell>
          <Accordion
            behavior="single"
            headerIconCollapsed={
              `${icon}` !== `${undefined}` ? (
                <AtomIcon size={atomIconSizes.extraSmall}>
                  <AntDesignIcon icon={availableIcons[icon].collapsed} />
                </AtomIcon>
              ) : undefined
            }
            headerIconExpanded={
              `${icon}` !== `${undefined}` ? (
                <AtomIcon size={atomIconSizes.extraSmall}>
                  <AntDesignIcon icon={availableIcons[icon].expanded} />
                </AtomIcon>
              ) : undefined
            }
            headerIconPosition={position}
          >
            <AccordionItem
              value="value-1"
              label="Accordion Item Header 1"
              content={
                <>
                  <p>Accordion Item Content 1</p>
                  <p>
                    <LoremIpsum units="words" count={200} format="plain" />
                  </p>
                </>
              }
            />
            <AccordionItem
              value="value-2"
              label="Accordion Item Header 2"
              content={
                <>
                  <p>Accordion Item Content 2</p>
                  <p>
                    <LoremIpsum units="words" count={200} format="plain" />
                  </p>
                </>
              }
            />
          </Accordion>
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleIcon.displayName = 'ArticleIcon'

ArticleIcon.propTypes = {
  className: PropTypes.string
}

export default ArticleIcon
