import {useState} from 'react'

import PropTypes from 'prop-types'

import {
  Article,
  Button,
  Cell,
  Code,
  Grid,
  H2,
  Label,
  Paragraph,
  RadioButton,
  RadioButtonGroup
} from '@s-ui/documentation-library'

import {MoleculeModal, MoleculeModalContent, MoleculeModalFooter} from '../src/index.js'
import LoremIpsum from './LoremIpsum.js'

const PROPS = {
  BASE: {
    children: children => (
      <>
        <LoremIpsum count={20} />
        {children}
      </>
    )
  },
  IS_CONTENTLESS: {
    children: children => (
      <>
        <LoremIpsum count={20} />
        {children}
      </>
    ),
    isContentless: true
  },
  COMPOUND: {
    children: children => (
      <>
        <MoleculeModalContent>
          <LoremIpsum count={20} />
          {children}
        </MoleculeModalContent>
        <MoleculeModalFooter>
          <Grid cols={2} gutter={[8, 8]}>
            <Cell>
              <Button fullWidth>Do nothing!</Button>
            </Cell>
            <Cell>
              <Button fullWidth>Do nothing!</Button>
            </Cell>
          </Grid>
        </MoleculeModalFooter>
      </>
    )
  },
  COMPOUND_CONTENTLESS: {
    isContentless: true,
    children: children => (
      <>
        <MoleculeModalContent>
          <LoremIpsum count={20} />
          {children}
        </MoleculeModalContent>
        <MoleculeModalFooter>
          <Grid cols={2} gutter={[8, 8]}>
            <Cell>
              <Button fullWidth>Do nothing!</Button>
            </Cell>
            <Cell>
              <Button fullWidth>Do nothing!</Button>
            </Cell>
          </Grid>
        </MoleculeModalFooter>
      </>
    )
  }
}

const ArticleModal = ({className}) => {
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState(Object.keys(PROPS)[0])
  const [isPageScrollable, setIsPageScrollable] = useState(false)
  const [enableContentScroll, setEnableContentScroll] = useState(false)
  const [withoutIdentation, setWithoutIdentation] = useState(false)

  const onChangeModeHandler = (_, value) => {
    if (value !== undefined) {
      setMode(value)
    }
  }

  const onChangeHandler = () => {
    setOpen(!open)
  }

  const onChangeEnableContentScrollHandler = (_, value) => {
    setEnableContentScroll(value === undefined ? open : value)
  }

  const onChangeWithoutIdentationHandler = (_, value) => {
    setWithoutIdentation(value === undefined ? open : value)
  }

  const onChangeisPageScrollableHandler = (_, value) => {
    setIsPageScrollable(value === undefined ? open : value)
  }

  const onCloseHandler = () => {
    setOpen(false)
  }

  const PropsSelector = (
    <>
      <Paragraph>
        Molecule Modal also provides its <Code>MoleculeModalContainer</Code> and
        <Code>MoleculeModalFooter</Code> as Inner components in order to compound it on its children. User can pass its
        children ant it will automatically be included in a <Code>MoleculeModalContent</Code> Component. In case of
        using the combination of the Content and Footer, you should combine your children with the{' '}
        <Code>isContentless</Code> boolean prop (default false) in order not to wrap your children on a container twice.
      </Paragraph>
      <Grid cols={1} gutter={[8, 8]}>
        <Cell>
          <RadioButtonGroup value={mode} onChange={onChangeModeHandler} fullWidth>
            {Object.entries(PROPS).map(([modeKey, modeValue]) => (
              <RadioButton key={`${modeKey}`} value={modeKey} label={modeKey} checked={mode === modeKey} />
            ))}
          </RadioButtonGroup>
        </Cell>
      </Grid>
      <Paragraph>
        <Code>enableContentScroll</Code> is a boolean prop used to prevent the scrolling only in case of having a
        MoleculeModalContainer
      </Paragraph>
      <Grid cols={1} gutter={[8, 8]}>
        <Cell>
          <Label>enableContentScroll</Label>
        </Cell>
        <Cell>
          <RadioButtonGroup value={enableContentScroll} onChange={onChangeEnableContentScrollHandler}>
            <RadioButton value label="true" checked={enableContentScroll === true} />
            <RadioButton value={false} label="false" checked={enableContentScroll === false} />
          </RadioButtonGroup>
        </Cell>
      </Grid>
      <Paragraph>
        <Code>withoutIdentation</Code> is a boolean prop which removes the innecesary inner content padding.
      </Paragraph>
      <Grid cols={1} gutter={[8, 8]}>
        <Cell>
          <Label>withoutIdentation</Label>
        </Cell>
        <Cell>
          <RadioButtonGroup value={withoutIdentation} onChange={onChangeWithoutIdentationHandler}>
            <RadioButton value label="true" checked={withoutIdentation === true} />
            <RadioButton value={false} label="false" checked={withoutIdentation === false} />
          </RadioButtonGroup>
        </Cell>
      </Grid>
      <Paragraph>
        <Code>isPageScrollable</Code> is a boolean prop that if false removes the scroll of the body.
      </Paragraph>
      <Grid cols={1} gutter={[8, 8]}>
        <Cell>
          <Label>isPageScrollable</Label>
        </Cell>
        <Cell>
          <RadioButtonGroup value={isPageScrollable} onChange={onChangeisPageScrollableHandler}>
            <RadioButton value label="true" checked={isPageScrollable === true} />
            <RadioButton value={false} label="false" checked={isPageScrollable === false} />
          </RadioButtonGroup>
        </Cell>
      </Grid>
    </>
  )

  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>All Other extra components are using combinations of this base-component.</Paragraph>
      <Paragraph>
        It can be controlled using the <Code>isOpen</Code> boolean prop.
      </Paragraph>
      <Button onClick={onChangeHandler}>Open modal</Button>
      {PropsSelector}
      <MoleculeModal
        isOpen={open}
        onClose={onCloseHandler}
        closeOnOutsideClick
        closeOnEscKeyDown
        {...PROPS[mode]}
        enableContentScroll={enableContentScroll}
        withoutIndentation={withoutIdentation}
        isPageScrollable={isPageScrollable}
        children={PROPS[mode].children(PropsSelector)}
      />
    </Article>
  )
}

ArticleModal.propTypes = {
  className: PropTypes.string
}

export default ArticleModal
