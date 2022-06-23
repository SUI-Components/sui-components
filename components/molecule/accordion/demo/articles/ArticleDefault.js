import {Fragment, useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Code, H2, H3, Paragraph} from '@s-ui/documentation-library'

import Accordion, {
  moleculeAccordionBehavior,
  MoleculeAccordionItem as AccordionItem
} from '../../src/index.js'
import LoremIpsum from '../LoremIpsum.js'

const ArticleDefault = ({className}) => {
  const [values] = useState([])
  const onChange = (event, {values, value, isExpanded}) => {
    console.log('onChange', event, {values, value, isExpanded}) // eslint-disable-line no-console
  }
  const onItemClick =
    item =>
    (event, {value, isExpanded, values}) =>
      console.log('onItemClick', item, event, {value, isExpanded, values}) // eslint-disable-line no-console

  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>
        The <Code>MoleculeAccordion</Code> component is a Fragment wrapper which
        contains a list of <Code>MoleculeAccordionItem</Code> components.
      </Paragraph>
      <Paragraph>
        An <Code>MoleculeAccordionItem</Code> is a Fragment wrapper of a{' '}
        <Code>MoleculeAccordionItemHeader</Code> and a{' '}
        <Code>MoleculeAccordionItemPanel</Code>.
      </Paragraph>
      <Accordion
        onChange={onChange}
        defaultValues={values}
        behavior={moleculeAccordionBehavior.MULTIPLE}
      >
        <AccordionItem
          value="value-1"
          onClick={onItemClick('header1')}
          label="Accordion Item Label 1"
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
          onClick={onItemClick('header2')}
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
        <AccordionItem
          value="value-3"
          onClick={onItemClick('header3')}
          label="Accordion Item Header 3"
          content={
            <>
              <p>Accordion Item Content 3</p>
              <p>
                <LoremIpsum units="words" count={200} format="plain" />
              </p>
            </>
          }
        />
        <AccordionItem
          value="value-4"
          onClick={onItemClick('header4')}
          label="Accordion Item Header 4"
          content={
            <>
              <p>Accordion Item Content 4</p>
              <p>
                <LoremIpsum units="words" count={200} format="plain" />
              </p>
            </>
          }
        />
      </Accordion>
      <H3>Handlers</H3>
      <Paragraph>
        <Code>onChange</Code>: Accordion handler fired every single panel is
        toggled between its expand-collapse view using its header button
        behavior.
      </Paragraph>
      <Paragraph>
        It can also work with no wrapping borders using a Fragment logical react
        component as the MoleculeAccordion element.
      </Paragraph>
      <Accordion
        onChange={onChange}
        behavior={moleculeAccordionBehavior.MULTIPLE}
        as={Fragment}
      >
        <AccordionItem
          value="value-1"
          onClick={onItemClick('header1')}
          label="Accordion Item Label 1"
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
          onClick={onItemClick('header2')}
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
        <AccordionItem
          value="value-3"
          onClick={onItemClick('header3')}
          label="Accordion Item Header 3"
          content={
            <>
              <p>Accordion Item Content 3</p>
              <p>
                <LoremIpsum units="words" count={200} format="plain" />
              </p>
            </>
          }
        />
        <AccordionItem
          value="value-4"
          onClick={onItemClick('header4')}
          label="Accordion Item Header 4"
          content={
            <>
              <p>Accordion Item Content 4</p>
              <p>
                <LoremIpsum units="words" count={200} format="plain" />
              </p>
            </>
          }
        />
      </Accordion>
    </Article>
  )
}

ArticleDefault.displayName = 'ArticleDefault'

ArticleDefault.propTypes = {
  className: PropTypes.string
}

export default ArticleDefault
